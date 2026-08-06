import React from "react";
//import classes from "./Toast.module.css";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Toast = ({ onClose, toast, setToast }) => {
  const classes = useStyles();

  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
    <div className={classes.root}>
      <Snackbar open={toast} autoHideDuration={5000} onClose={onClose}>
        <Alert
          style={{ display: "flex", alignItems: "center" }}
          onClose={onClose}
          severity="success"
        >
          Saved Successfully
          <br /> Our experts will get back to you shortly
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Toast;
