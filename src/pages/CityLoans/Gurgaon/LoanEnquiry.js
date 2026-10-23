import React, { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { Dialog } from "../shared/Dialog";
import { sendLead } from "../shared/sendLead";
import { Button } from "./ui";
import { cibilOptions, validateEnquiry } from "./loanCalculator";

export function LoanEnquiry({ embedded = false }) {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = Object.fromEntries(new FormData(formElement));
    const { error, values } = validateEnquiry(form);
    if (error) {
      setStatus(error);
      return;
    }
    const { name, email, phone, city, salary, amount, employment, cibil } = values;
    setSending(true);
    setStatus("");
    const sendError = await sendLead(embedded ? "Loan application" : "Loan enquiry", [
      ["Full name", name],
      ["Mobile number", phone],
      ["Email address", email],
      ["City", city],
      ["Net monthly salary", `₹${salary.toLocaleString("en-IN")}`],
      ["Loan amount", `₹${amount.toLocaleString("en-IN")}`],
      ["Employment type", employment],
      ["CIBIL score", cibil],
    ]);
    setSending(false);
    if (sendError) {
      setStatus(sendError);
      return;
    }
    formElement.reset();
    setStatus("Thank you. Your enquiry has been sent and our team will contact you soon.");
  }
  return (
    <div className={embedded ? "embedded-enquiry" : "enquiry-card"} id={embedded ? undefined : "enquiry"}>
      {!embedded && (
        <>
          <span className="eyebrow">FOR SALARIED EMPLOYEES</span>
          <h3>Your next step starts here.</h3>
          <p className="form-intro">Minimal documentation. Personal support.</p>
        </>
      )}
      <form onSubmit={submit}>
        <div className="form-grid">
          <label>
            Full name
            <input name="name" placeholder="Your full name" autoComplete="name" required maxLength={80} />
          </label>
          <label>
            Email address
            <input name="email" placeholder="you@example.com" type="email" autoComplete="email" maxLength={255} required />
          </label>
          <label>
            Mobile number
            <input
              name="phone"
              placeholder="10-digit mobile number"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              pattern="[6-9][0-9]{9}"
              maxLength={10}
              required
            />
          </label>
          <label>
            City
            <select name="city" defaultValue="Gurgaon" required>
              <option value="Gurgaon">Gurgaon</option>
            </select>
          </label>
          <label>
            Net monthly salary (₹)
            <input name="salary" placeholder="30,000 or above" type="number" inputMode="numeric" min={30000} max={10000000} required />
          </label>
          <label>
            Loan amount (₹)
            <input name="amount" placeholder="Up to 15,00,000" type="number" inputMode="numeric" min={10000} max={1500000} step={10000} required />
          </label>
          <label>
            Employment type
            <select name="employment" defaultValue="Salaried employee" required>
              <option value="Salaried employee">Salaried employee</option>
            </select>
          </label>
          <label>
            Your CIBIL score
            <select name="cibil" defaultValue="I'm not sure" required>
              {cibilOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="consent">
          <input name="consent" type="checkbox" required />
          <span>I agree to be contacted by Vintage Finance about this enquiry.</span>
        </label>
        <Button variant="loan" className="form-submit" type="submit" disabled={sending}>
          {sending ? "Submitting…" : "Submit"}
        </Button>
        {status && (
          <p className="form-status" role="status">
            {status}
          </p>
        )}
        <p className="security-note">
          <LockKeyhole size={13} />
          No PAN, Aadhaar or documents needed here
        </p>
      </form>
    </div>
  );
}

export function LoanApplication({ open, onOpenChange }) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="loan-page application-dialog"
      overlayClassName="bg-foreground/80"
      labelledBy="application-title"
      describedBy="application-description"
    >
      <h2 id="application-title" className="text-lg font-semibold leading-none tracking-tight">
        Personal loan for salaried employees
      </h2>
      <p id="application-description" className="text-sm text-muted-foreground">
        Gurgaon · Up to ₹15 lakh · Minimal documentation
      </p>
      <LoanEnquiry embedded />
    </Dialog>
  );
}
