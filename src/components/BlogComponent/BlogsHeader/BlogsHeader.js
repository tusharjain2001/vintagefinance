import React from "react";
import { useHistory } from "react-router-dom";
import { dsaSignup } from "../../../App";
import classes from "./BlogsHeader.module.css";

const BlogsHeader = ({ open }) => {
  const history = useHistory();
  return (
    <div className={classes.BlogsHeader}>
      <h1>News and Media</h1>
      <div className={classes.BtnWrapper}>
        <button className={classes.BtnG} onClick={open}>
          GET INSTANT APPROVAL
        </button>
        <button
          className={classes.BtnD}
          onClick={() => history.push(dsaSignup)}
        >
          JOIN OUR DSA PROGRAM
        </button>
      </div>
    </div>
  );
};

export default BlogsHeader;
