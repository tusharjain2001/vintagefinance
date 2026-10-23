import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Phone,
  ChevronRight,
  Check,
  ShieldCheck,
  MapPin,
  FileCheck2,
  Wallet,
  HeartPulse,
  House,
  GraduationCap,
  Gem,
  Layers,
  MessageCircle,
  Fingerprint,
  FileText,
  BriefcaseBusiness,
  CircleHelp,
} from "lucide-react";
import { Button, whatsapp } from "./ui";
import { Calculators } from "./Calculators";
import { EnquiryForm, CallbackForm } from "./EnquiryForms";
import { ApplyDialog } from "./ApplyDialog";
import delhiImage from "./images/delhi-india-gate.webp";
import "./delhi.css";

function SectionHeading({ eyebrow, title, description, center = false }) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

const benefits = [
  [FileCheck2, "A simpler online start", "Enquire from home and get guidance on the documents you need."],
  [Wallet, "Repayments you can plan around", "Explore an EMI and tenure that fit your monthly budget."],
  [ShieldCheck, "Your terms, before you commit", "Review the written offer, fees and repayment obligations first."],
  [MessageCircle, "People you can speak to", "Discuss your situation with the team, not just a calculator."],
];

const purposes = [
  [HeartPulse, "Medical expenses", "Support for treatment costs and unplanned healthcare needs."],
  [House, "Home improvements", "Repairs, a renovation or making your space work better."],
  [GraduationCap, "Education needs", "Plan for learning expenses and important education costs."],
  [Gem, "Wedding expenses", "Manage a family milestone with a considered repayment plan."],
  [Layers, "Debt consolidation", "Explore combining debts only if the overall cost works for you."],
];

const scoreBands = [
  {
    band: "500 – 550",
    stand: "Assessment possible with the right profile",
    look: "A net monthly salary of ₹30,000 or more, stable employment and no active defaults on your current obligations. Past credit issues are reviewed, so share them openly.",
  },
  {
    band: "550 – 600",
    stand: "Better footing — surplus and employer matter",
    look: "Your monthly income surplus and employer category (government, PSU, listed or established private companies) strengthen the assessment alongside existing EMIs.",
  },
  {
    band: "600 – 650",
    stand: "Stronger eligibility, larger amounts",
    look: "Applicants in this range are typically considered for larger amounts. The final figure, rate and tenure are always confirmed in your written offer.",
  },
  {
    band: "No CIBIL history",
    stand: "First-time borrowers welcome",
    look: "Your enquiry is evaluated on salary, KYC documents and your last 6 months of bank statement behaviour — no credit score is required to start.",
  },
];

const situations = [
  ["After a bank rejection", "A rejection is a reason to understand what happened, not to apply everywhere at once. Share the reason, if available, and review affordability before a new application."],
  ["After missed EMIs", "Explain any past missed payments and your current outstanding dues. Stable income and recent repayment behaviour are relevant, but do not erase credit history."],
  ["After a loan settlement", "A settled account can still affect a lender’s decision. Keep settlement documents and disclose the status accurately before asking for a review."],
  ["When an expense is urgent", "Speak to the team about your timeline. Verification and disbursal still take time; an emergency does not guarantee same-day funding."],
  ["With active financial obligations", "Include all current EMIs when planning a new loan. Consolidation is useful only when the charges and total repayment justify the change."],
  ["With a legal or recovery matter", "Active defaults, legal notices and court-related matters need individual review. Disclose these first; this page does not promise loans for such cases."],
];

const documents = [
  [Fingerprint, "PAN & identity proof", "PAN and a valid identity document such as Aadhaar, passport, voter ID or driving licence, as accepted."],
  [FileText, "Income proof", "Salary slips and bank statements to support your income and repayment assessment."],
  [MapPin, "Current address proof", "A valid accepted document showing your current residential address."],
  [BriefcaseBusiness, "Employment details", "Keep your employer and work-history details ready; further evidence may be requested."],
];

const comparisonRows = [
  ["Loan amount", "Up to ₹15 lakh, subject to assessment", "Check the amount in your offer", "Check sanctioned amount and net disbursal"],
  ["Credit history", "Low / no-history enquiries can be discussed", "Check that lender’s criteria", "Check lender criteria and credit-check consent"],
  ["Income requirement", "Published minimum ₹30,000 net / month", "Varies by lender and product", "Varies by lender and product"],
  ["Interest & full cost", "Confirm rate, APR and all fees in writing", "Compare APR and total repayment", "Compare APR, fees and interest basis"],
  ["Repayment tenure", "Confirm available tenure with the team", "Check tenure and foreclosure terms", "Check repayment dates and early closure"],
  ["Approval timing", "Subject to documents and assessment", "Ask for a case-specific timeline", "Do not treat advertising as a guarantee"],
  ["Support & privacy", "Official phone and WhatsApp enquiry", "Check support and grievance channels", "Verify legal lender, app permissions and support"],
];

const steps = [
  ["01", "Start a conversation", "Share your city, salary, loan need and credit situation through an enquiry or a call."],
  ["02", "Prepare your documents", "The team guides you on identity, income and address evidence for verification."],
  ["03", "Review your written offer", "Assessment comes first. If offered, check your amount, rate, fees, EMI and repayment terms."],
  ["04", "Accept & receive funds", "After acceptance and required checks, approved funds are disbursed to your registered bank account."],
];

const reviews = [
  ["Ishaan Ghakar", "12 March 2021", "From application to loan disbursal, everything went so smoothly."],
  ["Pawan Sharma", "18 June 2021", "Understanding the struggles of salaried people, vintage finance has done a great job."],
  ["Sashi Malik", "2 September 2021", "Excellent hassle-free loan service at Vintage Finance."],
];

const faqItems = [
  ["Who can apply for a personal loan in Delhi NCR?", "Vintage Finance’s published criteria cover full-time salaried residents of Delhi NCR with net monthly income of at least ₹30,000, more than 23 and less than 60 years of age, at least 2 years of total employment and 6 months in the current organisation. Meeting these requirements does not guarantee approval."],
  ["Can I apply with a CIBIL score of 500, 550, 600 or 650?", "You can enquire about your options with a low score. Share accurate details about your present income, outstanding obligations and credit history. The lender assesses the full profile; no score band shown on this page guarantees approval or a specific loan amount."],
  ["Can I apply without any credit history?", "No credit history is different from missed payments or a default. Vintage Finance’s existing page says credit history is not a strict prerequisite. Your documents, income and repayment capacity still need assessment."],
  ["How much personal loan can I get?", "The published maximum is ₹15,00,000. Your sanctioned amount may be lower depending on income, existing EMIs, documents and the lender’s assessment. The eligibility calculator provides an illustrative estimate, not a sanctioned limit."],
  ["What interest rate and processing fee will I pay?", "The published annual interest range is 19.9%–26%. Your personalised rate depends on your profile, so confirm the exact rate, interest basis and APR in the written offer. The published processing fee range is 1–3% of the sanctioned amount, subject to product and confirmation. Ask about GST, other deductions and the total repayment before accepting."],
  ["How quickly will my loan be approved and disbursed?", "Timing depends on document completion, verification and lender assessment. The existing Delhi FAQ mentions 5–7 working days for approval, while other sections describe faster processing. Ask the team for a case-specific timeline; same-day approval or disbursal is not guaranteed."],
  ["Are these calculators checking my CIBIL score?", "No. These calculators only use the information you enter to perform estimates in your browser. They do not retrieve a credit report or perform a lender credit enquiry. A formal application may involve a credit check with appropriate consent."],
  ["What documents do I need?", "The published list includes PAN, income proof such as salary slips and bank statements, valid identity proof and current address proof. Ask the team for the required number of months and accepted formats. Do not submit PAN or Aadhaar numbers through this enquiry form."],
  ["Can I apply after a bank rejection, EMI default or loan settlement?", "You can discuss your circumstances, but a past rejection, default or settlement can affect the credit decision. Provide accurate outstanding balances and current repayment information. Active legal matters need individual review and should be disclosed."],
  ["Is this service available in Noida and other NCR cities?", "The Delhi page is for Delhi NCR residents. Use the enquiry form to discuss service availability for Delhi, Noida, Gurugram, Ghaziabad or Faridabad. This page does not represent a branch in every city."],
  ["Can I prepay or close my loan early?", "The current page mentions foreclosure facilities. Eligibility, lock-in requirements and any charges depend on the loan agreement and applicable rules. Request the exact terms in writing before accepting the offer."],
  ["How do I compare a monthly flat rate with an annual reducing rate?", "These rates are not directly comparable. A flat rate charges interest on the original principal, while reducing-balance interest uses the outstanding balance. Compare the same amount and tenure using total repayment, net disbursal, all charges and the APR in the written offer."],
  ["What happens when I submit this enquiry form?", "Your details are sent to the Vintage Finance team, who will contact you about your enquiry. Submitting an enquiry is not a loan application or an approval."],
  ["How can I avoid loan scams?", "Verify the official contact and legal lender identity, read the written offer and never share an OTP, PIN or banking password. Do not transfer an unexplained fee to a personal account or install an app at an unknown caller’s request. Contact Vintage Finance through its official details when unsure."],
];

const canonical = "https://www.vintagefinance.in/personal-loan-in-delhi.html";

// Personal loan landing page for Delhi NCR, from the Delhi Lovable design.
export default function DelhiPage() {
  const [applyOpen, setApplyOpen] = useState(false);
  const openApply = () => setApplyOpen(true);

  return (
    <div className="lp-delhi">
      <Helmet>
        <title>Personal Loan in Delhi NCR up to ₹15 Lakh | Vintage Finance</title>
        <link rel="canonical" href={canonical} />
        <meta
          name="description"
          content="Explore personal loans in Delhi NCR with Vintage Finance. Check eligibility, calculate EMI, understand fees and discuss low-CIBIL options for salaried applicants."
        />
        <meta property="og:title" content="Personal Loans in Delhi NCR — Vintage Finance" />
        <meta
          property="og:description"
          content="Plan your EMI, understand your eligibility and discuss a personal loan up to ₹15 lakh with Vintage Finance."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;650;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        />
      </Helmet>
      <main>
        <section className="hero">
          <img
            src={delhiImage}
            className="hero-image"
            alt="India Gate and green lawns in New Delhi"
            width={1600}
            height={1024}
            fetchpriority="high"
          />
          <div className="container-shell hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <ChevronRight size={11} />
              <span>Personal loans</span>
              <ChevronRight size={11} />
              <span>Delhi NCR</span>
            </div>
            <div className="eyebrow">
              <MapPin size={13} /> FOR SALARIED PROFESSIONALS IN DELHI NCR
            </div>
            <h1>
              Personal Loan
              <br />
              in <span>Delhi NCR.</span>
            </h1>
            <p className="hero-description">
              Life doesn't always wait for payday. Explore a personal loan up to{" "}
              <strong className="text-foreground">₹15 lakh</strong> for the things that matter, with
              a simple online enquiry and personal support.
            </p>
            <div className="hero-buttons">
              <Button variant="ink" size="cta" onClick={openApply}>
                Explore my loan options <ArrowUpRight />
              </Button>
              <Button as="a" href="#calculators" variant="outline" size="cta">
                Check eligibility <ArrowRight />
              </Button>
            </div>
            <div className="hero-checks">
              <span>
                <Check />
                Minimal documentation
              </span>
              <span>
                <Check />
                Low-CIBIL enquiries welcome
              </span>
              <span>
                <Check />
                Clear loan terms
              </span>
            </div>
            <p className="hero-disclaimer">
              Loan approval, amount, rate and disbursal are subject to eligibility, documentation
              and lender assessment.
            </p>
          </div>
        </section>
        <div className="container-shell loan-facts">
          <div>
            <small>LOAN AMOUNT</small>
            <strong>Up to ₹15 lakh</strong>
            <small>Subject to assessment</small>
          </div>
          <div>
            <small>MINIMUM NET SALARY</small>
            <strong>₹30,000 / month</strong>
            <small>For salaried applicants</small>
          </div>
          <div>
            <small>APPLICATION</small>
            <strong>Online enquiry</strong>
            <small>Personal support, start to finish</small>
          </div>
          <div>
            <small>INTEREST RATE (INDICATIVE)</small>
            <strong>19.9% – 26% p.a.</strong>
            <small>Confirm exact rate in writing</small>
          </div>
        </div>
        <nav className="section-nav" aria-label="On this page">
          <div className="container-shell">
            <a href="#overview">Overview</a>
            <a href="#calculators">Loan calculators</a>
            <a href="#cibil">Low CIBIL loans</a>
            <a href="#eligibility">Eligibility & documents</a>
            <a href="#charges">Fees & charges</a>
            <a href="#comparison">Compare options</a>
            <a href="#faqs">FAQs</a>
          </div>
        </nav>
        <section className="page-section" id="overview">
          <div className="container-shell intro-grid">
            <div>
              <div className="eyebrow">A LOAN THAT STARTS WITH YOU</div>
              <h2>
                Big-city plans.
                <br />A little financial breathing room.
              </h2>
              <p className="intro-copy">
                A medical expense, a home that needs attention, or an important family milestone. A
                personal loan can help you manage planned expenses and unexpected needs without
                putting your everyday life on hold.
              </p>
              <p className="intro-copy mt-4">
                Vintage Finance serves salaried applicants in Delhi NCR. Start with your needs,
                understand an affordable repayment, and discuss the options available for your
                financial profile.
              </p>
              <div className="benefit-list">
                {benefits.map(([Icon, title, text]) => (
                  <div className="benefit" key={title}>
                    <div className="icon-box">
                      <Icon />
                    </div>
                    <div>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="table-note mt-6">
                Low credit scores and no credit history can be discussed. An enquiry is not a
                promise of approval.
              </p>
            </div>
            <EnquiryForm />
          </div>
        </section>
        <section className="page-section section-tint">
          <div className="container-shell">
            <SectionHeading
              eyebrow="FOR WHAT MATTERS TO YOU"
              title="One personal loan. Many possibilities."
              description="Choose an amount you need, not just the amount you can borrow."
              center
            />
            <div className="purpose-grid">
              {purposes.map(([Icon, title, text]) => (
                <article className="purpose" key={title}>
                  <div className="icon-box">
                    <Icon />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Calculators />
        <section className="page-section" id="cibil">
          <div className="container-shell">
            <SectionHeading
              eyebrow="MORE THAN A THREE-DIGIT NUMBER"
              title="Low CIBIL? Let's understand the full picture."
              description="Your current income, repayment commitments and credit history all matter. Here is what to consider before enquiring with a score of 500, 550, 600 or 650."
            />
            <div className="table-wrap">
              <table className="score-table">
                <thead>
                  <tr>
                    <th>CIBIL score</th>
                    <th>Where your profile stands</th>
                    <th>What we look at</th>
                  </tr>
                </thead>
                <tbody>
                  {scoreBands.map((row) => (
                    <tr key={row.band}>
                      <td>
                        <span className="score-band">{row.band}</span>
                      </td>
                      <td data-label="Where your profile stands">
                        <h3>{row.stand}</h3>
                      </td>
                      <td data-label="What we look at">
                        <p>{row.look}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="two-column mt-8">
              <div>
                <h3 className="text-base font-semibold mb-2">
                  First loan? No credit history is different.
                </h3>
                <p className="text-xs text-muted-foreground">
                  A missing credit history is not the same as a default. Your salary, employment and
                  banking behaviour can help the team assess your profile. Share accurate details
                  and ask which documents support your enquiry.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2">
                  Personal loans in Noida with low CIBIL
                </h3>
                <p className="text-xs text-muted-foreground">
                  Salaried Noida residents can enquire as part of Delhi NCR. The same income and
                  employment checks apply; a 500, 550, 600 or 650 score does not create a separate
                  guaranteed loan scheme.
                </p>
              </div>
            </div>
            <div className="notice mt-7">
              These bands describe how enquiries are reviewed, not approvals or rejections. Your
              written offer confirms the final amount, rate and charges.
            </div>
            <Button variant="ink" size="cta" className="mt-6" onClick={openApply}>
              Discuss my credit profile <ArrowUpRight />
            </Button>
          </div>
        </section>
        <section className="page-section section-tint">
          <div className="container-shell">
            <SectionHeading
              eyebrow="EVERY FINANCIAL STORY IS DIFFERENT"
              title="Past setbacks. A more informed next step."
              description="Be open about your history so the team can discuss realistic options, rather than an uncertain promise."
            />
            <div className="situations">
              {situations.map(([title, text]) => (
                <article className="situation" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="page-section" id="eligibility">
          <div className="container-shell two-column">
            <div>
              <SectionHeading
                eyebrow="BEFORE YOU APPLY"
                title="A quick eligibility check."
                description="The basic criteria published on our Delhi personal loan page."
              />
              <ul className="list-check">
                <li>
                  <Check />
                  <span>Full-time salaried employee</span>
                </li>
                <li>
                  <Check />
                  <span>
                    Net monthly income of <strong>₹30,000 or more</strong>
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    Above <strong>23</strong> and below <strong>60</strong> years of age
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    At least <strong>2 years</strong> in employment
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    At least <strong>6 months</strong> in the current organisation
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    A resident of <strong>Delhi NCR</strong>
                  </span>
                </li>
              </ul>
              <p className="notice">
                Meeting the basic criteria is only the starting point. Final eligibility depends on
                verification and credit assessment.
              </p>
              <Button as="a" href="#calculators" variant="outline" size="cta" className="mt-5">
                Estimate my eligibility <ArrowUpRight />
              </Button>
            </div>
            <div>
              <SectionHeading
                eyebrow="KEEP THESE HANDY"
                title="Less guesswork. Ready documents."
                description="The team will confirm the accepted formats and required statement periods."
              />
              {documents.map(([Icon, title, text]) => (
                <div className="doc-item" key={title}>
                  <Icon />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
              <p className="table-note">
                Never share banking passwords, PINs or OTPs. This page does not collect identity
                documents.
              </p>
            </div>
          </div>
        </section>
        <section className="page-section section-tint" id="charges">
          <div className="container-shell">
            <SectionHeading
              eyebrow="UNDERSTAND THE COST, NOT JUST THE EMI"
              title="Fees & charges. Out in the open."
              description="Know what is published, what needs confirmation, and what to ask for in your written loan offer."
            />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Charge</th>
                    <th scope="col">Published information</th>
                    <th scope="col">Before you accept</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Interest rate</th>
                    <td>Published range: 19.9%–26% per annum*</td>
                    <td>
                      Your personalised rate depends on your profile. Confirm the exact annual rate,
                      interest basis and APR in your written offer.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Processing fee</th>
                    <td>Published range: 1–3% of sanctioned amount*</td>
                    <td>
                      Confirm the exact percentage, rupee amount, deduction timing and taxes in
                      writing.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">GST / applicable taxes</th>
                    <td>Confirm on chargeable fees</td>
                    <td>
                      Ask for the tax breakdown and your net disbursal amount. Taxes are not
                      included in the EMI calculator.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Prepayment / foreclosure</th>
                    <td>Facility mentioned; exact charges not published</td>
                    <td>
                      Check any lock-in, applicable rules, conditions and charges in your agreement.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">EMI bounce / late-payment charges</th>
                    <td>Confirm in the written loan offer</td>
                    <td>Understand per-event charges, penal charges and when they apply.</td>
                  </tr>
                  <tr>
                    <th scope="row">Other charges / term changes</th>
                    <td>Product-specific; confirm with the team</td>
                    <td>Ask for a complete schedule of charges, not only the headline rate.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="table-note">
              *Published information is from Vintage Finance’s existing Delhi page. Product-specific
              terms must be confirmed. Unknown charges are not assumed to be zero.
            </p>
            <div className="two-column mt-7">
              <div>
                <h3 className="text-sm font-semibold mb-2">
                  Monthly flat ≠ annual reducing-balance
                </h3>
                <p className="text-xs text-muted-foreground">
                  A flat-rate loan charges interest on the initial principal. A reducing-balance
                  loan calculates interest on what remains outstanding. Do not compare the displayed
                  percentages directly.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-2">Ask for a complete written offer</h3>
                <p className="text-xs text-muted-foreground">
                  Check the lender identity, sanctioned amount, net disbursal, EMI, tenure, total
                  repayment, APR and all fees. Review the Key Facts Statement where applicable.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="comparison">
          <div className="container-shell">
            <SectionHeading
              eyebrow="MAKE A LIKE-FOR-LIKE COMPARISON"
              title="Choose the loan. Not just the headline."
              description="Compare what is actually offered to you. A bank, an app and a personal enquiry can have different processes and terms."
            />
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th scope="col">What to compare</th>
                    <th scope="col" className="table-feature">
                      Vintage Finance
                    </th>
                    <th scope="col">Banks</th>
                    <th scope="col">Loan apps / other lenders</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row[0]}>
                      <th scope="row">{row[0]}</th>
                      <td className="table-feature">{row[1]}</td>
                      <td>{row[2]}</td>
                      <td>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="table-note">
              This is a decision checklist, not a claim that every bank or loan app has the same
              rates or practices. Only compare offers for the same amount and tenure.
            </p>
          </div>
        </section>
        <section className="page-section section-green" id="process">
          <div className="container-shell">
            <SectionHeading
              eyebrow="YOUR NEXT STEPS"
              title="From enquiry to a considered decision."
              description="A clear journey, with room to understand your offer before committing."
            />
            <div className="steps">
              {steps.map(([number, title, text]) => (
                <div key={number}>
                  <div className="step-number">{number}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
            <div className="notice mt-8">
              Processing and disbursal depend on the completeness of your documents and assessment.
              Please confirm a realistic timeline with the team; instant approval is not guaranteed.
            </div>
          </div>
        </section>
        <section className="page-section">
          <div className="container-shell">
            <SectionHeading
              eyebrow="LOCAL NEEDS. PERSONAL SUPPORT."
              title="Here for Delhi NCR."
              description="Enquire from your city and confirm available options with the team. These are service-enquiry locations, not separate branch addresses."
            />
            <div className="location-grid">
              {["Delhi", "Noida", "Gurugram", "Ghaziabad", "Faridabad"].map((name) => (
                <button className="location" key={name} type="button" onClick={openApply}>
                  <MapPin />
                  {name}
                  <ArrowUpRight className="ml-auto" />
                </button>
              ))}
            </div>
            <p className="table-note">
              Registered address: Vintage Credit and Leasing Pvt Ltd, 7/30, West Patel Nagar, New
              Delhi – 110008.
            </p>
          </div>
        </section>
        <section className="page-section section-tint">
          <div className="container-shell">
            <SectionHeading
              eyebrow="FROM OUR EXISTING CUSTOMER STORIES"
              title="A few words from our customers."
              description="Selected excerpts published on Vintage Finance’s current website. Individual experiences do not guarantee your outcome."
            />
            <div className="reviews">
              {reviews.map(([name, date, quote]) => (
                <article className="review" key={name}>
                  <div className="text-success">
                    <MessageCircle size={22} />
                  </div>
                  <blockquote>“{quote}”</blockquote>
                  <strong>{name}</strong>
                  <small>{date} · Published customer excerpt</small>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="page-section" id="faqs">
          <div className="container-shell faq-grid">
            <div>
              <SectionHeading
                eyebrow="A LITTLE MORE CLARITY"
                title="Good questions. Clear answers."
                description="Everything else you might want to know before taking the next step."
              />
              <div className="benefit">
                <div className="icon-box">
                  <CircleHelp />
                </div>
                <div>
                  <h3>Prefer talking it through?</h3>
                  <p>Our team can help with your specific questions.</p>
                </div>
              </div>
              <Button
                as="a"
                href={whatsapp(
                  "Hello Vintage Finance, I have a question about a Delhi NCR personal loan."
                )}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="cta"
                className="mt-5"
              >
                <MessageCircle />
                Talk to our team <ArrowUpRight />
              </Button>
            </div>
            <div className="faq-list">
              {faqItems.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="final-band">
          <div className="container-shell final-inner">
            <div>
              <div className="eyebrow">YOUR PLANS DESERVE A CONVERSATION</div>
              <h2>Let's find your next step.</h2>
              <p>
                Discuss a personal loan up to ₹15 lakh. Understand the terms. Decide with
                confidence.
              </p>
              <CallbackForm />
            </div>
            <div className="final-actions">
              <Button variant="ink" size="cta" onClick={openApply}>
                Start my enquiry <ArrowUpRight />
              </Button>
              <Button as="a" href="tel:+919899055381" variant="outline" size="cta">
                <Phone />
                Call us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ApplyDialog open={applyOpen} onOpenChange={setApplyOpen} />
    </div>
  );
}
