import React from "react";
import classes from "./Footer.module.css";
import Logo from "../Logo/Logo";
// import FormControl from "@material-ui/core/FormControl";
// import Input from "@material-ui/core/Input";
// import clsx from "clsx";
//import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import * as Yup from "yup";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import axios from "../../axiosinstance";
import { useHistory } from "react-router-dom";
import moment from "moment";
import {
  aboutUs,
  blog,
  cibilDefaulter,
  disclaimer,
  dsaSignup,
  earlySalaryLoan,
  faqPage,
  grievanceRedressal,
  loanAgainstProperty,
  loanInGhaziabad,
  loanInGurgaon,
  loanInNoida,
  personalLoan,
  privacyPolicy,
  privateLoan,
  services,
  sitemap,
  twoWheelerLoan,
} from "../../App";

let fb =
  "/images/footer/path-217.webp";

let tw =
  "/images/footer/path-219.webp";

let ld =
  "/images/footer/instagram-icon.webp";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   withoutLabel: {
//     marginTop: theme.spacing(3),
//   },
//   textField: {
//     width: "25ch",
//   },
//   inp: {
//     fontStyle: "normal",
//     fontWeight: "normal",
//     fontSize: "13px",
//     lineHeight: "24px",
//     display: "flex",
//     alignItems: "center",
//     color: "#777E90",
//     "&::before": {
//       borderBottom: "1px solid #fff",
//     },
//   },
// }));

const Footer = ({ setToast, setPolicy }) => {
  const history = useHistory();
  // const classesMi = useStyles();
  const validate = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Enter 10 Digit Mobile No.")
      .min(10)
      .max(10)
      .required("Enter 10 Digit Mobile No."),
  });
  return (
    <div className={classes.Footer}>
      <div className={classes.Row}>
        <div className={classes.Column}>
          <Logo />

          <div className={classes.UlDiv}>
            <ul>
              <li className={`${classes.UlHeading} ${classes.UlLi}`}>
                Contact us at
              </li>
              <li className={classes.UlLi}>info@vintagefinance.in</li>
              <li className={classes.UlLi}>vintagegroups@gmail.com</li>
            </ul>
            <ul className={classes.Ul}>
              <li className={`${classes.UlHeading} ${classes.UlLi}`}>
                Telephone
              </li>
              
              <li className={classes.UlLi}>+91 95604 62463</li>
              <li className={classes.UlLi}>+91 99995 54728</li>
            </ul>
            <ul>
              <li className={`${classes.UlHeading} ${classes.UlLi}`}>
                Registered Address
              </li>
              <li className={classes.UlLi}>
                Vintage Credit and Leasing <br />
                Pvt Ltd<br />
                7/30, WEST PATEL NAGAR,
                <br /> NEW DELHI- 110008
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.Column}>
          <h3 className={classes.H3}>Important Links</h3>
          <ul>
            <li
              onClick={() => {
                history.push(aboutUs);
              }}
            >
              About us
            </li>
            <li
              onClick={() => {
                history.push(services);
              }}
            >
              Services
            </li>
            <li
              onClick={() => {
                history.push(dsaSignup);
              }}
            >
              DSA Signup
            </li>
            {/* <li
              onClick={() => {
                history.push(career);
              }}
            >
              Careers
            </li> */}
            <li
              onClick={() => {
                window.open(blog, "_blank");
              }}
            >
              News
            </li>
            <li
              onClick={() => {
                history.push(faqPage);
              }}
            >
              Faqs
            </li>
            {/* <li
              onClick={() => {
                history.push("/emi");
              }}
            >
              Emi Calculator
            </li> */}
            <li
              onClick={() => {
                history.push(sitemap);
              }}
            >
              Sitemap
            </li>
            <li
              onClick={() => {
                history.push(grievanceRedressal);
              }}
            >
              Complaints &amp; Grievance Redressal
            </li>
            <li
              onClick={() => {
                setPolicy(0);
                history.push(privacyPolicy);
              }}
            >
              Privacy Policy
            </li>
            <li
              onClick={() => {
                setPolicy(1);
                history.push(disclaimer);
              }}
            >
              Disclaimer
            </li>
          </ul>
        </div>
        <div className={classes.Column}>
          <h3 className={classes.H3}>Loan Products</h3>
          <ul>
            {/* <li onClick={() => history.push(homeLoan)}>Home Loan</li>
            <li onClick={() => history.push(autoLoan)}>Auto Loan</li> */}
            <li onClick={() => history.push(privateLoan)}>Private Loan</li>
            <li onClick={() => history.push(personalLoan)}>Personal Loan</li>
            <li onClick={() => history.push(earlySalaryLoan)}>
              Early Salary Loan
            </li>
            <li onClick={() => history.push(twoWheelerLoan)}>
              Two Wheeler Loan
            </li>
            <li onClick={() => history.push(loanAgainstProperty)}>
              Loan Against Property
            </li>
            <li onClick={() => history.push(cibilDefaulter)}>
              Loan For Cibil Defaulters
            </li>
            <li onClick={() => history.push(loanInGurgaon)}>
              Personal Loan in Gurgaon
            </li>
            <li onClick={() => history.push(loanInNoida)}>
              Personal Loan in Noida
            </li>
            <li onClick={() => history.push(loanInGhaziabad)}>
              Personal Loan in Ghaziabad
            </li>
          </ul>
        </div>
        <div className={classes.Column}>
          <h3 className={classes.H3}>For help and support</h3>
          {/* <ul>
            <li>For help and support</li>
          </ul> */}
          <Formik
            initialValues={{
              phone: "",
              id: "AV" + Date.now(),
              enquiryDate: moment().format("YYYY-MM-DD"),
              createdAt: moment().format(),
              updatedAt: moment().format(),
            }}
            validationSchema={validate}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const result = await axios.post("/subscribers.json", values);
                if (result.status === 200) {
                  setToast(true);
                  resetForm();
                } else {
                  setSubmitting(false);
                }
              } catch (error) {
                console.log(error.message);
              }
            }}
          >
            {({
              errors,
              handleChange,
              isSubmitting,
              handleSubmit,
              touched,
              values,
            }) => (
              <>
                {isSubmitting ? <LoadingComponent text="Saving..." /> : null}
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    className={classes.Inp}
                    value={values.phone}
                    onChange={handleChange}
                    name="phone"
                    placeholder="Enter your mobile number"
                  />
                  {errors.phone && touched.phone && (
                    <div className={classes.inputFeedback}>{errors.phone}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={classes.Btn}
                  >
                    Arrange Call back
                  </button>
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
      <div className={classes.BorderBottom}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "40px",
        }}
        className={classes.FMb}
      >
        <p className={`${classes.P} ${classes.Order2}`}>
          Copyright © 2026 Vintage Finance. All Rights Reserved
        </p>
        <p className={`${classes.H6} ${classes.Order3}`}>
          Made with <span style={{ color: "red" }}>&nbsp;❤&nbsp;</span> in India
        </p>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className={classes.Order1}
        >
          <p className={classes.P}>Follow us on :</p>
          <a
            href="https://www.facebook.com/Vintage-Finance-108156844296039/"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={fb} alt="social-facebook" className={classes.Img} />
          </a>

          <a
            href="https://twitter.com/finance_vintage"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy" src={tw} alt="social-twitter" className={classes.Img} />
          </a>
          <a
            href="https://www.instagram.com/vintagefinanceofficial/"
            target="_blank"
            rel="noreferrer"
          >
            <img loading="lazy"
              src={ld}
              alt="social-instagram"
              style={{ height: "20px" }}
              className={classes.Img}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
