import React from "react";
import { useHistory } from "react-router-dom";
import { dsaSignup } from "../../App";
import classes from "./ApplyLoanCard.module.css";
//import "lazysizes";

let handshake =
  "/images/section-7/apply-now/handshake.webp";

let home =
  "/images/section-7/apply-now/house1.webp";

const ApplyLoanCard = ({ open }) => {
  const history = useHistory();
  return (
    <div className={classes.ApplyCard}>
      <div className={classes.Card}>
        <img loading="lazy"
          data-src={home}
          alt="home-loan"
          className={classes.Img + " lazyload"}
          style={{ padding: "20px 48px" }}
        />
        <div className={classes.Text}>
          <h3 className={classes.H3}>
            Apply now & get loan upto ₹15 lakhs without CIBIL.
          </h3>
          <h4 className={classes.H6}>
            Apply loan and make your dreams come true on easy and affordable EMI
          </h4>
        </div>
        <div className={classes.BtnDiv}>
          <button className={classes.BtnG} onClick={open}>
            GET INSTANT APPROVAL
          </button>
        </div>
      </div>
      <div className={classes.Card}>
        <img loading="lazy"
          data-src={handshake}
          alt="handshake"
          className={classes.Img + " lazyload"}
          style={{ width: "100%" }}
        />
        <div className={classes.Text}>
          <h3 className={classes.H3}>
            Our Channel Partners are earning ₹150000 p/m
          </h3>
          <h4 className={classes.H6}>
            To know more about the DSA program, click now,
          </h4>
        </div>
        <div className={classes.BtnDiv} onClick={() => history.push(dsaSignup)}>
          <button className={classes.BtnD}>JOIN OUR DSA PROGRAM</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyLoanCard;
