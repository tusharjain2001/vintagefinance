import React from "react";
import { Helmet } from "react-helmet";
import ApplyLoanCard from "../../components/ApplyLoanCard/ApplyLoanCard";
import Faq from "../../components/Faq/Faq";
import PersonalLoan from "../../components/PersonalLoan/PersonalLoan";

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Vintage Finance</title>
        <link rel="canonical" href="https://www.vintagefinance.in/services.html"/>
      </Helmet>
      <PersonalLoan />
      <ApplyLoanCard />s
      <Faq />
    </>
  );
};

export default ServicesPage;
