/* eslint-disable no-useless-escape */
//import { TextField } from "@material-ui/core";
import React from "react";
import Modal from "../SideModal/SideModal";
import styles from "./LoanApplication.module.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Formik } from "formik";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import * as Yup from "yup";
import axios from "../../axiosinstance";
import moment from "moment";
//import Logo from "../Logo/Logo";
//import { send } from "emailjs-com";

let crossBtn =
  "/images/loan-application/shape.webp";

let circle =
  "/images/loan-application/group-15331.webp";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        color: "#2194FF",
        height: 19,
        width: 9,
      },
      track: {
        background: "#B9F59D",
        borderRadius: 10,
        height: 7,
        color: "#B9F59D",
      },
      rail: {
        background: "#B9F59D",
        height: 7,
        color: "#B9F59D",
      },
      markLabel: {
        color: " #FFFFFF !important",
        marginTop: 5,
      },
      marked: {
        height: 25,
      },
    },
  },
});

const LoanApplication = ({ open, close, setToast }) => {
  const [value, setValue] = React.useState(500000);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [extra] = React.useState({
    id: "AV" + Date.now(),
    enquiryDate: moment().format("YYYY-MM-DD"),
    createdAt: moment().format(),
    updatedAt: moment().format(),
  });

  const handleUsername = (e) => {
    setName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const marks = [
    {
      value: 100000,
      label: "1L",
    },
    {
      value: 300000,
      label: "3L",
    },
    {
      value: 500000,
      label: "5L",
    },
    {
      value: 800000,
      label: "8L",
    },
    {
      value: 1000000,
      label: "10L",
    },
    {
      value: 1200000,
      label: "12L",
    },
    {
      value: 1500000,
      label: "15L",
    },
  ];

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

  // const sendEmail = async (template) => {
  //   await send(
  //     "service_v7y0kmn",
  //     "template_71iz8qq",
  //     template,
  //     "user_9UYAxKDnq2uVgwqzXxcfz"
  //   )
  //     .then((response) => {
  //       console.log("SUCCESS!", response.status, response.text, response);
  //     })
  //     .catch((err) => {
  //       console.log("FAILED...", err);
  //     });
  // };
  return (
    <Modal open={open} handleOpen={close}>
      <div className={styles.Pad}>
        <div className={styles.CrossDiv}>
          <img
            src={crossBtn}
            alt="cross-btn"
            className={styles.CrossImg}
            onClick={close}
          />
        </div>
        <div>
          <h1 className={styles.H1}>
            Loan Application <br /> Form.
          </h1>
          <p className={styles.P}>
            Please fill the correct information for faster approval.
          </p>
        </div>
        <div className={styles.SalariedEmp}>
          <div>
            <img src={circle} alt="circle" className={styles.CircleImg} />
          </div>
          <div>
            <h3 className={styles.H3}>Only for Salaried Employee</h3>
            <h6 className={styles.H6}>Minimum Salary Rs 30000 required.</h6>
          </div>
        </div>
        <div>
          <Formik
            enableReinitialize
            initialValues={{
              name: name,
              phone: phone,
              email: email,
              location: location,
              loanAmount: value,
              createdAt: extra.createdAt,
              updatedAt: extra.updatedAt,
              id: extra.id,
              enquiryDate: extra.enquiryDate,
            }}
            validationSchema={validate}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              let data = {
                name: values.name,
                phone: values.phone,
                email: values.email,
                createdAt: values.createdAt,
                id: values.id,
                updatedAt: values.updatedAt,
                enquiryDate: values.enquiryDate,
              };
              if (values.location.length > 0) {
                data.location = values.location;
              } else {
                data.location = "";
              }
              if (values.loanAmount > 0) {
                data.loanAmount = values.loanAmount;
              }
              // let template = {
              //   from_name: values.name,
              //   message: `This is my number:${values.phone}. I want to get loan ${values.loanAmount} and my location is ${values.location}`,
              //   to_name: "Vintage",
              // };

              let result = await axios.post("/consumer-leads.json", data);

              if (result.status === 200) {
                setToast(true);
                // sendEmail(template);
                setLocation("");
                setPhone("");
                setName("");
                setEmail("");
                setValue(500000);
                close();
              } else {
                setSubmitting(false);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <>
                {isSubmitting ? <LoadingComponent text="Saving" /> : null}
                <form onSubmit={handleSubmit} autoComplete="off">
                  <div className={styles.Name}>Name</div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className={styles.Input}
                    onChange={handleUsername}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                  />
                  {errors.name && touched.name && (
                    <div className={styles.inputFeedback}>{errors.name}</div>
                  )}
                  <div className={styles.Name}>PHONE NUMBER</div>
                  <input
                    type="number"
                    placeholder="Your mobile number"
                    className={styles.Input}
                    onChange={handlePhone}
                    onBlur={handleBlur}
                    value={values.phone}
                    name="phone"
                  />
                  {errors.phone && touched.phone && (
                    <div className={styles.inputFeedback}>{errors.phone}</div>
                  )}
                  <div className={styles.Name}>Email</div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className={styles.Input}
                    onChange={handleEmail}
                    onBlur={handleBlur}
                    value={values.email}
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <div className={styles.inputFeedback}>{errors.email}</div>
                  )}
                  <div className={styles.Location}>Location</div>
                  <div className={styles.Radiobtns}>
                    <input
                      type="radio"
                      className={styles.InputHide}
                      id="1"
                      value="delhi"
                      name="location"
                      onChange={handleLocation}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="1" className={styles.RadioLabel}>
                      <div className={styles.DisplayBox}>Delhi</div>
                    </label>

                    <input
                      type="radio"
                      className={styles.InputHide}
                      id="2"
                      value="gurgaon"
                      name="location"
                      onChange={handleLocation}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="2" className={styles.RadioLabel}>
                      <div className={styles.DisplayBox}>Gurgaon</div>
                    </label>

                    <input
                      type="radio"
                      className={styles.InputHide}
                      id="3"
                      value="noida"
                      name="location"
                      onChange={handleLocation}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="3" className={styles.RadioLabel}>
                      <div className={styles.DisplayBox}>Noida</div>
                    </label>
                    <input
                      type="radio"
                      className={styles.InputHide}
                      id="4"
                      value="faridabad"
                      name="location"
                      onChange={handleLocation}
                      onBlur={handleBlur}
                    />
                    <label htmlFor="4" className={styles.RadioLabel}>
                      <div className={styles.DisplayBox}>Faridabad</div>
                    </label>
                  </div>

                  <div className={styles.LoanAmount}>
                    <ThemeProvider theme={muiTheme}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography id="input-slider" gutterBottom>
                          Loan Amount
                        </Typography>
                        <Grid item>
                          <Input
                            className={styles.InputNumber}
                            margin="dense"
                            inputProps={{
                              min: 100000,
                              max: 1500000,
                              type: "number",
                              "aria-labelledby": "input-slider",
                            }}
                            onChange={handleInputChange}
                            value={values.loanAmount}
                          />
                        </Grid>
                      </div>

                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                          <Slider
                            value={values.loanAmount}
                            onChange={handleSliderChange}
                            min={100000}
                            max={1500000}
                            marks={marks}
                          />
                        </Grid>
                      </Grid>
                    </ThemeProvider>
                  </div>
                  <div className={styles.BtnHeader}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={styles.SubmitBtn}
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </>
            )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default LoanApplication;
