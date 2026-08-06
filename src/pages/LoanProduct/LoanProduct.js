import React from "react";
//import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
import {
  cibilDefaulter,
  earlySalaryLoan,
  loanAgainstProperty,
  loanInGhaziabad,
  loanInGurgaon,
  loanInNoida,
  personalLoan,
  privateLoan,
  twoWheelerLoan,
} from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  heading: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      color: "#ffffff",
    },
  },
  UL: {
    background: "#141416",
    color: "#777e91",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 15,
    lineHeight: 18,
    width: 228,
    "& li": {
      height: "40px",
      "&:hover": {
        background: "#3C3F44",
        color: "#ffffff",
      },
    },
    "@media (max-width: 500px)": {
      width: "100vw",
    },
  },
  body: {
    "@media (max-width: 500px)": {
      position: "relative !important",
      left: "-20px !important",
      top: "-75px !important",
    },
  },
  act: {
    color: "#ffffff !important",
  },
}));

const LoanProduct = ({ setShowSideDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <h3
          ref={anchorRef}
          onClick={handleToggle}
          className={`${classes.heading} ${open && classes.act} `}
        >
          Loan Products{" "}
          <span style={{ marginLeft: 10 }}>
            {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </span>
        </h3>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          className={classes.body}
          onClick={() => setShowSideDrawer(false)}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={classes.UL}
                  >
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(personalLoan);
                      }}
                    >
                      Personal Loan
                    </MenuItem>
                    {/* <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(homeLoan);
                      }}
                    >
                      Home Loan
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(autoLoan);
                      }}
                    >
                      Auto Loan
                    </MenuItem> */}
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(loanAgainstProperty);
                      }}
                    >
                      Loan Against Property
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(earlySalaryLoan);
                      }}
                    >
                      Early Salary Loan
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(twoWheelerLoan);
                      }}
                    >
                      Two wheeler Loan
                    </MenuItem>

                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(privateLoan);
                      }}
                    >
                      Private Loan
                    </MenuItem>

                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(cibilDefaulter);
                      }}
                    >
                      Loan for Cibil Defaulter
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(loanInGurgaon);
                      }}
                    >
                      Personal Loan in Gurgaon
                    </MenuItem>

                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(loanInNoida);
                      }}
                    >
                      Personal Loan in Noida
                    </MenuItem>
                    <MenuItem
                      onClick={(event) => {
                        handleClose(event);
                        history.push(loanInGhaziabad);
                      }}
                    >
                      Personal Loan in Ghaziabad
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default LoanProduct;
