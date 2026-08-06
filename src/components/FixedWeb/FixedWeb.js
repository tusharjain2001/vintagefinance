import React from "react";
import styles from "./FixedWeb.module.css";
import whatsapp from "../../assets/fixed/whatsappIcon.webp";
import { useDetectScrollStop } from "../../hooks/useDetectScrollStop";

const FixedWeb = ({ phone }) => {
  const { userHasScrolled } = useDetectScrollStop();

  return (
    <div
      className={`${styles.fixed} && ${userHasScrolled && styles.round} `}
      onClick={() =>
        window.open(
          `https://wa.me/${phone}?text=Hi !! I am looking for a personal loan`
        )
      }
    >
      <img src={whatsapp} alt="whatsapp" />
      <div className={styles.text}>
        <h5
          style={{
            display: userHasScrolled ? "none" : "block",
          }}
        >
          Chat with us on whatsapp
        </h5>
        <h6
          style={{
            display: userHasScrolled ? "none" : "block",
          }}
        >
          For product related informations
        </h6>
      </div>
    </div>
  );
};

FixedWeb.defaultProps = {
  phone: "9560462463",
};

export default FixedWeb;
