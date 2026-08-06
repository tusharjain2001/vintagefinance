import React from "react";
import { Helmet } from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let personalLoanCard =
  "/images/section-2/newcards/group-15217.webp";

const LoanInGhaziabad = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>
          Personal Loan in Ghaziabad - Loan Providers Ghaziabad | Vintage
          Finance
        </title>
        <link rel="canonical" href="https://www.vintagefinance.in/personal-loan-ghaziabad.html"/>

        <meta
          name="description"
          content="Get personal loan in Ghaziabad. We offer instant personal loans in Ghaziabad with minimum documentation. Visit our website for more info."
        />
        <meta
          name="keywords"
          content=" loan provider in Ghaziabad, cheapest loan in Ghaziabad, instant personal loan in Ghaziabad, personal loan Ghaziabad"
        />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>
              Personal Loan
              <br /> in Ghaziabad
            </h1>
            <p className={styles.P}>
              We at Vintage Finance provide Instant Personal Loan in
              <br /> Ghaziabad. Applicants may apply hassle free Loan with
              <br /> minimum documentation with Vintage Finance
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img
              src={personalLoanCard}
              alt="home-loan"
              className={styles.Img}
            />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          A one-stop digital platform for
          <br /> our Ghaziabad applicants
        </h2>
        <div className={styles.Description}>
          <div>
            <p>
              If you need a Personal Loan in Noida/Ghaziabad, you must have a
              good credit history and adequate salary to get your personal loan
              sanctioned with a Bank or an NBFC in Noida. Other factors like
              years of employment, company you work for etc will determine the
              most important factors like amount, tenure and rate of interest.
              <br />
              If you are looking for best deals in Noida at the decent rate of
              interest then apply for personal loan online by filling the form
              or call us now. We at Vintage Finance provide Instant Personal
              Loan in Noida/Ghaziabad. Applicants may apply hassle free Loan
              with minimum documentation with Vintage Finance. Vintage Finance
              is RBI registered firm and a Non-Banking Finance Company (NBFC).
              We are engaged in offering comprehensive services of Personal
              loan, Auto Loan, Loan Against Property. We provide Personal Loan
              for Low CIBIL Score applicants & Cibil Defaulters as well at a
              decent interest rate.
            </p>
          </div>
          <div>
            <p>
              With the support of our incredible team, we are stand in the
              position that makes our Delhi customers completely satisfied and
              now Vintage Finance is spreading business over NCR regions as
              well. Customers from NOIDA can easily get the complete assistance
              with our friendly staffs for taking Personal Loan in
              Noida/Ghaziabad. To get Easy Personal Loan in Noida/Ghaziabad
              applicants just need to register their basic details on our
              website and our financial experts will help you with all possible
              ways to get decent interest rates loan in Noida location. We are
              here to provide a digital platform to our Noida applicants so that
              they can reach us for Personal Loan in Noida/Ghaziabad.
              <br />
              Don’t feel hesitate to call or contact us. Our Financial experts
              are here to serve you round the clock.
            </p>
          </div>
        </div>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default LoanInGhaziabad;
