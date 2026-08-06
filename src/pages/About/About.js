import React from "react";
import { Helmet } from "react-helmet";
import AboutUs from "../../components/AboutUs/AboutUs";
import ApplyLoanCard from "../../components/ApplyLoanCard/ApplyLoanCard";
import Faq from "../../components/Faq/Faq";

const About = ({ open }) => {
  return (
    <>
      <Helmet>
        <title>
          nbfc in Delhi | Quick and Cash Cheapest loans in Delhi | Low Cibil
          Score Personal Loan Delhi
        </title>
        <link rel="canonical" href="https://www.vintagefinance.in/about_us.html" />
        <meta
          name="keywords"
          content="Loan Service Providers in Delhi, Quick loans in Delhi, Cash loans in Delhi. New Delhi personal loan, nbfc in Delhi, Low Cibil Score Personal Loan Delhi./"
        />
       
        <meta
          name="description"
          content="Quick and Cash Cheapest loans in Delhi. Vintage Finance is a reputed personal loan company in Delhi, offering  Low Cibil Score Personal Loan at lowest interest rate. Call: 91-11-45137325./"
        />
      </Helmet>
      <AboutUs open={open} />
      <ApplyLoanCard open={open} />
      <Faq />
    </>
  );
};

export default About;
