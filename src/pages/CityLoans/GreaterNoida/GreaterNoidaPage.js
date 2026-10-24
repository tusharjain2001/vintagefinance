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

const canonical = "https://www.vintagefinance.in/personal-loan-low-cibil-defaulter-greater-noida.html";
const title = "Low CIBIL Personal Loan in Greater Noida up to ₹15 Lakh | Vintage Finance";
const description =
  "Personal loan for low CIBIL defaulters in Greater Noida. Salaried applicants can enquire about up to ₹15 lakh. Know the repayments, criteria and charges before you apply.";
const cities = ["Greater Noida", "Delhi", "Gurgaon", "Noida", "Ghaziabad", "Faridabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "low-cibil", label: "Low CIBIL loans" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: FileCheck2, title: "Start your search online", copy: "Submit your details through available application mode and know more about the next steps to follow." },
  { icon: Wallet, title: "Manage your repayment", copy: "Calculate your monthly EMI and know how much you can afford from your monthly budget." },
  { icon: ShieldCheck, title: "Know more about your offer", copy: "Learn about the rate of interest, the fees, the duration of repayment, and the terms." },
  { icon: MessageCircle, title: "Get assistance with your queries", copy: "Get in touch with our team if you are unsure of your eligibility or documentation." },
];
const purposes = [
  { icon: HeartPulse, title: "Medical expenses", copy: "Anticipate eligible expenses that include unforeseen healthcare costs." },
  { icon: HeartHandshake, title: "Family obligations", copy: "Handle the costs involved in your family obligations including marriage, celebration, and other events." },
  { icon: House, title: "Home repair", copy: "Take care of necessary home repairs, renovations, or improvement." },
  { icon: Layers3, title: "Other repayments", copy: "Debt consolidation should only be considered after making comparisons of the total costs and terms of repayment." },
];
const faqs = [
  { q: "What is the loan amount that I can ask for?", a: "You can inquire regarding a personal loan of up to ₹15 lakh. This depends upon the eligibility criteria that you meet." },
  { q: "What will be my monthly salary requirement?", a: "Your indicative minimum monthly net salary will be ₹30,000 for full-time salaried individuals." },
  { q: "Is it possible to apply with a low CIBIL score?", a: "Your financial standing can be questioned and discussed. Variables such as your income, employment situation, credit history, and capacity for repayment will be assessed, but it does not guarantee that you will be approved." },
  { q: "What are the interest rates and terms of repayment?", a: "Ensure you get the present rates and tenure for the Greater Noida loan from Vintage Finance in writing. Your written offer will clearly indicate these terms." },
  { q: "How long does it take to get my approval?", a: "The processing period varies depending on various factors but no definite timeline exists for approval or disbursement." },
  { q: "Are processing and foreclosure charges applicable?", a: "Processing and other charges are determined by the product terms applicable. Ensure that all such charges are stated in writing before accepting any offer." },
];

// Low CIBIL personal loan in Greater Noida page: the Gurgaon design and
// components with this page's own content.
export default function GreaterNoidaPage() {
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
                <span>Greater Noida</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN GREATER NOIDA
                </span>
                <h1 id="page-heading">
                  Personal Loan for Low CIBIL Defaulters
                  <br />
                  in <span>Greater Noida.</span>
                </h1>
                <p className="hero-description">
                  Financial flexibility for your future move.
                  <br />
                  Get to know about a personal loan of up to <strong>₹15 lakh</strong> for
                  significant expenses and financial surprises. Know what your selection is, how
                  the repayments will be made and what criteria you qualify for.
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
                <span className="eyebrow">FINANCIAL SOLUTIONS BEGIN WITH YOUR REQUIREMENT</span>
                <h2>In case of urgent expenses.</h2>
                <div className="body-copy">
                  <p>
                    Medical expenses, home repairs or festive gatherings can add to your monthly
                    expenses. Personal loans may help eligible individuals in managing these
                    expenses and repayments over a certain period of time.
                  </p>
                  <p>
                    Vintage Finance assists salaried applicants in Greater Noida in getting a
                    complete understanding about personal loan procedure. In case you wish to apply
                    for a Low CIBIL personal loan Greater Noida, get a detailed understanding about
                    your income, employment and other financial commitments.
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
                  A low score or absence of credit history can affect your eligibility. It is also
                  not a certainty that your loan request will be accepted after enquiring.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>Finances for various purposes.</h2>
                <p>
                  Determine your actual need before opting for an amount to borrow. The proper
                  amount is one that caters to your needs and capacity to repay the loan.
                </p>
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
                <h2>Calculate your monthly payment.</h2>
                <p>
                  Use the EMI calculator to determine how the amount borrowed, interest rate, and
                  loan period impact on your monthly payments.
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
                <span className="eyebrow">YOUR CREDIT HISTORY IS JUST ONE OF THE ASPECTS</span>
                <h2>
                  CIBIL Score too low?
                  <br />
                  Find out what is next for you.
                </h2>
                <p className="body-copy">
                  If you had some repayment problem in the past or have a poor credit history,
                  getting a loan could become tough. In case of a Personal loan for low CIBIL
                  Greater Noida, talk about your employment status, monthly income, current EMIs,
                  and expenses with the team. It will all depend on the lender and there is
                  nothing that can be promised.
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
                      <h4>Job stability and regular income</h4>
                      <p>Information on the amount of your income and employment gives a chance to check whether you can repay your debt.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Current liabilities</h4>
                      <p>The present debts and costs determine your affordability.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>Complete application</h4>
                      <p>Your documents and credit report will be checked together.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section" id="eligibility">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">BEFORE APPLYING</span>
                <h2>Prepare your details.</h2>
                <p>Look through the general loan conditions and prepare the documents.</p>
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
                    <li><Check /><span><strong>Employment:</strong> Full-time salaried applicant</span></li>
                    <li><Check /><span><strong>Monthly income:</strong> Net salary of ₹30,000 or more</span></li>
                    <li><Check /><span><strong>Age:</strong> 23–60 years</span></li>
                    <li><Check /><span><strong>Location:</strong> Greater Noida or eligible Delhi NCR areas</span></li>
                    <li><Check /><span><strong>Work experience:</strong> At least two years overall</span></li>
                    <li><Check /><span><strong>Current employer:</strong> At least six months</span></li>
                  </ul>
                  <p className="fine-note">
                    These are indicative criteria, not a promise of approval. Additional
                    requirements may apply following assessment.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents you may need
                  </h3>
                  <ul className="check-list">
                    <li><Check /><span>PAN card and valid identity proof</span></li>
                    <li><Check /><span>Proof of current residential address</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Bank statements for your salary account</span></li>
                    <li><Check /><span>Employment confirmation, if requested</span></li>
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
                <span className="eyebrow">BEFORE COMMITTING, GET THE FACTS RIGHT</span>
                <h2>Know the total cost of borrowing.</h2>
                <p className="body-copy">
                  A low EMI should not be the sole consideration while taking such an important
                  decision. It is also essential to verify interest rates, processing fees, GST
                  leviable, tenure of loan, foreclosure terms and total amount payable. One should
                  also ask for a detailed breakdown of all the applicable charges.
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
                <span className="eyebrow">ANSWERS TO YOUR MOST FREQUENT APPLICATION QUESTIONS</span>
                <h2>Before you make the next move.</h2>
                <p className="body-copy">
                  Are you planning to apply for a Personal loan for low CIBIL defaulter Greater
                  Noida? Here’s how these answers can help.
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
                <h2>Take the next step with confidence.</h2>
                <p>
                  Learn more about your options for Greater Noida loans and take your next steps
                  with greater clarity.
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
          area="Greater Noida"
        />
      </div>
    </div>
  );
}
