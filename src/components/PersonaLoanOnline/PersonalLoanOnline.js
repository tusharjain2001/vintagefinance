import React from "react";
import styles from "./PersonalLoanOnline.module.css";

const PersonalLoanOnline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Apply Now To Get Personal Loan Without CIBIL CHECK</h3>
        <p>Know Eligibility Criteria</p>
      </div>
      <ul className={styles.list}>
        <li>
          <RightIcon />
          Rs.15 Lakh For Up To 2 Years.
        </li>
        <li>
          <RightIcon />
          Interest Rates Starting At 19.9% to 24% Per Annum.
        </li>
        <li>
          <RightIcon />
          Processing Fee Of 4% To 8% Of The Loan Amount.
        </li>
        <li>
          <RightIcon />
          Tenure: 6 months to 24 months
        </li>
      </ul>
      <div className={styles.footer}>
        <p>
          In general, Personal Loan is an unsecured loan which is taken by an
          individual to fulfill their personal financial needs. An individual
          can take personal loan without Cibil Check on the basis of key
          criteria such as employment record, income and their repayment
          capacity etc.
        </p>
        <b>Please Read Personal Loan Disclosure Written In The Page Below</b>
      </div>
    </div>
  );
};

export default PersonalLoanOnline;

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
