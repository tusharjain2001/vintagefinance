import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, LockKeyhole, BriefcaseBusiness, Store } from "lucide-react";
import { privacyPolicy } from "../../../App";
import { Dialog } from "../shared/Dialog";
import { sendLead } from "../shared/sendLead";
import { Button } from "./ui";
import { applicantTypes, applyErrors } from "./loanCalculations";

const profiles = [
  { value: applicantTypes[0], Icon: BriefcaseBusiness, hint: "Monthly salary credit" },
  { value: applicantTypes[1], Icon: Store, hint: "Business income or freelance" },
];

export function ApplyDialog({ open, onOpenChange }) {
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [submitError, setSubmitError] = useState("");
  const [profile, setProfile] = useState(applicantTypes[0]);

  // Each time the dialog opens it starts from a fresh form.
  useEffect(() => {
    if (open) {
      setStatus("idle");
      setSubmitError("");
    }
  }, [open]);

  async function submit(e) {
    e.preventDefault();
    const formElement = e.currentTarget;
    const data = new FormData(formElement);
    const name = String(data.get("apply-name") || "");
    const email = String(data.get("apply-email") || "");
    const mobile = String(data.get("apply-mobile") || "");
    const issues = applyErrors(name, email, mobile, profile, data.get("apply-consent") === "on");
    setErrors(issues);
    if (Object.keys(issues).length) return;
    setStatus("sending");
    setSubmitError("");
    const error = await sendLead("Loan application", [
      ["Full name", name.trim()],
      ["Email address", email.trim()],
      ["Mobile number", mobile],
      ["Profile", profile],
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
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      className="apply-dialog"
      labelledBy="apply-title"
      describedBy="apply-description"
    >
      <div className="flex flex-col space-y-1.5 text-center sm:text-left">
        <h2 id="apply-title" className="text-lg font-semibold leading-none tracking-tight">
          Apply for a personal loan
        </h2>
        <p id="apply-description" className="text-sm text-muted-foreground">
          Salaried or self-employed — share three details and the team will discuss suitable
          options with you.
        </p>
      </div>
      <form onSubmit={submit} noValidate className="apply-form">
        <fieldset className="type-options">
          <legend>Which one describes you?</legend>
          <div>
            {profiles.map(({ value, Icon, hint }) => (
              <label key={value} className={profile === value ? "is-active" : ""}>
                <input
                  type="radio"
                  name="apply-profile"
                  value={value}
                  checked={profile === value}
                  onChange={() => {
                    setProfile(value);
                    setErrors((prev) => {
                      const next = { ...prev };
                      delete next.applicantType;
                      return next;
                    });
                  }}
                />
                <Icon size={17} />
                <span>
                  <strong>{value}</strong>
                  <small>{hint}</small>
                </span>
              </label>
            ))}
          </div>
          {errors.applicantType && (
            <p className="field-error" role="alert">
              {errors.applicantType}
            </p>
          )}
        </fieldset>
        <div className="form-grid">
          <label className="field col-span-2">
            Full name
            <input
              name="apply-name"
              autoComplete="name"
              maxLength={80}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </label>
          <label className="field">
            Email address
            <input
              name="apply-email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </label>
          <label className="field">
            Mobile number
            <input
              name="apply-mobile"
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={10}
              placeholder="10-digit mobile number"
              aria-invalid={!!errors.mobile}
            />
            {errors.mobile && <span className="field-error">{errors.mobile}</span>}
          </label>
        </div>
        <label className="consent">
          <input name="apply-consent" type="checkbox" />
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
            Thank you. Your application has been sent and our team will contact you soon.
          </p>
        )}
        <div className="form-safe">
          <LockKeyhole size={12} /> No PAN, Aadhaar or documents needed here
        </div>
      </form>
    </Dialog>
  );
}
