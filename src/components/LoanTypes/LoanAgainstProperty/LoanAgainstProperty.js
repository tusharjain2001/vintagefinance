import React from "react";
import Helmet from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let propertyLoanCard =
  "/images/section-2/newcards/group-15219.webp";

const LoanAgainstProperty = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>Loan Against Property in Delhi | Vintage Finance</title>
        <link rel="canonical" href="https://www.vintagefinance.in/loan-against-property-delhi.html"/>
        <meta
          name="description"
          content="Loan against property in Delhi from vintage finance. Apply now and get the best interest rates for a loan against property in Delhi."
        />
        <meta name="keywords" content="Loan against property in Delhi" />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>Loan Against Property</h1>
            <p className={styles.P}>
              A loan against property is a convenient way to get funds or meet
              your personal needs by using your property as collateral to get a
              loan. At Vintage Finance, we help you leverage your property to
              fulfil your needs.
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img
              src={propertyLoanCard}
              alt="Loan against property in Delhi || Property loan in delhi || Vintage finance property loan delhi "
              className={styles.Img}
            />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>Get a hassle-free loan against property in Delhi NCR.</h2>
        <div className={styles.Description}>
          <div>
            <p>
              A loan against property is an advance against your home, business
              space, Industrial Property or even a plot. We are the one who
              provide loan against property in Delhi. On the off chance that all
              the area titles are set up, you have a wage and you are qualified
              then this is the less expensive loan choice for you for having
              loan against property in Delhi. Despite the fact that the
              investment rates on this advance are higher than that of a home
              loan, its less expensive than that an individual advance or a loan
              against security. The unsecured loan is given for a quick time
              period, usually five to ten decades. The property has to be
              occupied for a particular period of time, which differs depending
              on the state.
            </p>
          </div>
          <div>
            <p>
              Vintage Financial Services give complete answers for Property Loan
              service (Home Purchase, Construction, and Loan against property in
              Delhi). We additionally give proficient custom arrangements
              utilizing our colossal experience as a part of account segment. We
              are affectionate sorted out group that comprises of a drive,
              dynamic and capable achievers.
            </p>
          </div>
        </div>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default LoanAgainstProperty;
