import React, { useState } from "react";
import classes from "./LandingFaq.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 0",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  acc: {
    backgroundColor: "#F3F6F1",
    padding: "40px 0",
    width: "90%",
    boxShadow: "none",
    borderBottom: "1px solid #1C2B57",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px",
    "&:last-child": {
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px",
    },
  },
  pad: {
    padding: "0 0",
  },
}));

const muiTheme = createTheme({
  overrides: {
    MuiAccordionSummary: {
      root: {
        height: "100% !important",
        width: "100% !important",
      },
    },
  },
});

const LandingFaq = (props) => {
  const dataAccord = [
    {
      heading: "Who can apply for Personal Loan",
      subHeading:
        "Personal Loan is currently available for salaried individuals only who lives in DELHI/NCR & having Minimum New Monthly Salary Income of INR 30,000/- (per month).",
    },
    {
      heading: "How many days does it take to approve my loan?",
      subHeading:
        "After submitting all documents it may take up to 5-7 working days to approve your loan.",
    },
  ];

  const dataAccord1 = [
    {
      heading: "I am an existing customer, can I apply for another loan?",
      subHeading:
        "Yes. However, any approval will be based on your eligibility criteria.",
    },
    {
      heading: "What repayment options are available for the loan?",
      subHeading:
        "You can repay your loan amount with easy monthly instalments.",
    },
  ];

  const classesMi = useStyles();
  const [heading] = useState("Frequently asked questions ?");

  return (
    <ThemeProvider theme={muiTheme}>
      <div className={classesMi.root} style={props.mt}>
        <div className={classes.Faq}>
          <div className={classes.Mb}>
            <h2 className={classes.H2}>{heading}</h2>
            <p className={classes.P}>
              To help you with your decision, we’ve compiled a list of
              frequently asked questions and answers regarding personal loan.
            </p>
          </div>
          <div className={classes.Row}>
            <div className={classes.Column}>
              {dataAccord.map((data) => (
                <Accordion key={data.heading} className={classesMi.acc}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classesMi.pad}
                  >
                    <h3 className={classes.H5}>{data.heading}</h3>
                  </AccordionSummary>
                  <AccordionDetails key={data.id}>
                    <h6 className={classes.H6}> {data.subHeading}</h6>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
            <div className={classes.Column}>
              {dataAccord1.map((data) => (
                <Accordion key={data.heading} className={classesMi.acc}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classesMi.pad}
                  >
                    <h3 className={classes.H5}>{data.heading}</h3>
                  </AccordionSummary>
                  <AccordionDetails key={data.id}>
                    <h6 className={classes.H6}> {data.subHeading}</h6>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default LandingFaq;
