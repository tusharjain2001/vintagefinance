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

const canonical = "https://www.vintagefinance.in/loan-after-cibil-settlement.html";
const title = "Loan After CIBIL Settlement | Vintage Finance";
const description =
  "Settled a loan in CIBIL? Check your credit report, income and repayment capacity before applying again. Learn how to improve your chances of a loan after CIBIL settlement.";
const cities = ["Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "settled-accounts", label: "Settled accounts" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: FileCheck2, title: "Check your credit report", copy: "Check account status and maintain settlement records." },
  { icon: Wallet, title: "Check out your monthly budget", copy: "Compare your revenue against essential costs and existing repayments." },
  { icon: ShieldCheck, title: "Understanding the offer", copy: "Make sure you know the interest rate, charges, repayment period, and terms before taking up a loan." },
  { icon: MessageCircle, title: "Seeking help", copy: "Make yourself aware about how to apply for your profile." },
];
const purposes = [
  { icon: HeartPulse, title: "Medical requirements", copy: "Plan for eligible healthcare and related costs." },
  { icon: HeartHandshake, title: "Family events", copy: "Get ready for big holidays and family occasions." },
  { icon: House, title: "Home repairs", copy: "Add in any maintenance or upgrading costs." },
  { icon: Layers3, title: "Repayment management", copy: "Compare carefully the alternatives you have before selecting what to do with your current financial responsibilities." },
];
const faqs = [
  { q: "Can I apply after settling a loan?", a: "You may ask, but approval depends on the lender’s appraisal of your current financial and credit information." },
  { q: "How much can I borrow?", a: "Your eligibility depends on your income, obligations, documentation and appraisal by the lender." },
  { q: "Does a settled account impact approval?", a: "It could impact the decision. Lenders can see the settlement entry together with your existing repayment ability and other information." },
  { q: "What will be the interest rate and tenure?", a: "Ask the lender to write down the rate, repayment duration and other conditions and confirm them." },
  { q: "How long will it take for approval?", a: "The time it takes to process depends on verification and assessment. Confirm the anticipated measures directly with the lender." },
  { q: "Could there be further charges?", a: "Ask for written information of processing fees, taxes and any early repayment or foreclosure charges." },
];

// Loan after CIBIL settlement page: the Gurgaon design and components with
// this page's own content.
export default function CibilSettlementPage() {
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
                <span>After CIBIL settlement</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN DELHI NCR
                </span>
                <h1 id="page-heading">
                  Loan After
                  <br />
                  <span>CIBIL Settlement.</span>
                </h1>
                <p className="hero-description">
                  How to improve your chances of approval.
                  <br />
                  If you settle the debt ahead of time, it can affect your future loan applications.
                  Before you take any loan, make sure that you have checked your credit score,
                  income, and capacity to repay the debt.
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
                    Settled accounts can enquire
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
                <span className="eyebrow">A LOAN THAT STARTS WITH YOU</span>
                <h2>Before you take the next step, take stock.</h2>
                <div className="body-copy">
                  <p>
                    Your settled account can remain on your credit history. Check the state of it,
                    keep settlement records, and evaluate if a new EMI would match your budget.
                  </p>
                  <p>
                    Thinking about a Loan after CIBIL settlement? Check lender criteria before you
                    apply.
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
                  Settled account does not ensure acceptance. Subject to lender evaluation for
                  eligibility.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>Funding for changing priorities.</h2>
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
                <h2>See what repayment could look like.</h2>
                <p>
                  Calculate the EMI, interest rate &amp; duration. Add up everything you have to pay
                  back and leave some room for the necessities and the unexpected. Checking whether
                  the credit report shows the true standing of the account and whether there is
                  anything that needs to be disputed with the credit bureau may be another useful
                  point. Always keep records of the communication and settlement as these can help
                  answer the questions. Do not make more than one application as multiple
                  inquiries can affect your profile rating.
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
          <section className="section mint-section" id="settled-accounts">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">YOUR CREDIT HISTORY TELLS HALF THE STORY</span>
                <h2>
                  Have you repaid a previous loan?
                  <br />
                  Know your alternatives.
                </h2>
                <p className="body-copy">
                  Lenders may look at the settlement entry, income, commitments, and repayment
                  capacity for a loan after settled loan in CIBIL. Approval hinges on their
                  standards and verification.
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
                      <h4>Current income and employment situation</h4>
                      <p>Income and employment history: Having a steady income and a history of jobs shows that you can repay the loan.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Your existing financial commitments</h4>
                      <p>Existing EMIs and day-to-day expenses affect the amount you may comfortably borrow.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Updating Your Credit Profile</h4>
                      <p>Credit information, application data and settlement documents may be evaluated together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">PREPARE FOR THE APPLICATION</span>
                <h2>Get the details that you may require.</h2>
                <p>
                  Check the lender’s current eligibility conditions before making an inquiry and
                  have the required information on hand.
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
                    <li><Check /><span><strong>Employment:</strong> salaried applicants</span></li>
                    <li><Check /><span><strong>Monthly income:</strong> Vintage Finance lists a minimum net monthly salary of ₹30,000</span></li>
                    <li><Check /><span><strong>Location:</strong> Delhi/NCR, according to its general published criteria</span></li>
                    <li><Check /><span><strong>Other requirements:</strong> confirm age, employment history, and current-employer conditions with the lender</span></li>
                  </ul>
                  <p className="fine-note">
                    Criteria may vary by product. Confirm current requirements before applying. A
                    lender may ask for further evidence depending on the account and your current
                    circumstances. Be prepared to explain the settlement honestly and provide
                    accurate information.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents you may need
                  </h3>
                  <p className="body-copy" style={{ marginBottom: 20 }}>
                    Keep records ready to help verify your identity, income, and account history.
                  </p>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity proof and PAN</span></li>
                    <li><Check /><span>Current address proof</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Salary-account bank statements</span></li>
                    <li><Check /><span>Settlement confirmation or account records, if requested</span></li>
                  </ul>
                  <p className="fine-note">
                    Confirm the checklist and share information only through secure channels.
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
                <span className="eyebrow">READ TERMS BEFORE ACCEPTING</span>
                <h2>See the total cost.</h2>
                <p className="body-copy">
                  Put everything relating to interest rate, fees, taxes, tenure, payoff amount, and
                  prepayment terms in writing.
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
                <span className="eyebrow">FREQUENTLY ASKED QUESTIONS PRIOR TO APPLYING</span>
                <h2>A little more clarity.</h2>
                <p className="body-copy">
                  Thinking of a personal loan for CIBIL settlement cases? Consider these responses
                  before moving on.
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
                <h2>Go with a clearer mind.</h2>
                <p>
                  Tell Vintage Finance what your situation is and see what they need. Carefully
                  check the terms of any offer and only take out a loan if you can afford to repay
                  it.
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
