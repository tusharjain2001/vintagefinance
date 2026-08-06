/* eslint-disable eqeqeq */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import Button from "@material-ui/core/Button";
//import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "21.484vw",
    display: "flex",
    flexDirection: "column",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
    opacity: "0.8",
    boxShadow: "none",
    transition: "width 2s, height 2s",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "1.094vw",
  },
  pos: {
    marginBottom: "0.938vw",
  },
  act: {
    opacity: '1',
    boxShadow: ' 0 0 0 8px #fff',
  },
  rating: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2.656vw",
    lineHeight: "1.719vw",
    letterSpacing: "-0.04em",
    color: "#000000",
    marginBottom: "1.563vw",
    "@media (max-width: 500px)": {
      overflowY: "hidden",
      fontSize: 45,
      lineHeight: "54px",
      marginBottom: "0",
    },
  },
  heading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "0.887vw",
    lineHeight: "1.172vw",
    letterSpacing: "-0.04em",
    color: "#000000",
    "@media (max-width: 500px)": {
      overflowY: "hidden",
      fontSize: "15px !important",
      lineHeight: "20px",
    },
  },
  subHeading: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "0.859vw",
    lineHeight: "1.563vw",
    letterSpacing: "-0.04em",
    color: "#000000",
    opacity: "0.9",
    "@media (max-width: 500px)": {
      overflowY: "hidden",
      fontSize: "15px !important",
      lineHeight: "20px",
    },
  },
  profileImg: {
    borderRadius: "50%",
    marginRight: "1.172vw",
    "@media (max-width: 500px)": {
      width: "60px !important",
      height: "60px !important",
      marginRight: 14,
    },
  },
  authorName: {
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "1.719vw",
    letterSpacing: "-0.04em",
    color: "#000000",
    "@media (max-width: 500px)": {
      fontSize: "16px !important",
      lineHeight: "29px",
    },
  },
  date: {
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "2.266vw",
    letterSpacing: "-0.04em",
    color: "#000000",
    opacity: "0.9",
    "@media (max-width: 500px)": {
      fontSize: "14px !important",
      lineHeight: "29px",
    },
  },
}));

const RatingCards = ({ card, clicked }) => {
  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  return (
    <Card
      className={`${classes.root} ${clicked && classes.act}`}
      style={{ minHeight: "24vw" }}
    >
      <CardContent>
        <h2 className={classes.rating}>{card.ratings}</h2>
        <div className={classes.root}>
          <Rating
            name="half-rating-read"
            defaultValue={card.ratings}
            precision={0.5}
            readOnly
          />
          <h3
            className={classes.heading}
                      >
            {card.heading}
          </h3>
          <h4
            className={classes.subHeading}
                      >
            {card.subHeading}
          </h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={card.user.profileImage}
              alt="profile"
              className={classes.profileImg}
              style={{
                width: "4vw",
                height: "4vw",
              }}
            />
            <div>
              <h5
                className={classes.authorName}
                style={{ fontSize: "1.094vw" }}
              >
                {card.user.name}
              </h5>
              <h6
                className={classes.date}
                style={{ fontSize: "0.938vw" }}
              >
                {card.user.dateOfComment}
              </h6>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RatingCards;
