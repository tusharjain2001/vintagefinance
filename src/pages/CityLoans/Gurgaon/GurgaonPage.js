import React, { useState } from "react";
import Helmet from "react-helmet";
import { Link, useLocation } from "react-router-dom";
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
import { Button } from "./ui";
import { LoanEnquiry, LoanApplication } from "./LoanEnquiry";
import { LoanTools } from "./LoanTools";
import skyline from "./images/gurgaon-skyline.webp";
import familyPhoto from "./images/gurgaon-life.webp";
import advisorPhoto from "./images/gurgaon-advisor.webp";
import documentsPhoto from "./images/gurgaon-documents.webp";
import startPhoto from "./images/gurgaon-start.webp";
import "./gurgaon.css";

const title = "Personal Loan in Gurgaon up to ₹15 Lakh | Vintage Finance";
const description =
  "Explore personal loans in Gurgaon for salaried professionals. Up to ₹15 lakh, minimum salary ₹30,000, EMI estimates, clear fees and personal support.";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "low-cibil", label: "Low CIBIL loans" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: FileCheck2, title: "A simple online start", copy: "Enquire from home and get guidance on the documents you need." },
  { icon: Wallet, title: "Repayments you can plan around", copy: "Explore an EMI and tenure that fit your monthly budget." },
  { icon: ShieldCheck, title: "Your terms, before you commit", copy: "Review the written offer, fees and repayment obligations first." },
  { icon: MessageCircle, title: "People you can speak to", copy: "Discuss your situation with the team, not just a calculator." },
];
const purposes = [
  { icon: HeartPulse, title: "Medical expenses", copy: "A little breathing room when health needs come first." },
  { icon: HeartHandshake, title: "Wedding & family", copy: "Support for the milestones that matter to your family." },
  { icon: House, title: "Home improvements", copy: "Make space for repairs, upgrades and a fresh start." },
  { icon: Layers3, title: "Debt consolidation", copy: "Explore bringing repayments into one manageable plan." },
];
const faqs = [
  { q: "How much can I borrow in Gurgaon?", a: "You can enquire about a personal loan up to ₹15 lakh. Your approved amount depends on your salary, existing repayments, documentation and the lender’s assessment." },
  { q: "What is the minimum salary required?", a: "The published minimum net monthly salary is ₹30,000 for full-time salaried applicants. Meeting this requirement does not guarantee approval." },
  { q: "Can I apply with a low CIBIL score?", a: "You can discuss your profile even if your credit score is low or you have no credit history. Employment, income and repayment capacity may also be considered. Credit checks may apply and approval is not guaranteed." },
  { q: "What are the interest rate and repayment period?", a: "Published personal-loan rates range from 19.9% to 26% per annum, with a repayment period of 6–24 months. Your final rate and tenure will be confirmed in your written offer." },
  { q: "How quickly will my loan be approved?", a: "An online enquiry can be started right away. Approval and disbursal timing depend on your eligibility, complete documents, verification and lender assessment. There is no guaranteed approval timeline." },
  { q: "Are there processing or early repayment charges?", a: "Published processing fees are 4%–8% of the loan amount plus GST, and the published foreclosure charge is 4%. Confirm the applicable charges, tax treatment and conditions in writing before accepting a loan." },
];

// Personal loan landing page from the low-CIBIL Gurgaon Lovable design. Also
// served on other URLs (see gurgaonDesignPages in App.js) until they get their
// own content.
export default function GurgaonPage() {
  const canonical = `https://www.vintagefinance.in${useLocation().pathname}`;
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
              alt="Illustrative view of Gurgaon's modern glass office skyline and green surroundings"
              fetchpriority="high"
            />
            <div className="page-container hero-inner">
              <div className="breadcrumbs">
                <Link to="/">Home</Link>
                <ChevronRight />
                <span>Personal loans</span>
                <ChevronRight />
                <span>Gurgaon</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN GURGAON
                </span>
                <h1 id="page-heading">
                  Personal Loan
                  <br />
                  in <span>Gurgaon.</span>
                </h1>
                <p className="hero-description">
                  For the city that never stops.
                  <br />
                  Explore a personal loan up to <strong>₹15 lakh</strong> for life's plans and
                  unexpected moments—with clear terms and personal support.
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
              Gurgaon · Skyline illustration
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
                <h2>
                  Big-city plans.
                  <br />A little financial breathing room.
                </h2>
                <div className="body-copy">
                  <p>
                    A medical expense, a home that needs attention, or an important family
                    milestone. A personal loan can help you manage planned expenses and unexpected
                    needs without putting everyday life on hold.
                  </p>
                  <p>
                    Vintage Finance serves salaried applicants in Gurgaon and across Delhi NCR.
                    Start with your needs, understand an affordable repayment, and discuss the
                    options available for your financial profile.
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
                  Low credit scores and no credit history can be discussed. An enquiry is not a
                  promise of approval.
                </p>
              </div>
              <LoanEnquiry />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>One personal loan. Many possibilities.</h2>
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
                <h2>A monthly payment you can picture.</h2>
                <p>
                  Check your eligibility and explore your loan amount, repayment period and
                  estimated EMI.
                </p>
              </div>
              <LoanTools onApply={openApplication} tab={calculatorTab} setTab={setCalculatorTab} />
            </div>
          </section>
          <section className="section mint-section" id="low-cibil">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">YOUR PROFILE IS MORE THAN A NUMBER</span>
                <h2>
                  Low CIBIL score?
                  <br />
                  Let’s talk about your options.
                </h2>
                <p className="body-copy">
                  A past setback shouldn't stop a conversation. If your credit score is low or
                  you’re new to credit, discuss your income, employment and repayment capacity with
                  our team.
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
                      <h4>Your income & employment</h4>
                      <p>A regular salary and stable employment help establish repayment capacity.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Your existing commitments</h4>
                      <p>Current EMIs and expenses matter when assessing an affordable loan.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Your complete financial picture</h4>
                      <p>Your documents and credit profile are considered together—not as a guarantee.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">A LITTLE PREPARATION GOES A LONG WAY</span>
                <h2>Know where you stand.</h2>
                <p>Check the basics and keep your documents ready for the next step.</p>
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
                    <li><Check /><span><strong>Employment:</strong> full-time salaried employee</span></li>
                    <li><Check /><span><strong>Net monthly income:</strong> ₹30,000 or above</span></li>
                    <li><Check /><span><strong>Age:</strong> 23 to 60 years</span></li>
                    <li><Check /><span><strong>Location:</strong> resident of Gurgaon / Delhi NCR</span></li>
                    <li><Check /><span><strong>Work experience:</strong> at least 2 years in total</span></li>
                    <li><Check /><span><strong>Current employer:</strong> at least 6 months</span></li>
                  </ul>
                  <p className="fine-note">
                    Meeting these criteria does not guarantee approval. Additional lender
                    requirements may apply.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents to keep handy
                  </h3>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity proof and PAN</span></li>
                    <li><Check /><span>Current address proof</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Salary-account bank statements</span></li>
                    <li><Check /><span>Employment proof, if requested</span></li>
                  </ul>
                  <p className="fine-note">
                    Indicative checklist only; the team will confirm the documents and period
                    required. Share sensitive documents only through a verified, secure channel.
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
                <span className="eyebrow">NO GUESSWORK. CLEARER DECISIONS.</span>
                <h2>
                  The numbers.
                  <br />
                  Up front.
                </h2>
                <p className="body-copy">
                  Look beyond the monthly EMI. Understand the interest, fees and total repayment
                  before choosing your loan.
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
                  Published terms from Vintage Finance’s Gurgaon page. Your applicable rate, fee
                  basis, taxes, late-payment charges and foreclosure conditions must be confirmed in
                  the written offer. The calculator excludes fees and taxes.
                </p>
              </div>
            </div>
          </section>
          <section className="section" id="faqs">
            <div className="page-container faq-layout">
              <div>
                <span className="eyebrow">GOOD QUESTIONS. STRAIGHT ANSWERS.</span>
                <h2>A little more clarity.</h2>
                <p className="body-copy">
                  Still have a question about a personal loan in Gurgaon? We’re here to talk.
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
                <h2>Your plans deserve a conversation.</h2>
                <p>Let’s explore the right next step for you in Gurgaon.</p>
              </div>
              <Button as="a" href="#enquiry" onClick={openApplicationLink} variant="ink">
                Start my loan enquiry <ArrowUpRight />
              </Button>
            </div>
          </section>
        </main>
        <LoanApplication open={applicationOpen} onOpenChange={setApplicationOpen} />
      </div>
    </div>
  );
}
