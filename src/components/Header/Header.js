//import { Container } from "@material-ui/core";
import React, { useState } from "react";
import SimpleDialogDemo from "../Dialog/Dialog";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";

const Header = ({ open, close, mobile, number }) => {
  const [dialog, setDialog] = useState(false);
  return (
    <div className={classes.Header}>
      <Logo />
      <Navbar
        open={open}
        close={close}
        mobile={mobile}
        number={number}
        dialog={dialog}
        setDialog={setDialog}
      />
      <SimpleDialogDemo dialog={dialog} setDialog={setDialog} />
    </div>
  );
};

export default Header;
