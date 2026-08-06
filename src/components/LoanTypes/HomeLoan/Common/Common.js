import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "../HomeLoan.module.css";
import { cibilDefaulter, personalLoan } from "../../../../App";

let paperLess =
  "/images/section-3/best/paper-less.webp";

let disbursal =
  "/images/section-3/best/disbursal.webp";

let flexible =
  "/images/section-3/best/flexible.webp";

let history =
  "/images/section-3/best/history.webp";

let lowInterest =
  "/images/section-3/best/low-interest.webp";

// let arrow =
//   "/images/section-3/card/arrow.webp";

const personal_loan_data = [
  {
    img: paperLess,
    heading: "100% PAPERLESS & ONLINE APPROVAL",
    subheading:
      "You choose us you can ensure  stress free and convenient process as we provide a completely paperless and online approval system. This means that you can apply for a personal loan from the comforts of your house or office without the need for any extensive paperwork. You can expect a online approval process that streamlines the procedure and also saves a lot of time for you.",
  },
  {
    img: history,
    heading: "NO CREDIT HISTORY REQUIRED",
    subheading:
      "Unlike typical lenders we understand that not everybody would have a well established credit history. Therefore we offer personal loans without strict requirements for a credit history. The inclusive approach opens doors for you even if you don't have a great credit history.",
  },
  {
    img: disbursal,
    heading: "QUICK DISBURSAL",
    subheading:
      "We truly value your time and urgency. We prioritize quick disbursement of the personal loans approved. Once the application is approved the funds are disbursed perfectly. It allows you to address your financial needs and time.",
  },
  {
    img: lowInterest,
    heading: "LOW INTEREST RATE",
    subheading:
      "The best part about choosing us is that you can expect minimum interest rates. This helps you manage your finances effectively by reducing the overall cost of borrowing. You can also manage your finances more effectively by reducing the overall cost of borrowing making repayments really manageable.",
  },
  {
    img: flexible,
    heading: "PERSONALIZED AND FLEXIBLE",
    subheading:
      "Understanding the financial requirements differ for every person. We offer customized loan options tailored to suit your specific requirements. Furthermore we provide flexibility in repayment schedules and loan terms we ensure that you find a plan that perfectly aligns with your financial capabilities.",
  },
  {
    img: flexible,
    heading: "GET PERSONAL LOAN UPTO 15 LAKH",
    subheading:
      "We can provide you the flexibility to borrow a huge amount as we offer personal loans of 15,00,000. Whether you require funds for your home renovation or medical emergencies the substantial loan limit makes it very easy for you to fulfill all your requirements",
  },
  {
    img: paperLess,
    heading: "NO HIDDEN CHARGES",
    subheading:
      "We believe in complete transparency so you don't have to worry about hidden charges at all. You can confidently apply for a personal loan without stressing about unexpected fees.",
  },
  {
    img: disbursal,
    heading: "TENOR OPTIONS",
    subheading:
      "We offer different tenor options for repayment. This flexibility allows you to choose the repayment time that suits your financial situation ensuring that you comfortably manage the loan obligations without straining the budget.",
  },
];

const person_loan_apply = [
  {
    heading: "How to Apply For Personal Loan At Vintage Finance?",
    subheading:
      "Availing a personal loan is very easy from us you just need to follow the steps here:",
    list: [
      "Before applying ensure that you align with the eligibility requirements. The criteria basically includes your age income employment status and the credit score. You can check the specific eligibility criteria on the website or just connect our customer service.",
      "You can prepare the important documents for the loan application process. Some of the most common documents include identity proof income proof and passport-size photographs.",
      "Next you need to explore the different personal loan options offered by us. You can determine the loan amount that you require and understand the repaying options that suit your financial situation. We provide flexibility in loan amounts and the 10 years so you can choose the option that aligns with your requirements.",
      "We amplify the application process by offering you the online application portal. Visit our website and navigate to the personal loan section. You just need to fill out the application form with the right details regarding the personal information and loan amount required.",
      "After completing the application form you can attach the documents and ensure that you submitted them online through the provided portal. You must ensure that the documents are genuine and updated.",
      "After receiving the application, we will initiate the verification process. We will understand your eligibility criteria and verify the authenticity. Once the verification is successful, the loan application will be approved.",
      "After approval we will disburse the sanction loan amount directly to the registered bank account. The disbursement process is basically quick allowing you to access the funds seamlessly.",
    ],
    arrOfObj: false,
  },
  {
    heading: "Applicable Charges and Intrest Rates For Personal Loans in Delhi",
    arrOfObj: true,
    listObj: [
      {
        heading: "Rate Of interest",
        subheading:
          "We offer competitive interest rate  personal loan in Delhi. It ranges anywhere from 10% to 24%. The exact rate will depend on different factors. You need to know that a higher credit score basically leads to lower interest rate as it also reflects on your creditworthiness. Stable and higher income levels is likely to influence the interest rate offered. The amount borrowed and the repayment tenure can also impact your interest rate. So generally large loan amounts might be eligible for lower interest rate",
      },
      {
        heading: "Processing fees",
        subheading:
          "We may charge processing fees for handling the loan application. You need to know that the fee ranges anywhere from 1% to 3% of the loan amount sanctioned. But the charges might vary depending on the specific loan product.",
      },

      {
        heading: "Prepayment",
        subheading:
          "We offer prepayment or foreclosure of the loan but this might come for a prepayment charges. The charges are likely to vary and are usually a percentage of the outstanding loan amount. It would be best if you verified your policy regarding prepayment to understand the associated charges.",
      },

      {
        heading: "EMI bounce charges and switch fee",
        subheading:
          "Details regarding all these charges and fees are available in the loan agreement. The charges are applicable under some special circumstances like missing EMI payments or changing loan terms. It is very important for you to review the loan agreement to understand the charges beforehand.",
      },
      {
        heading: "Personal loan eligibility calculator",
        subheading:
          "If you want to estimate your eligibility for the personal loan based on your salary then you can use the personal loan eligibility calculator to get the right loan amounts. You just need to put your monthly salary and the calculator will provide you with the estimated loan amount you might be eligible to apply for the loan. You must know that this is an estimate amounts and the actual loan amount might vary based on the specific eligibility criteria and the documentation.",
      },
    ],
  },
];

const cibil_defaulter_apply = [
  {
    heading: "Who is a CIBIL defaulter?",
    subheading1:
      "You can be considered a CIBIL defaulter if you have a track record of irregular or missed payment defaults or accounts written off. This results in a poor credit score making it challenging for you to qualify for traditional loans or financial products from mainstream institutions.",
  },
  {
    heading:
      "Process To Avail Personal Loan Without CIBIL Check or Personal Loan For CIBIL Defaulters",
    list: [
      "You can visit our website and navigate to the loan section. You can fill out the online application form with all the important details like personal information and employment details.",
      "Now you need to upload the important documents like identity proof address proof and any other extra documents.",
      "We understand your application based on different factors beyond the CIBIL scores considering income stability employment history and other important parts. Once approved you will be informed of the loan terms and conditions.",
      "After acceptance of all the terms and conditions we will disperse the loan amount in your designated bank account.",
    ],
    arrOfObj: false,
  },
  {
    heading:
      "Applicable Charges and Interest Rates for Personal Loan without Cibil Check at Vintage Finance",
    arrOfObj: true,
    listObj: [
      {
        heading: "Rate Of Interest",
        subheading:
          "The rate of interest for CIBIL defaulters generally varies from 12% to 25% full determine the interest rate based on different factors like your credit profile income stability employment history and amount.",
      },
      {
        heading: "Processing Fees",
        subheading:
          " The processing fees ranges from 1% to 3% of the loan amount for the online loans for CIBIL defaulters. But you need to know that the fees might vary depending on the loan amount and your profile.",
      },
      {
        heading: "Prepayment",
        subheading:
          "You must know that prepayment facilities would be available, but we might charge a nominal fee for prepayment. This can range anywhere between 2% to 5% of the outstanding loan amount being paid.",
      },
      {
        heading: "EMI Bounce Charges",
        subheading:
          "Remind apply some charges for specific situations like bounced EMI's annual maintenance fees. These charges are likely to vary, and you can check them in the loan agreement.",
      },
    ],
  },
  {
    heading:
      "Why Choose Vintage Finance to get loan without cibil check in Delhi?",
    list: [
      "We truly emerged as one of the best choices for you if you are looking for a loan without a CIBIL check in Delhi.",
      "We specialize in offering customized loan solutions to you if you have poor credit score. We understand the challenges faced by you as a defaulter and provide customized loan options that consider different factors beyond the credit history.",
      "Unlike typical lenders that just rely on the CIBIL scores we evaluate the loan applications based on other criteria like income stability and your employment history.",
      "We focus on efficiency in processing loan applications we look forward for swift approval and dispersal of funds acknowledging the urgency linked with the financial requirements.",
      "Despite serving people with low credit scores, we also offer competitive interest rates on personal loans this makes repayments really manageable for you.",
      "We follow transparent pricing practices regarding the fees interest rates and loan terms. We look forward to ensuring clarity in all the transactions.",
    ],
    arrOfObj: false,
  },
  {
    heading: "Tips to Improve and Maintain Your Credit Score",
    subheading:
      "It is very important for you to improve and maintain a healthy credit score.",
    list: [
      "You need to ensure instant payment of bills and credit card dues to avoid defaults or late payments which can negatively impact your credit score you need to maintain a low credit utilization ratio by using only a part of the available credit limit.",
      "You must know that high credit utilization can impact the score.",
      "You must monitor your credit report regularly to identify any errors.",
      "A varied credit portfolio with a mix of secured and unsecured loans can help you impact your credit score. But you need to manage all these responsibility.",
      "You should avoid making multiple inquiries for a new credit in a short time as it can lower your credit score.",
    ],
    arrOfObj: false,
  },
];

const cibil_defaulter_data = [
  {
    img: paperLess,
    heading: "100% PAPERLESS & ONLINE APPROVAL",
    subheading:
      "The best part about choosing us is that we offer a seamless paperless an online approval process for personal loans. This approach streamlines the application process and also saves a lot of time and effort for you if you are seeking financial assistance despite low credit score",
  },
  {
    img: history,
    heading: "NO CREDIT HISTORY REQUIRED",
    subheading:
      "As compared to the typical lenders which heavily rely on credit history for loan approvals, we understand that you might not have a great credit history due to low CIBIL score. Therefore, we consider other factors beyond the credit score allowing you to still qualify for a personal loan.",
  },
  {
    img: disbursal,
    heading: "QUICK DISBURSAL",
    subheading:
      "We understand the urgency linked with financial needs. We prioritize quick dispersal of approved loans this allows you to address the financial requirements and mitigate any instant financial stress.",
  },
  {
    img: lowInterest,
    heading: "LOW INTEREST RATE",
    subheading:
      "Despite the risk linked with lending low credit scores we offer competitive interest rates on personal loans. This ensures that you receive financial assistance without being burdened by high interest rates.",
  },
  {
    img: flexible,
    heading: "PERSONALIZED AND FLEXIBLE",
    subheading:
      "Understanding that your financial situation is unique we offer customized loan solutions tailored to your unique requirements. We provide flexibility in loan terms repayment schedules and loan amounts catering to the specific requirements.",
  },
  // {
  //   img: flexible,
  //   heading: "GET PERSONAL LOAN UPTO 15 LAKH",
  //   subheading:
  //     "We can provide you the flexibility to borrow a huge amount as we offer personal loans of 15,00,000. Whether you require funds for your home renovation or medical emergencies the substantial loan limit makes it very easy for you to fulfill all your requirements",
  // },
  // {
  //   img: paperLess,
  //   heading: "NO HIDDEN CHARGES",
  //   subheading:
  //     "We believe in complete transparency so you don't have to worry about hidden charges at all. You can confidently apply for a personal loan without stressing about unexpected fees.",
  // },
  // {
  //   img: disbursal,
  //   heading: "TENOR OPTIONS",
  //   subheading:
  //     "We offer different tenor options for repayment. This flexibility allows you to choose the repayment time that suits your financial situation ensuring that you comfortably manage the loan obligations without straining the budget.",
  // },
];

const Common = () => {
  const [heading, setHeading] = useState("Benefit");
  const [reqDoc, setReqDoc] = useState("List of required Documents");
  const [eligibilityText, setEligibilityText] = useState(
    "Our Elegibility Criteria"
  );
  const [applicationFeeText, setApplicationFeeText] = useState(
    "Application Fee and Charges"
  );
  const { pathname } = useLocation();

  const [isExtraData, setIsExtraData] = useState(false);
  const [extraData, setExtraData] = useState([]);
  const [applyData, setApplyData] = useState([]);

  useEffect(() => {
    if (pathname === "/loan-against-property-delhi.html") {
      setHeading("Benefits of Availing Property Loan in Delhi");
    } else if (pathname === personalLoan) {
      setReqDoc("Required Documents to Avail Personal Loan in Delhi");
      setHeading(
        "Benefits of Availing Personal Loan in Delhi  From Vintage Finance"
      );
      setEligibilityText("Eligibility Criteria To Avail Personal Loan");
      setApplicationFeeText(
        "Applicable Charges and Intrest Rates For Personal Loans in Delhi"
      );
      setExtraData(personal_loan_data);
      setIsExtraData(true);
      setApplyData(person_loan_apply);
    } else if (
      pathname ===
      "/instant-personal-private-loan-financer-companies-delhi.html"
    ) {
      setHeading(
        "Benefits of availing of a personal loan from a private financer in Delhi"
      );
      setReqDoc("Required document for a private loan in Delhi");
      setEligibilityText("Eligibility Criteria To Avail Private Loan");
      setReqDoc("Required Documents to Avail Private Loan in Delhi");
    } else if (pathname === cibilDefaulter) {
      setEligibilityText(
        "Our Eligibility Criteria for Personal Loan without CIBIL Check"
      );
      setReqDoc("List of Required Documents");
      setApplicationFeeText(
        "Application Fee and Charges To Avail Loan Without Cibil Check"
      );
      setApplicationFeeText(
        "Applicable Charges and Interest Rates for Personal Loan without Cibil Check at Vintage Finance"
      );
      setIsExtraData(true);
      setApplyData(cibil_defaulter_apply);
      setExtraData(cibil_defaulter_data);
    } else if (pathname === "/personal-loan-noida.html") {
      setHeading(
        "Benefits of Availing Personal Loan in Noida  From Vintage Finance"
      );
      setEligibilityText("Eligibility Criteria");
      setReqDoc("Required Documents to Avail Private Loan in Noida");
    }
  }, [pathname]);

  return (
    <>
      {isExtraData ? (
        <div className={styles.Fee + " " + styles.Fee_extra}>
          {applyData?.length &&
            applyData?.map((item, i) => (
              <div key={i}>
                <h2 className={styles.Fee_h2}>{item?.heading}</h2>
                {item?.subheading1 && (
                  <p className={styles.li_m}>{item?.subheading1}</p>
                )}
                {item?.arrOfObj === true ? (
                  <ul>
                    {item?.listObj?.map((elm, j) => (
                      <li key={j}>
                        <h3 className={styles.li}>{elm?.heading}</h3>
                        <h4 className={styles.li_m}>{elm?.subheading}</h4>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <>
                    {item?.arrOfObj === false ? (
                      <>
                        <p className={styles.para + " " + styles.para_bl}>
                          {item?.subheading}
                        </p>
                        <ul>
                          {item?.list?.map((elm, k) => (
                            <li key={k} className={styles.li_m}>
                              {elm}
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          {/* <h2 className={styles.Fee_h2}>{applicationFeeText}</h2> */}
          {/* <ul>
            <li>
              <h3 className={styles.li}>Rate of Interest 19.9% to 24%</h3>

              <h4 className={styles.li_m}>
                We offer competitive interest rate personal loan in Delhi. It
                ranges anywhere from 10% to 24%. The exact rate will depend on
                different factors. You need to know that a higher credit score
                basically leads to lower interest rate as it also reflects on
                your creditworthiness. Stable and higher income levels is likely
                to influence the interest rate offered. The amount borrowed and
                the repayment tenure can also impact your interest rate. So
                generally large loan amounts might be eligible for lower
                interest rate
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>
                Loan Processing Charges Minimum Processing Charges
              </h3>

              <h4 className={styles.li_m}>
                We may charge processing fees for handling the loan application.
                You need to know that the fee ranges anywhere from 1% to 3% of
                the loan amount sanctioned. But the charges might vary depending
                on the specific loan product.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>Prepayment</h3>

              <h4 className={styles.li_m}>
                We offer prepayment or foreclosure of the loan but this might
                come for a prepayment charges. The charges are likely to vary
                and are usually a percentage of the outstanding loan amount. It
                would be best if you verified your policy regarding prepayment
                to understand the associated charges.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>EMI bounce charges and switch fee</h3>

              <h4 className={styles.li_m}>
                Details regarding all these charges and fees are available in
                the loan agreement. The charges are applicable under some
                special circumstances like missing EMI payments or changing loan
                terms. It is very important for you to review the loan agreement
                to understand the charges beforehand.
              </h4>
            </li>

            <li>
              <h3 className={styles.li}>
                Personal loan eligibility calculator
              </h3>

              <h4 className={styles.li_m}>
                If you want to estimate your eligibility for the personal loan
                based on your salary then you can use the personal loan
                eligibility calculator to get the right loan amounts. You just
                need to put your monthly salary and the calculator will provide
                you with the estimated loan amount you might be eligible to
                apply for the loan. You must know that this is an estimate
                amounts and the actual loan amount might vary based on the
                specific eligibility criteria and the documentation.
              </h4>
            </li>
          </ul> */}
        </div>
      ) : null}
      <div className={styles.Benefits}>
        <h2 className={styles.Benefits_h2}>{heading}</h2>
        <p className={styles.bene_p}>
          We are available 24X7! Apply for a loan any time of the day and get
          approved instantly with <br className={styles.BrMb} /> the funds
          disbursed directly into your account within a few hours of your
          approval.
        </p>
        {isExtraData ? (
          <div className={styles.ImgWrapper_extra}>
            {extraData?.length &&
              extraData?.map((item) => (
                <div>
                  <img src={item.img} alt="loan" className={styles.BestImg} />
                  <h3 className={styles.H6_extra}>{item.heading}</h3>
                  <p className={styles.para}>{item.subheading}</p>
                </div>
              ))}
          </div>
        ) : (
          <div className={styles.ImgWrapper}>
            <div>
              <img src={paperLess} alt="loan" className={styles.BestImg} />
              <h3 className={styles.H6}>
                100% PAPERLESS & <br /> ONLINE APPROVAL
              </h3>
            </div>
            <div>
              <img src={history} alt="loan" className={styles.BestImg} />
              <h3 className={styles.H6}>
                No Credit History <br /> Required
              </h3>
            </div>
            <div>
              <img src={disbursal} alt="loan" className={styles.BestImg} />
              <h3 className={styles.H6}>QUICK DISBURSAL</h3>
            </div>
            <div>
              <img src={lowInterest} alt="loan" className={styles.BestImg} />
              <h3 className={styles.H6}>Low Interest rate</h3>
            </div>
            <div>
              <img src={flexible} alt="loan" className={styles.BestImg} />
              <h3 className={styles.H6}>
                Personalized
                <br /> and Flexible
              </h3>
            </div>
          </div>
        )}
      </div>
      <div className={styles.ElegibilityRow}>
        <div className={styles.Elegibility}>
          <h2 className={styles.Elegibility_h2}>{eligibilityText}</h2>
          <p>
            If these points tick off for you, then guess what – you’re eligible
            to get a loan from us.
          </p>
          <ul>
            <li>
              Must be a full-time salaried employee with a minimum Net Monthly
              income of at least ₹ 30,000/month.
            </li>
            <li>
              Must have minimum 2 years in employment and minimum 6 months in
              the current organisation
            </li>
            <li>Must be above 23 years and below 60 years of age</li>
            <li>Must be a resident of Delhi/NCR</li>
          </ul>
        </div>
        <div className={styles.Docs}>
          <h2 className={styles.Docs_h2}>{reqDoc}</h2>
          <p>
            We’re almost paperless (yes, really) but will need a few documents
            to process your application:
          </p>
          <ul>
            <li>
              <img
                src="/images/home-loan/duotone.webp"
                alt="pan-card"
              />
              Pan Card Number
            </li>
            <li>
              <img
                src="/images/home-loan/group-15347.webp"
                alt="pan-card"
              />
              Income Proof (Salary Slip & bank Statement)
            </li>
            <li>
              <img
                src="/images/home-loan/group-15349.webp"
                alt="pan-card"
              />
              ID Proof (Valid Driving License / Valid Passport / Voter’s ID /
              Aadhar Card / Pan Card)
            </li>
            <li>
              <img
                src="/images/home-loan/group-15349.webp"
                alt="pan-card"
              />
              Address Proof (Valid Driving License / Valid Passport / Aadhar
              Card)
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.Fee}>
        <h2 className={styles.Fee_h2}>{applicationFeeText}</h2>
        {pathname == personalLoan ? (
          <ul>
            <li>
              <h3 className={styles.li}>Rate of Interest 19.9% to 24%</h3>

              <h4 className={styles.li_m}>
                We offer competitive interest rate personal loan in Delhi. It
                ranges anywhere from 10% to 24%. The exact rate will depend on
                different factors. You need to know that a higher credit score
                basically leads to lower interest rate as it also reflects on
                your creditworthiness. Stable and higher income levels is likely
                to influence the interest rate offered. The amount borrowed and
                the repayment tenure can also impact your interest rate. So
                generally large loan amounts might be eligible for lower
                interest rate
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>
                Loan Processing Charges Minimum Processing Charges
              </h3>

              <h4 className={styles.li_m}>
                We may charge processing fees for handling the loan application.
                You need to know that the fee ranges anywhere from 1% to 3% of
                the loan amount sanctioned. But the charges might vary depending
                on the specific loan product.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>Prepayment</h3>

              <h4 className={styles.li_m}>
                We offer prepayment or foreclosure of the loan but this might
                come for a prepayment charges. The charges are likely to vary
                and are usually a percentage of the outstanding loan amount. It
                would be best if you verified your policy regarding prepayment
                to understand the associated charges.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>EMI bounce charges and switch fee</h3>

              <h4 className={styles.li_m}>
                Details regarding all these charges and fees are available in
                the loan agreement. The charges are applicable under some
                special circumstances like missing EMI payments or changing loan
                terms. It is very important for you to review the loan agreement
                to understand the charges beforehand.
              </h4>
            </li>

            <li>
              <h3 className={styles.li}>
                Personal loan eligibility calculator
              </h3>

              <h4 className={styles.li_m}>
                If you want to estimate your eligibility for the personal loan
                based on your salary then you can use the personal loan
                eligibility calculator to get the right loan amounts. You just
                need to put your monthly salary and the calculator will provide
                you with the estimated loan amount you might be eligible to
                apply for the loan. You must know that this is an estimate
                amounts and the actual loan amount might vary based on the
                specific eligibility criteria and the documentation.
              </h4>
            </li>
          </ul>
        ) : pathname == cibilDefaulter ? (
          <ul>
            <li>
              <h3 className={styles.li}>Rate of Interest</h3>

              <h4 className={styles.li_m}>
                The rate of interest for CIBIL defaulters generally varies from
                12% to 25% full determine the interest rate based on different
                factors like your credit profile income stability employment
                history and amount.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>Processing Fees</h3>

              <h4 className={styles.li_m}>
                The processing fees ranges from 1% to 3% of the loan amount for
                the online loans for CIBIL defaulters. But you need to know that
                the fees might vary depending on the loan amount and your
                profile.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>Prepayment</h3>

              <h4 className={styles.li_m}>
                You must know that prepayment facilities would be available, but
                we might charge a nominal fee for prepayment. This can range
                anywhere between 2% to 5% of the outstanding loan amount being
                paid.
              </h4>
            </li>
            <li>
              <h3 className={styles.li}>EMI Bounce Charges</h3>

              <h4 className={styles.li_m}>
                Remind apply some charges for specific situations like bounced
                EMI's annual maintenance fees. These charges are likely to vary,
                and you can check them in the loan agreement.
              </h4>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <h3 className={styles.li}>Rate of Interest 19.9% to 24%</h3>
            </li>
            <li>
              <h3 className={styles.li}>
                Processing Charges Minimum Processing Charges
              </h3>
            </li>
            <li>
              <h3 className={styles.li}>
                Cheque/ Instrument Swap charges Rs.500 per instance + Service
                Tax as applicable
              </h3>
            </li>
            <li>
              <h3 className={styles.li}>Prepayment/ Forclosure Charges 4%</h3>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Common;
