import React from "react";
import Helmet from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";
import EmiCalculator from "../../EmiCalculator/EmiCalculator";

let personalLoanCard =
  "/images/section-2/newcards/group-15217.webp";

const PersonalLoan = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>
          Quick Personal Loan in Delhi NCR - Instant Approval | Trusted Loan
          Providers in Delhi
        </title>
        <link
          rel="canonical"
          href="https://www.vintagefinance.in/instant-personal-private-loan-financer-companies-delhi.html"
        />
        <meta
          name="description"
          content="Vintage Finance provides quick personal loans in Delhi NCR with fast approval, competitive interest rates, and flexible repayment terms to meet your needs."
        />
       <link rel="canonical" href="https://www.vintagefinance.in/personal-loan-in-delhi.html"/>
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>Personal Loan in Delhi NCR</h1>
            <p className={styles.P}>
              Avail a personal loan in Delhi up to Rs. 15 lakhs through a simple
              online process with minimal documentation and an easy to meet
              eligibility criteria.
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img
              src={personalLoanCard}
              alt="Delhi personal loan. || Personal loan providers in delhi || Personal loan delhi"
              className={styles.Img}
            />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          Quick personal loans in Delhi guarantee you never have to cut corners
          on your desires.
        </h2>
        <div className={styles.Description}>
          <div>
            <p>
              Do you require some quick money? Need to remodel your home or
              experience a brief budgetary crunch? We are the ones who{" "}
              <b>provide personal Loans in Delhi</b>. We are the trusted{" "}
              <b>Personal Loan providers in Delhi</b> to give some assistance to
              meet your crisis money necessities.
              <br />
              <br />
              Personal loans come in different types. You can borrow from us; we
              give personal loans in Delhi without a cibil score. These loans
              are typically used for general purpose loans that you or anyone
              can use for things like consolidating debt or paying for an
              unexpected expense or small home improvement or can, say, for
              renovation. We are the only <b>
                personal loan provider in Delhi
              </b>{" "}
              with an easy application process. Personal loans in Delhi are
              often more difficult to get and have strict qualification
              requirements.
            </p>
          </div>
          <div>
            <h3>Know More About Personal Loans in Delhi </h3>
            <p>
              <br />
              If you're considering borrowing a <b>personal loan in Delhi</b>,
              here are we who provide personal loans in Delhi with minimum
              documentation. Further, you should know that a Personal Loan is
              normally a type of unsecured credit with an altered reimbursement
              plan and compared regularly scheduled payments. On the other hand,
              there are secured individual advances also, whereby the borrower
              needs to keep an advantage as insurance, which the giving
              foundation can have on the previous pronounced as a defaulter.
              Individual credits are often used to meet provisional money
              necessities, for example, weddings, youngsters' training, home
              change, extravagance occasion, purchasing an auto or an electronic
              apparatus, and so on.
            </p>
          </div>
        </div>
        <div className={styles.calculator}>
          <EmiCalculator />
        </div>
        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default PersonalLoan;
