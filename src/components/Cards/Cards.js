import React from "react";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h4>Eligibility Criteria</h4>
          <ul className={styles.list}>
            <li>
              <RightIcon />
              Must be a full-time salaried employee with a minimum Net Monthly
              income of at least ₹ 30,000/month.
            </li>
            <li>
              <RightIcon />
              Must have minimum 2 years in employment and minimum 6 months in
              the current organisation
            </li>
            <li>
              <RightIcon />
              Must be above 23 years and below 60 years of age
            </li>
            <li>
              <RightIcon />
              Must be a resident of Delhi/NCR
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <h4>Documents needs</h4>
          <ul className={styles.list}>
            <li>
              <RightIcon />
              Pan Card Number
            </li>
            <li>
              <RightIcon />
              Income Proof (Salary Slip & bank Statement)
            </li>
            <li>
              <RightIcon />
              ID Proof (Valid Driving License / Valid Passport / Voter’s ID /
              Aadhar Card / Pan Card)
            </li>
            <li>
              <RightIcon />
              Address Proof (Valid Driving License / Valid Passport / Aadhar
              Card)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cards;

const RightIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="15"
      cy="15"
      r="14.25"
      fill="white"
      stroke="#168754"
      strokeWidth="1.5"
    />
    <path
      d="M8 15.2056C9.56425 16.748 12.6615 19.8659 12.5363 19.9981C12.4112 20.1303 18.7933 13.3878 22 10"
      stroke="#198754"
      strokeWidth="1.5"
    />
  </svg>
);
