import React from "react";
import Helmet from "react-helmet";
import CommonBottom from "../CommonBottom/CommonBottom";
import Common from "../HomeLoan/Common/Common";
import styles from "../HomeLoan/HomeLoan.module.css";

let autoLoanCard =
  "/images/loans/group-15507.webp";

const AutoLoan = ({ mobile, open }) => {
  return (
    <>
      <Helmet>
        <title>
          Best Auto Loan Rates in Delhi | Commercial Vehicle Loans in Delhi |
          Need Urgent Loan in delhi
        </title>
        <meta
          name="description"
          content="Best auto Loan Interest Rates in Delhi NCR. if you Need Urgent Loan in delhi then Vintage Finance offer easy, irritate free Commercial Vehicle Loans with flexible EMI options./"
        />
        <meta
          name="keywords"
          content="Auto Loan Agents in Delhi NCR, , best auto loan rates in delhi, loan service providers in delhi, Commercial Vehicle Loans in Delhi./"
        />
      </Helmet>
      <div className={styles.HomeLoan}>
        <div className={styles.Row}>
          <div className={styles.DoubleColumn}>
            <h1 className={styles.H1}>Auto Loan</h1>
            <p className={styles.P}>
              Now getting a loan for your auto is fast & economical with Vintage
              Finance. We understand the Bike or Scooter you ride is the matter
              of pride to you and we comprehend that you wouldn't have any
              desire to make any compromise in this.
            </p>
            <button className={styles.Btn} onClick={open}>
              Get Instant Approval
            </button>
          </div>
          <div className={styles.Column}>
            <img src={autoLoanCard} alt="home-loan" className={styles.Img} />
          </div>
        </div>
      </div>
      <div className={styles.Keyfeature}>
        <h2>
          Vintage Finance offers two wheeler loans for you to own a two-wheeler
          of your choice.
        </h2>
        <div className={styles.Description}>
          <div>
            <p>
              You enjoy the best deals Vintage Finance offers various options
              for financing the purchase of auto loan vehicles across
              manufacturers and brands. Take advantage of our facility of speedy
              approvals and flexible installment options with our transparent
              and simple documentation to help you buy the auto you desire.you
              enjoy the best deals Vintage Finance offers various options for
              financing the purchase of auto loan vehicles across manufacturers
              and brands. Take advantage of our facility of speedy approvals and
              flexible installment options with our transparent and simple
              documentation to help you buy the auto you desire. <br /> <br />
              An auto loan is a loan from Vintage Finance which helps you buy a
              car more costly than you can afford with cash. Unless you have a
              huge amount in savings or you can borrow and pay off your vehicle
              with monthly payments with us.
            </p>
          </div>
          <div>
            <p>
              If you borrow wisely from Vintage Finance for auto loan, you enjoy
              two most important benefits:
            </p>
            <ul>
              <li>You’ll spend low on your vehicle.</li>
              <li>
                You’ll have the flexibility to change fund other goals and
                vehicles within a few years.
              </li>
            </ul>
            <p>
              Start planning for your auto loan with Vintage Finance long before
              you ever start looking at cars. Start looking for an auto loan
              (and a car) that fits with your lifestyle. It will help you at the
              time to make a deal when you are ready to proceed with confidence.
            </p>
          </div>
        </div>

        <Common />
      </div>
      <CommonBottom mobile={mobile} open={open} />
    </>
  );
};

export default AutoLoan;
