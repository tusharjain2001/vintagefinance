import { useFormik } from "formik";
import React from "react";
import ApplyLoanCard from "../ApplyLoanCard/ApplyLoanCard";
import Faq from "../Faq/Faq";
//import PressRelease from "../PressRelease/PressRelease";
import styles from "./DsaComponent.module.css";
import axios from "../../axiosinstance";
import moment from "moment";
import * as Yup from "yup";
import LoadingComponent from "../LoadingComponent/LoadingComponent";

const DsaComponent = ({ open, setToast }) => {
  const validate = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Enter 10 Digit Mobile No.")
      .min(10)
      .max(10)
      .required("Enter 10 Digit Mobile No."),
    name: Yup.string().min(2).max(40).required("Enter 2 to 40 characters"),
    experience: Yup.string().required("Experience is required"),
    acceptedTerms: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
    pincode: Yup.string().min(6).max(6),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      pincode: "",
      experience: "",
      acceptedTerms: false,
      id: "AV" + Date.now(),
      enquiryDate: moment().format("YYYY-MM-DD"),
      createdAt: moment().format(),
      updatedAt: moment().format(),
    },
    validationSchema: validate,
    onSubmit: async (values, { setSubmitting }) => {
      let data = {
        name: values.name,
        phone: values.phone,
        experience: values.experience,
        id: values.id,
        createdAt: values.createdAt,
        enquiryDate: values.enquiryDate,
        updatedAt: values.updatedAt,
        acceptedTerms: values.acceptedTerms,
      };
      if (values.email.length > 0) {
        data.email = values.email;
      }

      if (values.pincode.length > 0) {
        data.pincode = values.pincode;
      }
      try {
        let result = await axios.post("/dsa-leads.json", data);
        if (result.status === 200) {
          setToast(true);
        } else {
          formik.setSubmitting(false);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <>
      <div className={styles.Dsa}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>
              <span>Become a partner</span>
              <br />
              Earn upto
              <br className={styles.Mb} /> Rs 50,000
              <br className={styles.Mb} /> every month
            </h1>
            <img
              src="/images/dsa/vintage-finance.webp"
              alt="emp"
            />
          </div>
          <div className={styles.Column}>
            <div className={styles.FormBox}>
              <h2>Join as a DSA</h2>
              <p>Please fill the correct information for faster approval. </p>

              <form onSubmit={formik.handleSubmit}>
                {formik.isSubmitting ? (
                  <LoadingComponent text="Saving..." />
                ) : null}
                <input
                  type="name"
                  placeholder="Full Name"
                  {...formik.getFieldProps("name")}
                />
                {formik.errors.name && formik.touched.name && (
                  <div className={styles.inputFeedback}>
                    {formik.errors.name}
                  </div>
                )}
                <input
                  type="email"
                  placeholder="Company E-mail address"
                  {...formik.getFieldProps("email")}
                />
                <input
                  type="number"
                  placeholder="Phone Number"
                  {...formik.getFieldProps("phone")}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <div className={styles.inputFeedback}>
                    {formik.errors.phone}
                  </div>
                )}
                <div className={styles.Wrapper}>
                  <div>
                    <input
                      type="number"
                      placeholder="Pincode"
                      className={styles.Pincode}
                      {...formik.getFieldProps("pincode")}
                    />
                    {formik.errors.pincode && formik.touched.pincode && (
                      <div className={styles.inputFeedback}>
                        {formik.errors.pincode}
                      </div>
                    )}
                  </div>

                  <div>
                    <select
                      type="name"
                      placeholder="Experience (In yrs)"
                      className={styles.Experience}
                      {...formik.getFieldProps("experience")}
                    >
                      <option hidden>Experience (In yrs)</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                    </select>
                    {formik.errors.experience && formik.touched.experience && (
                      <div className={styles.inputFeedback}>
                        {formik.errors.experience}
                      </div>
                    )}
                  </div>
                </div>

                <br />

                <div className={styles.Wrapper}>
                  <input
                    type="checkbox"
                    id="terms"
                    {...formik.getFieldProps("acceptedTerms")}
                  />
                  <label htmlFor="terms">
                    By clicking this checkbox you agree on all
                    <span style={{ color: "#55A3FF" }}> Terms of Service </span>
                    and <span style={{ color: "#55A3FF" }}>Privacy policy</span>
                  </label>
                </div>
                {formik.errors.acceptedTerms &&
                  formik.touched.acceptedTerms && (
                    <div className={styles.inputFeedback}>
                      {formik.errors.acceptedTerms}
                    </div>
                  )}
                <button disabled={formik.isSubmitting} type="submit">
                  DSA Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          Become an entrepreneur. Start and run your business with minimal cost
          and risk.
        </h2>
        <h6>
          Join hands with Vintage Finance, you get the liberty to source
          customers looking for
          <br className={styles.Wb} /> different products, located anywhere in
          India. Apply for DSA registration today and start
          <br className={styles.Wb} /> Making Money!!!
        </h6>

        <div className={styles.BoxWrapper}>
          <div className={styles.Box}>
            <span>1</span>
            <img
              src="/images/dsa/group-15433.webp"
              alt="refer-lead"
            />
            <p>
              Refer The Leads Who Are
              <br /> Looking For Loan
            </p>
          </div>
          <div className={styles.Box}>
            <span>2</span>
            <img
              src="/images/dsa/group-15434.webp"
              alt="call"
            />
            <p>
              Call them on your behalf to understand their financial studies.
            </p>
          </div>
          <div className={styles.Box}>
            <span>3</span>
            <img
              src="/images/dsa/group-15436.webp"
              alt="docs"
            />
            <p>Share their Documents</p>
          </div>
          <div className={styles.Box}>
            <span>4</span>
            <img
              src="/images/dsa/group-15069.webp"
              alt="payout"
            />
            <p>Get Immediate Payout Post Disbursement</p>
          </div>
        </div>

        <div className={styles.ElegibilityRow}>
          <div className={styles.Elegibility}>
            <h4>Benefits For Partners</h4>
            <p>
              Earn money at your own comfort with flexible working hours to
              choose.
            </p>
            <ul>
              <li>Earn an additional income.</li>
              <li>Start with zero investment.</li>
              <li>Payout in the first week of every month.</li>
              <li>Get Personal Loan for your low/ bad Cibil Score clients.</li>
              <li>Earn attractive, fair, and transparent commission.</li>
            </ul>
          </div>
          <div
            className={styles.Docs}
            style={{ cursor: "pointer" }}
            onClick={() => window.scrollTo(0, 0)}
          >
            <h4>Process of DSA Registration</h4>
            <p>
              Our process for DSA registration is quick, seamless and
              hasslefree.
            </p>
            <ul>
              <li>Submit your online application on our website.</li>
              <li>
                On successful submission of your we will contact you and will
                collect necessary documents.
              </li>
              <li>
                With a properly completed, stamped and signed agreement, we will
                issue a DSA code for you.
              </li>
              <li>
                On getting DSA Code, Start submitting leads, applying for loans
                on your clients behalf and make money.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* <PressRelease /> */}
      <ApplyLoanCard open={open} />
      <Faq />
    </>
  );
};

export default DsaComponent;
