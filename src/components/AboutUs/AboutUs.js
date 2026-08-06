import React from "react";
import Buttons from "../Buttons/Buttons";
import classes from "./AboutUs.module.css";

let about =
  "/images/section-7/about/istock-1209431211-2.webp";

const AboutUs = ({ open }) => {
  return (
    <>
      <div className={classes.About} id={"about-us"}>
        <h1 className={classes.H1}>About Us</h1>
        <h2 className={classes.H6}>
          You no longer need to compromise with your life. With
          <br className={classes.BrMb} /> Vintage Finance, life is easy.
        </h2>
        <img loading="lazy" src={about} alt="about" className={classes.Img} />
        <h3 className={classes.H5}>
          We are a team of experts working on a mission to{" "}
          <br className={classes.BrMb} /> bring transparency, ease and integrity
          in the way
          <br className={classes.BrMb} /> people borrow money.
        </h3>
        <p className={classes.P}>
          We have a nationwide presence with a thriving team of 350+ employees
          across all cities. Vintage Finance provides financial services to help
          you achieve your financial goals. From your ideal home to the finances
          you need to set up your own business, we offer loans that are
          hassle-free and tailored to your requirements. <br />
          <br /> Our fairness and legacy of hiring and training the best minds
          with sharp analytical skills, distinguishes us from all others.
          Excellence and ethics is at the core of everything we do.
        </p>
        <div className={classes.BtnDiv}>
          <Buttons open={open} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
