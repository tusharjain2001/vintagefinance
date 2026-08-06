/* eslint-disable no-useless-escape */
import { Field, Form, Formik, getIn } from "formik";
import React, { useState } from "react";
import styles from "./LandingForm.module.css";
import axios from "../../axiosinstance";
import moment from "moment";
import * as Yup from "yup";
import ThankYou from "../ThankYou/ThankYou";

const LandingForm = ({ inputStyle, privacyStyle }) => {
  const [final, setFinal] = useState(false);
  const [extra] = useState({
    id: "AV" + Date.now(),
    enquiryDate: moment().format("YYYY-MM-DD"),
    createdAt: moment().format(),
    updatedAt: moment().format(),
  });
  const inititalValues = {
    name: "",
    phone: "",
    email: "",
    location: "",
    from: "landing-page-1",
    source: "",
    createdAt: extra.createdAt,
    updatedAt: extra.updatedAt,
    id: extra.id,
    enquiryDate: extra.enquiryDate,
  };

  function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        border: "1px solid red",
      };
    }
  }

  const validate = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Enter 10 Digit Mobile No.")
      .min(10)
      .max(10)
      .required("Enter 10 Digit Mobile No."),
    name: Yup.string().min(2).max(40).required("Enter 2 to 40 characters"),
    email: Yup.string()
      .matches(
        /^[\w!.%+\-]+@[\w\-]+(?:\.[\w\-]+)+$/,
        "Please enter valid email id."
      )
      .required("Email is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    let data = {
      name: values.name,
      phone: values.phone,
      email: values.email,
      from: values.from,
      createdAt: values.createdAt,
      id: values.id,
      updatedAt: values.updatedAt,
      enquiryDate: values.enquiryDate,
    };
    if (!values.location) {
      data.location = "";
    } else {
      data.location = values.location;
    }
    let queryUrl = window.location.href;
    if (queryUrl.search("utm_source") > 0) {
      let arr = queryUrl.split("?");
      data.source = arr[1];
    } else {
      data.source = "No UTM Source";
    }
    try {
      let result = await axios.post("/consumer-leads.json", data);
      if (result.status === 200) {
        setFinal(true);
        //setToast(true);
        resetForm();
        setSubmitting(false);
      }
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      {!final ? (
        <Formik
          initialValues={inititalValues}
          validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {({ errors, isSubmitting }) => (
            <Form>
              <div className={styles.inputs} style={inputStyle}>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your name"
                  style={getStyles(errors, "name")}
                />
                <Field
                  type="text"
                  name="phone"
                  placeholder="Mobile No"
                  style={getStyles(errors, "phone")}
                />
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  style={getStyles(errors, "email")}
                />
                <Field as="select" name="location">
                  <option value="" disabled>
                    Location
                  </option>
                  <option value="delhi">Delhi</option>
                  <option value="gurgaon">Gurgaon</option>
                  <option value="noida">Noida</option>
                  <option value="faridabad">Faridabad</option>
                </Field>
              </div>
              <div className={styles.privacy}>
                <div className={styles.icon}>
                  <LockIcon />
                </div>
                <p style={privacyStyle}>
                  By clicking the button below, you agree to our Terms of
                  Service and acknowledge our Privacy Policy.
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.btn}
              >
                Apply Now
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <ThankYou />
      )}
    </React.Fragment>
  );
};

export default LandingForm;

const LockIcon = () => (
  <svg
    width="23"
    height="24"
    viewBox="0 0 23 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.25"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.98154 13.1776C3.13507 11.0535 4.80485 9.40441 6.93019 9.26932C8.2012 9.18853 9.75531 9.125 11.5 9.125C13.2447 9.125 14.7988 9.18853 16.0698 9.26932C18.1951 9.40441 19.8649 11.0535 20.0185 13.1776C20.0804 14.0349 20.125 14.9564 20.125 15.8333C20.125 16.7103 20.0804 17.6318 20.0185 18.4891C19.8649 20.6131 18.1951 22.2623 16.0698 22.3973C14.7988 22.4781 13.2447 22.5417 11.5 22.5417C9.75531 22.5417 8.20121 22.4781 6.93019 22.3973C4.80485 22.2623 3.13507 20.6131 2.98154 18.4891C2.91958 17.6318 2.875 16.7103 2.875 15.8333C2.875 14.9564 2.91958 14.0349 2.98154 13.1776Z"
      fill="#12131A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.457 16.5379C13.0299 16.2065 13.4154 15.587 13.4154 14.8776C13.4154 13.8191 12.5572 12.9609 11.4987 12.9609C10.4402 12.9609 9.58203 13.8191 9.58203 14.8776C9.58203 15.587 9.96747 16.2065 10.5404 16.5379V17.7526C10.5404 18.2819 10.9694 18.7109 11.4987 18.7109C12.028 18.7109 12.457 18.2819 12.457 17.7526V16.5379Z"
      fill="#12131A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.70703 6.2526C6.70703 3.60624 8.85233 1.46094 11.4987 1.46094C14.1451 1.46094 16.2904 3.60624 16.2904 6.2526V10.0859C16.2904 10.6152 15.8613 11.0443 15.332 11.0443C14.8028 11.0443 14.3737 10.6152 14.3737 10.0859V6.2526C14.3737 4.66479 13.0865 3.3776 11.4987 3.3776C9.91088 3.3776 8.6237 4.66479 8.6237 6.2526V10.0859C8.6237 10.6152 8.19464 11.0443 7.66536 11.0443C7.13609 11.0443 6.70703 10.6152 6.70703 10.0859V6.2526Z"
      fill="#12131A"
    />
  </svg>
);
