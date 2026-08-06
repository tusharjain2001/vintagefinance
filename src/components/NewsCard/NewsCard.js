import React, { useEffect } from "react";
import classes from "./NewsCard.module.css";
import renderHTML from "react-render-html";
import PropTypes from "prop-types";
import axios from "axios";
import { wordpressUrl } from "../../config";

const url =
  "/images/section-7/news/graph.webp";

const NewsCard = ({ post }) => {
  return (
    <>
      <div className={classes.Card}>
        <div className={classes.Img}>
          <img
            src={
              post._embedded["wp:featuredmedia"]
                ? post._embedded["wp:featuredmedia"][0].source_url
                : url
            }
            alt={post.heading}
            className={classes.Img}
          />
        </div>
        <div className={classes.SubCard}>
          <div>
            <h2 className={classes.H2}>
              {renderHTML(post.title.rendered.slice(0, 45))}
              {post.title.rendered.length > 45 ? <span>...</span> : null}
            </h2>
            <div className={classes.P}>{renderHTML(post.excerpt.rendered)}</div>
          </div>
          <div className={classes.Author}>
            <img
              className={classes.ProfileImg}
              src={post._embedded.author[0].avatar_urls[24]}
              alt="profile"
            />
            <div style={{ marginLeft: "12px" }}>
              <h5 className={classes.H5}>{post._embedded.author[0].name}</h5>
              <h6 className={classes.H6}>{post.date}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
