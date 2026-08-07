import React from "react";
import classes from "./Numbers.module.css";

const Numbers = ({ open }) => {
  return (
    <div className={`${classes.NumbersBg} numbers-bg`}>
      <div>
        <h4 className={classes.H4}>
          Our numbers tell
          <br className={classes.BrMb} /> stories of brilliance and{" "}
          <br className={classes.BrMb} /> customer delight.
        </h4>
      </div>
      <div className={classes.NumData}>
        <h3 className={classes.H3}>
          28 <span>YRS</span>
        </h3>
        <h4 className={classes.H5}>Total Experience</h4>
      </div>
      <div className={classes.NumData}>
        <h3 className={classes.H3}>250000+ </h3>
        <h4 className={classes.H5}>
          Vintage Finance catering <br /> to all finance needs
        </h4>
      </div>
      <div className={classes.NumData}>
        <h3 className={classes.H3}>320000</h3>
        <div>
          <h4 className={classes.H5}>Loyal Customers</h4>
          <p className={classes.P}>
            (Follow our easy, convenient and a seamless 3<br /> step loan
            application process)
          </p>
        </div>
      </div>
      <div className={classes.NumData}>
        <h3 className={classes.H3}>12000+</h3>
        <h4 className={classes.H5}>Channel Partners</h4>
      </div>
      <div className={classes.NumData}>
        <h4 className={classes.H4} style={{ marginTop: "30px" }}>
          320000+ <br className={classes.BrMb} /> Customers have{" "}
          <br className={classes.BrMb} />
          got Loan approval
          <br /> in just 5 minutes.
        </h4>
        <div className={classes.DivMb}>
          <h2 className={classes.H5} style={{ textAlign: "left" }}>
            Ready to get <br /> started?
          </h2>
          <button className={classes.Btn} onClick={open}>
            START APPLICATION{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Numbers;
