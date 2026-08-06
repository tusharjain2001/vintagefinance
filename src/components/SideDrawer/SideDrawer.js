import React from "react";
import { Link } from "react-router-dom";
import styles from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <div className={styles.Navbar}>
        {/* <Link to="/#loan" onClick={() => window.location.replace("/#loan")}>
          Loan Products
        </Link> */}
        <Link to="/about">About us</Link>
        <Link to="/career">Career</Link>
        <Link to="/dsa">DSA Program</Link>
        <Link to="/news">News</Link>
      </div>
      <button className={styles.instantBtn}>Get Instant Approval</button>
    </div>
  );
};

export default SideDrawer;
