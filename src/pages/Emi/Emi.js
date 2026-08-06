import React from "react";
import ApplyLoan from "../../components/ApplyLoan/ApplyLoan";
import Cards from "../../components/Cards/Cards";
import Disclosure from "../../components/Disclosure/Disclosure";
import EmiCalculator from "../../components/EmiCalculator/EmiCalculator";
import LandingFaq from "../../components/LandingFaq/LandingFaq";
import PersonalLoanDetails from "../../components/PersonalLoanDetails/PersonalLoanDetails";
import PersonalLoanOnline from "../../components/PersonaLoanOnline/PersonalLoanOnline";
import Prepayment from "../../components/Prepayment/Prepayment";
import TakeLoan from "../../components/TakeLoan/TakeLoan";

const Emi = ({ open, mobile, setToast }) => {
  return (
    <div>
      <TakeLoan setToast={setToast} />
      <EmiCalculator mobile={mobile} />
      <PersonalLoanOnline />
      <Disclosure setToast={setToast} />
      <Cards />
      <PersonalLoanDetails />
      <Prepayment />
      <ApplyLoan />
      <TakeLoan setToast={setToast} />
      <LandingFaq />
    </div>
  );
};

export default Emi;
