import { createTheme, Input, Slider, ThemeProvider } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./EmiCalculator.module.css";
//import arrow from "../../assets/emi/down-arrow.webp";

const muiTheme = createTheme({
  overrides: {
    MuiSlider: {
      root: {
        "@media (max-width: 500px)": {
          width: "calc(100% - 6px)",
          overflowX: "visible",
        },
      },
      rail: {
        height: 5,
        borderRadius: 4,
        backgroundImage:
          "linear-gradient(90.21deg, #b9f59d 7.77%, #b9f59d 68.85%)",
        opacity: 0.5,
      },
      track: {
        background: "linear-gradient(90.21deg, #b9f59d 7.77%, #b9f59d 68.85%)",
        height: 5,
        borderRadius: 4,
      },
      thumb: {
        width: 6,
        height: 18,
        borderRadius: 4,
        // background: "#ffffff",
        color: "#ffffff",
        marginTop: "-6px",
        "@media (max-width: 500px)": {
          overflowY: "hidden",
          marginLeft: "0px",
        },
      },
    },
    MuiInputBase: {
      input: {
        paddingBottom: 0,
      },
    },
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: "none !important",
        },
        "&:after": {
          borderBottom: "none",
        },
      },
    },
  },
});

const initialInterest = 10.5;
const initialAmount = 100000;
const initialDuration = 12;

const maxInterest = 32;
const maxAmount = 100000000;
const maxDuration = 180;

const EmiCalculator = ({ mobile }) => {
  const [amount, setAmount] = useState(initialAmount);
  const [interest, setInterest] = useState(19.9);
  const [duration, setDuration] = useState(24);
  const handleSliderAmount = (event, newValue) => {
    setAmount(newValue);
  };
  const handleSliderRate = (event, newValue) => {
    setInterest(newValue);
  };
  const handleSliderDuration = (event, newValue) => {
    setDuration(newValue);
  };

  const handleInputAmount = (event) => {
    setAmount(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleInputRate = (event) => {
    setInterest(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleInputDuration = (event) => {
    setDuration(event.target.value === "" ? "" : Number(event.target.value));
  };

  const [results, setResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    totalInterest: "",
    isResult: false,
  });

  function calculateEmi(amount, interest, months) {
    const userAmount = Number(amount);
    const calculatedInterest = Number(interest) / 100 / 12;
    const calculatedPayments = Number(months);
    // const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    // const monthly = (userAmount * x * calculatedInterest) / (x - 1);
    const totalInterest = userAmount * calculatedInterest * calculatedPayments;
    const monthly = (totalInterest + userAmount) / calculatedPayments;

    if (isFinite(monthly)) {
      const monthlyPaymentCalculated = Math.ceil(monthly);
      const totalPaymentCalculated = Math.round(monthly * calculatedPayments);
      const totalInterestCalculated = Math.ceil(
        monthly * calculatedPayments - userAmount
      );

      // Set up results to the state to be displayed to the user
      setResults({
        monthlyPayment: monthlyPaymentCalculated,
        totalPayment: totalPaymentCalculated,
        totalInterest: totalInterestCalculated,
        isResult: true,
      });
    }
  }

  const [amtErr, setAmtErr] = useState(null);
  const [intErr, setIntErr] = useState(null);
  const [durErr, setDurErr] = useState(null);

  useEffect(() => {
    if (
      amount >= initialAmount &&
      amount <= maxAmount &&
      interest >= initialInterest &&
      interest <= maxInterest &&
      duration >= initialDuration &&
      duration <= maxDuration
    ) {
      calculateEmi(amount, interest, duration);
    }
    if (amount < initialAmount || amount > maxAmount) {
      //console.log(amount);
      setAmtErr("Amount issue");
    } else {
      setAmtErr(null);
    }
    if (interest < initialInterest || interest > maxInterest) {
      // console.log("in interest");
      setIntErr("Interest issue");
    } else {
      setIntErr(null);
    }
    if (duration < initialDuration || duration > maxDuration) {
      setDurErr("duration issue");
    } else {
      setDurErr(null);
    }
  }, [amount, interest, duration]);

  const convert = (amt) => {
    return amt.toLocaleString("en-IN");
  };

  //console.log(amtErr, intErr, durErr, typeof interest);

  return (
    <div className={styles.container}>
      {/* <div className={styles.upper}>
        <div className={styles.left}>
          <h2 className={styles.h2}>
            Calculate EMIs Easily and check everythink you need to know
            <img className={styles.arrow} src={arrow} alt="arrow" />
          </h2>
        </div>
        <div className={styles.right}></div>
      </div> */}
      <div className={styles.lower}>
        <div className={styles.lowerContent}>
          <h5 className={styles.h5}>Calculate Personal Loan EMI</h5>
          <div className={styles.grid}>
            <ThemeProvider theme={muiTheme}>
              <div className={styles.amount}>
                <div className={styles.header}>
                  <h4 className={styles.upperHeader}>Loan Amount</h4>
                  {/* <h4>Rs. {convert(amount)}</h4> */}
                  <div className={styles.wrap}>
                    {amtErr && (
                      <div className={styles.intErr}>
                        Loan amount should not be greater than Rs 100000000 and
                        Loan amount should not be lesser than Rs 100000
                      </div>
                    )}
                    <div className={styles.inputWrapper}>
                      <p className={styles.p}>Rs.</p>
                      <Input
                        margin="dense"
                        inputProps={{
                          min: initialAmount,
                          max: maxAmount,
                          type: "number",
                        }}
                        onChange={handleInputAmount}
                        value={amount}
                      />
                    </div>
                  </div>
                </div>
                <Slider
                  value={amount}
                  onChange={handleSliderAmount}
                  min={initialAmount}
                  max={maxAmount}
                  step={1}
                />
                <div className={styles.footer}>
                  <h4>
                    <span>Min- </span>₹ 1,00,000
                  </h4>
                  <h4>
                    <span>Max- </span>₹ 10,00,00,000
                  </h4>
                </div>
              </div>
            </ThemeProvider>
            <div className={styles.content}>
              <div className={styles.boxFlex}>
                <div className={styles.box}>
                  <h5 className={styles.boxHeading}>EMI Amount</h5>
                </div>
                <div className={styles.boxResult}>
                  <h3 className={styles.finalAmount}>
                    ₹ {convert(results.monthlyPayment)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <ThemeProvider theme={muiTheme}>
              <div className={styles.rate}>
                <div className={styles.header}>
                  <h4>Interest Rate</h4>
                  {/* <h4>{interest}% p.a.</h4> */}
                  <div className={styles.wrap}>
                    {intErr && (
                      <div className={styles.intErr}>
                        Rate of interest should not be greater than 32% and Rate
                        of interest should not be lesser than 10.5%
                      </div>
                    )}
                    <div className={styles.inputRate}>
                      <Input
                        margin="dense"
                        inputProps={{
                          min: initialInterest,
                          max: maxInterest,
                          type: "number",
                        }}
                        onChange={handleInputRate}
                        value={interest}
                      />
                      <p className={styles.p}>% p.a.</p>
                    </div>
                  </div>
                </div>
                <Slider
                  value={interest > 0 ? interest : 0}
                  onChange={handleSliderRate}
                  min={initialInterest}
                  max={maxInterest}
                  step={0.01}
                />
                <div className={styles.footer}>
                  <h4>10.5% p.a.</h4>
                  <h4>32% p.a.</h4>
                </div>
              </div>
            </ThemeProvider>
            <div className={styles.content}>
              <div className={styles.boxFlex}>
                <div className={styles.box}>
                  <h5 className={styles.boxHeading}>
                    Total Payment <span>Principle + Interest</span>
                  </h5>
                </div>
                <div className={styles.boxResult}>
                  <h3 className={styles.finalAmount}>
                    ₹ {convert(results.totalPayment)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.grid}>
            <ThemeProvider theme={muiTheme}>
              <div className={styles.duration}>
                <div className={styles.header}>
                  <h4>Loan Tenure</h4>
                  {/* <h4>{duration} Months</h4> */}
                  <div className={styles.wrap}>
                    {durErr && (
                      <div className={styles.intErr}>
                        Loan tenure should not be greater than 180 months and
                        Loan tenure should not be lesser than 12 months
                      </div>
                    )}
                    <div className={styles.inputTenure}>
                      <Input
                        margin="dense"
                        inputProps={{
                          min: initialDuration,
                          max: maxDuration,
                          type: "number",
                        }}
                        onChange={handleInputDuration}
                        value={duration}
                      />
                      <p className={styles.p}>Months</p>
                    </div>
                  </div>
                </div>
                <Slider
                  value={duration}
                  onChange={handleSliderDuration}
                  min={initialDuration}
                  max={maxDuration}
                  step={1}
                />
                <div className={styles.footer}>
                  <h4>12 Months</h4>
                  <h4>180 Months</h4>
                </div>
              </div>
            </ThemeProvider>
            <div className={styles.content}>
              <div className={styles.boxFlex}>
                <div className={styles.box}>
                  <h5 className={styles.boxHeading}>Total Interest Payable</h5>
                </div>
                <div className={styles.boxResult}>
                  <h3 className={styles.finalAmount}>
                    ₹ {convert(results.totalInterest)}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={styles.bottom}>
          <h6 className={styles.disclaimer}>
            <span>Disclaimer</span> Please note that the calculator has been
            created to give you an approximate understanding and should not be
            considered as absolute.Based on your Loan tenure and interest rates,
            the calculator will also help you to best understand the ratio of
            the principal amount to the interest due. The amount of interest in
            your EMI will be greater in the initial months and will eventually
            reduce with each and every EMI paid. Thus, whilst your EMI amount
            remains the same, the ratio of principal to interest in your EMI
            will change over a period. With each successive payment, you will
            pay more towards the principal and less in interest.
          </h6>
        </div> */}
      </div>
    </div>
  );
};

export default EmiCalculator;
