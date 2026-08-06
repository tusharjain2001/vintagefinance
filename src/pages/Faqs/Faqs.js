import React from "react";
import { Helmet } from "react-helmet";
import ApplyLoanCard from "../../components/ApplyLoanCard/ApplyLoanCard";
import Faq from "../../components/Faq/Faq";

const Faqs = () => {
  return (
    <>
      <Helmet>
        <title>
          Fast Cash Loans | personal loans for bad credit | Unsecured Personal
          Loan
        </title>
        <meta
          name="description"
          content=" Get Fast Cash Loans Loan in New Delhi NCR. Apply Online for personal loans for bad credit.Unsecured Personal Loan./"
        />
        <meta
          name="keywords"
          content="GGet Instant Approval Loan in Delhi, Loan Provider in New Delhi NCR, new delhi loan provider, personal loan in delhi. ./"
        />
      </Helmet>
      <Faq mt={{ marginTop: 0 }} />
      <ApplyLoanCard />
    </>
  );
};

export default Faqs;
