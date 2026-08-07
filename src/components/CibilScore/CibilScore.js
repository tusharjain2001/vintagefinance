//import { Container } from "@material-ui/core";
import { Formik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import classes from "./CibilScore.module.css";
import * as Yup from "yup";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import axios from "../../axiosinstance";
import { formatDate, formatISO } from "../../utils/date";

let personalLoan =
  "/images/section-1/per-loan.webp";

const CibilScore = ({ setToast }) => {
  const validate = Yup.object().shape({
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Enter 10 Digit Mobile No.")
      .min(10)
      .max(10)
      .required("Enter 10 Digit Mobile No."),
  });

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.vintagefinance.in/" />
      </Helmet>
      <div className={`${classes.Cibil} hero-bg`}>
        <div className={classes.Row}>
          <div className={classes.DoubleColumn}>
            <h1 className={classes.H1}>
              Your happiness does <br className={classes.Br} /> not have to wait
              for
              <br className={classes.Br} /> CIBIL score.
            </h1>
            <p className={classes.P}>
              Get instant personal loans for upto ₹15 lakhs with minimal{" "}
              <br className={classes.Br} />
              verification. Quick and hassle free.
            </p>

            <Formik
              initialValues={{
                phone: "",
                id: "AV" + Date.now(),
                enquiryDate: formatDate(),
                createdAt: formatISO(),
                updatedAt: formatISO(),
              }}
              validationSchema={validate}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                console.log(values);
                try {
                  const result = await axios.post("/subscribers.json", values);
                  console.log("res", result);
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
                isSubmitting,
                values,
                touched,
                handleSubmit,
                handleChange,
              }) => {
                return (
                  <>
                    {isSubmitting ? <LoadingComponent text="Saving" /> : null}
                    <form onSubmit={handleSubmit}>
                      <input
                        className={classes.Input}
                        type="number"
                        placeholder="Enter mobile number"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                      />

                      <button
                        disabled={isSubmitting}
                        className={classes.Btn}
                        type="submit"
                      >
                        Get a call back
                      </button>
                      {errors.phone && touched.phone && (
                        <div className={classes.inputFeedback}>
                          {errors.phone}
                        </div>
                      )}
                    </form>
                  </>
                );
              }}
            </Formik>
          </div>
          <div
            className={classes.Column}
            style={{ justifyContent: "flex-end" }}
          >
            <img
              src={personalLoan}
              alt="personal-loan"
              fetchpriority="high"
              className={classes.PersonalLoan}
              style={{ justifyContent: "flex-end" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CibilScore;
