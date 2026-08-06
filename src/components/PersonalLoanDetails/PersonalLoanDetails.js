import React from "react";
import styles from "./PersonalLoanDetails.module.css";

const PersonalLoanDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h4>Personal Loan Details & FAQ</h4>
        <p>
          Personal Loans of up to Rs.15 lakh interest rates starting at 19.9% to
          24% P.A. with tenures of up to 6 to 24 months. The processing fee will
          be in between 4% and 8% of the loan amount.
        </p>
      </div>
      <div className={styles.lower}>
        <ul className={styles.list}>
          <li>
            <p>Description</p>
            <p>Charges</p>
          </li>
          <li>
            <p>Interest Rates</p>
            <p>19.9% P.A Onwards</p>
          </li>
          <li>
            <p>Loan Amount</p>
            <p>upto 15 Lakh</p>
          </li>
          <li>
            <p>Loan Tenure</p>
            <p>6 to 24 months</p>
          </li>
          <li>
            <p>Processing fees</p>
            <p>4% - 8% of the loan amount + GST</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalLoanDetails;
