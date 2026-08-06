import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import FixedButton from "../Fixed-button-mobile/FixedButton";
import classes from "./Navbar.module.css";
// import ExpandLessIcon from "@material-ui/icons/ExpandLess";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LoanProduct from "../../pages/LoanProduct/LoanProduct";
import { aboutUs, blog, dsaSignup, grievanceRedressal } from "../../App";
import FixedWeb from "../FixedWeb/FixedWeb";
import FixedWhatsappBtn from "../FixedButton/FixedButton";

let crossBtn =
  "/images/loan-application/shape.webp";

let toggle =
  "/images/logo/group-15294.webp";

let mob =
  "/images/navbar/mob-green.webp";

const Navbar = ({ open, close, mobile, number, dialog, setDialog }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  // const closeSideDrawer = () => {
  //   setShowSideDrawer(false);
  // };

  const [selectModal] = useState(false);
  return (
    <>
      {/* <div>
        <h2 onClick={() => setSelectModal(!selectModal)}>
          Loan Products{" "}
          <span style={{ marginLeft: 10 }}>
            {selectModal ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </h2>
        {selectModal ? (
          <div className={classes.Select}>
            <h5>Personal Loan</h5>
            <h5>Home Loan</h5>
            <h5>Loan against Property</h5>
            <h5>Early Salary Loan</h5>
            <h5>Two wheeler Loan</h5>
          </div>
        ) : null}
      </div> */}

      {/* for mobile and desktop different navbar is used, this is done for the server side rendering */}
      {mobile && showSideDrawer && (
        <div className={`${classes.FullNavbar}`}>
          <div className={classes.Navbar}>
            <NavLink
              exact
              to="/"
              onClick={() => {
                setShowSideDrawer(false);
              }}
              style={{ marginTop: selectModal ? 300 : 0 }}
              activeClassName={classes.Active}
            >
              Home
            </NavLink>
            <LoanProduct setShowSideDrawer={setShowSideDrawer} />

            <NavLink
              to={aboutUs}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              style={{ marginTop: selectModal ? 300 : 0 }}
              activeClassName={classes.Active}
            >
              About us
            </NavLink>
            {/* <NavLink
              to={career}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              Career
            </NavLink> */}
            <NavLink
              to={dsaSignup}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              DSA Program
            </NavLink>
            <NavLink
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
              to={{ pathname: blog }}
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </NavLink>
            <NavLink
              to={grievanceRedressal}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              Complaints
            </NavLink>
          </div>
          <button className={classes.instantBtn} onClick={open}>
            GET INSTANT APPROVAL
          </button>
        </div>
      )}
      {mobile && <FixedWhatsappBtn bg={"#fff"} />}
      {!mobile && (
        <div
          className={`${classes.FullNavbar} ${
            mobile && !showSideDrawer && classes.Hide
          }`}
        >
          <div className={classes.Navbar}>
            <LoanProduct setShowSideDrawer={setShowSideDrawer} />

            <NavLink
              to={aboutUs}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              style={{ marginTop: selectModal ? 300 : 0 }}
              activeClassName={classes.Active}
            >
              About us
            </NavLink>
            {/* <NavLink
              to={career}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              Career
            </NavLink> */}
            <NavLink
              to={dsaSignup}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              DSA Program
            </NavLink>
            <NavLink
              to={{ pathname: blog }}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
              target="_blank"
              rel="noreferrer"
            >
              Blogs
            </NavLink>
            <NavLink
              to={grievanceRedressal}
              onClick={() => {
                setShowSideDrawer(false);
              }}
              activeClassName={classes.Active}
            >
              Complaints
            </NavLink>
            <a href="tel:+91 9560462463" className={classes.NumAnchor}>
              <div className={classes.Num}>
                <img src={mob} alt="phone" />
                <span>+91 9560462463</span>
              </div>
            </a>
          </div>

          <button className={classes.instantBtn} onClick={open}>
            GET INSTANT APPROVAL
          </button>
          <FixedWeb />
        </div>
      )}
      <div
        className={classes.Toggler}
        onClick={() => setShowSideDrawer(!showSideDrawer)}
      >
        {showSideDrawer ? (
          <img src={crossBtn} alt="toggler" />
        ) : (
          <img src={toggle} alt="toggler" />
        )}
      </div>
      <FixedButton number={number} open={open} />
    </>
  );
};

export default Navbar;
