import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "./Grievance.module.css";

// Characters that can't be confused with each other (no 0/O, 1/I/L).
const CAPTCHA_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";

const generateCaptcha = () =>
  Array.from(
    { length: 5 },
    () => CAPTCHA_CHARS[Math.floor(Math.random() * CAPTCHA_CHARS.length)]
  ).join("");

const complaintCategories = [
  "Loan Application",
  "Loan Disbursement",
  "EMI Related",
  "Charges & Fees",
  "Customer Service",
  "Technical Issue",
  "Staff Behaviour",
  "Others",
];

const RBI_CMS_URL = "https://cms.rbi.org.in";

// Backend endpoint that emails the complaint. Set REACT_APP_COMPLAINT_API in the
// frontend .env to your deployed Vercel URL, e.g.
// https://vintage-backend.vercel.app/api/send-complaint
const COMPLAINT_API =
  process.env.REACT_APP_COMPLAINT_API ||
  "https://vintage-backend-five.vercel.app/api/send-complaint";

const validate = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Please enter your full name")
    .required("Full Name is required"),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10 digit mobile number")
    .required("Mobile Number is required"),
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email Address is required"),
  loanNumber: Yup.string(),
  category: Yup.string().required("Please select a complaint category"),
  description: Yup.string()
    .min(10, "Please describe your complaint in a little more detail")
    .required("Complaint Description is required"),
  captcha: Yup.string().required("Please enter the code shown"),
});

const Grievance = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [captchaCode, setCaptchaCode] = useState("");

  // Generated on the client only, so pre-rendered HTML never bakes in a code.
  useEffect(() => {
    setCaptchaCode(generateCaptcha());
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Complaints & Grievance Redressal | Vintage Credit & Leasing Pvt. Ltd.
        </title>
        <meta
          name="description"
          content="Register a complaint with Vintage Credit & Leasing Pvt. Ltd. View our grievance redressal process, escalation matrix, resolution timelines and RBI Integrated Ombudsman details."
        />
        <meta
          name="keywords"
          content="Vintage Finance grievance redressal, complaint registration, RBI ombudsman, customer support, escalation matrix"
        />
      </Helmet>

      <div className={styles.Page}>
        {/* A. Introduction */}
        <section className={styles.Hero}>
          <h1 className={styles.PageTitle}>Complaints &amp; Grievance Redressal</h1>
          <h2 className={styles.SubTitle}>Customer Grievance Redressal</h2>
          <p className={styles.Intro}>
            Vintage Credit &amp; Leasing Pvt. Ltd. is committed to providing
            prompt, transparent, and fair grievance redressal services.
            Customers may register complaints through the channels provided
            below. Every complaint received by the Company is handled with due
            care and resolved in a fair and timely manner in accordance with
            applicable regulatory requirements.
          </p>
        </section>

        {/* B. Register a Complaint */}
        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>Register a Complaint</h2>
          <p className={styles.SectionLead}>
            Customers may register complaints through any of the following
            channels:
          </p>
          <div className={styles.ContactCard}>
            <span className={styles.Badge}>Customer Support (Level 1)</span>
            <div className={styles.ContactGrid}>
              <div className={styles.ContactItem}>
                <span className={styles.ContactLabel}>Email</span>
                <a href="mailto:support@vintagefinance.in">
                  support@vintagefinance.in
                </a>
              </div>
              <div className={styles.ContactItem}>
                <span className={styles.ContactLabel}>Phone</span>
                <a href="tel:9899055381">9899055381</a>
              </div>
              <div className={styles.ContactItem}>
                <span className={styles.ContactLabel}>Office Address</span>
                <address className={styles.Address}>
                  Vintage Credit &amp; Leasing Pvt. Ltd.
                  <br />
                  7, 30 West Patel Nagar
                  <br />
                  Patel Nagar
                  <br />
                  New Delhi – 110008
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* C. Complaint Escalation Flowchart */}
        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>Complaint Escalation Flowchart</h2>
          <div className={styles.Flowchart}>
            <div className={`${styles.FlowNode} ${styles.FlowStart}`}>
              Customer has a Complaint
            </div>
            <div className={styles.FlowArrow} aria-hidden="true">
              <span className={styles.ArrowLine} />
              <span className={styles.ArrowHead}>▼</span>
            </div>

            <div className={`${styles.FlowNode} ${styles.FlowLevel}`}>
              <span className={styles.LevelTag}>Level 1</span>
              <h3 className={styles.LevelName}>Customer Support</h3>
              <ul className={styles.LevelDetails}>
                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:support@vintagefinance.in">
                    support@vintagefinance.in
                  </a>
                </li>
                <li>
                  <span>Phone:</span> <a href="tel:9899055381">9899055381</a>
                </li>
                <li>
                  <span>Expected Resolution:</span> Within 7 Working Days
                </li>
              </ul>
            </div>
            <div className={styles.FlowArrow} aria-hidden="true">
              <span className={styles.ArrowNote}>If not resolved</span>
              <span className={styles.ArrowLine} />
              <span className={styles.ArrowHead}>▼</span>
            </div>

            <div className={`${styles.FlowNode} ${styles.FlowLevel}`}>
              <span className={styles.LevelTag}>Level 2</span>
              <h3 className={styles.LevelName}>Mr. Ashish Bhasin</h3>
              <p className={styles.LevelDesignation}>Branch Manager</p>
              <ul className={styles.LevelDetails}>
                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:grievance@vintagefinance.in">
                    grievance@vintagefinance.in
                  </a>
                </li>
                <li>
                  <span>Phone:</span> <a href="tel:9899055381">9899055381</a>
                </li>
                <li>
                  <span>Office:</span> Vintage Credit &amp; Leasing Pvt. Ltd., 7,
                  30 West Patel Nagar, Patel Nagar, New Delhi – 110008
                </li>
                <li>
                  <span>Expected Resolution:</span> Within the next 7 Working
                  Days
                </li>
              </ul>
            </div>
            <div className={styles.FlowArrow} aria-hidden="true">
              <span className={styles.ArrowNote}>If still not resolved</span>
              <span className={styles.ArrowLine} />
              <span className={styles.ArrowHead}>▼</span>
            </div>

            <div className={`${styles.FlowNode} ${styles.FlowLevel}`}>
              <span className={styles.LevelTag}>Level 3</span>
              <h3 className={styles.LevelName}>Mr. Rahul Arora</h3>
              <p className={styles.LevelDesignation}>Nodal Officer</p>
              <ul className={styles.LevelDetails}>
                <li>
                  <span>Email:</span>{" "}
                  <a href="mailto:rahul.arora@vintagefinance.in">
                    rahul.arora@vintagefinance.in
                  </a>
                </li>
                <li>
                  <span>Phone:</span> <a href="tel:9811789595">9811789595</a>
                </li>
                <li>
                  <span>Resolution:</span> Complaints shall ordinarily be
                  resolved within 30 days from the date of receipt.
                </li>
              </ul>
            </div>
            <div className={styles.FlowArrow} aria-hidden="true">
              <span className={styles.ArrowNote}>
                If the customer remains dissatisfied
              </span>
              <span className={styles.ArrowLine} />
              <span className={styles.ArrowHead}>▼</span>
            </div>

            <div className={`${styles.FlowNode} ${styles.FlowRbi}`}>
              <h3 className={styles.LevelName}>Reserve Bank of India</h3>
              <p className={styles.LevelDesignation}>
                Integrated Ombudsman Scheme
              </p>
              <p className={styles.LevelDesignation}>
                Complaint Management System (CMS)
              </p>
              <a
                className={styles.RbiInlineLink}
                href={RBI_CMS_URL}
                target="_blank"
                rel="noreferrer"
              >
                {RBI_CMS_URL}
              </a>
            </div>
          </div>
        </section>

        {/* D. Complaint Resolution Timeline */}
        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>Complaint Resolution Timeline</h2>
          <div className={styles.TableWrap}>
            <table className={styles.Table}>
              <thead>
                <tr>
                  <th>Complaint Stage</th>
                  <th>Timeline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Complaint Acknowledgement</td>
                  <td>Within 2 Working Days</td>
                </tr>
                <tr>
                  <td>Level 1 Resolution</td>
                  <td>Within 7 Working Days</td>
                </tr>
                <tr>
                  <td>Escalated Complaint</td>
                  <td>Up to 30 Days</td>
                </tr>
                <tr>
                  <td>If still dissatisfied</td>
                  <td>Customer may approach RBI Integrated Ombudsman</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* E. Complaint Registration Form */}
        <section className={styles.Section}>
          <h2 className={styles.SectionTitle}>Complaint Registration Form</h2>
          <Formik
              initialValues={{
                fullName: "",
                mobile: "",
                email: "",
                loanNumber: "",
                category: "",
                description: "",
                captcha: "",
              }}
              validationSchema={validate}
              onSubmit={async (
                values,
                { resetForm, setSubmitting, setFieldError }
              ) => {
                setSubmitError("");
                setSubmitted(false);

                // Verify the code before doing anything else.
                if (values.captcha.trim().toUpperCase() !== captchaCode) {
                  setFieldError("captcha", "Incorrect code. Please try again.");
                  setCaptchaCode(generateCaptcha());
                  setSubmitting(false);
                  return;
                }

                const payload = { ...values };
                delete payload.captcha;

                try {
                  const response = await fetch(COMPLAINT_API, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  const data = await response.json().catch(() => ({}));
                  if (response.ok && data.success) {
                    resetForm();
                    setCaptchaCode(generateCaptcha());
                    setSubmitted(true);
                  } else {
                    setSubmitError(
                      data.message ||
                        "Something went wrong. Please try again later."
                    );
                  }
                } catch (err) {
                  setSubmitError(
                    "Unable to submit right now. Please check your connection and try again."
                  );
                } finally {
                  setSubmitting(false);
                }
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
              }) => (
                <form className={styles.Form} onSubmit={handleSubmit}>
                  <div className={styles.FormRow}>
                    <div className={styles.Field}>
                      <label htmlFor="fullName">Full Name *</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        value={values.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                      />
                      {errors.fullName && touched.fullName && (
                        <span className={styles.Error}>{errors.fullName}</span>
                      )}
                    </div>
                    <div className={styles.Field}>
                      <label htmlFor="mobile">Mobile Number *</label>
                      <input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={values.mobile}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="10 digit mobile number"
                      />
                      {errors.mobile && touched.mobile && (
                        <span className={styles.Error}>{errors.mobile}</span>
                      )}
                    </div>
                  </div>

                  <div className={styles.FormRow}>
                    <div className={styles.Field}>
                      <label htmlFor="email">Email Address *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="you@example.com"
                      />
                      {errors.email && touched.email && (
                        <span className={styles.Error}>{errors.email}</span>
                      )}
                    </div>
                    <div className={styles.Field}>
                      <label htmlFor="loanNumber">
                        Loan / Application Number (Optional)
                      </label>
                      <input
                        id="loanNumber"
                        name="loanNumber"
                        type="text"
                        value={values.loanNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="If applicable"
                      />
                    </div>
                  </div>

                  <div className={styles.Field}>
                    <label htmlFor="category">Complaint Category *</label>
                    <select
                      id="category"
                      name="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="">Select a category</option>
                      {complaintCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    {errors.category && touched.category && (
                      <span className={styles.Error}>{errors.category}</span>
                    )}
                  </div>

                  <div className={styles.Field}>
                    <label htmlFor="description">Complaint Description *</label>
                    <textarea
                      id="description"
                      name="description"
                      rows={5}
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Describe your complaint in detail"
                    />
                    {errors.description && touched.description && (
                      <span className={styles.Error}>{errors.description}</span>
                    )}
                  </div>

                  <div className={styles.Field}>
                    <label htmlFor="captcha">Security Check *</label>
                    <div className={styles.CaptchaRow}>
                      <div className={styles.CaptchaCode} aria-hidden="true">
                        {captchaCode}
                      </div>
                      <button
                        type="button"
                        className={styles.CaptchaRefresh}
                        title="Get a new code"
                        aria-label="Get a new code"
                        onClick={() => {
                          setCaptchaCode(generateCaptcha());
                          setFieldValue("captcha", "");
                        }}
                      >
                        ↻
                      </button>
                      <input
                        id="captcha"
                        name="captcha"
                        type="text"
                        className={styles.CaptchaInput}
                        value={values.captcha}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter the code shown"
                        autoComplete="off"
                      />
                    </div>
                    {errors.captcha && touched.captcha && (
                      <span className={styles.Error}>{errors.captcha}</span>
                    )}
                  </div>

                  {submitError && (
                    <div className={styles.SubmitError}>{submitError}</div>
                  )}
                  {submitted && (
                    <div className={styles.SuccessNote}>Form Submitted</div>
                  )}
                  <button
                    type="submit"
                    className={styles.SubmitBtn}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Complaint"}
                  </button>
                </form>
              )}
            </Formik>
        </section>

        {/* G. RBI Ombudsman */}
        <section className={`${styles.Section} ${styles.RbiSection}`}>
          <h2 className={styles.SectionTitle}>RBI Integrated Ombudsman</h2>
          <p className={styles.SectionLead}>
            If your complaint is not resolved within 30 days or you are not
            satisfied with the resolution provided by Vintage Credit &amp;
            Leasing Pvt. Ltd., you may lodge a complaint with the Reserve Bank of
            India under the Integrated Ombudsman Scheme through the RBI Complaint
            Management System (CMS).
          </p>
          <a
            className={styles.RbiBtn}
            href={RBI_CMS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Visit RBI CMS
          </a>
        </section>
      </div>
    </>
  );
};

export default Grievance;
