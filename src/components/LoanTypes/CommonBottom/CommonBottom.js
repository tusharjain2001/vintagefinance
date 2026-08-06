import React from "react";
import ApplyLoanCard from "../../ApplyLoanCard/ApplyLoanCard";
import Faq from "../../Faq/Faq";
import Rating from "../../Rating/Rating";

const CommonBottom = ({ mobile, open }) => {
  return (
    <>
      <Rating mobile={mobile} open={open} />
      <ApplyLoanCard open={open} />
      <Faq />
    </>
  );
};

export default CommonBottom;
