import React from "react";
import classes from "./StepsForInstantLoan.module.css";

// import "lazysizes";
// import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";

let phone =
  "/images/section-4/phone1.webp";

let one =
  "/images/section-4/step1.webp";
let two =
  "/images/section-4/group-15555.webp";
let three =
  "/images/section-4/group-15550.svg";
const StepsForInstantLoan = ({ open }) => {
  return (
    <div className={classes.InstantLoan}>
      <div>
        <h3 className={classes.H3}>
          You are just 3 steps away <br className={classes.BrMb} /> to get an
          instant loan <br className={classes.BrMb} /> upto ₹15 lakhs
        </h3>
        <p className={classes.P}>
          Know what makes us different and why our customers find us as the best
          of the competition.
        </p>
      </div>
      <div className={classes.Cards}>
        <div
          className={classes.Step1 + " lazyload"}
          data-bg={one}
          style={{ color: "lazyloaded" ? "#311010" : "#fff" }}
        >
          1
          <img loading="lazy"
            data-src={phone}
            alt="phone"
            className={classes.Img + " lazyload"}
          />
          <h4 className={classes.H41}>
            Fill application <br /> form
          </h4>
          <h5 className={classes.H51}>
            Just Login through our website and
            <br /> easily fill our loan application form, <br /> using a desktop
            or a mobile device.
            <br /> It just takes 5 minutes to complete <br /> the process.
          </h5>
          <button className={classes.Btn1} onClick={open}>
            Get instant loan
          </button>
        </div>

        <div
          className={classes.Step2 + " lazyload"}
          data-bg={two}
          style={{ color: "#ffffff" }}
        >
          2
          <img loading="lazy"
            src={phone}
            alt="phone"
            className={classes.Img}
            style={{ visibility: "hidden" }}
          />
          <h4 className={classes.H41}>
            Upload and
            <br /> verify KYC Docs
          </h4>
          <h5 className={classes.H51}>
            Upload all your relevant documents <br /> and proceed to document
            verification.
          </h5>
          <button className={classes.Btn2} onClick={open}>
            Get instant loan
          </button>
        </div>
        <div
          className={classes.Step3 + " lazyload"}
          data-bg={three}
          style={{ color: "#101c31" }}
        >
          3
          <img loading="lazy"
            src={phone}
            alt="phone"
            className={classes.Img}
            style={{ visibility: "hidden" }}
          />
          <h4 className={classes.H41}>
            Get Instant <br /> loan approval
          </h4>
          <h5 className={classes.H51}>
            Complete the application process and <br /> get your loan approved
            within 15 <br /> minutes. Get the funds and use it as <br /> per
            your convenience.
          </h5>
          <button className={classes.Btn1} onClick={open}>
            Get instant loan
          </button>
        </div>
      </div>
      <h6 className={classes.H6}>
        We provide 24/7 Funding Support. Quick Loan Application form.
      </h6>
    </div>
  );
};

export default StepsForInstantLoan;
