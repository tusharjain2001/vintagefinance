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

const canonical = "https://www.vintagefinance.in/personal-loan-low-cibil-defaulter-faridabad.html";
const title = "Low CIBIL Personal Loan in Faridabad up to ₹15 Lakh | Vintage Finance";
const description =
  "Personal loan for low CIBIL defaulters in Faridabad. Salaried applicants can enquire about up to ₹15 lakh. Know the requirements, EMI and charges before you apply.";
const cities = ["Faridabad", "Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "low-cibil", label: "Low CIBIL loans" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: FileCheck2, title: "Begin with an online enquiry", copy: "Talk to the team online and know what documentation is required." },
  { icon: Wallet, title: "Plan a proper EMI", copy: "Time and cost involved in order to pay back your loan must be analyzed considering your home budget." },
  { icon: ShieldCheck, title: "Take into account the offer conditions", copy: "Before accepting the offer, one must look at the conditions of the offer, cost, and payment." },
  { icon: MessageCircle, title: "Take guidance wherever required", copy: "Discuss the process with the team and tell them about your finances." },
];
const purposes = [
  { icon: HeartPulse, title: "Medical expenses", copy: "Consider the cost associated with healthcare and medical expenses eligible for loan purposes." },
  { icon: HeartHandshake, title: "Weddings and family functions", copy: "Consider costs related to special occasions within the family." },
  { icon: House, title: "Maintenance of house", copy: "Costs required for the improvement and maintenance of the house." },
  { icon: Layers3, title: "Debt Consolidation", copy: "Make sure you have knowledge of the complete cost before consolidating the debts." },
];
const faqs = [
  { q: "How much can I apply for?", a: "You can inquire about up to ₹15 lakh. The offer will be subject to income, repayments, documents, and assessment." },
  { q: "What should my salary be?", a: "Indicative minimum net salary should be ₹30,000 for salaried borrowers. But there are other conditions too." },
  { q: "Can I inquire with a low CIBIL rating?", a: "Yes, but your case might be considered on the basis of income and repayment capability but no guarantee of approval." },
  { q: "What will be my rate and tenure?", a: "Check out the current rate and tenure for Faridabad with Vintage Finance." },
  { q: "How much time will be taken for approval?", a: "Not known since it is based on the documentation, evaluation, and verification process." },
  { q: "Will there be any charge of processing or prepayment?", a: "Please ask for the written information about any fees, taxes, or prepayment charges." },
];

// Low CIBIL personal loan in Faridabad page: the Gurgaon design and components
// with this page's own content.
export default function FaridabadPage() {
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
                <span>Faridabad</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN FARIDABAD
                </span>
                <h1 id="page-heading">
                  Personal Loan for Low CIBIL Defaulters
                  <br />
                  in <span>Faridabad.</span>
                </h1>
                <p className="hero-description">
                  Support for Plans and surprises.
                  <br />
                  Make use of a personal loan of <strong>₹15 lakh</strong> for all your plans and
                  any unexpected occurrences through comprehensive guidance and information. Know
                  the requirements first before considering if you should avail yourself of the
                  loan based on your personal situation.
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
                    Low-CIBIL profiles welcome
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
                <span className="eyebrow">THE RIGHT WAY TO START YOUR FINANCES</span>
                <h2>
                  Daily needs.
                  <br />
                  Need for some flexibility.
                </h2>
                <div className="body-copy">
                  <p>
                    Medical payments, repairing work, or family functions can cause extra spending.
                    Personal loan can be useful to pay expenses as per your situation.
                  </p>
                  <p>
                    Vintage Finance provides personal loan facility for salaried individuals
                    residing in Faridabad and Delhi NCR. In case you wish to apply for a Low CIBIL
                    personal loan Faridabad, discuss with the team about your earnings, employment
                    status, and existing commitments.
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
                  Your low credit score or lack of credit history can affect the application.
                  Enquiry itself cannot guarantee loan approval.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>Loan requirements to meet various needs of life.</h2>
                <p>Identify the cost involved and consider an amount which is affordable enough.</p>
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
                <h2>Estimation of your repayment each month.</h2>
                <p>
                  Determine your EMI taking into account the loan amount, rate of interest, and
                  period of time you will take to repay.
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
          <section className="section mint-section" id="low-cibil">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">YOUR CREDIT SCORE IS AN ESSENTIAL PART OF THE JUDGEMENT</span>
                <h2>
                  Have a low CIBIL score?
                  <br />
                  Talk about your choices.
                </h2>
                <p className="body-copy">
                  Past repayments could be a hindrance in getting a loan. In case of a Personal
                  loan for low CIBIL Faridabad, understand your salary, job, EMIs and cost
                  incurred. It all depends on eligibility.
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
                      <h4>Salary and employment</h4>
                      <p>Salary and employment confirm your repayment capacity.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Financial obligations</h4>
                      <p>Installment payments and cost incurred affect the affordability.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Document and credit profile</h4>
                      <p>Consider your documents and credit profile altogether.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">BE READY TO ASK THE QUESTION</span>
                <h2>Get ready with the necessary things.</h2>
                <p>Go through the requirements and get prepared with the documents before applying.</p>
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
                    <li><Check /><span><strong>Location:</strong> Faridabad / eligible Delhi NCR areas</span></li>
                    <li><Check /><span><strong>Work experience:</strong> at least 2 years overall</span></li>
                    <li><Check /><span><strong>Current employer:</strong> at least 6 months</span></li>
                  </ul>
                  <p className="fine-note">
                    These criteria do not guarantee approval. Additional conditions may apply, and
                    the lender may request further information to assess your application.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents to prepare
                  </h3>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity document and PAN</span></li>
                    <li><Check /><span>Proof of current residence</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Bank statements for the salary account</span></li>
                    <li><Check /><span>Employment confirmation, if requested</span></li>
                  </ul>
                  <p className="fine-note">
                    Confirm the final checklist during application. Share documents only through
                    secure, verified channels, and avoid sending financial details through
                    unverified messages.
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
                <span className="eyebrow">KNOW THE EXPENSES BEFORE YOU SIGN ON THE DOTTED LINE</span>
                <h2>The big picture.</h2>
                <p className="body-copy">
                  Do more than look at the EMI. Get all the information regarding the rate,
                  charges, GST, period, total payable amount, and prepayment. Get everything in
                  writing and make comparisons according to your budget.
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
                <span className="eyebrow">QUESTIONS TO ASK</span>
                <h2>Some things that will make applying simpler.</h2>
                <p className="body-copy">
                  Are you thinking of a Personal loan for low CIBIL defaulter Faridabad? Here are
                  some answers to some common questions.
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
                <h2>Your plans deserve a discussion.</h2>
                <p>
                  Contact Vintage Finance to discuss the requirements and repayment conditions.
                  Analyze the available options in Faridabad before proceeding. Borrow only after
                  you have weighed all your basic costs and capacity to pay each installment.
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
          area="Faridabad"
        />
      </div>
    </div>
  );
}
