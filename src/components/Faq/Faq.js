import React, { useState, useEffect } from "react";
import classes from "./Faq.module.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

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

const cibilAccord = [
  {
    heading: "Who is a CIBIL defaulter?",
    subHeading:
      "A CIBIL defaulter is an individual who has failed to repay their loans or credit card dues on time, leading to a negative impact on their CIBIL score.",
  },
  {
    heading: "How to get a personal loan without a CIBIL score check in Delhi?",
    subHeading:
      "It is not possible to get a personal loan without a CIBIL score check. But you can get a personal loan without checking your CIBIL score at Vintage Finance. Simply contact us to know more about personal loans for CIBIL defaulters.",
  },
  {
    heading: "Can a CIBIL defaulter get a personal loan in Delhi?",
    subHeading: `It is challenging for a CIBIL defaulter to get a personal loan in Delhi or any other city in India. But Vintage finance helps you to avial personal loan without CIBIL check. This means its possible to avail of personal loans for CIBIL defaulters in Delhi with Vintage Finance.`,
  },
  {
    heading: "Can CIBIL Defaulter Get a Loan?",
    subHeading:
      "Yes of course if you are a CIBIL defaulter then you can still access the loans through specialized financial institutions including vintage finance.",
  },
  {
    heading: "How To Remove Your Name from CIBIL Defaulter?",
    subHeading:
      "To remove your name from the CIBIL defaulter list it is very important for you to settle all the outstanding dues rectify your errors in the credit report and maintain consistent and timely payments moving forward.",
  },
];

const cibilAccord1 = [
  {
    heading: "Can I get a personal loan with a very low CIBIL score in Delhi?",
    subHeading:
      "Yes, some private lenders in Delhi like vintage finance offer personal loans to individuals with a low CIBIL score.",
  },
  {
    heading: "How to get a personal loan for a CIBIL score of 550 or less?",
    subHeading:
      "If you have a CIBIL score of 550 or less, you still be able to get a personal loan from Vintage Finance in Delhi.",
  },
  {
    heading:
      "Why is vintage finance the best option for personal loans without cibil?",
    subHeading:
      "Vintage finance offers customized solutions flexible eligibility criteria quick processing competitive interests and transfer and practices making it a reliable choice for you if you have poor credit score.",
  },
  {
    heading: "How To Get Personal Loan Without CIBIL Verification?",
    subHeading:
      "If you want to get a personal loan without CIBIL verification, then you can choose vintage finance using different criteria beyond CIBIL scores. It makes it very easy for you to get a personal loan with a poor credit score.",
  },
];

const personalLoanAccord = [
  {
    heading: "How does a personal loan benefit me?",
    subHeading:
      "We offer a Personal Loan in Delhi for any of your personal/business need at a very attractive rate of interest that carries the lowest EMI at the time of Personal Loan repayment.",
  },
  {
    heading: "Who can apply for a Personal Loan in Delhi?",
    subHeading:
      "Currently, we only offer personal loans in Delhi only for salaried individuals who live in Delhi NCR with a minimum salary of 30,000 INR. ",
  },
  {
    heading: "What is a Personal Loan EMI?",
    subHeading: `EMI stands for "Equated Monthly Installments." The installment comprises principal and interest components. EMI provides the ease and benefit of paying back your loan amount over some time through fixed monthly payments.`,
  },
  {
    heading:
      "Why is vintage finance the best option for personal loans in Delhi?",
    subHeading:
      "Vintage Finance is your best bet because we offer flexible repayment terms minimum processing fees quick dispersal and amazing customer service. Furthermore you can expect customized loan solutions tailor to your needs.",
  },
  {
    heading: "How much personal loan can I avail in Delhi NCR?",
    subHeading:
      "The maximum loan amount you can avail will depend on different factors like your income credit score repayment capacity and vintage finance eligibility criteria. Generally you can expect loans up to 15,00,000 but the final sanction amount might vary.",
  },
];

const personalLoanAccord1 = [
  {
    heading: "How many days does it take to approve my Loan?",
    subHeading: "It will take 5-7 working days to approve your Loan. ",
  },
  {
    heading: "Who can avail of Personal Loan From Vintage Finance?",
    subHeading:
      "Any salaried individual with a minimum salary of 30000 can apply for a personal loan in Delhi at vintage finance.",
  },
  {
    heading: "What are the repayment options available for a personal loan?",
    subHeading:
      "You can repay your loan amount with easy monthly installments.",
  },
  {
    heading:
      "Are foreclosure facilities available for a personal loan at Vintage Finance?",
    subHeading:
      "Yes vintage finance offers foreclosure facilities allowing you to repay the loan amount before the loan tenure ends.",
  },
];

const privateLoanNoidaAccord = [
  {
    heading: "How does a personal loan benefit me?",
    subHeading:
      "We offer Personal Loan in Noida for any of your personal/business need at a very attractive rate of interest that carries the lowest EMI at the time of Personal Loan repayment.",
  },
  {
    heading: "Who can apply for a Personal Loan in Noida?",
    subHeading:
      "Currently, we only offer personal loans in Noida only for salaried individuals who live in Noida with a minimum salary of 30,000 INR.",
  },
  {
    heading: "What is a Personal Loan EMI?",
    subHeading: `EMI stands for "Equated Monthly Installments." The installment comprises principal and interest components. EMI provides the ease and benefit of paying back your loan amount over some time through fixed monthly payments.`,
  },
];
const privateLoanNoidaAccord1 = [
  {
    heading: "How many days does it take to approve my personal loan in Noida?",
    subHeading: "It will take 5-7 working days to approve your Loan.",
  },
  {
    heading: "Who can avail of Personal Loan in Noida From Vintage Finance?",
    subHeading:
      "Any salaried individual with a minimum salary of 30000 can apply for a personal loan in Delhi at vintage finance.",
  },
  {
    heading: "What are the repayment options available for a personal loan?",
    subHeading:
      "You can repay your loan amount with easy monthly installments.",
  },
];

const privateLoanDelhiAccord = [
  {
    heading: "How do private financers in Delhi benefit me?",
    subHeading:
      "We offer private loans for your personal or business needs at very attractive interest rates that carry the lowest EMI when you repay your private loan.",
  },
  {
    heading:
      "Who can avail of personal loans from private money lenders in Delhi?",
    subHeading:
      "Private loan at vintage finance is currently available for salaried individuals who live in Delhi NCR with a minimum monthly salary of 30,000 per month.",
  },
  {
    heading:
      "How long does it take to get approval for a personal loan from private financers?",
    subHeading: `If you meet the eligibility criteria, your loan will be approved within 5-7 working days.`,
  },
];
const privateLoanDelhiAccord1 = [
  {
    heading: "Who can avail of personal loans from private financers in Delhi?",
    subHeading:
      "A salaried or self-employed person can avial personal loan from private money lenders in Delhi. Still, at vintage finance, we only offer private loans for salaried individuals with a minimum monthly salary of 30,000 rupees.",
  },
  {
    heading:
      "What is the repayment schedule offered by private money lenders in Delhi?",
    subHeading:
      "We offer easy monthly installment options at vintage finance to repay your loan.",
  },
  {
    heading:
      "I am an existing customer. Can I avail of another loan from private money lenders? ",
    subHeading:
      "Yes, you need any approval based on your eligibility criteria.",
  },
];

const dataAccord = [
  {
    heading: "How does Personal Loan benefit me?",
    subHeading:
      " We offer Personal Loan for any of your personal/business need at very attractive rate of interest that carries lowest EMI at the time of Personal Loan repayment.",
  },
  {
    heading: "Who can apply for Personal Loan?",
    subHeading:
      "Personal Loan is currently available for salaried individuals only who lives in DELHI/NCR & having Minimum New Monthly Salary Income of INR 30,000/- (per month).",
  },
  {
    heading: "What is an EMI?",
    subHeading: `EMI stands for "Equated Monthly Installments". The installment comprises of principal and interest component. EMI provides you with ease and benefit of paying back your loan amount in over a period of time through fixed monthly payments.`,
  },
  {
    heading:
      "How many days does it take to approve my loan against the property?",
    subHeading: "It takes up to 5-7 working days to approve your loan.",
  },
  {
    heading: "Who can avail LAP From Vintage Finance?",
    subHeading:
      "Any salaried or self-employed individual can apply for a loan against property in Delhi at vintage finance.",
  },
];

const dataAccord1 = [
  {
    heading: "What is repayment schedule?",
    subHeading:
      "Repayment schedule provides the amount of each EMI, due dates and breakup between principal and interest components. It also provides the outstanding principal after realization of each EMI.",
  },
  {
    heading: "Are there any special schemes available for me?",
    subHeading:
      "Special schemes are available from time to time. You should get in touch with our representative to get suitable scheme.",
  },
  {
    heading: "I am an existing customer, can I apply for another loan?",
    subHeading:
      "Yes. However, any approval will be based on your eligibility criteria.",
  },
  {
    heading: "What repayment options are available at vintage finance?",
    subHeading: "You can repay your loan amount with easy monthly instalments.",
  },
];

const Faq = (props) => {
  const classesMi = useStyles();
  const [heading, setHeading] = useState("Frequently asked questions ?");
  const [faqLeftList, setFaqLeftList] = useState(dataAccord);
  const [faqRightList, setFaqRightList] = useState(dataAccord1);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === "/loan-against-property-delhi.html") {
      setHeading("FAQs About Property Loan in Delhi, NCR");
    } else if (
      pathname?.toLowerCase() ===
      "/personal-loan-low-cibil-defaulter-delhi.html"
    ) {
      setHeading("FAQs - Personal Loan For CIBIL Defaulter ");
      setFaqLeftList(cibilAccord);
      setFaqRightList(cibilAccord1);
    } else if (pathname === "/personal-loan-in-delhi.html") {
      setHeading("FAQs - Personal Loan Providers in Delhi.");
      setFaqLeftList(personalLoanAccord);
      setFaqRightList(personalLoanAccord1);
    } else if (
      pathname ===
      "/instant-personal-private-loan-financer-companies-delhi.html"
    ) {
      setHeading("FAQs About Private Finance Companies in Delhi");
      setFaqLeftList(privateLoanDelhiAccord);
      setFaqRightList(privateLoanDelhiAccord1);
    } else if (pathname === "/personal-loan-noida.html") {
      setHeading("FAQs : Private Loan in Noida");
      setFaqLeftList(privateLoanNoidaAccord);
      setFaqRightList(privateLoanNoidaAccord1);
    }
  }, [pathname]);
  return (
    <>
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
              {faqLeftList?.map((data) => (
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
              {faqRightList?.map((data) => (
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
    </>
  );
};

export default Faq;
