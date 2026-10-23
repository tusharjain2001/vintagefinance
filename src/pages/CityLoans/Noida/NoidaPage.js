import React, { useMemo, useState } from "react";
import Helmet from "react-helmet";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Calculator,
  Check,
  CheckCircle2,
  Clock3,
  FileCheck2,
  IndianRupee,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  UserCheck,
  WalletCards,
} from "lucide-react";
import { sendLead } from "../shared/sendLead";
import { Accordion, Button, Checkbox, Input, Label, Select, Slider } from "./ui";
import heroImage from "./images/noida-professional.webp";
import "./noida.css";


const formatMoney = (value) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.max(0, value));

function FieldSlider({ label, value, min, max, step, prefix = "", suffix = "", onChange }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-semibold text-foreground">{label}</label>
        <div className="flex min-w-28 items-center justify-end rounded-md border border-border bg-background px-3 py-2 font-bold">
          <span>{prefix}</span>
          <input
            aria-label={label}
            className="number-input-clean w-20 bg-transparent text-right outline-none"
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value) || min)))}
          />
          <span>{suffix}</span>
        </div>
      </div>
      <Slider value={value} min={min} max={max} step={step} onChange={onChange} aria-label={label} />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>
          {prefix}
          {formatMoney(min)}
          {suffix}
        </span>
        <span>
          {prefix}
          {formatMoney(max)}
          {suffix}
        </span>
      </div>
    </div>
  );
}

const employmentOptions = [
  ["salaried", "Salaried"],
  ["self-employed", "Self-employed"],
];

const cibilOptions = [
  ["below-500", "Below 500"],
  ["500-549", "500–549"],
  ["550-599", "550–599"],
  ["600-649", "600–649"],
  ["650-plus", "650+"],
  ["no-history", "No credit history"],
  ["not-sure", "Not sure"],
];

const labelOf = (options, value) => (options.find(([v]) => v === value) || [value, value])[1];

const initialEnquiry = {
  name: "",
  phone: "",
  email: "",
  monthlyIncome: "",
  employmentType: "salaried",
  cibilBand: "not-sure",
  loanAmount: "500000",
  pincode: "",
};

// The Lovable version saved enquiries to its own Supabase table; here they are
// emailed through the site's backend, like the other landing page forms.
function LoanEnquiryForm() {
  const [values, setValues] = useState(initialEnquiry);
  const [consent, setConsent] = useState(true);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const update = (key, value) => setValues((current) => ({ ...current, [key]: value }));
  const submit = async (event) => {
    event.preventDefault();
    const phone = values.phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setStatus("error");
      setErrorMessage("Please enter a valid 10-digit Indian mobile number.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setErrorMessage("Please accept the consent statement to continue.");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    const error = await sendLead("Loan enquiry", [
      ["Full name", values.name.trim()],
      ["Mobile number", phone],
      ["Email address", values.email.trim()],
      ["Net monthly income", `₹${values.monthlyIncome}`],
      ["Employment type", labelOf(employmentOptions, values.employmentType)],
      ["CIBIL score", labelOf(cibilOptions, values.cibilBand)],
      ["Loan amount", `₹${values.loanAmount}`],
      ["PIN code", values.pincode.trim()],
    ]);
    if (error) {
      setStatus("error");
      setErrorMessage(error);
      return;
    }
    setStatus("success");
    setValues(initialEnquiry);
  };
  return (
    <form onSubmit={submit} className="rounded-lg bg-card p-6 text-foreground shadow-2xl sm:p-8">
      <div className="mb-6">
        <p className="text-xs font-extrabold uppercase text-brand-sky">Free eligibility enquiry</p>
        <h2 className="mt-2 text-2xl font-bold">Check your loan options</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          No application fee. A team member will review your details.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="lead-name">Full name</Label>
          <Input
            id="lead-name"
            required
            minLength={2}
            maxLength={100}
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-phone">Mobile number</Label>
          <Input
            id="lead-phone"
            required
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            value={values.phone}
            onChange={(e) => update("phone", e.target.value.replace(/\D/g, ""))}
            placeholder="10-digit mobile number"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-email">
            Email <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="lead-email"
            type="email"
            maxLength={254}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-income">Net monthly income</Label>
          <Input
            id="lead-income"
            required
            type="number"
            min={0}
            max={10000000}
            value={values.monthlyIncome}
            onChange={(e) => update("monthlyIncome", e.target.value)}
            placeholder="₹ 50,000"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-employment">Employment type</Label>
          <Select
            id="lead-employment"
            value={values.employmentType}
            onChange={(value) => update("employmentType", value)}
            options={employmentOptions}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-cibil">CIBIL score</Label>
          <Select
            id="lead-cibil"
            value={values.cibilBand}
            onChange={(value) => update("cibilBand", value)}
            options={cibilOptions}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-amount">Required loan amount</Label>
          <Input
            id="lead-amount"
            required
            type="number"
            min={50000}
            max={1500000}
            step={10000}
            value={values.loanAmount}
            onChange={(e) => update("loanAmount", e.target.value)}
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lead-pincode">
            Noida / NCR PIN code{" "}
            <span className="font-normal text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="lead-pincode"
            inputMode="numeric"
            pattern="[1-9][0-9]{5}"
            maxLength={6}
            value={values.pincode}
            onChange={(e) => update("pincode", e.target.value.replace(/\D/g, ""))}
            placeholder="201301"
            className="h-11"
          />
        </div>
      </div>
      <label className="mt-5 flex cursor-pointer items-start gap-3 text-xs leading-5 text-muted-foreground">
        <Checkbox checked={consent} onCheckedChange={setConsent} className="mt-0.5" />
        <span>
          I consent to being contacted by Vintage Finance about this enquiry. Submission does not
          guarantee approval.
        </span>
      </label>
      {status === "error" && (
        <p role="alert" className="mt-4 text-sm font-semibold text-destructive">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <div
          role="status"
          className="mt-4 flex items-start gap-2 rounded-md bg-brand-mint p-3 text-sm font-semibold"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
          Thank you. Your enquiry has been received; our team will contact you.
        </div>
      )}
      <Button type="submit" variant="hero" size="lg" className="mt-5 w-full" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit loan enquiry"}
        <ArrowRight />
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        Your details are used only to respond to this loan enquiry.
      </p>
    </form>
  );
}

function CallbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const submit = async (event) => {
    event.preventDefault();
    const clean = phone.replace(/\D/g, "");
    if (!/^[6-9]\d{9}$/.test(clean)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }
    setSending(true);
    setError("");
    const result = await sendLead("Callback request", [
      ["Full name", name.trim()],
      ["Mobile number", clean],
    ]);
    setSending(false);
    if (result) {
      setError(result);
      return;
    }
    setDone(true);
    setName("");
    setPhone("");
  };
  if (done)
    return (
      <div className="flex items-center gap-3 rounded-md bg-background/75 p-5 font-semibold">
        <CheckCircle2 className="size-5" />
        Callback request received.
      </div>
    );
  return (
    <form onSubmit={submit} className="grid w-full gap-3 sm:grid-cols-[1fr_1fr_auto] lg:max-w-2xl">
      <Input
        required
        minLength={2}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
        aria-label="Callback name"
        className="h-12 bg-background"
      />
      <Input
        required
        inputMode="numeric"
        pattern="[6-9][0-9]{9}"
        maxLength={10}
        value={phone}
        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
        placeholder="Mobile number"
        aria-label="Callback mobile number"
        className="h-12 bg-background"
      />
      <Button type="submit" variant="dark" size="lg" disabled={sending}>
        {sending ? "Sending…" : "Request callback"}
      </Button>
      {error && (
        <p role="alert" className="text-sm font-semibold text-destructive sm:col-span-3">
          {error}
        </p>
      )}
    </form>
  );
}

function EmiCalculator() {
  const [amount, setAmount] = useState(500000);
  const [rate, setRate] = useState(19.9);
  const [months, setMonths] = useState(36);
  const result = useMemo(() => {
    const r = rate / 1200;
    const emi =
      r === 0 ? amount / months : (amount * r * (1 + r) ** months) / ((1 + r) ** months - 1);
    return { emi, interest: emi * months - amount, total: emi * months };
  }, [amount, rate, months]);
  return (
    <div className="grid overflow-hidden rounded-lg border border-border bg-card shadow-xl lg:grid-cols-[1.15fr_.85fr]">
      <div className="space-y-8 p-6 sm:p-9">
        <div>
          <span className="text-xs font-extrabold uppercase text-primary">Plan your repayment</span>
          <h3 className="mt-2 text-2xl font-bold">Personal Loan EMI Calculator</h3>
        </div>
        <FieldSlider label="Loan amount" value={amount} min={50000} max={1500000} step={10000} prefix="₹" onChange={setAmount} />
        <FieldSlider label="Interest rate (p.a.)" value={rate} min={19.9} max={26} step={0.1} suffix="%" onChange={setRate} />
        <FieldSlider label="Loan tenure" value={months} min={6} max={60} step={1} suffix=" mo" onChange={setMonths} />
      </div>
      <div className="flex flex-col justify-between bg-brand-dark p-6 text-background sm:p-9">
        <div>
          <p className="text-sm text-background/65">Your estimated monthly EMI</p>
          <p className="mt-2 font-display text-4xl font-bold text-primary">₹{formatMoney(result.emi)}</p>
          <div className="mt-8 grid gap-4 border-t border-background/15 pt-6">
            <div className="flex justify-between">
              <span className="text-background/65">Principal amount</span>
              <strong>₹{formatMoney(amount)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-background/65">Total interest</span>
              <strong>₹{formatMoney(result.interest)}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-background/65">Total payable</span>
              <strong>₹{formatMoney(result.total)}</strong>
            </div>
          </div>
        </div>
        <Button as="a" href="#apply" variant="hero" size="lg" className="mt-8 w-full">
          Apply for this amount <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

function EligibilityCalculator() {
  const [salary, setSalary] = useState(60000);
  const [obligations, setObligations] = useState(10000);
  const [age, setAge] = useState(32);
  const [months, setMonths] = useState(48);
  const result = useMemo(() => {
    const eligibleEmi = Math.max(0, salary * 0.5 - obligations);
    const r = 19.9 / 1200;
    const amount = (eligibleEmi * ((1 + r) ** months - 1)) / (r * (1 + r) ** months);
    const baseEligible = salary >= 30000 && age >= 23 && age <= 60;
    return { eligibleEmi, amount: baseEligible ? Math.min(1500000, amount) : 0, baseEligible };
  }, [salary, obligations, age, months]);
  return (
    <div id="eligibility" className="grid overflow-hidden rounded-lg border border-border bg-card shadow-xl lg:grid-cols-[1.15fr_.85fr]">
      <div className="space-y-7 p-6 sm:p-9">
        <div>
          <span className="text-xs font-extrabold uppercase text-primary">Check before you apply</span>
          <h3 className="mt-2 text-2xl font-bold">Loan Eligibility Calculator</h3>
        </div>
        <FieldSlider label="Net monthly salary" value={salary} min={20000} max={300000} step={5000} prefix="₹" onChange={setSalary} />
        <FieldSlider label="Existing monthly EMIs" value={obligations} min={0} max={150000} step={1000} prefix="₹" onChange={setObligations} />
        <div className="grid gap-6 sm:grid-cols-2">
          <FieldSlider label="Your age" value={age} min={21} max={60} step={1} suffix=" yrs" onChange={setAge} />
          <FieldSlider label="Preferred tenure" value={months} min={6} max={60} step={1} suffix=" mo" onChange={setMonths} />
        </div>
      </div>
      <div className="flex flex-col justify-between bg-brand-mint p-6 sm:p-9">
        <div>
          <p className="text-sm font-semibold text-foreground/65">Indicative eligible loan amount</p>
          <p className="mt-2 font-display text-4xl font-bold">₹{formatMoney(result.amount)}</p>
          <div className="mt-6 flex items-start gap-3 rounded-md bg-background/70 p-4">
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-foreground" />
            <p className="text-sm leading-6">
              {result.baseEligible
                ? `Estimated affordable EMI: ₹${formatMoney(result.eligibleEmi)}/month.`
                : "Current basic age or income criteria are not met."}
            </p>
          </div>
          <p className="mt-5 text-xs leading-5 text-foreground/60">
            Indicative estimate using a 50% obligation-to-income assumption and 19.9% p.a. Final
            eligibility depends on verification, credit assessment and lender policy.
          </p>
        </div>
        <Button as="a" href="#apply" variant="dark" size="lg" className="mt-8 w-full">
          Talk to a loan expert <ArrowRight />
        </Button>
      </div>
    </div>
  );
}

const benefits = [
  { icon: FileCheck2, title: "Minimal documentation", text: "Start online with only the essential documents." },
  { icon: Clock3, title: "Quick assistance", text: "Our team helps you through every step." },
  { icon: ShieldCheck, title: "No collateral", text: "Unsecured personal loan for eligible applicants." },
  { icon: WalletCards, title: "Flexible repayment", text: "Choose a tenure aligned with your monthly budget." },
];

const scoreBands = [
  ["500", "Challenging profile", "Focus on stable salary credits, low current obligations and resolving any active overdue accounts."],
  ["550", "Case-by-case review", "Consistent income and recent repayment behaviour can strengthen the overall assessment."],
  ["600", "Improving eligibility", "A clean recent bank statement and manageable EMI burden may support more options."],
  ["650", "Stronger profile", "Applicants may have broader options, subject to income, employment and complete verification."],
];

const comparisonRows = [
  ["Low CIBIL application", "May face stricter score filters", "Policies vary widely", "Profile can be submitted for individual assessment"],
  ["Human assistance", "Often branch or call-centre led", "Usually app-led", "Loan expert assistance available"],
  ["Collateral", "Usually not required for personal loans", "Usually not required", "Not required for this personal-loan product"],
  ["Cost visibility", "Varies by lender and offer", "Must compare carefully", "Published rate and key charges shown on this page"],
  ["Application channel", "Digital or branch, depending on bank", "Primarily digital", "Online enquiry, phone and WhatsApp"],
];

const criteria = [
  [BriefcaseBusiness, "Full-time salaried employee"],
  [IndianRupee, "Net monthly income of at least ₹30,000"],
  [Clock3, "Minimum 2 years in employment and 6 months with current organisation"],
  [UserCheck, "Age above 23 and below 60 years"],
  [ShieldCheck, "Resident of Delhi NCR"],
];

const documents = ["PAN card", "Latest salary slips", "Recent bank statements", "Valid identity proof", "Current address proof", "Employment details"];

const charges = [
  ["Rate of interest", "19.9% to 26% p.a."],
  ["Processing charges", "Minimum processing charges; final amount disclosed before acceptance"],
  ["Cheque / instrument swap", "₹500 per instance + applicable taxes"],
  ["Prepayment / foreclosure", "4%"],
  ["APR and total cost", "Provided in your Key Facts Statement based on the approved offer"],
];

const journey = [
  ["01", "Share your details", "Tell us your income, employment and requirement."],
  ["02", "Check eligibility", "Our team assesses your basic eligibility and options."],
  ["03", "Submit documents", "Provide income, identity and address documents."],
  ["04", "Review & disbursal", "Accept verified terms before approved funds are disbursed."],
];

const testimonials = [
  ["Ishaan Ghakar", "The application and disbursal process felt smooth from start to finish.", "4.5"],
  ["Pawan Sharma", "The team understood my needs and made the process easy to follow.", "4.8"],
  ["Sashi Malik", "A hassle-free experience with helpful support through the loan process.", "4.4"],
];

const faqs = [
  ["Who can apply for a personal loan in Noida?", "Full-time salaried Delhi NCR residents meeting the stated income, age and employment criteria may apply. Final approval remains subject to verification and credit assessment."],
  ["Can I apply with a CIBIL score of 500 or 550?", "Yes, you may submit your profile for review. These scores can be challenging, so verified salary, current obligations, active overdue accounts and recent repayment behaviour become especially important. Application does not guarantee approval."],
  ["What changes at a CIBIL score of 600 or 650?", "A higher score may improve available options, but it is not the only factor. Income, employer, bank statements, existing EMIs and documentation are also assessed."],
  ["Can I apply after a bank rejection or past settlement?", "You may request an individual assessment and share the reason for the rejection or settlement. Do not hide active obligations; complete information helps the team assess the current profile accurately."],
  ["How is personal loan EMI calculated?", "EMI depends on principal, monthly interest rate and tenure. Use the calculator above for an illustrative estimate."],
  ["Is collateral required?", "A personal loan is generally unsecured, so eligible applicants do not pledge an asset. Terms depend on the approved offer."],
  ["How long does approval take?", "Timelines vary by document completion and verification. The existing Vintage Finance page states 5–7 working days; our team can confirm your case-specific timeline."],
  ["Are calculator results final?", "No. They are planning estimates. The approved amount, EMI, APR, charges and repayment terms will appear in your final loan documents."],
];

// Personal loan landing page for Noida, from the Noida Lovable design.
export default function NoidaPage() {
  return (
    <div className="lp-noida">
      <Helmet>
        <title>Personal Loan in Noida for Low CIBIL | Vintage Finance</title>
        <link rel="canonical" href="https://www.vintagefinance.in/personal-loan-low-cibil-defaulter-noida.html" />
        <meta
          name="description"
          content="Explore personal loans in Noida, including applications with CIBIL scores of 500, 550, 600 or 650. Compare options, estimate EMI and submit an enquiry."
        />
        <meta property="og:title" content="Personal Loan in Noida | Vintage Finance" />
        <meta
          property="og:description"
          content="Explore personal loans in Noida with transparent charges, instant EMI estimates and an eligibility calculator."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vintagefinance.in/personal-loan-low-cibil-defaulter-noida.html" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
        />
      </Helmet>
      <main id="top" className="min-h-screen overflow-hidden bg-background">
        <section className="relative min-h-[680px] overflow-hidden bg-surface-soft">
          <img
            src={heroImage}
            alt="Salaried professional in a modern Noida office exploring a personal loan"
            width={1600}
            height={1008}
            fetchpriority="high"
            className="absolute inset-0 h-full w-full object-cover object-[68%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface-soft via-surface-soft/95 to-surface-soft/10" />
          <div className="section-shell relative flex min-h-[680px] items-center py-16">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background/80 px-4 py-2 text-xs font-extrabold uppercase">
                <BadgeCheck className="size-4 text-primary" /> Serving salaried applicants across Delhi NCR
              </div>
              <h1 className="text-5xl font-bold leading-[1.06] sm:text-6xl lg:text-7xl">
                Personal Loan
                <br />
                in <span className="text-brand-sky">Noida</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
                Handle planned or unexpected expenses with a hassle-free personal loan—even if your
                CIBIL score needs individual assessment.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button as="a" href="#loan-form" variant="dark" size="lg">
                  Check My Options <ArrowRight />
                </Button>
                <Button as="a" href="#calculators" variant="outline" size="lg">
                  <Calculator /> Calculate EMI
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold">
                {["Loan up to ₹15 lakh", "Interest 19.9%–26% p.a.", "Low-CIBIL profiles considered"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="size-4 text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border bg-brand-dark py-5 text-background">
          <div className="section-shell grid gap-4 text-center sm:grid-cols-3">
            <p>
              <strong className="text-primary">₹30,000</strong>
              <span className="ml-2 text-sm text-background/65">minimum net salary</span>
            </p>
            <p>
              <strong className="text-primary">23–60 years</strong>
              <span className="ml-2 text-sm text-background/65">applicant age</span>
            </p>
            <p>
              <strong className="text-primary">Delhi NCR</strong>
              <span className="ml-2 text-sm text-background/65">service area</span>
            </p>
          </div>
        </section>

        <section id="benefits" className="py-20 sm:py-28">
          <div className="section-shell">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
              <div>
                <span className="text-xs font-extrabold uppercase text-primary">Why Vintage Finance</span>
                <h2 className="mt-3 text-4xl font-bold leading-tight">A clearer way to plan your personal loan</h2>
                <p className="mt-5 leading-7 text-muted-foreground">
                  Noida applicants get guided support from initial eligibility through documentation
                  and disbursal. Approval, amount, rate and timeline remain subject to assessment.
                </p>
              </div>
              <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
                {benefits.map(({ icon: Icon, title, text }) => (
                  <article key={title} className="bg-card p-7">
                    <Icon className="size-8 text-brand-sky" />
                    <h3 className="mt-5 text-lg font-bold">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="low-cibil" className="bg-brand-dark py-20 text-background sm:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase text-primary">Score-specific guidance</span>
              <h2 className="mt-3 text-4xl font-bold">Loan for CIBIL Score 500, 550, 600 & 650 in Noida</h2>
              <p className="mt-5 leading-7 text-background/65">
                A lower score can make approval harder, but it is only one part of an application.
                Vintage Finance may also review current salary, existing EMIs, employment stability,
                recent bank conduct and documentation.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-background/15 bg-background/15 md:grid-cols-2 lg:grid-cols-4">
              {scoreBands.map(([score, title, text]) => (
                <article key={score} className="bg-brand-dark p-6">
                  <span className="font-display text-5xl font-bold text-primary">{score}</span>
                  <h3 className="mt-5 text-lg font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-background/60">{text}</p>
                  <a href="#loan-form" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-sky">
                    Check this profile <ArrowRight className="size-4" />
                  </a>
                </article>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-md border border-background/15 bg-background/5 p-5">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-6 text-background/70">
                <strong className="text-background">No credit history?</strong> First-time borrowers
                can still submit an enquiry. Assessment depends on verified income, employment and
                bank-statement behaviour. No score band guarantees approval.
              </p>
            </div>
          </div>
        </section>

        <section id="comparison" className="py-20 sm:py-28">
          <div className="section-shell">
            <div className="max-w-3xl">
              <span className="text-xs font-extrabold uppercase text-primary">Compare the journey</span>
              <h2 className="mt-3 text-4xl font-bold">Vintage Finance vs common loan routes</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                This practical comparison shows typical process differences. Exact lender terms vary,
                so always compare the final APR, fees and Key Facts Statement.
              </p>
            </div>
            <div className="mt-10 overflow-x-auto rounded-lg border border-border">
              <table className="min-w-[760px] w-full text-left">
                <thead className="bg-brand-dark text-background">
                  <tr>
                    <th className="p-5">What to compare</th>
                    <th className="p-5">Traditional bank route</th>
                    <th className="p-5">Short-term loan apps</th>
                    <th className="bg-primary p-5 text-primary-foreground">Vintage Finance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row) => (
                    <tr key={row[0]} className="bg-card">
                      <th scope="row" className="p-5 font-bold">{row[0]}</th>
                      <td className="p-5 text-sm text-muted-foreground">{row[1]}</td>
                      <td className="p-5 text-sm text-muted-foreground">{row[2]}</td>
                      <td className="bg-brand-mint/35 p-5 text-sm font-semibold">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs leading-5 text-muted-foreground">
              Comparison describes common processes, not every provider. It does not imply guaranteed
              approval, lower cost or faster disbursal.
            </p>
          </div>
        </section>

        <section id="loan-form" className="bg-surface-soft py-20 sm:py-28">
          <div className="section-shell grid items-start gap-10 lg:grid-cols-[.7fr_1.3fr]">
            <div className="lg:sticky lg:top-28">
              <span className="text-xs font-extrabold uppercase text-primary">Start with your profile</span>
              <h2 className="mt-3 text-4xl font-bold">Tell us what you need</h2>
              <p className="mt-5 leading-7 text-muted-foreground">
                Submit your basic details for a call from the Vintage Finance team. Your CIBIL band
                helps the team understand the kind of assessment you may need.
              </p>
              <div className="mt-8 space-y-4 text-sm font-semibold">
                {["No payment required to submit", "No approval promise", "Final terms shared after assessment"].map((item) => (
                  <p key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="size-5 text-brand-sky" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <LoanEnquiryForm />
          </div>
        </section>

        <section id="calculators" className="bg-surface-soft py-20 sm:py-28">
          <div className="section-shell">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-extrabold uppercase text-primary">Know your numbers</span>
              <h2 className="mt-3 text-4xl font-bold">Calculate before you commit</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Adjust the values to understand a possible monthly payment and borrowing range.
              </p>
            </div>
            <EmiCalculator />
            <div className="h-8" />
            <EligibilityCalculator />
            <p className="mt-5 text-center text-xs text-muted-foreground">
              Calculator results are illustrative only and do not represent a loan offer or approval.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="section-shell grid gap-14 lg:grid-cols-2">
            <div>
              <span className="text-xs font-extrabold uppercase text-primary">Basic criteria</span>
              <h2 className="mt-3 text-4xl font-bold">Who can apply?</h2>
              <div className="mt-8 space-y-5">
                {criteria.map(([Icon, text]) => (
                  <div key={text} className="flex gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand-mint">
                      <Icon className="size-5" />
                    </span>
                    <p className="pt-2 font-semibold">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase text-primary">Keep these ready</span>
              <h2 className="mt-3 text-4xl font-bold">Documents required</h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {documents.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card p-4">
                    <FileCheck2 className="size-5 text-brand-sky" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-6 text-muted-foreground">
                Additional documents may be requested based on the applicant profile and verification.
              </p>
            </div>
          </div>
        </section>

        <section id="fees" className="bg-brand-dark py-20 text-background sm:py-28">
          <div className="section-shell">
            <div className="max-w-2xl">
              <span className="text-xs font-extrabold uppercase text-primary">Upfront information</span>
              <h2 className="mt-3 text-4xl font-bold">Interest rate, fees & charges</h2>
              <p className="mt-4 leading-7 text-background/65">
                Review the key published charges before you apply. Your final loan terms will be
                stated in the sanction documents and Key Facts Statement.
              </p>
            </div>
            <div className="mt-10 overflow-hidden rounded-lg border border-background/15">
              <table className="w-full text-left">
                <thead className="bg-background/10 text-xs uppercase text-background/60">
                  <tr>
                    <th className="p-4 sm:p-5">Charge</th>
                    <th className="p-4 sm:p-5">Published amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-background/10">
                  {charges.map(([charge, amount]) => (
                    <tr key={charge}>
                      <td className="p-4 font-semibold sm:p-5">{charge}</td>
                      <td className="p-4 text-sm text-background/70 sm:p-5">{amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-xs leading-5 text-background/55">
              Taxes and other charges may apply as disclosed in the final agreement. Please review
              all terms before accepting a loan.
            </p>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="section-shell">
            <div className="text-center">
              <span className="text-xs font-extrabold uppercase text-primary">Simple journey</span>
              <h2 className="mt-3 text-4xl font-bold">From application to decision</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-4">
              {journey.map(([n, t, d]) => (
                <div key={n} className="border-t-2 border-primary pt-5">
                  <span className="font-display text-3xl font-bold text-brand-sky">{n}</span>
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="bg-brand-mint py-16">
          <div className="section-shell grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <span className="text-xs font-extrabold uppercase">Prefer a quick call?</span>
              <h2 className="mt-2 text-3xl font-bold">Request a callback</h2>
              <p className="mt-3 text-sm text-foreground/65">
                Share two details and our team can call you about the process.
              </p>
            </div>
            <CallbackForm />
          </div>
          <div className="section-shell mt-6 flex flex-wrap gap-4 text-sm font-bold">
            <a href="tel:+919899055381" className="inline-flex items-center gap-2">
              <Phone className="size-4" /> +91 98990 55381
            </a>
            <a href="https://wa.me/919899055381" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              Chat on WhatsApp <ArrowRight className="size-4" />
            </a>
          </div>
        </section>

        <section className="bg-surface-soft py-20 sm:py-28">
          <div className="section-shell">
            <div className="text-center">
              <span className="text-xs font-extrabold uppercase text-primary">Customer experiences</span>
              <h2 className="mt-3 text-4xl font-bold">What borrowers say</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map(([name, quote, rating]) => (
                <blockquote key={name} className="rounded-lg border border-border bg-card p-7">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="size-4 fill-current" />
                    <strong className="text-foreground">{rating}</strong>
                  </div>
                  <p className="mt-5 leading-7">“{quote}”</p>
                  <footer className="mt-6 text-sm font-bold">{name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="faqs" className="py-20 sm:py-28">
          <div className="section-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <span className="text-xs font-extrabold uppercase text-primary">Good to know</span>
              <h2 className="mt-3 text-4xl font-bold">Frequently asked questions</h2>
              <p className="mt-4 leading-7 text-muted-foreground">
                Clear answers to common questions from Noida applicants.
              </p>
            </div>
            <Accordion items={faqs} className="border-t border-border" />
          </div>
        </section>

      </main>
    </div>
  );
}
