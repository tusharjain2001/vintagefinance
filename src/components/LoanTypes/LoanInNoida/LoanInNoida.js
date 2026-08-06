import React from "react";
import Helmet from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let personalLoanCard =
  "/images/section-2/newcards/group-15217.webp";

const LoanInNoida = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>
          Personal Loan in Noida From Private Financer - Vintage Finance
        </title>
        <link
          rel="canonical"
          href="https://www.vintagefinance.in/personal-loan-noida.html"
        />
        <meta
          name="description"
          content="Get a personal loan in Noida from private financers. We are reputed private money lenders in Noida. Visit the website to apply online."
        />
        <meta
          name="keywords"
          content="Personal loan in Noida, Personal loan from private finance in noida, Private loan in noida"
        />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>
              Personal Loan
              <br /> in Noida
            </h1>
            <p className={styles.P}>
              We at Vintage Finance provide Instant Personal Loan <br /> Noida.
              Applicants may apply hassle free Loan with
              <br /> minimum documentation with Vintage Finance
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img
              src={personalLoanCard}
              alt="Personal loan in Noida"
              className={styles.Img}
            />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>Avail Personal Loan in Noida From Private Financers</h2>
        <div className={styles.Description}>
          <div>
            <p>
              If you need a <b>Personal Loan in Noida</b>, you must have a good
              credit history and an adequate salary to get your Loan sanctioned
              with a Bank or an NBFC in Noida. Other factors like years of
              employment, the company you work for, etc., will determine the
              most important factors like amount, tenure and interest rate.
              <br />
              <br />
              If you are looking for the best{" "}
              <b>personal loan deals in Noida</b> at a decent rate of interest
              then apply for a personal loan online by filling out the form or
              calling us now. We at Vintage Finance provide{" "}
              <b>Instant Personal loans in Noida</b>. Applicants may apply for a
              hassle-free Loan with minimum documentation with Vintage Finance.
              Vintage Finance is a registered RBI firm and a Non-Banking Finance
              Company (NBFC).
              <br />
              <br />
              We offer comprehensive Personal Loans, Auto Loans, and Loan
              Against Property services. We also provide Personal loans for Low
              CIBIL Score applicants & Cibil Defaulters at a decent interest
              rate.
            </p>
          </div>
          <div>
            <p>
              With the support of our incredible team, we stand in the position
              that makes our customers completely satisfied, and now Vintage
              Finance is spreading business over NCR regions as well. Customers
              from Noida can easily get complete assistance from our friendly
              staff for taking <b>Personal loans in Noida</b>. To get Easy
              Personal Loan in Noida, applicants must register their basic
              details on our website. Our financial experts will help you with
              all possible ways to get decent interest rates loans in the Noida
              location. We are here to provide a digital platform to our Noida
              applicants so that they can reach us for Personal loans in Noida.
              <br />
              <br />
              Please don’t feel hesitate to call or contact us. Our Financial
              experts are here to serve you round the clock.
            </p>
          </div>
        </div>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default LoanInNoida;
