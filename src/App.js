//import { Container } from "@material-ui/core";
import React, { useState, useEffect, lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import LoanProduct from "./pages/LoanProduct/LoanProduct";
import Helmet from "react-helmet";
import Home from "./pages/Home/Home";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";
import Emi from "./pages/Emi/Emi";
// Rendered on every route, so lazy() only bought an extra round trip on the
// critical path - webpack injected its chunk into <head> during the prerender.
import Footer from "./components/Footer/Footer";

//import BlogItem from "./components/BlogComponent/BlogItem/BlogItem";
//import { PostIdProvider } from "./components/PostIdContext/PostIdContext";
//import Blogs from "./components/BlogComponent/Blogs/Blogs";
// import Faqs from "./pages/Faqs/Faqs";
// import ServicesPage from "./pages/ServicesPage/ServicesPage";

// import Toast from "./components/Toast/Toast";
// import Career from "./pages/Career/Career";
// import Dsa from "./pages/DSA/Dsa";
// import About from "./pages/About/About";
// import News from "./pages/News/News";
// import LoanApplication from "./components/LoanApplication/LoanApplication";
// import Policy from "./components/Policy/Policy";
// import Footer from "./components/Footer/Footer";
// import HomeLoan from "./components/LoanTypes/HomeLoan/HomeLoan";
// import LoanAgainstProperty from "./components/LoanTypes/LoanAgainstProperty/LoanAgainstProperty";
// import PersonalLoan from "./components/LoanTypes/PersonalLoan/PersonalLoan";
// import EarlySalaryLoan from "./components/LoanTypes/EarlySalaryLoan/EarlySalaryLoan";
// import TwoWheelerLoan from "./components/LoanTypes/TwoWheelerLoan/TwoWheelerLoan";
// import LoanInGurgaon from "./components/LoanTypes/LoanInGurgaon/LoanInGurgaon";
// import LoanInGhaziabad from "./components/LoanTypes/LoanInGhaziabad/LoanInGhaziabad";
// import LoanInNoida from "./components/LoanTypes/LoanInNoida/LoanInNoida";
// import LoanForCibilDefaulter from "./components/LoanTypes/LoanForCibilDefaulter/LoanForCibilDefaulter";
// import AutoLoan from "./components/LoanTypes/AutoLoan/AutoLoan";
// import PrivateLoan from "./components/LoanTypes/PrivateLoan/PrivateLoan";
// import Sitemap from "./components/Sitemap/Sitemap";

const Faqs = lazy(() => import("./pages/Faqs/Faqs"));
const ServicesPage = lazy(() => import("./pages/ServicesPage/ServicesPage"));
const Toast = lazy(() => import("./components/Toast/Toast"));
const Career = lazy(() => import("./pages/Career/Career"));
const Dsa = lazy(() => import("./pages/DSA/Dsa"));
const About = lazy(() => import("./pages/About/About"));
const News = lazy(() => import("./pages/News/News"));
const LoanApplication = lazy(() =>
  import("./components/LoanApplication/LoanApplication")
);
const Policy = lazy(() => import("./components/Policy/Policy"));
//const HomeLoan = lazy(() => import("./components/LoanTypes/HomeLoan/HomeLoan"));
const LoanAgainstProperty = lazy(() =>
  import("./components/LoanTypes/LoanAgainstProperty/LoanAgainstProperty")
);
const PersonalLoan = lazy(() =>
  import("./components/LoanTypes/PersonalLoan/PersonalLoan")
);
const EarlySalaryLoan = lazy(() =>
  import("./components/LoanTypes/EarlySalaryLoan/EarlySalaryLoan")
);
const TwoWheelerLoan = lazy(() =>
  import("./components/LoanTypes/TwoWheelerLoan/TwoWheelerLoan")
);
const LoanInGurgaon = lazy(() =>
  import("./components/LoanTypes/LoanInGurgaon/LoanInGurgaon")
);
const LoanInGhaziabad = lazy(() =>
  import("./components/LoanTypes/LoanInGhaziabad/LoanInGhaziabad")
);
const LoanInNoida = lazy(() =>
  import("./components/LoanTypes/LoanInNoida/LoanInNoida")
);
const LoanForCibilDefaulter = lazy(() =>
  import("./components/LoanTypes/LoanForCibilDefaulter/LoanForCibilDefaulter")
);
//const AutoLoan = lazy(() => import("./components/LoanTypes/AutoLoan/AutoLoan"));
const PrivateLoan = lazy(() =>
  import("./components/LoanTypes/PrivateLoan/PrivateLoan")
);
const Sitemap = lazy(() => import("./components/Sitemap/Sitemap"));
const Grievance = lazy(() => import("./pages/Grievance/Grievance"));

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const aboutUs = "/about_us.html";
//export const personalLoan = "/personal-loan-cibil-check-providers-delhi.html";
export const personalLoan = "/personal-loan-in-delhi.html";
//export const autoLoan = "/auto-loan.html";
export const privateLoan =
  "/instant-personal-private-loan-financer-companies-delhi.html";

export const loanAgainstProperty = "/loan-against-property-delhi.html";
export const cibilDefaulter = "/personal-loan-low-cibil-defaulter-delhi.html";
export const loanInGurgaon = "/personal-loan-gurgaon.html";
export const loanInNoida = "/personal-loan-noida.html";
export const dsaSignup = "/dsa-signup.php";
export const blog = "http://blog.vintagefinance.in";
export const contactUs = "/contact_us.html";
export const career = "/career.html";
export const privacyPolicy = "/privacypolicy.html";
export const disclaimer = "/disclaimer.html";
export const twoWheelerLoan = "/two-wheeler-loan.html";
//export const homeLoan = "/home-loan.html";
export const earlySalaryLoan = "/early-salary-loan.html";
export const loanInGhaziabad = "/personal-loan-ghaziabad.html";
export const sitemap = "/sitemap.html";
export const faqPage = "/faq.html";
export const services = "/services.html";
export const grievanceRedressal = "/grievance-redressal.html";

function App() {
  const [mobile, setMobile] = useState(false);
  const [loanModal, setLoanModal] = useState(false);
  const [toast, setToast] = useState(false);
  const [number] = useState("+919560462463");

  const closeLoanModal = () => {
    setLoanModal(false);
  };

  const closeToast = () => {
    setToast(false);
  };

  const openLoanModal = () => {
    setLoanModal(true);
  };

  const getDimensions = () => {
    if (window.innerWidth > 500) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", getDimensions);
    getDimensions();

    return () => window.removeEventListener("resize", getDimensions);
  }, []);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  // const [blogClicked, setBlogClicked] = useState();
  // console.log("blog clicked", blogClicked);

  // useEffect(() => {
  //   setBlogClicked(JSON.parse(window.localStorage.getItem("postId")));
  // }, []);

  // useEffect(() => {
  //   window.localStorage.setItem("postId", blogClicked);
  // }, [blogClicked]);

  const [policy, setPolicy] = useState(0);
  let fallback = <LoadingComponent text="Loading..." />;
  return (
    <>
      <Helmet>
        <title>
          Get Instant Approval Loan in Delhi | Loan Provider in New
          Delhi,Gurgaon ,Noida | Online Apply for Personal Loan | Payday Loan
          delhi
        </title>
        <link rel="canonical" href="https://www.vintagefinance.in/"/>
        <meta
          name="description"
          content="New Delhi Loan Provider:  Get Instant Approval Loan in New Delhi NCR. Online Apply for Personal Loan and payday loan."
        />
        <meta
          content="Private loan in Delhi, Personal loan from private financer in Delhi, Personal loan in Delhi without CIBIL check, private financers in delhi, Private finance companies in Delhi,   Loan for cibil defaulters in Delhi, Personal loan for CIBIL defaulters, Personal loan in Noida, Personal loan providers in Delhi, loan for bad cibil in delhi, loan without cibil check in delhi, low cibil personal loan delhi, personal loan for cibil defaulters in delhi, private financiers for cibil defaulters in delhi, loan without cibil verification in delhi, personal loan without cibil in delhi, personal loan without cibil check in gurgaon, personal loan with bad cibil score in delhi, personal loan for bad cibil score in delhi, bad cibil personal loan in delhi, loan for bad cibil score in delhi,  personal loan for cibil defaulters in delhi ncr, car loan for cibil defaulters in delhi, personal loan private finance company in delhi, money lenders in delhi, Private finance companies in Delhi, private financer in delhi, private lenders in delhi, private financer in gurgaon, private personal loan in delhi, pvt financer in delhi, financer in delhi for personal loan, financer in delhi, private money lenders in delhi, private financer in west delhi, personal loan from private finance in noida, private personal loan providers in gurgaon, private loan in noida, nbfc in new delhi, nbfc companies in delhi, list of nbfc companies in delhi ncr"
        />

      </Helmet>

      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={fallback}>
          {toast ? (
            <Toast onClose={closeToast} toast={toast} setToast={setToast} />
          ) : null}
        </Suspense>
        <Header
          mobile={mobile}
          close={closeLoanModal}
          open={openLoanModal}
          number={number}
        />
        <Suspense fallback={fallback}>
          {loanModal && (
            <LoanApplication
              open={openLoanModal}
              close={closeLoanModal}
              setToast={setToast}
            />
          )}
        </Suspense>

        <div className="App">
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  mobile={mobile}
                  close={closeLoanModal}
                  open={openLoanModal}
                  setToast={setToast}
                />
              )}
            />
            <Suspense fallback={fallback}>
              <Route exact path="/loan" component={LoanProduct} />
              <Route exact path={career} component={Career} />
              <Route
                exact
                path={dsaSignup}
                component={() => (
                  <Dsa setToast={setToast} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={aboutUs}
                component={() => <About open={openLoanModal} />}
              />
              <Route exact path={faqPage} component={Faqs} />
              {/* <Route
                exact
                path={`${blog}/page/:id`}
                component={() => <Blogs />}
              /> */}

              {/* <Route
                exact
                path={blog}
                component={() => <News open={openLoanModal} />}
              />
              <Route
                exact
                path={`${blog}/:id/:slug`}
                component={() => <BlogItem />}
              /> */}

              <Route exact path={services} component={ServicesPage} />
              <Route exact path={contactUs} component={News} />
              <Route
                exact
                path="/personal-loan-providers-delhi"
                component={() => (
                  <Emi
                    open={openLoanModal}
                    mobile={mobile}
                    setToast={setToast}
                  />
                )}
              />

              <Route
                exact
                path={privacyPolicy}
                component={() => <Policy policy={policy} mobile={mobile} />}
              />
              <Route
                exact
                path={disclaimer}
                component={() => <Policy policy={policy} />}
              />
              {/* <Route
                exact
                path={homeLoan}
                component={() => (
                  <HomeLoan mobile={mobile} open={openLoanModal} />
                )}
              /> */}
              <Route
                exact
                path={loanAgainstProperty}
                component={() => (
                  <LoanAgainstProperty mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={personalLoan}
                component={() => (
                  <PersonalLoan mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={earlySalaryLoan}
                component={() => (
                  <EarlySalaryLoan mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={twoWheelerLoan}
                component={() => (
                  <TwoWheelerLoan mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={loanInGurgaon}
                component={() => (
                  <LoanInGurgaon mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={loanInGhaziabad}
                component={() => (
                  <LoanInGhaziabad mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={loanInNoida}
                component={() => (
                  <LoanInNoida mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={cibilDefaulter}
                component={() => (
                  <LoanForCibilDefaulter mobile={mobile} open={openLoanModal} />
                )}
              />
              {/* <Route
                exact
                path={autoLoan}
                component={() => (
                  <AutoLoan mobile={mobile} open={openLoanModal} />
                )}
              /> */}
              <Route
                exact
                path={privateLoan}
                component={() => (
                  <PrivateLoan mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={sitemap}
                component={() => (
                  <Sitemap mobile={mobile} open={openLoanModal} />
                )}
              />
              <Route
                exact
                path={grievanceRedressal}
                component={Grievance}
              />
            </Suspense>
          </Switch>
        </div>
        <Footer setToast={setToast} setPolicy={setPolicy} />
      </BrowserRouter>
    </>
  );
}

export default App;
