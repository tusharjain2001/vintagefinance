import React from "react";
import PropTypes from "prop-types";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import Disclaimer from "../Disclaimer/Disclaimer";
import Helmet from "react-helmet";
import { useHistory } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    "@media (max-width: 500px)": {
      flexDirection: "column",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    overflow: "initial",
  },
  tab: {
    minWidth: 360,
    "@media (max-width: 500px)": {
      minWidth: 150,
    },
  },

  upperdiv: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: "20px",
    letterSpacing: "-0.04em",
    color: "#0B1642",
    marginLeft: 385,
    marginTop: 40,
    marginBottom: 40,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    "@media (max-width: 500px)": {
      display: "none",
    },
  },
}));

const muiTheme = createTheme({
  overrides: {
    MuiTabs: {
      flexContainerVertical: {
        "@media (max-width: 500px)": {
          flexDirection: "row",
          marginTop: 30,
        },
      },
    },
    PrivateTabIndicator: {
      colorSecondary: {
        "@media (max-width: 500px)": {
          backgroundColor: "transparent",
        },
      },
    },
  },
});

const Policy = ({ policy, mobile }) => {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(policy);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Helmet>
        <title>
          Get Instant Approval Loan in Delhi | New Delhi Loan Provider
        </title>
        <meta
          name="description"
          content="New Delhi Loan Provider:  Get Instant Approval Loan in New Delhi NCR. Apply Online by visiting our website../"
        />
        <meta
          name="keywords"
          content="GGet Instant Approval Loan in Delhi, Loan Provider in New Delhi NCR, new delhi loan provider, personal loan in delhi. ./"
        />
      </Helmet>

      <div className={classes.upperdiv} onClick={() => history.push("/")}>
        <KeyboardBackspaceIcon />
        Back To Home
      </div>
      <div className={classes.root}>
        <ThemeProvider theme={muiTheme}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab
              className={classes.tab}
              label="Privacy Policy"
              {...a11yProps(0)}
              style={{
                borderBottom: mobile && value === 0 && "1px solid black",
              }}
            />
            <Tab
              style={{
                borderBottom: mobile && value === 1 && "1px solid black",
              }}
              className={classes.tab}
              label="Disclaimer"
              {...a11yProps(1)}
            />
          </Tabs>
        </ThemeProvider>

        <TabPanel value={value} index={0}>
          <PrivacyPolicy />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Disclaimer />
        </TabPanel>
      </div>
    </>
  );
};

export default Policy;
