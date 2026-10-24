import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ChevronRight,
  ShieldCheck,
  FileCheck2,
  Wallet,
  MessageCircle,
  HeartPulse,
  House,
  HeartHandshake,
  Layers3,
  MapPin,
  Phone,
  Plus,
  BriefcaseBusiness,
  Files,
} from "lucide-react";
import { Button } from "../Gurgaon/ui";
import { LoanEnquiry, LoanApplication } from "../Gurgaon/LoanEnquiry";
import { LoanTools } from "../Gurgaon/LoanTools";
import skyline from "../Gurgaon/images/gurgaon-skyline.webp";
import familyPhoto from "../Gurgaon/images/gurgaon-life.webp";
import advisorPhoto from "../Gurgaon/images/gurgaon-advisor.webp";
import documentsPhoto from "../Gurgaon/images/gurgaon-documents.webp";
import startPhoto from "../Gurgaon/images/gurgaon-start.webp";
import "../Gurgaon/gurgaon.css";

const canonical = "https://www.vintagefinance.in/personal-loan-after-bank-rejection.html";
const title = "Personal Loan After Bank Rejection | Vintage Finance";
const description =
  "Turned down for a personal loan by a bank? Review the reasons, your credit record, income and EMIs before you apply again. Talk to Vintage Finance about your options.";
const cities = ["Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "after-rejection", label: "After a rejection" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: MessageCircle, title: "Let's have a talk", copy: "Ask what information could be helpful and why the earlier application might have been turned down." },
  { icon: Wallet, title: "Review a cheap EMI", copy: "Compare the amount of your monthly payments to your earnings and usual expenses at home. Money needed for necessary expenditures and unexpected expenses." },
  { icon: ShieldCheck, title: "First, get the terminology", copy: "Know all the terms such as interest rate, fees, payment plan etc. If you do not understand any term, ask for explanation." },
  { icon: FileCheck2, title: "Get help with the process", copy: "Eligibility, Documents and Inquiry Process. Save a copy of the information and conditions you receive." },
];
const purposes = [
  { icon: HeartPulse, title: "Medical care costs", copy: "Pay for qualifying health care expenses." },
  { icon: HeartHandshake, title: "Weddings and family events", copy: "Plan family occasions with payback in mind." },
  { icon: House, title: "Home repairs", copy: "Do necessary home repairs." },
  { icon: Layers3, title: "Debt consolidation", copy: "Compare prices before consolidating debt." },
];
const faqs = [
  { q: "Can I still apply if I’ve been rejected by a bank?", a: "You may ask, approval relies on eligibility and rigorous assessment. Begin by trying to figure out why the first rejection was made." },
  { q: "What money can I ask?", a: "It will depend on your income and your commitments and the assessment." },
  { q: "What if my credit score is bad?", a: "Please provide your credit profile and capability to pay back. It will be affected by your bad credit score. There is no guarantee of approval." },
  { q: "What will be the interest rate and tenure?", a: "Get the rate, term and other terms in writing." },
  { q: "What is the period of approval?", a: "Timing varies, no timeline is guaranteed." },
  { q: "Are there processing fees or foreclosure fees?", a: "Write for information about any fees and early repayment charges." },
];

// Personal loan after bank rejection page: the Gurgaon design and components
// with this page's own content.
export default function BankRejectionPage() {
  const [applicationOpen, setApplicationOpen] = useState(false);
  const [calculatorTab, setCalculatorTab] = useState("emi");
  const openApplication = () => setApplicationOpen(true);
  // Enquiry links keep their #enquiry href but open the application dialog.
  const openApplicationLink = (event) => {
    event.preventDefault();
    openApplication();
  };

  return (
    <div className="lp-gurgaon">
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={canonical} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap"
        />
      </Helmet>
      <div className="loan-page">
        <main>
          <section className="hero" aria-labelledby="page-heading">
            <img
              className="hero-photo"
              src={skyline}
              width={1920}
              height={1024}
              alt="Illustrative view of a modern glass office skyline and green surroundings in Delhi NCR"
              fetchpriority="high"
            />
            <div className="page-container hero-inner">
              <div className="breadcrumbs">
                <Link to="/">Home</Link>
                <ChevronRight />
                <span>Personal loans</span>
                <ChevronRight />
                <span>After bank rejection</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN DELHI NCR
                </span>
                <h1 id="page-heading">
                  Personal Loan
                  <br />
                  After <span>Bank Rejection.</span>
                </h1>
                <p className="hero-description">
                  If you’ve been turned down for a personal loan by a bank, there are other
                  possibilities. Review reasons and consider whether it is suitable to apply again
                  today. Don’t make multiple applications as repeated inquiry can impact lenders’
                  views of your credit profile.
                </p>
                <div className="hero-ctas">
                  <Button as="a" href="#enquiry" onClick={openApplicationLink} variant="ink">
                    Explore my loan options <ArrowUpRight />
                  </Button>
                  <Button as="a" href="#eligibility" variant="paper">
                    Check eligibility <ArrowRight />
                  </Button>
                </div>
                <div className="hero-assurances">
                  <span>
                    <Check />
                    Minimal documentation
                  </span>
                  <span>
                    <Check />
                    Rejected applicants can enquire
                  </span>
                  <span>
                    <Check />
                    Clear loan terms
                  </span>
                </div>
                <p className="fine-note">
                  Loan amount, rate and disbursal are subject to eligibility, documentation and
                  lender assessment.
                </p>
              </div>
            </div>
            <span className="photo-location">
              <MapPin />
              Delhi NCR · Skyline illustration
            </span>
          </section>
          <section className="facts-band" aria-label="Loan at a glance">
            <div className="page-container facts-grid">
              <div className="fact">
                <span className="fact-label">LOAN AMOUNT</span>
                <strong>Up to ₹15 lakh</strong>
                <small>Subject to assessment</small>
              </div>
              <div className="fact">
                <span className="fact-label">MINIMUM NET SALARY</span>
                <strong>₹30,000 / month</strong>
                <small>For salaried applicants</small>
              </div>
              <div className="fact">
                <span className="fact-label">REPAYMENT PERIOD</span>
                <strong>6–24 months</strong>
                <small>Plan around your budget</small>
              </div>
              <div className="fact">
                <span className="fact-label">YOUR LOAN TERMS</span>
                <strong>Made clear first</strong>
                <small>Confirm rates & fees in writing</small>
              </div>
            </div>
          </section>
          <nav className="section-nav" aria-label="On this page">
            <div className="page-container section-nav-inner">
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.label}
                </a>
              ))}
            </div>
          </nav>
          <section className="section" id="overview">
            <div className="page-container overview-grid">
              <div className="overview-copy">
                <span className="eyebrow">AFTER A BANK REJECTION</span>
                <h2>A financial journey begins with you.</h2>
                <div className="body-copy">
                  <p>
                    Having an application turned down can be disheartening, especially when you
                    can’t wait for an expense. Check your credit record, income, existing EMIs and
                    the information shared with the bank and reapply.
                  </p>
                  <p>
                    If your bank has rejected your application and you need a Personal loan after
                    bank rejection, examine your financial profile and possibilities before you
                    decide to borrow again.
                  </p>
                </div>
                <div className="benefit-list">
                  {benefits.map((item) => (
                    <div className="benefit" key={item.title}>
                      <span className="icon-tile">
                        <item.icon />
                      </span>
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="fine-note">
                  A prior application being rejected does not mean another lender will do the
                  same. Affordability and eligibility to be determined.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>One personal loan. Different requirements.</h2>
                <p>Find out what it will cost and how much you can pay back.</p>
              </div>
              <figure className="section-figure">
                <img
                  src={familyPhoto}
                  width={1536}
                  height={864}
                  alt="Illustration of an Indian family relaxing together in a modern apartment"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Illustrative photo</figcaption>
              </figure>
              <div className="purpose-grid">
                {purposes.map((item) => (
                  <article className="purpose-card" key={item.title}>
                    <span className="icon-tile">
                      <item.icon />
                    </span>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    <a className="text-link" href="#enquiry">
                      Discuss my options <ArrowUpRight />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </section>
          <section className="section" id="calculator">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">BUDGET VS. SCENARIO COMPARISON</span>
                <h2>A monthly payment you can get your arms around.</h2>
                <p>
                  Compute your EMI using amount, rate of interest, and payback period. Choose an
                  amount for payback that will help you manage your finances every month.
                </p>
              </div>
              <LoanTools
                onApply={openApplication}
                tab={calculatorTab}
                setTab={setCalculatorTab}
                cities={cities}
              />
            </div>
          </section>
          <section className="section mint-section" id="after-rejection">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">YOUR CREDIT HISTORY ISN’T THE BE ALL, END ALL</span>
                <h2>
                  Rejected by a bank?
                  <br />
                  Consider your next move.
                </h2>
                <p className="body-copy">
                  A new application is not just affected by an earlier decision, it is worth
                  understanding before starting. Be accurate in what you tell. Discuss your present
                  situation and ability to repay for a Personal loan for previously rejected
                  applicants. Approval is never a given.
                </p>
                <Button as="a" href="#enquiry" onClick={openApplicationLink} variant="ink" className="mt-6">
                  Discuss my profile <ArrowUpRight />
                </Button>
                <p className="fine-note mt-4">
                  Credit checks may apply. Approval, rates and terms depend on lender assessment.
                </p>
              </div>
              <div>
                <figure className="section-figure section-figure--tall">
                  <img
                    src={advisorPhoto}
                    width={1200}
                    height={912}
                    alt="Illustration of a loan advisor explaining details on a laptop to a salaried professional"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>Illustrative photo</figcaption>
                </figure>
                <div className="review-list">
                  <div className="review-item">
                    <span className="step-number">01</span>
                    <div>
                      <h4>Income and employment</h4>
                      <p>Regular earnings are used to measure repayment capacity.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Pre-existing obligations</h4>
                      <p>Affordability. Current EMIs and expenditures.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Your complete application</h4>
                      <p>Credit information and the preceding rejection may be important.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">PREPARE BEFORE YOU APPLY AGAIN</span>
                <h2>Start with the fundamentals.</h2>
                <p>Review eligibility and prepare requested documentation.</p>
              </div>
              <figure className="section-figure section-figure--band">
                <img
                  src={documentsPhoto}
                  width={1200}
                  height={912}
                  alt="Illustrative flat lay of a laptop, notebook and blank paperwork on a desk"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Illustrative photo</figcaption>
              </figure>
              <div className="eligibility-grid">
                <div className="detail-column">
                  <h3>
                    <BriefcaseBusiness />
                    Eligibility at a glance
                  </h3>
                  <p className="body-copy" style={{ marginBottom: 20 }}>
                    The following indicative criteria may help you prepare:
                  </p>
                  <ul className="check-list">
                    <li><Check /><span><strong>Employment:</strong> full-time salaried applicant</span></li>
                    <li><Check /><span><strong>Net monthly income:</strong> ₹30,000 or above</span></li>
                    <li><Check /><span><strong>Age:</strong> 23 to 60 years</span></li>
                    <li><Check /><span><strong>Location:</strong> eligible Delhi NCR areas</span></li>
                    <li><Check /><span><strong>Work experience:</strong> at least 2 years overall</span></li>
                    <li><Check /><span><strong>Current employer:</strong> at least 6 months</span></li>
                  </ul>
                  <p className="fine-note">
                    These criteria do not guarantee approval. Further information may be required.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents to keep ready
                  </h3>
                  <p className="body-copy" style={{ marginBottom: 20 }}>
                    Having documents organised can help make the enquiry clearer and reduce
                    avoidable delays.
                  </p>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity proof and PAN</span></li>
                    <li><Check /><span>Proof of current address</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Bank statements for the salary account</span></li>
                    <li><Check /><span>Employment confirmation, if requested</span></li>
                  </ul>
                  <p className="fine-note">
                    Confirm the checklist and share documents only through secure, verified
                    channels.
                  </p>
                  <a className="text-link" href="#enquiry">
                    Check my eligibility <ArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="section mint-section" id="fees">
            <div className="page-container fees-layout">
              <div>
                <span className="eyebrow">CLEAR COSTS PRIOR TO PURCHASE</span>
                <h2>Details are important.</h2>
                <p className="body-copy">
                  Check out the interest rate, fees, taxes, duration, total repayment and early
                  repayment terms. Get the terms in writing.
                </p>
                <a className="text-link" href="tel:+919899055381">
                  Speak to us about charges <ArrowUpRight />
                </a>
              </div>
              <div>
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th scope="col">PARTICULAR</th>
                      <th scope="col">PUBLISHED TERMS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Interest rate</td><td>19.9%–26% p.a.</td></tr>
                    <tr><td>Processing fee</td><td>4%–8% + GST</td></tr>
                    <tr><td>Repayment period</td><td>6–24 months</td></tr>
                    <tr><td>Foreclosure charge</td><td>4%</td></tr>
                  </tbody>
                </table>
                <p className="fine-note fee-disclaimer">
                  Your applicable rate, fee basis, taxes, late-payment charges and foreclosure
                  conditions must be confirmed in the written offer. The calculator excludes fees
                  and taxes.
                </p>
              </div>
            </div>
          </section>
          <section className="section" id="faqs">
            <div className="page-container faq-layout">
              <div>
                <span className="eyebrow">GREAT QUESTIONS. SIMPLE ANSWERS.</span>
                <h2>More self-confidence.</h2>
                <p className="body-copy">
                  Common questions following Personal loan after bank rejection.
                </p>
                <a className="text-link" href="tel:+919899055381">
                  <Phone />
                  +91 98990 55381
                </a>
              </div>
              <div className="faq-list">
                {faqs.map((item) => (
                  <details key={item.q}>
                    <summary>
                      {item.q}
                      <Plus />
                    </summary>
                    <p>{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
          <section className="final-cta">
            <div className="page-container final-inner">
              <figure className="final-figure">
                <img
                  src={startPhoto}
                  width={1536}
                  height={864}
                  alt="Illustration of a young professional using a laptop at home in the morning"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>Illustrative photo</figcaption>
              </figure>
              <div className="final-copy">
                <h2>Your next move might be a talk.</h2>
                <p>
                  Discuss your situation with Vintage Finance, and decide on what is needed. Ensure
                  that you have understood the conditions before doing anything. Borrow only when
                  you can afford to pay back.
                </p>
              </div>
              <Button as="a" href="#enquiry" onClick={openApplicationLink} variant="ink">
                Start my loan enquiry <ArrowUpRight />
              </Button>
            </div>
          </section>
        </main>
        <LoanApplication
          open={applicationOpen}
          onOpenChange={setApplicationOpen}
          cities={cities}
          area="Delhi NCR"
        />
      </div>
    </div>
  );
}
