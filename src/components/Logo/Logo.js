import React from "react";
import classes from "./Logo.module.css";
import { Link } from "react-router-dom";

let logo =
  "/images/logo/vintage-logo.webp";

const Logo = () => {
  return (
    <Link to="/" className={classes.Logo}>
      <img src={logo} alt="vintage-logo" className={classes.LogoImg} />
    </Link>
  );
};

export default Logo;
