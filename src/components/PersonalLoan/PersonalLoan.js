import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  earlySalaryLoan,
  loanAgainstProperty,
  personalLoan,
  twoWheelerLoan,
} from "../../App";
import EmiCalculator from "../EmiCalculator/EmiCalculator";
import classes from "./PersonalLoan.module.css";

let personalLoanCard =
  "/images/section-2/newcards/group-15217.webp";

let earlySalaryCard =
  "/images/section-2/newcards/group-15071.webp";

// let homeLoanCard =
//   "/images/section-2/newcards/group-15075.webp";

let propertyLoanCard =
  "/images/section-2/newcards/group-15219.webp";

let twoWheelerCard =
  "/images/section-2/cards/group-15552.webp";

let marriageLoan =
  "/images/section-2/loan-type/marriage-loan.webp";
// let carLoan =
//   "/images/section-2/loan-type/car-loan.webp";

let debtLoan =
  "/images/section-2/loan-type/debt-loan.webp";

// let educationLoan =
//   "/images/section-2/loan-type/education-loan.webp";

// let homeLoanImage =
//   "/images/section-2/loan-type/home-loan.webp";

// let laptopLoan =
//   "/images/section-2/loan-type/laptop-loan.webp";

let medicalLoan =
  "/images/section-2/loan-type/medical-loan.webp";

let mobileLoan =
  "/images/section-2/loan-type/mobile-loan.webp";

let twoWheelerLoanImage =
  "/images/section-2/loan-type/scooter-loan.webp";

// let travelLoan =
//   "/images/section-2/loan-type/travel-loan.webp";

let personalLoanMb =
  "/images/section-2/mobile-images/group-15226.webp";

let twoWheelerLoanMb =
  "/images/section-2/mobile-images/group-15553.webp";

let propertyLoanMb =
  "/images/section-2/mobile-images/lp.webp";

// let homeLoanMb =
//   "/images/section-2/mobile-images/hm-ln.webp";

let earlyLoanMb =
  "/images/section-2/mobile-images/el.webp";

const PersonalLoan = ({ open, close }) => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div className={classes.PersonalLoan} id={"loan"}>
      <div>
        <h2 className={classes.H2}>
          Get a <br className={classes.BrWe} /> pre-approved personal
          <br className={classes.BrMb} /> loan upto ₹15 lakhs
          <br className={classes.BrWe} /> in just <br /> 5 minutes.
        </h2>
        <p className={classes.P}>
          Vintage Finance offers instant short-term loans in order to make your
          life simple.
          <br className={classes.BrMb} /> We have innovative solutions to limit
          you from facing a money crunch. We <br className={classes.BrMb} />{" "}
          ensure that our customers have sufficient funds to shop, socialize,
          travel <br className={classes.BrMb} /> and pay their bills on time
          with their instant loans.
        </p>
      </div>
      <div className={classes.LoanProducts}>
        <div>
          <h3 className={classes.H5}>Explore our loan products</h3>
          <h4 className={classes.H6}>
            You can get a loan against property, personal loans for domestic or
            international <br className={classes.BrMb} /> vacation, wedding, to
            buy a latest gadget, higher education, purchase of vehicle
            <br className={classes.BrMb} /> or even home renovation. Vintage
            Finance personal loans will help you fulfil your{" "}
            <br className={classes.BrMb} /> dreams at in 3 quick steps.
          </h4>
        </div>
        <div>
          <button className={classes.Btn}>Explore other loan products</button>
          <button
            className={classes.Btn}
            style={{ background: "#B9F59D", marginTop: "31px" }}
            onClick={open}
          >
            Apply now. Instant loan approval
          </button>
        </div>
      </div>
      <div className={classes.LoanCards}>
        <img loading="lazy"
          src={personalLoanCard}
          alt="personal-loan"
          className={classes.LoanCard}
          onClick={() => history.push(personalLoan)}
        />
        {/* <img loading="lazy"
          src={homeLoanCard}
          alt="home-loan"
          className={classes.LoanCard}
          onClick={() => history.push(homeLoan)}
        /> */}

        <img loading="lazy"
          src={twoWheelerCard}
          alt="two-wheeler-loan"
          className={classes.LoanCard}
          onClick={() => history.push(twoWheelerLoan)}
        />
        <img loading="lazy"
          src={earlySalaryCard}
          alt="early-salary-loan"
          className={classes.LoanCard}
          onClick={() => history.push(earlySalaryLoan)}
        />
        <img loading="lazy"
          src={propertyLoanCard}
          alt="property-loan"
          className={classes.LoanCard}
          onClick={() => history.push(loanAgainstProperty)}
        />
      </div>

      <div className={classes.LoanCardsMb}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            marginBottom: "60px",
            marginTop: "60px",
          }}
          onClick={() => history.push(personalLoan)}
        >
          <img loading="lazy" src={personalLoanMb} alt="loan" />
          <button className={classes.BtnMb}>Get Instant Loan</button>
        </div>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            marginBottom: "60px",
            marginTop: "60px",
          }}
          onClick={() => history.push(homeLoan)}
        >
          <img loading="lazy" src={homeLoanMb} alt="loan" />
          <button className={classes.BtnMb}>Get Instant Loan</button>
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            marginBottom: "60px",
            marginTop: "60px",
          }}
          onClick={() => history.push(loanAgainstProperty)}
        >
          <img loading="lazy" src={propertyLoanMb} alt="loan" />
          <button className={classes.BtnMb}>Get Instant Loan</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            marginBottom: "60px",
          }}
          onClick={() => history.push(twoWheelerLoan)}
        >
          <img loading="lazy" src={twoWheelerLoanMb} alt="loan" />
          <button className={classes.BtnMb}>Get Instant Loan</button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "45%",
            marginBottom: "60px",
          }}
          onClick={() => history.push(earlySalaryLoan)}
        >
          <img loading="lazy" src={earlyLoanMb} alt="loan" />
          <button className={classes.BtnMb}>Get Instant Loan</button>
        </div>
      </div>
      <div className={classes.grid}>
        <div>
          <h4 className={classes.H4}>
            In the time of need, <br className={classes.BrMb} /> you can count
            on us !
          </h4>
          <h5 className={classes.H6}>
            Vintage Finance personal loan serves multiple purposes and is
            available for <br className={classes.BrMb} /> all salaried
            individuals. Life can throw up a surprise any moment in the form{" "}
            <br className={classes.BrMb} /> of opportunities or challenges.
            Thus, from financing a wedding, travel, child’s{" "}
            <br className={classes.BrMb} /> education, vacation, medical
            emergency, any big-ticket purchase, home{" "}
            <br className={classes.BrMb} /> repair or even debt consolidation –
            we are here for you.
          </h5>
        </div>
        {pathname === "/services.html" && <EmiCalculator />}
      </div>
      <div className={classes.LoanType}>
        <div>
          <img loading="lazy"
            src={marriageLoan}
            alt="marriage-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Marriage Loan</h3>
        </div>
        {/* <div>
          <img loading="lazy"
            src={travelLoan}
            alt="travel-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Travel Loan</h3>
        </div> */}
        <div>
          <img loading="lazy"
            src={medicalLoan}
            alt="medical-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Medical Loan</h3>
        </div>
        {/* <div>
          <img loading="lazy"
            src={educationLoan}
            alt="education-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Education Loan</h3>
        </div> */}
        {/* <div>
          <img loading="lazy"
            src={homeLoanImage}
            alt="home-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Home Loan</h3>
        </div> */}
        {/* <div>
          <img loading="lazy" src={carLoan} alt="car-loan" className={classes.LoanTypeImg} />
          <h3 className={classes.H3}>Used car Loan</h3>
        </div> */}
        {/* <div>
          <img loading="lazy"
            src={laptopLoan}
            alt="laptop-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Laptop Loan</h3>
        </div> */}
        <div>
          <img loading="lazy"
            src={mobileLoan}
            alt="mobile-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Mobile Loan</h3>
        </div>
        <div>
          <img loading="lazy"
            src={twoWheelerLoanImage}
            alt="two-wheeler-loan"
            className={classes.LoanTypeImg}
          />
          <h3 className={classes.H3}>Two-Wheeler Loan</h3>
        </div>
        <div>
          <img loading="lazy" src={debtLoan} alt="debt-loan" className={classes.LoanTypeImg} />
          <h3 className={classes.H3}>
            Debt Consolidation
            <br /> Loan
          </h3>
        </div>
        <div className={classes.ExtraStyle}>
          <img loading="lazy" src={debtLoan} alt="debt-loan" className={classes.LoanTypeImg} />
          <h3 className={classes.H3}>
            Debt Consolidation
            <br /> Loan
          </h3>
        </div>
      </div>
      {pathname === "/services.html" && (
        <div className={classes.bottom}>
          <h6 className={classes.disclaimer}>
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
        </div>
      )}
    </div>
  );
};

export default PersonalLoan;
