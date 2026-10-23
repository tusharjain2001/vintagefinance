import React, { useState } from "react";
import { Calculator, ArrowUpRight, Info, IndianRupee, BadgeCheck } from "lucide-react";
import { Button } from "./ui";
import {
  calculateLoan,
  repaymentSchedule,
  estimateEligibility,
  inr,
  cities,
} from "./loanCalculations";

function RangeField({ label, value, min, max, step, suffix, onChange }) {
  const id = label.toLowerCase().replace(/ /g, "-");
  return (
    <div>
      <div className="range-top">
        <label htmlFor={id} className="field">
          {label}
        </label>
        <div className="range-number">
          <span>{suffix === "₹" ? "₹" : ""}</span>
          <input
            id={id}
            type="number"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value))))}
          />
          <span>{suffix === "₹" ? "" : suffix}</span>
        </div>
      </div>
      <input
        aria-label={`${label} slider`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="range-limits">
        <span>{suffix === "₹" ? inr(min) : `${min} ${suffix}`}</span>
        <span>{suffix === "₹" ? inr(max) : `${max} ${suffix}`}</span>
      </div>
    </div>
  );
}

export function Calculators() {
  const [tab, setTab] = useState("emi");
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(18);
  const [months, setMonths] = useState(36);
  const [salary, setSalary] = useState(60000);
  const [existing, setExisting] = useState(5000);
  const [age, setAge] = useState(30);
  const [employment, setEmployment] = useState(36);
  const [job, setJob] = useState(12);
  const [city, setCity] = useState("Delhi");
  const result = calculateLoan(amount, rate, months);
  const eligibility = estimateEligibility({
    salary,
    existingEmi: existing,
    age,
    employmentMonths: employment,
    currentJobMonths: job,
    city,
    rate,
    months,
  });
  const rows = repaymentSchedule(amount, rate, months);
  const fraction = result.total ? amount / result.total : 0;
  return (
    <section className="page-section section-tint" id="calculators">
      <div className="container-shell">
        <div className="section-heading">
          <div className="eyebrow">
            <Calculator size={14} /> PLAN YOUR REPAYMENTS
          </div>
          <h2>A little planning. A clearer decision.</h2>
          <p>
            Know your monthly EMI and get an estimate of what you could afford, before you apply.
          </p>
        </div>
        <div className="calculator-tabs" role="tablist" aria-label="Loan calculators">
          <Button
            variant="ghost"
            role="tab"
            id="emi-tab"
            aria-controls="loan-panel"
            aria-selected={tab === "emi"}
            onClick={() => setTab("emi")}
          >
            <IndianRupee /> EMI Calculator
          </Button>
          <Button
            variant="ghost"
            role="tab"
            id="eligibility-tab"
            aria-controls="loan-panel"
            aria-selected={tab === "eligibility"}
            onClick={() => setTab("eligibility")}
          >
            <BadgeCheck /> Eligibility Calculator
          </Button>
        </div>
        <div
          className="calculator-grid"
          id="loan-panel"
          role="tabpanel"
          aria-labelledby={tab === "emi" ? "emi-tab" : "eligibility-tab"}
        >
          <div className="calculator-inputs">
            {tab === "emi" ? (
              <RangeField
                label="Loan amount"
                value={amount}
                min={10000}
                max={1500000}
                step={10000}
                suffix="₹"
                onChange={setAmount}
              />
            ) : (
              <div className="form-grid">
                <label className="field">
                  Net monthly salary (₹)
                  <input
                    type="number"
                    min={0}
                    value={salary}
                    onChange={(e) => setSalary(Math.max(0, Number(e.target.value)))}
                  />
                </label>
                <label className="field">
                  Existing monthly EMIs (₹)
                  <input
                    type="number"
                    min={0}
                    value={existing}
                    onChange={(e) => setExisting(Math.max(0, Number(e.target.value)))}
                  />
                </label>
                <label className="field">
                  Age (years)
                  <input
                    type="number"
                    min={18}
                    max={80}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                  />
                </label>
                <label className="field">
                  Your city
                  <select value={city} onChange={(e) => setCity(e.target.value)}>
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                    <option>Other</option>
                  </select>
                </label>
                <label className="field">
                  Total employment (months)
                  <input
                    type="number"
                    min={0}
                    value={employment}
                    onChange={(e) => setEmployment(Math.max(0, Number(e.target.value)))}
                  />
                </label>
                <label className="field">
                  Current job (months)
                  <input
                    type="number"
                    min={0}
                    value={job}
                    onChange={(e) => setJob(Math.max(0, Number(e.target.value)))}
                  />
                </label>
              </div>
            )}
            <RangeField
              label="Annual interest rate"
              value={rate}
              min={0}
              max={36}
              step={0.5}
              suffix="%"
              onChange={setRate}
            />
            <RangeField
              label="Loan tenure"
              value={months}
              min={6}
              max={60}
              step={1}
              suffix="months"
              onChange={setMonths}
            />
            <p className="notice">
              <Info size={13} className="inline mr-1" />{" "}
              {tab === "emi"
                ? "Illustrative reducing-balance calculation, excluding fees and taxes. Selected rate and tenure are not a Vintage Finance offer."
                : "Assumes up to 40% of take-home pay for all EMIs, less existing EMIs. This is a planning assumption, not a lender policy or credit decision."}
            </p>
          </div>
          <div className="calculator-result" aria-live="polite">
            <div className="result-label">
              {tab === "emi" ? "Your estimated monthly EMI" : "Your estimated eligible loan amount"}
            </div>
            <div className="result-number">
              {inr(tab === "emi" ? result.emi : eligibility.loan)}
            </div>
            {tab === "emi" ? (
              <div className="result-breakdown">
                <svg
                  className="donut"
                  viewBox="0 0 120 120"
                  role="img"
                  aria-label="Principal and interest repayment breakdown"
                >
                  <circle className="donut-track" cx="60" cy="60" r="47" />
                  <circle
                    className="donut-fill"
                    cx="60"
                    cy="60"
                    r="47"
                    pathLength="100"
                    strokeDasharray={`${fraction * 100} 100`}
                  />
                </svg>
                <div className="result-lines">
                  <div>
                    <span>
                      <i className="legend-dot" />
                      Principal amount
                    </span>
                    <strong>{inr(amount)}</strong>
                  </div>
                  <div>
                    <span>
                      <i className="legend-dot muted" />
                      Total interest
                    </span>
                    <strong>{inr(result.interest)}</strong>
                  </div>
                  <div className="result-total">
                    <span>Total repayment</span>
                    <strong>{inr(result.total)}</strong>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="result-lines">
                  <div>
                    <span>Estimated monthly EMI budget</span>
                    <strong>{inr(eligibility.affordableEmi)}</strong>
                  </div>
                  <div>
                    <span>Published maximum loan</span>
                    <strong>₹15,00,000</strong>
                  </div>
                </div>
                {eligibility.reasons.length ? (
                  <ul className="text-xs text-destructive list-disc pl-4 my-4">
                    {eligibility.reasons.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="notice">
                    Your inputs meet the published basic criteria. Final eligibility also depends on
                    documents, credit assessment and the lender's terms.
                  </p>
                )}
              </>
            )}
            <Button as="a" href="#apply" variant="ink" size="cta" className="w-full mt-6">
              Discuss my loan options <ArrowUpRight />
            </Button>
            <p className="table-note">
              Estimates only. Your written loan offer determines the final amount, rate, tenure and
              charges.
            </p>
          </div>
        </div>
        {tab === "emi" && (
          <details className="schedule">
            <summary>View monthly repayment schedule</summary>
            <div className="schedule-scroll table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>EMI</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.month}>
                      <td>{r.month}</td>
                      <td>{inr(r.emi)}</td>
                      <td>{inr(r.principal)}</td>
                      <td>{inr(r.interest)}</td>
                      <td>{inr(r.balance)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </details>
        )}
      </div>
    </section>
  );
}
