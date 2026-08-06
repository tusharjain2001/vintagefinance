/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import RatingCards from "../RatingCards/RatingCards";
import classes from "./Rating.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let backwardBtn =
  "/images/section-6/rating/backward.webp";

let forwardBtn =
  "/images/section-6/rating/forward.webp";

// let prof =
//   "/images/section-6/rating/ellipse-1133.webp";

let prof1 =
  "/images/section-6/rating/prof1.webp";

let prof2 =
  "/images/section-6/rating/prof2.webp";

let prof3 =
  "/images/section-6/rating/prof3.webp";

let prof4 =
  "/images/section-6/rating/prof4.webp";

const Rating = ({ mobile, open }) => {
  const cardData = [
    {
      userId: 1,
      user: {
        name: "Ishaan Ghakar",
        profileImage: prof1,
        dateOfComment: "12-03-2021",
      },
      star: 4,
      ratings: 4.5,
      heading: "Best interest rate in the market!",
      subHeading:
        "From application to loan disbursal, everything went so smoothly. I got the cash instantly and the interest rates were the best in market.",
    },
    {
      userId: 2,
      user: {
        name: "Pawan sharma",
        profileImage: prof2,
        dateOfComment: "18-06-2021",
      },
      star: 3,
      ratings: 4.8,
      heading: "Very suitable for multiple loan outs",
      subHeading:
        "Understanding the struggles of salaried people, vintage finance has done a great job. I took a loan twice and I very satisfied.",
    },
    {
      userId: 3,
      user: {
        name: "Samarth Bhal",
        profileImage: prof3,
        dateOfComment: "26-08-2021",
      },
      star: 5,
      ratings: 4.7,
      heading: "The service is fast and reliable.",
      subHeading:
        "Great service! I got my loan within 20 minutes of documents collection. The folks here are friendly and get the job done! Will definitely use their services again!",
    },
    {
      userId: 4,
      user: {
        name: "Sashi Malik",
        profileImage: prof4,
        dateOfComment: "02-09-2021",
      },
      star: 5,
      ratings: 4.4,
      heading: "Greatest option for easy and instant loan disbursal",
      subHeading:
        "Excellent hassle-free loan service at Vintage Finance. My loan got approved, processed and disbursed in just couple of hours. Recommend to anyone who’s looking for instant loan.",
    },
  ];

  const [cards] = useState(cardData);

  const [showSlide, setShowSlide] = useState(3);

  useEffect(() => {
    if (mobile) {
      setShowSlide(1);
    } else {
      setShowSlide(3);
    }
  }, [mobile]);
  const BackArrow = ({ onClick }) => {
    return (
      <>
        {!mobile && (
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "-7%",
              cursor: "pointer",
            }}
            onClick={onClick}
          >
            <img loading="lazy" src={backwardBtn} alt="backward" className={classes.Img} />
          </div>
        )}
      </>
    );
  };

  const FrontArrow = ({ onClick }) => {
    return (
      <>
        {!mobile && (
          <div
            style={{
              position: "absolute",
              top: "45%",
              right: "-7%",
              cursor: "pointer",
            }}
            onClick={onClick}
          >
            <img loading="lazy" src={forwardBtn} alt="forward" className={classes.Img} />
          </div>
        )}
      </>
    );
  };

  var settings = {
    infinite: true,
    speed: 300,
    slidesToShow: showSlide,
    centerMode: true,
    centerPadding: 0,
    lazyLoad: true,
    beforeChange: (current, next) => setActiveId(next),
    nextArrow: <FrontArrow />,
    prevArrow: <BackArrow />,
    dots: mobile,
    dotsClass: `slick-dots ${classes.dots}`,
    useCss: true,
    useTransform: true,
    touchMove: true,
    swipeToSlide: true,
    focusOnSelect: true,
  };

  const [activeId, setActiveId] = useState(0);

  // const forward = () => {
  //   setActiveId(activeId + 1);
  // };

  // const backward = () => {
  //   setActiveId(activeId - 1);
  // };

  return (
    <div className={classes.Rating}>
      <div>
        <h2 className={classes.H2}>
          Customers <br /> Reviews and Ratings
        </h2>
        <p className={classes.P}>
          We take immense pride in what our <br className={classes.BrDe} />{" "}
          customers have to say about us and our
          <br className={classes.BrDe} /> services which drives{" "}
          <br className={classes.BrMb} /> us to put in extra efforts
          <br className={classes.BrDe} /> in delivering the best.
        </p>
      </div>
      <div className={classes.RatingCards}>
        <Slider {...settings}>
          {cards.map((card, index) => (
            <div key={card.userId.toString()}>
              <div
                style={{
                  height: "380px",
                  display: "flex",
                  alignItems: "center",
                  overflowY: "hidden",
                  overflowX: "hidden",
                }}
              >
                <RatingCards card={card} clicked={index == activeId} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={classes.BtnDiv}>
        <button className={classes.Btn} onClick={open}>
          GET INSTANT APPROVAL
        </button>
      </div>
    </div>
  );
};

export default Rating;
