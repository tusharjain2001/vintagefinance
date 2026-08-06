import React from "react";
import styles from "./Prepayment.module.css";

const Prepayment = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>Fees & Charges include:</h3>
      <ul className={styles.list}>
        <li>
          <RightIcon /> <span>•</span> Processing fee
        </li>
        <li>
          <RightIcon /> <span>•</span> Door to Door verification
        </li>
        <li>
          <RightIcon /> <span>•</span> Flexible Collection of payment
        </li>
      </ul>
      <div className={styles.header}>
        <h3 className={styles.h3}>Prepayment</h3>
        <p>
          As we know that a personal loan is given for a time period and this
          period is know as loan repayment period. Once you have taken a loan
          then you are suppose to pay the debit off by the end of loan repayment
          period through EMIs. However after taking a loan you have decide to
          pay off your debt before the end of loan repayment period. Then it is
          called pre-payment.
        </p>
      </div>
      <div className={styles.header}>
        <h3 className={styles.h3}>Repayment</h3>
        <p>There are various mode of repayment are available like ECS, PDC.</p>
      </div>
      <div className={styles.header}>
        <h3 className={styles.h3}>Personal loan Disbursal</h3>
        <p>
          Disbursal is basically the process of the financial institutions to
          transfer the loan amount in the bank account of the customer.
        </p>
      </div>
    </div>
  );
};

export default Prepayment;

const RightIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="15" cy="15" r="15" fill="#198754" />
    <path
      d="M8 15.2056C9.56425 16.748 12.6615 19.8659 12.5363 19.9981C12.4112 20.1303 18.7933 13.3878 22 10"
      stroke="white"
      strokeWidth="2"
    />
  </svg>
);
