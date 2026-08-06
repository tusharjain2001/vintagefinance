import React from "react";
import { Card } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./LoadingComponent.module.css";

const LoadingComponent = ({ text }) => {
  return (
    <div className={classes.basicClass}>
      <Card
        className={classes.secondaryParentItem}
        style={{ background: "#000" }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            margin: "auto",
            color: "#fff",
          }}
        >
          <CircularProgress
            style={{ marginBottom: "10px", color: "#b9f59d" }}
          />
          {text}...
        </div>
      </Card>
    </div>
  );
};

export default LoadingComponent;
