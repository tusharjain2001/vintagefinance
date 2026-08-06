import React from "react";
import classes from "./Buttons.module.css";

const Buttons = ({ open }) => {
  return (
    <>
      {/* <button className={classes.BtnC}>CAREERS, WE ARE HIRING</button> */}
      <button className={classes.BtnL} onClick={open}>
        GET INSTANT APPROVAL
      </button>
    </>
  );
};

export default Buttons;
