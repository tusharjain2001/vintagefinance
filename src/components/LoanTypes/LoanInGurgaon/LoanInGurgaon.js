import React from "react";
import Helmet from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let personalLoanCard =
  "/images/section-2/newcards/group-15217.webp";

const LoanInGurgaon = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>
          Personal Loan in Gurgaon - Loan Agency in Gurgaon | vintage Finance
        </title>

        <link rel="canonical" href="https://www.vintagefinance.in/personal-loan-gurgaon.html"/>

        <meta
          name="description"
          content="Get instant personal loan in Gurgaon from private money lenders in Gurgaon. We are a reputed loan agency of Gurgaon. Visit our website now to apply online"
        />
        <meta
          name="keywords"
          content="loan provider in gurgaon, cheapest loan in gurgaon, instant personal loan in gurgaon."
        />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>
              Personal Loan
              <br /> in Gurgaon
            </h1>
            <p className={styles.P}>
              Require Instant Personal Loan in Gurgaon? Your wait is
              <br /> over to get hassle free Loan with minimum
              <br /> documentation with Vintage Finance.
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img
              src={personalLoanCard}
              alt="Personal loan in Gurgaon"
              className={styles.Img}
            />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          Seamless personal loan services
          <br /> for applicants from Gurgaon
        </h2>
        <div className={styles.Description}>
          <div>
            <p>
              Require Instant Personal Loan in Gurgaon? Your wait is over to get
              hassle free Loan with minimum documentation with Vintage Finance.
              Vintage Finance is RBI registered firm and a Non-Banking Finance
              Company (NBFC). We are engaged in offering comprehensive services
              of Personal loan, Auto Loan, Loan Against Property. We provide
              Personal Loan in Gurgaon for Low CIBIL Score applicants & Cibil
              Defaulters as well at a decent interest rate.
              <br />
              Don’t feel hesitate to call or contact us. Our Financial experts
              are here to serve you round the clock.
            </p>
          </div>
          <div>
            <p>
              With the support of our incredible team, we are stand in the
              position that makes our Delhi customers completely satisfied and
              now Vintage Finance is spreading business over NCR regions as
              well. Customers from Gurgaon can easily get the complete
              assistance with our friendly staffs for taking Personal Loan in
              Gurgaon. To get Personal Loan in Gurgaon applicants just need to
              fill the form with their basic details on our website and our
              financial experts will help you with all possible ways to get the
              decent interest rates loan in Gurgaon location. If you are
              comparing Loan providers in gurgaon ,do contact us or schedule an
              appointment with us to see the difference in our methodologies. We
              don’t make any false promises or deceive the applicants, for
              taking a loan. We believe in providing a quality service to our
              applicats to get full satisfaction for what they are looking for.
              We are here to provide a digital platform to our Gurgaon
              applicants so that they can reach us for Cheapest Personal Loan in
              Gurgaon.
            </p>
          </div>
        </div>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default LoanInGurgaon;
