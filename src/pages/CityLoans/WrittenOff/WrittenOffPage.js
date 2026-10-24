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

const canonical = "https://www.vintagefinance.in/loan-with-written-off-account.html";
const title = "Loan with Written-off Account | Vintage Finance";
const description =
  "Have a written-off account? Check your credit report, income, dues and repayment capacity before you apply. Talk to Vintage Finance about a loan with a written-off account.";
const cities = ["Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "credit-history", label: "Written-off accounts" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: MessageCircle, title: "Start with a discussion", copy: "Provide the correct data of the account and your current situation." },
  { icon: Wallet, title: "Think of an affordable EMI", copy: "Compare feasible payments with your income, family expenses and responsibilities." },
  { icon: ShieldCheck, title: "Verify all requirements", copy: "Read the terms on paper, for instance, interest rate, charges, repayments, and others before you accept the offer." },
  { icon: FileCheck2, title: "Ask questions when needed", copy: "Clarify the paperwork, application steps and any conditions that are applicable for your profile." },
];
const purposes = [
  { icon: HeartPulse, title: "Health Care Expenses", copy: "Bills for qualified health care." },
  { icon: HeartHandshake, title: "Weddings & family events", copy: "Be ready for big family celebrations." },
  { icon: House, title: "Repairs at home", copy: "Supervise needed maintenance and renovations." },
  { icon: Layers3, title: "Debt consolidation loans", copy: "Compare costs prior to consolidating repayments." },
];
const faqs = [
  { q: "Can I apply if my account was written off?", a: "You can ask, but it’s up to the lender. Know your current credit information and get acquainted with your account status." },
  { q: "How much can I borrow?", a: "The amount depends on income, obligations, documentation and assessment." },
  { q: "Can loan be given to written off defaulters?", a: "There is no assurance for a loan for written-off defaulters. They may check your current ability to repay and your account details." },
  { q: "What would be the interest rate and tenure?", a: "Get your applicable rate, tenure, and terms in writing." },
  { q: "What will be the decision period?", a: "The processing period will be based on verification and assessment. No timeframe is guaranteed." },
  { q: "Are there any processing or foreclosure fees?", a: "Request written details of all applicable fees and taxes, and the circumstances for early repayment." },
];

// Loan with written-off account page: the Gurgaon design and components with
// this page's own content.
export default function WrittenOffPage() {
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
                <span>Written-off account</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN DELHI NCR
                </span>
                <h1 id="page-heading">
                  Loan with
                  <br />
                  <span>Written-off Account.</span>
                </h1>
                <p className="hero-description">
                  A written off account can make borrowing more difficult, but it doesn’t mean you
                  don’t need to know what your choices are. Before applying again, you need to
                  check your credit report, current income, outstanding dues and payback capacity.
                  Think about whether you can cope with another instalment.
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
                    Written-off profiles can enquire
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
                <span className="eyebrow">A FINANCIAL JOURNEY THAT STARTS WITH YOU</span>
                <h2>A clearer picture of your situation.</h2>
                <div className="body-copy">
                  <p>
                    If an account has been written off it may indicate previous repayment problems.
                    Understanding your present position will help you prepare to talk with a lender
                    and avoid applying for a loan without knowing what information could be needed.
                  </p>
                  <p>
                    If there is a Loan with written-off account, and you want to apply for a Loan,
                    tell us about your current financial circumstances and ask what the qualifying
                    requirements are before you apply.
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
                  An inquiry is not a guarantee of approval and a written-off account can impact
                  your eligibility. Don’t take out more than you can reasonably pay back.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>One loan. Different needs.</h2>
                <p>Choose an amount you need, not just the amount you can borrow.</p>
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
                <span className="eyebrow">PLAN BEFORE YOU BORROW</span>
                <h2>A monthly payment that makes sense.</h2>
                <p>
                  Calculate your EMI on the basis of the suggested amount, rate of interest, and
                  period of repayment. Consider all the cases in front of your budget requirements.
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
          <section className="section mint-section" id="credit-history">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">YOUR CREDIT HISTORY IS PART OF THE STORY</span>
                <h2>
                  Account written off?
                  <br />
                  Think of your next move.
                </h2>
                <p className="body-copy">
                  A written off entry could be relevant when a lender examines an application.
                  Discuss the status of accounts, current income and payback capacity for a loan
                  for written-off defaulters. Assessment is the basis for approval and no outcome
                  can be taken for granted in advance.
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
                      <h4>Employment and income</h4>
                      <p>Regular income helps prove you can pay it back.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Existing commitments</h4>
                      <p>Current EMIs and household expenses also play a part in affordability.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Account and credit information</h4>
                      <p>You may get a combined check of your credit report and account details.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">BEFORE MAKING AN INQUIRY, PREPARE</span>
                <h2>Go to the beginning.</h2>
                <p>
                  Check the indicated requirements and arrange for any documents you might be
                  requested to give.
                </p>
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
                  <ul className="check-list">
                    <li><Check /><span><strong>Employment:</strong> full-time salaried applicant</span></li>
                    <li><Check /><span><strong>Net monthly income:</strong> ₹30,000 or above</span></li>
                    <li><Check /><span><strong>Age:</strong> 23 to 60 years</span></li>
                    <li><Check /><span><strong>Location:</strong> eligible Delhi NCR areas</span></li>
                    <li><Check /><span><strong>Work experience:</strong> at least 2 years overall</span></li>
                    <li><Check /><span><strong>Current employer:</strong> at least 6 months</span></li>
                  </ul>
                  <p className="fine-note">
                    These are indicative criteria, not a promise of approval. Additional conditions
                    or documents may apply after assessment.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents to keep ready
                  </h3>
                  <p className="body-copy" style={{ marginBottom: 20 }}>
                    Prepare relevant records to help explain your financial position and
                    application details.
                  </p>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity proof and PAN</span></li>
                    <li><Check /><span>Proof of current address</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Bank statements for the salary account</span></li>
                    <li><Check /><span>Employment confirmation, if requested</span></li>
                  </ul>
                  <p className="fine-note">
                    Confirm the final checklist with the lender. Share documents only through
                    secure, verified channels, and do not send financial information to unverified
                    contacts.
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
                <span className="eyebrow">KNOW THE COST BEFORE YOU SIGN ON THE DOTS</span>
                <h2>The details matter.</h2>
                <p className="body-copy">
                  Take into account the interest rate, processing fees, taxes, repayment period,
                  and prepayment provisions. Be sure to write down all of these and then make sure
                  that the repayment fits into your budget.
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
                <span className="eyebrow">GOOD QUESTIONS. EASY ANSWERS.</span>
                <h2>A bit more clarity.</h2>
                <p className="body-copy">
                  Thinking about a Loan with written-off account? These responses cover frequently
                  asked questions.
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
                <h2>A chat could be your next move.</h2>
                <p>
                  Contact Vintage Finance to explore your circumstances and what is required. Take
                  time to consider the offer and only borrow if the repayments you need to make fit
                  into your budget and your vital needs.
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
