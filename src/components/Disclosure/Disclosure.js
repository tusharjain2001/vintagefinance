import React from "react";
import LandingForm from "../LandingForm/LandingForm";
import styles from "./Disclosure.module.css";

let inputStyle = {
  gridTemplateColumns: "1fr",
  marginTop: "20px",
};

let privacyStyle = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "20px",
};
const Disclosure = ({ setToast }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.left}>
          <div className={styles.upper}>
            <h2>Personal Loan Disclosure</h2>
            <p>
              A Personal loan is unsecured loan that can be taken for various
              reason like travelling, education, emergencies etc.
            </p>
          </div>
          <ul className={styles.list}>
            <li>
              <span>APR(Annual Percentage Rate):</span> Vary from 19.9% to 24%
              based on customer profile.
            </li>
            <li>
              <span>Repayment Period:</span> 6 Months to 24 Months.
            </li>
            <li>
              <span>Processing Fee:</span> For Personal loan it vary from 4% to
              8% of the loan amount.
            </li>
            <li>
              <span>Pre-Payment Charges:</span> Prepayment option may apply or
              not it depends upon lender. Prepayment/ Forclosure Charges is 4%.
            </li>
          </ul>
          <br />

          <p className={styles.p}>
            <span>Representative Example:</span>For the loan of Rs.1 lakh at the
            rate of 19.9% with repayment tenure of 12 months, your EMI will be
            Rs 9,992/-. The total payable amount at the end 12 months will be Rs
            1,19,900/-. Therefore, your total payable interest amount will be of
            Rs 19,900.
          </p>
        </div>
        <div className={styles.right}>
          <h2 className={styles.h2}>Apply for Personal Loan</h2>
          <h2 className={styles.h2}>
            Only for salaried people with minimum Salary 35k
          </h2>
          <h2 className={styles.h2}> ( For Delhi ncr only )</h2>
          <LandingForm
            inputStyle={inputStyle}
            privacyStyle={privacyStyle}
            setToast={setToast}
          />
        </div>
      </div>
    </div>
  );
};

export default Disclosure;
