import React from "react";
import { Link } from "react-router-dom";
import {
  aboutUs,
  blog,
  career,
  cibilDefaulter,
  disclaimer,
  dsaSignup,
  earlySalaryLoan,
  faqPage,
  loanAgainstProperty,
  loanInGhaziabad,
  loanInGurgaon,
  loanInNoida,
  personalLoan,
  privacyPolicy,
  privateLoan,
  services,
  twoWheelerLoan,
} from "../../App";
import styles from "./Sitemap.module.css";
const Sitemap = () => {
  return (
    <div className={styles.Sitemap}>
      <h1 className={styles.H1}>Sitemap</h1>
      <div className={styles.ContentBox}>
        <div className={styles.Item}>
          <h2 className={styles.H2}>Main</h2>
          <Link to="/">Home</Link>
          <Link to={dsaSignup}>Dsa Signup</Link>
          <Link to={career}>Career</Link>
          <Link to={{ pathname: blog }} target="_blank">
            News
          </Link>
          <Link to={aboutUs}>About us</Link>
          <Link to={services}>Services</Link>
          <Link to={faqPage}>Faqs</Link>
        </div>
        <div className={styles.Item}>
          <h2 className={styles.H2}>Privacy</h2>
          <Link to={privacyPolicy}>Privacy Policy</Link>
          <Link to={disclaimer}>Disclaimer</Link>
        </div>
        <div className={styles.Item}>
          <h2 className={styles.H2}>Loan Products</h2>
          <Link to={personalLoan}>Personal Loan</Link>
          {/* <Link to={homeLoan}>Home Loan</Link> */}
          <Link to={earlySalaryLoan}>Early Salary Loan</Link>
          <Link to={twoWheelerLoan}>Two Wheeler Loan</Link>
          <Link to={loanAgainstProperty}>Loan Against Property</Link>
        </div>
        <div className={styles.Item}>
          <h2 className={styles.H2}>Other Products</h2>
          {/* <Link to={autoLoan}>Auto Loan</Link> */}
          <Link to={privateLoan}>Private Loan</Link>
          <Link to={cibilDefaulter}>Loan for Cibil Defaulter</Link>
          <Link to={loanInGurgaon}>Personal Loan in Gurgaon</Link>
          <Link to={loanInNoida}>Personal Loan in Noida</Link>
          <Link to={loanInGhaziabad}>Personal Loan in Ghaziabad</Link>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
