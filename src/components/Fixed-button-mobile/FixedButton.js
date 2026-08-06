import React from "react";
// import callIcon from "../../images/call-icon.png";

// import whatsapp from "../../images/navbar/whatsapp.png";
import styles from "./FixedButton.module.css";

const FixedButton = ({ number, open }) => {
  return (
    <div className={styles.fixedButton}>
      <div>
        <div
          className={styles.Btn1}
          style={{ backgroundColor: "#B9F59D" }}
          onClick={open}
        >
          INSTANT LOAN
        </div>
      </div>
      <div>
        <a href={`tel:${number}`}>
          <div className={styles.Btn2} style={{ backgroundColor: "#0085FF" }}>
            CALL NOW
          </div>
        </a>
      </div>
    </div>
  );
};

export default FixedButton;
