import React from "react";
import LandingForm from "../LandingForm/LandingForm";
import styles from "./TakeLoan.module.css";

const TakeLoan = ({ style, setToast }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>Apply For Personal Loan Without CIBIL CHECK</h2>
        <h2>Only for salaried people with minimum Salary 35k</h2>
        <h2> ( For Delhi ncr only )</h2>
        <h3>
          Fill up the form below and loan executive would get in touch with you
        </h3>
      </div>
      <LandingForm style={style} setToast={setToast} />
    </div>
  );
};

export default TakeLoan;
