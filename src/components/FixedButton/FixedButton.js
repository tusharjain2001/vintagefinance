import React from "react";
import styles from "./FixedButton.module.css";
import whatsapp from "../../assets/fixed/whatsappIcon.webp";

const FixedWhatsappBtn = ({ bg, phone }) => {
  return (
    <div
      onClick={() =>
        window.open(
          `https://wa.me/+91${phone}?text=Hi !! I am looking for a personal loan`
        )
      }
      style={{ background: bg }}
      className={styles.fixed}
    >
      <img src={whatsapp} alt="whatsapp" />
    </div>
  );
};

FixedWhatsappBtn.defaultProps = {
  phone: "9560462463",
};

export default FixedWhatsappBtn;
