import React from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "37.891vw",
    backgroundColor: "#000000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    marginLeft: "auto",
    overflowY: "scroll",
    outline: "none !important",
    "&:active": {
      outline: "none",
    },
    "&:hover": {
      outline: "none",
    },
    "@media (max-width: 500px)": {
      width: "100%",
    },
  },
}));

const SideModal = ({ open, handleOpen, children }) => {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.paper}
      >
        <div
          style={{
            outline: "none",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
          }}
        >
          {children}
        </div>
      </Modal>
    </div>
  );
};

export default SideModal;
