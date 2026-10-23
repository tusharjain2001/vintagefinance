import React, { useState } from "react";
import { ArrowUpRight, Info } from "lucide-react";
import { Button } from "./ui";
import { calculateEligibility, calculateLoan, formatRupees } from "./loanCalculator";

function LoanCalculator({ onApply }) {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(19.9);
  const [months, setMonths] = useState(12);
  const result = calculateLoan(amount, rate, months);
  return (
    <div className="calculator-layout">
      <div className="calculator-controls">
        <div className="range-field">
          <div className="range-label">
            <label htmlFor="loan-amount">Loan amount (₹)</label>
            <input
              className="calculator-number"
              aria-label="Loan amount in rupees"
              type="number"
              min="10000"
              max="1500000"
              value={amount}
              onChange={(e) => setAmount(Math.max(10000, Math.min(1500000, Number(e.target.value))))}
            />
          </div>
          <input id="loan-amount" type="range" min="10000" max="1500000" step="10000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
          <div className="range-limits">
            <span>₹10,000</span>
            <span>₹15,00,000</span>
          </div>
        </div>
        <div className="range-field">
          <div className="range-label">
            <label htmlFor="loan-tenure">Repayment period (months)</label>
            <input
              className="calculator-number"
              aria-label="Repayment period in months"
              type="number"
              min="6"
              max="24"
              value={months}
              onChange={(e) => setMonths(Math.max(6, Math.min(24, Number(e.target.value))))}
            />
          </div>
          <input id="loan-tenure" type="range" min="6" max="24" step="1" value={months} onChange={(e) => setMonths(Number(e.target.value))} />
          <div className="range-limits">
            <span>6 months</span>
            <span>24 months</span>
          </div>
        </div>
        <div className="range-field">
          <div className="range-label">
            <label htmlFor="loan-rate">Interest rate (p.a.)</label>
            <input
              className="calculator-number"
              aria-label="Annual interest rate"
              type="number"
              min="19.9"
              max="26"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(Math.max(19.9, Math.min(26, Number(e.target.value))))}
            />
          </div>
          <input id="loan-rate" type="range" min="19.9" max="26" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
          <div className="range-limits">
            <span>19.9%</span>
            <span>26%</span>
          </div>
        </div>
        <p className="fine-note calculator-note">
          <Info size={16} />
          Illustrative reducing-balance estimate. Fees, GST and other charges are not included. Your
          final offer may differ.
        </p>
      </div>
      <div className="emi-result">
        <span className="eyebrow">YOUR ESTIMATED MONTHLY EMI</span>
        <output className="emi-amount" aria-live="polite">
          {formatRupees(result.emi)}
        </output>
        <span className="emi-caption">per month, for {months} months</span>
        <svg className="loan-donut" viewBox="0 0 120 120" role="img" aria-label="Principal and total interest breakdown">
          <circle className="donut-interest" cx="60" cy="60" r="44" fill="none" strokeWidth="16" />
          <circle
            className="donut-principal"
            cx="60"
            cy="60"
            r="44"
            fill="none"
            strokeWidth="16"
            pathLength="100"
            strokeDasharray={`${(amount / result.total) * 100} 100`}
            transform="rotate(-90 60 60)"
          />
        </svg>
        <div className="emi-breakdown">
          <div>
            <span>Principal amount</span>
            <strong>{formatRupees(amount)}</strong>
          </div>
          <div>
            <span>Total interest</span>
            <strong>{formatRupees(result.interest)}</strong>
          </div>
          <div className="total-row">
            <span>Total repayment</span>
            <strong>{formatRupees(result.total)}</strong>
          </div>
        </div>
        <Button variant="loan" onClick={onApply}>
          Discuss my loan options <ArrowUpRight />
        </Button>
      </div>
    </div>
  );
}

export function LoanTools({ onApply, tab, setTab }) {
  const [salary, setSalary] = useState(40000);
  const [existing, setExisting] = useState(0);
  const [age, setAge] = useState(30);
  const [months, setMonths] = useState(12);
  const [rate, setRate] = useState(19.9);
  const result = calculateEligibility(salary, existing, age, rate, months);
  return (
    <>
      <div className="calculator-tabs" role="tablist" aria-label="Loan calculators">
        <Button variant={tab === "emi" ? "ink" : "paper"} role="tab" aria-selected={tab === "emi"} aria-controls="emi-panel" id="emi-tab" onClick={() => setTab("emi")}>
          EMI calculator
        </Button>
        <Button
          variant={tab === "eligibility" ? "ink" : "paper"}
          role="tab"
          aria-selected={tab === "eligibility"}
          aria-controls="eligibility-panel"
          id="eligibility-tab"
          onClick={() => setTab("eligibility")}
        >
          Eligibility calculator
        </Button>
      </div>
      {tab === "emi" ? (
        <div role="tabpanel" id="emi-panel" aria-labelledby="emi-tab">
          <LoanCalculator onApply={onApply} />
        </div>
      ) : (
        <div role="tabpanel" id="eligibility-panel" aria-labelledby="eligibility-tab" className="calculator-layout">
          <div>
            <div className="form-grid">
              <label>
                Net monthly salary (₹)
                <input type="number" min="0" max="10000000" value={salary} onChange={(e) => setSalary(Math.max(0, Math.min(10000000, Number(e.target.value))))} />
              </label>
              <label>
                Existing monthly EMIs (₹)
                <input type="number" min="0" max="10000000" value={existing} onChange={(e) => setExisting(Math.max(0, Math.min(10000000, Number(e.target.value))))} />
              </label>
              <label>
                Age (years)
                <input type="number" min="18" max="100" value={age} onChange={(e) => setAge(Math.max(0, Math.min(100, Number(e.target.value))))} />
              </label>
              <label>
                Loan tenure (months)
                <input type="number" min="6" max="24" value={months} onChange={(e) => setMonths(Math.max(6, Math.min(24, Number(e.target.value))))} />
              </label>
              <label>
                Annual interest rate (%)
                <input type="number" min="19.9" max="26" step="0.1" value={rate} onChange={(e) => setRate(Math.max(19.9, Math.min(26, Number(e.target.value))))} />
              </label>
              <label>
                City
                <select defaultValue="Gurgaon">
                  <option>Gurgaon</option>
                </select>
              </label>
              <label>
                Employment type
                <select defaultValue="Salaried employee">
                  <option>Salaried employee</option>
                </select>
              </label>
            </div>
            <p className="fine-note mt-6">
              Illustrative estimate using 40% of net salary minus existing EMIs. Minimum salary
              ₹30,000; age 23–60. Actual eligibility depends on credit profile, documents and lender
              assessment.
            </p>
          </div>
          <div className="emi-result">
            <span className="eyebrow">YOUR ESTIMATED ELIGIBLE LOAN AMOUNT</span>
            <output className="emi-amount" aria-live="polite">
              {formatRupees(result.eligible)}
            </output>
            <div className="emi-breakdown">
              <div>
                <span>Estimated monthly EMI budget</span>
                <strong>{formatRupees(result.budget)}</strong>
              </div>
              <div>
                <span>Published maximum loan</span>
                <strong>₹15,00,000</strong>
              </div>
            </div>
            {!result.meetsBasics && (
              <p className="eligibility-warning">
                The entered salary or age does not meet the published basic criteria.
              </p>
            )}
            <Button variant="loan" onClick={onApply}>
              Discuss my loan options <ArrowUpRight />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
