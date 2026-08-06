import React, { lazy, Suspense } from "react";
import Helmet from "react-helmet";
import CibilScore from "../../components/CibilScore/CibilScore";
import PersonalLoan from "../../components/PersonalLoan/PersonalLoan";

// Below-the-fold sections load as separate chunks to keep the initial
// JavaScript bundle small (mobile performance).
const AboutUs = lazy(() => import("../../components/AboutUs/AboutUs"));
const ApplyLoanCard = lazy(() =>
  import("../../components/ApplyLoanCard/ApplyLoanCard")
);
const Faq = lazy(() => import("../../components/Faq/Faq"));
const Numbers = lazy(() => import("../../components/Numbers/Numbers"));
const PrivilegeLoan = lazy(() =>
  import("../../components/PrivilegeLoan/PrivilegeLoan")
);
const Rating = lazy(() => import("../../components/Rating/Rating"));
const StepsForInstantLoan = lazy(() =>
  import("../../components/StepsForInstantLoan/StepsForInstantLoan")
);

const Home = ({ mobile, open, setToast }) => {
  //let fallback = "Loading...";
  return (
    <>
      <Helmet>
        <title>
          Get Instant Approval Loan in Delhi | Loan Provider in New
          Delhi,Gurgaon ,Noida | Online Apply for Personal Loan | Payday Loan
          delhi
        </title>
        <meta
          name="description"
          content="New Delhi Loan Provider:  Get Instant Approval Loan in New Delhi NCR. Online Apply for Personal Loan and payday loan./"
        />
        <meta
          name="keywords"
          content="Get Instant Approval Loan in Delhi, Loan Provider in New Delhi NCR, new delhi loan provider, personal loan in delhi,Online Apply for Personal Loan. Loan Service Providers in Delhi, Quick loans in Delhi, Cash loans in Delhi. New Delhi personal loan, nbfc in Delhi, Low Cibil Score Personal Loan Delhi."
        />
        <link rel="canonical" href="https://www.vintagefinance.in/"/>
      </Helmet>
      <div>
        <CibilScore setToast={setToast} />

        <PersonalLoan open={open} />
        <Suspense fallback={null}>
          <PrivilegeLoan open={open} />
          <StepsForInstantLoan open={open} />
          <Numbers open={open} />
          <Rating mobile={mobile} open={open} />
          <AboutUs open={open} />
          {/* <PressRelease /> */}
          <ApplyLoanCard open={open} />
          <Faq mt={{ marginTop: 60 }} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
