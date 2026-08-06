import React from "react";
import styles from "./ApplyLoan.module.css";

const ApplyLoan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <h4>How To Apply Personal Loan</h4>
        <p>
          If you want to apply for personal loan you have to go through
          following steps. The application process is very clear and simple.
        </p>
      </div>
      <ul className={styles.list}>
        <li>
          <RightIcon />
          Apply online by filling the form using your details like Name, Email,
          Phone number etc.
        </li>
        <li>
          <RightIcon />
          Our executive will get in touch of you.
        </li>
        <li>
          <RightIcon />
          Once details submitted will check and verify your details.
        </li>
        <li>
          <RightIcon />
          Choose the loan amount and repayment tenor.
        </li>
        <li>
          <RightIcon />
          Disbursal of your loan within 5-7 working days of approval.
        </li>
      </ul>
      <p className={styles.lower}>
        <b>Representative Example:</b>
        For the loan of Rs.1 lakh at the rate of 19.9% with repayment tenure of
        12 months, your EMI will be Rs 9,992/-. The total payable amount at the
        end 12 months will be Rs 1,19,900/-. Therefore, your total payable
        interest amount will be of Rs 19,900.
      </p>
    </div>
  );
};

export default ApplyLoan;

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
