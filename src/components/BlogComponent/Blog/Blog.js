import React from "react";
import classes from "./Blog.module.css";
import renderHTML from "react-render-html";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import moment from "moment";

const url =
  "/images/section-7/news/graph.webp";

const Blog = ({ post }) => {
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
            alt={
              post._embedded["wp:featuredmedia"]
                ? post._embedded["wp:featuredmedia"][0].alt_text
                : "img"
            }
            className={classes.Img}
          />
        </div>
        <div className={classes.SubCard}>
          <div>
            <h2 className={classes.H2}>
              {renderHTML(post.title.rendered.slice(0, 48))}
              {post.title.rendered.length > 48 ? <span>...</span> : null}
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
              <h6 className={classes.H6}>
                {moment(`${post.date}`).format("Do MMM YYYY")}
              </h6>
            </div>
          </div>

          <button
            className={classes.Btn}
            onClick={() => {
              // blogId(post.id);
              window.open(
                `/blog/${post._embedded["wp:term"][0][0].slug}/${post.slug}`,
                "_blank"
              );
            }}
          >
            View <ArrowForwardIcon style={{ marginLeft: 7 }} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
