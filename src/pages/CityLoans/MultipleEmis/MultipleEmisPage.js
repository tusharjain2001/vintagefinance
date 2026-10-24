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

const canonical = "https://www.vintagefinance.in/personal-loan-multiple-existing-emis.html";
const title = "Personal Loan with Multiple Existing EMIs | Vintage Finance";
const description =
  "Already paying several EMIs? Check your income, current repayments and expenses before taking another loan. Explore a personal loan with multiple existing EMIs.";
const cities = ["Delhi", "Gurgaon", "Noida", "Greater Noida", "Ghaziabad", "Faridabad"];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "calculator", label: "Loan calculator" },
  { id: "existing-emis", label: "Existing EMIs" },
  { id: "eligibility", label: "Eligibility & documents" },
  { id: "fees", label: "Fees & charges" },
  { id: "faqs", label: "FAQs" },
];
const benefits = [
  { icon: FileCheck2, title: "Start with your current numbers", copy: "Gather information regarding your revenue, outstanding balances and monthly instalments." },
  { icon: Wallet, title: "Check the repayment ratio", copy: "Do a comparison of a likely new EMI with your income and other expenses." },
  { icon: ShieldCheck, title: "Carefully examine the terms", copy: "Look at the interest rate, fees, repayment period and terms." },
  { icon: MessageCircle, title: "Clarify application process", copy: "Questions about papers, verification and eligibility requirements." },
];
const purposes = [
  { icon: HeartPulse, title: "Health care expenses", copy: "Pay continuing costs while arranging for appropriate medical expenses." },
  { icon: HeartHandshake, title: "Family celebrations", copy: "Be prepared for spending on weddings and other big dates." },
  { icon: House, title: "Home maintenance", copy: "Think about funding needed repairs or practical enhancements." },
  { icon: Layers3, title: "Consolidate debts", copy: "Total cost can be compared before making the decision on whether or not consolidating repayments makes financial sense." },
];
const faqs = [
  { q: "Can I apply while repaying several loans?", a: "You can inquire about this, but the decision of acceptance depends on your income, obligations, and credit standing." },
  { q: "How much loan am I eligible to ask?", a: "The amount allowed will be dependent on your financial profile and the lender’s assessment." },
  { q: "Do my existing EMIs affect eligibility?", a: "Yes. Disclose your commitments accurately as current repayments can impact affordability." },
  { q: "How do you calculate the interest and term?", a: "Put the period of time, interest, and conditions on paper from the lender." },
  { q: "How long does processing take?", a: "Verification and assessment timelines vary. Ask the lender directly what the expected process is." },
  { q: "Could additional charges apply?", a: "Request written information on processing costs, taxes, and any charges for early repayment or foreclosure." },
];

// Personal loan with multiple existing EMIs page: the Gurgaon design and
// components with this page's own content.
export default function MultipleEmisPage() {
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
                <span>Multiple existing EMIs</span>
              </div>
              <div className="hero-copy">
                <span className="eyebrow">
                  <ShieldCheck />
                  FOR SALARIED PROFESSIONALS IN DELHI NCR
                </span>
                <h1 id="page-heading">
                  Personal Loan with
                  <br />
                  <span>Multiple Existing EMIs.</span>
                </h1>
                <p className="hero-description">
                  Explore your options.
                  <br />
                  Already making many installments? Check out your earnings, current payments,
                  crucial expenses, and borrowability potential before adding another liability.
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
                    Existing EMI holders can enquire
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
                <h2>Make room for a well-informed decision.</h2>
                <div className="body-copy">
                  <p>
                    Different loans have different justifications; however, total EMIs might
                    become an additional burden for your finances. To see how much revenue is
                    already committed, list each loan, its payment and remaining tenure. Then
                    determine whether another repayment would leave enough for daily and unforeseen
                    costs.
                  </p>
                  <p>
                    If you are planning for a Personal loan with multiple existing EMIs, check your
                    financial position and the lender’s conditions before applying.
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
                  There is no guarantee of approval for any current EMI. The loaner needs to decide
                  eligibility and capability of repayment.
                </p>
              </div>
              <LoanEnquiry cities={cities} />
            </div>
          </section>
          <section className="section mint-section" id="possibilities">
            <div className="page-container">
              <div className="section-heading">
                <span className="eyebrow">FOR WHAT MATTERS TO YOU</span>
                <h2>Funding for other priorities.</h2>
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
                <h2>See how a new EMI might fit.</h2>
                <p>
                  Use actual calculations and compare probable loan amounts, interest rates, and
                  repayment terms. Don’t only look at the monthly payment, look at the entire
                  amount you will have to pay back. Make a decision to borrow after setting aside
                  funds for household expenses.
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
          <section className="section mint-section" id="existing-emis">
            <div className="page-container cibil-layout">
              <div>
                <span className="eyebrow">THE PICTURE INCLUDES YOUR EXISTING COMMITMENTS</span>
                <h2>
                  Already dealing with several repayments?
                  <br />
                  See the whole picture first.
                </h2>
                <p className="body-copy">
                  If you are applying for a personal loan with existing loan obligations, the
                  lender may look at your income, the EMIs you are already paying and your credit
                  information and your ability to repay. Check all the facts and do not take it
                  for granted. Any decision is based on assessment and lender qualifying
                  conditions.
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
                      <h4>Wages and job security</h4>
                      <p>Information about your employment and regular income helps us determine your ability to repay.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">02</span>
                    <div>
                      <h4>Monthly financial commitments</h4>
                      <p>Existing loans and household overheads affect what you can afford.</p>
                    </div>
                  </div>
                  <div className="review-item">
                    <span className="step-number">03</span>
                    <div>
                      <h4>The complete application</h4>
                      <p>Documentation, earnings, credit worthiness and obligations can all be considered as a whole.</p>
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
                <h2>Organize your papers.</h2>
                <p>
                  Familiarize yourself with the eligibility criteria of the lender and arrange all
                  the required documents.
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
                    Basic eligibility details
                  </h3>
                  <ul className="check-list">
                    <li><Check /><span><strong>Employment:</strong> salaried applicants</span></li>
                    <li><Check /><span><strong>Monthly income:</strong> Vintage Finance lists a minimum net monthly salary of ₹30,000</span></li>
                    <li><Check /><span><strong>Location:</strong> Delhi/NCR, according to its published general criteria</span></li>
                    <li><Check /><span><strong>Other conditions:</strong> confirm age, work experience, and employer requirements with the lender</span></li>
                  </ul>
                  <p className="fine-note">
                    These details are indicative and may not represent every product-specific
                    condition. Confirm the latest requirements before applying.
                  </p>
                </div>
                <div className="detail-column">
                  <h3>
                    <Files />
                    Documents that may be requested
                  </h3>
                  <p className="body-copy" style={{ marginBottom: 20 }}>
                    Keep relevant records ready to support your application.
                  </p>
                  <ul className="check-list">
                    <li><Check /><span>Valid identity proof and PAN</span></li>
                    <li><Check /><span>Current address proof</span></li>
                    <li><Check /><span>Recent salary slips</span></li>
                    <li><Check /><span>Bank statements for the salary account</span></li>
                    <li><Check /><span>Existing loan details, if requested</span></li>
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
                <span className="eyebrow">TOTAL PAYBACK AMOUNT</span>
                <h2>
                  Not only focus on the EMI amount.
                  <br />
                  Take a closer look.
                </h2>
                <p className="body-copy">
                  Please note the following: interest rate, processing charges, taxes, tenure
                  period, total payback and early redemption policy. These points should be
                  written out to determine their cost against your budget.
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
                <span className="eyebrow">QUESTIONS TO ASK BEFORE YOU GO ON</span>
                <h2>A little more clarity.</h2>
                <p className="body-copy">
                  Considering a Personal loan with multiple existing EMIs? Here are some frequent
                  questions to get answered before applying.
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
                <h2>Move on, armed with the information.</h2>
                <p>
                  Contact Vintage Finance to explore your situation and the current application
                  requirements. Take a good look at the offer and see if you can manage to pay back
                  the installments while paying for all necessities. Think through everything
                  before choosing the option that you will go for.
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
