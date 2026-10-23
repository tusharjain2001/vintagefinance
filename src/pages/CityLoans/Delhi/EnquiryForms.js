import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import { privacyPolicy } from "../../../App";
import { sendLead } from "../shared/sendLead";
import { Button } from "./ui";
import { cities, enquiryErrors } from "./loanCalculations";

export function EnquiryForm() {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  async function submit(e) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const data = new FormData(formElement);
    const name = String(data.get("name") || "");
    const mobile = String(data.get("mobile") || "");
    const salary = Number(data.get("salary"));
    const amount = Number(data.get("amount"));
    const issues = enquiryErrors(name, mobile, salary, amount, data.get("consent") === "on");
    setErrors(issues);
    if (Object.keys(issues).length) return;
    setStatus("sending");
    setSubmitError("");
    const error = await sendLead("Loan enquiry", [
      ["Full name", name.trim()],
      ["Mobile number", mobile],
      ["City", data.get("city")],
      ["Net monthly salary", `₹${salary}`],
      ["Loan amount", `₹${amount}`],
      ["Employment type", data.get("employment")],
      ["CIBIL score", data.get("cibil")],
    ]);
    if (error) {
      setStatus("idle");
      setSubmitError(error);
      return;
    }
    formElement.reset();
    setStatus("sent");
  }
  return (
    <form className="enquiry-form" onSubmit={submit} noValidate id="apply">
      <div className="eyebrow">LET'S GET STARTED</div>
      <h3>Your next step starts here.</h3>
      <p>Share a few details to discuss your loan options.</p>
      <div className="form-grid">
        <label className="field">
          Full name
          <input
            name="name"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
          />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </label>
        <label className="field">
          Mobile number
          <input
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            placeholder="10-digit mobile number"
            aria-invalid={!!errors.mobile}
          />
          {errors.mobile && <span className="field-error">{errors.mobile}</span>}
        </label>
        <label className="field">
          City
          <select name="city">
            {cities.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
        <label className="field">
          Net monthly salary (₹)
          <input
            name="salary"
            type="number"
            min={1}
            placeholder="e.g. 40,000"
            aria-invalid={!!errors.salary}
          />
          {errors.salary && <span className="field-error">{errors.salary}</span>}
        </label>
        <label className="field">
          Loan amount (₹)
          <input
            name="amount"
            type="number"
            min={1}
            max={1500000}
            placeholder="e.g. 2,00,000"
            aria-invalid={!!errors.amount}
          />
          {errors.amount && <span className="field-error">{errors.amount}</span>}
        </label>
        <label className="field">
          Employment type
          <select name="employment">
            <option>Salaried employee</option>
            <option>Self-employed — discuss options</option>
            <option>Other — discuss options</option>
          </select>
        </label>
        <label className="field col-span-2">
          Your CIBIL score
          <select name="cibil">
            <option>I'm not sure</option>
            <option>No credit history</option>
            <option>Below 500</option>
            <option>500–549</option>
            <option>550–599</option>
            <option>600–649</option>
            <option>650–699</option>
            <option>700 or above</option>
          </select>
        </label>
      </div>
      <label className="consent">
        <input name="consent" type="checkbox" />
        <span>
          I agree to be contacted by Vintage Finance about this enquiry and have read the{" "}
          <Link className="underline" to={privacyPolicy} target="_blank" rel="noreferrer">
            privacy policy
          </Link>
          .
        </span>
      </label>
      {errors.consent && (
        <p className="field-error" role="alert">
          {errors.consent}
        </p>
      )}
      {submitError && (
        <p className="field-error" role="alert">
          {submitError}
        </p>
      )}
      <Button type="submit" variant="brand" size="cta" className="w-full" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit enquiry"} <ArrowUpRight />
      </Button>
      {status === "sent" && (
        <p className="notice mt-3" role="status">
          Thank you. Your enquiry has been sent and our team will contact you soon.
        </p>
      )}
      <div className="form-safe">
        <LockKeyhole size={12} /> No PAN, Aadhaar or documents needed here
      </div>
    </form>
  );
}

export function CallbackForm() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  async function submit(e) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const data = new FormData(formElement);
    const mobile = String(data.get("callback-mobile") || "");
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage("Please enter a valid 10-digit mobile number.");
      return;
    }
    if (data.get("callback-consent") !== "on") {
      setMessage("Please agree to being contacted.");
      return;
    }
    setSending(true);
    setMessage("");
    const error = await sendLead("Callback request", [["Mobile number", mobile]]);
    setSending(false);
    if (error) {
      setMessage(error);
      return;
    }
    formElement.reset();
    setMessage("Thank you. Our team will call you back soon.");
  }
  return (
    <form onSubmit={submit} noValidate>
      <div className="callback-form">
        <label className="sr-only" htmlFor="callback-mobile">
          Callback mobile number
        </label>
        <input
          id="callback-mobile"
          name="callback-mobile"
          type="tel"
          inputMode="numeric"
          maxLength={10}
          placeholder="Your mobile number"
        />
        <Button variant="ink" size="cta" type="submit" disabled={sending}>
          {sending ? "Sending…" : "Request a callback"} <ArrowUpRight />
        </Button>
      </div>
      <label className="consent">
        <input name="callback-consent" type="checkbox" />I agree to be contacted about my request.
      </label>
      {message && (
        <p role="status" className="callback-status">
          {message}
        </p>
      )}
    </form>
  );
}
