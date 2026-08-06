import React from "react";
import { Helmet } from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";

import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let earlySalaryCard =
  "/images/section-2/newcards/group-15071.webp";

const EarlySalaryLoan = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title> Avail Early Salary Loan in Delhi - Vintage Finance </title>
        <meta
          name="description"
          content="Get instant early salary loan in delhi. Visit site to apply now for early salary loan in delhi"
        />
        <link rel="canonical" href="https://www.vintagefinance.in/early-salary-loan.html"/>
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>Early Salary Loan</h1>
            <p className={styles.P}>
              With Vintage Finance, you can avail of an advance salary loan just
              within a few hours of approval. So, why wait? Just meet our simple
              eligibility criteria and get approved with an advance salary loan.
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img src={earlySalaryCard} alt="home-loan" className={styles.Img} />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          An innovative solution to limit you from facing a month-end money
          crunch.
        </h2>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default EarlySalaryLoan;
