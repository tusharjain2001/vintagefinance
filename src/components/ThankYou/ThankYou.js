import React from "react";
import styles from "./ThankYou.module.css";
import thumnbImg from "../../assets/emi/thumbs-up.webp";

const ThankYou = () => {
  return (
    <div className={styles.thanks}>
      <img src={thumnbImg} alt="thumbs" className={styles.smallImg} />
      <h4 className={styles.h4}>Thank You</h4>
      <h5 className={styles.h5}>
        We have received your enquiry form, please wait for sometime and our
        expert will reach out to you shortly.
      </h5>
    </div>
  );
};

export default ThankYou;
