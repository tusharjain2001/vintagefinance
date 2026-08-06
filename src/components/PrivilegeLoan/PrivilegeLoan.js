import React from "react";
import classes from "./PrivilegeLoan.module.css";

let paperLess =
  "/images/section-3/best/paper-less.webp";

let disbursal =
  "/images/section-3/best/group-15206.svg";

let flexible =
  "/images/section-3/best/group-15205.svg";

let history =
  "/images/section-3/best/group-15554.svg";

let lowInterest =
  "/images/section-3/best/low-interest.webp";

let arrow =
  "/images/section-3/card/arrow.webp";
const PrivilegeLoan = ({ open }) => {
  return (
    <div className={classes.Privilege}>
      <div>
        <h3 className={classes.H3}>
          The Vintage Finance <br /> Privileges
        </h3>
      </div>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <div className={classes.Card}>
            <div className={classes.Upper}>
              <h4 className={classes.H4}>Why are we the best?</h4>
              <h5 className={classes.H5}>
                With an aim to provide hassle free instant loans to borrowers
                our loan products can be availed within 24 hours without
                physical verification and with minimal documentation.
              </h5>
            </div>
            <div className={classes.BtnDiv}>
              <button className={classes.Btn} onClick={open}>
                Apply Now
                <img loading="lazy"
                  src={arrow}
                  alt="dir"
                  style={{
                    marginLeft: "10px",
                    width: "23.15px",
                    height: "11.44px",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={classes.SmallColumn}>
          <div>
            <img loading="lazy" src={paperLess} alt="loan" className={classes.BestImg} />
            <h6 className={classes.H6}>
              100% PAPERLESS & <br /> ONLINE APPROVAL
            </h6>
            <p className={classes.P}>
              No loads of paperwork. Just <br /> apply, upload and get approved.
            </p>
          </div>
          <div>
            <img loading="lazy" src={history} alt="loan" className={classes.BestImg} />
            <h6 className={classes.H6}>
              No Credit History <br /> Required
            </h6>
            <p className={classes.P}>
              Even if you don’t have any credit history, you can make one by
              taking a.
            </p>
          </div>
          <div>
            <img loading="lazy" src={disbursal} alt="loan" className={classes.BestImg} />
            <h6 className={classes.H6}>QUICK DISBURSAL</h6>
            <p className={classes.P}>
              Get the funds in your account <br /> within 2 days of approval
            </p>
          </div>
          <div>
            <img loading="lazy" src={lowInterest} alt="loan" className={classes.BestImg} />
            <h6 className={classes.H6}>Low Interest rate</h6>
            <p className={classes.P}>
              Flexible and attractive <br /> interest rates
            </p>
          </div>
          <div>
            <img loading="lazy" src={flexible} alt="loan" className={classes.BestImg} />
            <h6 className={classes.H6}>Personalized and Flexible</h6>
            <p className={classes.P}>
              Spend money in your own way with <br className={classes.Mb} />{" "}
              flexible personal loan amounts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeLoan;
