import React from "react";
//import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
//import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
//import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import styles from "./Dialog.module.css";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ dialog, setDialog }) {
  return (
    <div style={{ position: "relative" }}>
      <Dialog
        open={dialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setDialog(false)}
        className={styles.DialogMain}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <div className={styles.DialogRow}>
            <div onClick={() => window.open("/home-loan", "_self")}>
              <img
                alt="home-loan"
                src="/images/loan-products/group-15437.webp"
              />
              <h5>Home Loan</h5>
            </div>
            <div
              onClick={() =>
                window.open(
                  "/personal-loan-cibil-check-providers-delhi",
                  "_self"
                )
              }
            >
              <img
                alt="personal-loan"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>Personal Loan</h5>
            </div>
            <div
              onClick={() =>
                window.open("/personal-loan-low-cibil-defaulter-delhi", "_self")
              }
              className={styles.Mb}
            >
              <img
                alt="cibil"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>
                Loan for Cibil
                <br /> Defaulter
              </h5>
            </div>
          </div>
          <div className={styles.DialogRow}>
            <div onClick={() => window.open("/early-salary-loan", "_self")}>
              <img
                alt="early-salary-loan"
                src="/images/loan-products/group-15463.webp"
              />
              <h5>
                Early Salary
                <br /> Loan
              </h5>
            </div>
            <div onClick={() => window.open("/two-wheeler-loan", "_self")}>
              <img
                alt="two-wheeler-loan"
                src="/images/loan-products/group-15177.webp"
              />
              <h5>
                Two wheeler
                <br /> Loan
              </h5>
            </div>
          </div>
          <div className={styles.DialogRow}>
            <div
              onClick={() =>
                window.open("/loan-against-property-delhi", "_self")
              }
            >
              <img
                alt="loan-property"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>
                Loan Against
                <br /> Property
              </h5>
            </div>
            <div
              onClick={() => window.open("/personal-loan-noida", "_self")}
              className={styles.Mb}
            >
              <img
                alt="loan-in-noida"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>
                Loan in
                <br /> Noida
              </h5>
            </div>
          </div>
          <div className={styles.DialogRow}>
            <div
              onClick={() => window.open("/personal-loan-gurgaon", "_self")}
              className={styles.Mb}
            >
              <img
                alt="loan-in-gurgaon"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>
                Loan in
                <br /> Gurgaon
              </h5>
            </div>
            <div
              onClick={() => window.open("/personal-loan-ghaziabad", "_self")}
              className={styles.Mb}
            >
              <img
                alt="loan-in-ghaziabad"
                src="/images/loan-products/group-15178.webp"
              />
              <h5>
                Loan in
                <br /> Ghaziabad
              </h5>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
