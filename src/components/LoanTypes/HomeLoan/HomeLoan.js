import React from "react";
import { Helmet } from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "./Common/Common";
import styles from "./HomeLoan.module.css";

let homeLoanCard =
  "/images/section-2/newcards/group-15075.webp";

const HomeLoan = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>Home Loan in Delhi - Vintage Finance</title>
        <meta
          name="description"
          content="Avail home loan in Delhi. Visit the site now to know interest rates, eligibility, and offers "
        />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>Home Loan</h1>
            <p className={styles.P}>
              Looking for a home loan? Housing Loan is a stepping
              <br className={styles.BrMb} /> stone in realising your dream home.
              Apply for home loan
              <br className={styles.BrMb} /> online with Vintage Finance
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img src={homeLoanCard} alt="home-loan" className={styles.Img} />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          A home is a gateway to financial success that you will be glad
          <br className={styles.BrMb} /> about in the future!
        </h2>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default HomeLoan;
