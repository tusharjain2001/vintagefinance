import axios from "axios";
import React, { useEffect, useState } from "react";
import { wordpressUrl } from "../../../config";
import classes from "./BlogItem.module.css";
import renderHTML from "react-render-html";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import moment from "moment";
import ApplyLoanCard from "../../ApplyLoanCard/ApplyLoanCard";
import { useHistory, useParams } from "react-router-dom";
import { blog } from "../../../App";
import { Helmet } from "react-helmet";

const url =
  "/images/section-7/news/graph.webp";

const BlogItem = () => {
  const [post, setPost] = useState({});
  const [postId, setPostId] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();
  const { slug } = useParams();

  const getIdOfBlog = async () => {
    try {
      const result = await axios.get(`${wordpressUrl}/posts?slug=${slug}`);
      // console.log("R", result);
      return result.data[0].id;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = getIdOfBlog();

    data.then(function (result) {
      setPostId(result);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //const blogId = usePostId();

  const fetchData = async () => {
    try {
      const result = await axios.get(`${wordpressUrl}/posts/${postId}?_embed`);
      if (result.status === 200) {
        setPost(result.data);
        setIsLoaded(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (postId) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return (
    <>
      <Helmet>
        <title>{post ? post.slug : "Vintage Finance"}</title>
        <meta
          name="description"
          content={isLoaded && renderHTML(post?.title?.rendered)}
        />
        <meta
          name="keywords"
          content={isLoaded && renderHTML(post?.title?.rendered)}
        />
      </Helmet>
      <div className={classes.BlogWrapper}>
        {isLoaded ? (
          <>
            <div className={classes.BackBtn} onClick={() => history.push(blog)}>
              <ArrowBackIcon style={{ marginRight: 10 }} /> News and Media
            </div>
            <div>
              <h1 className={classes.H1}>{renderHTML(post.title.rendered)}</h1>
            </div>
            <div className={classes.Author}>
              <img
                className={classes.ProfileImg}
                src={post._embedded.author[0].avatar_urls[24]}
                alt="profile"
              />
              <div className={classes.AuthorName}>
                <h5 className={classes.H5}>{post._embedded.author[0].name}</h5>
                <h6 className={classes.H6}>
                  {moment(`${post.date}`).format("Do MMM YYYY")}
                </h6>
              </div>
            </div>
            <img
              src={
                post._embedded["wp:featuredmedia"]
                  ? post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .full.source_url
                  : url
              }
              alt={
                post._embedded["wp:featuredmedia"]
                  ? post._embedded["wp:featuredmedia"][0].alt_text
                  : "img"
              }
              className={classes.Img}
            />

            <div className={classes.P}>{renderHTML(post.content.rendered)}</div>
          </>
        ) : (
          <LoadingComponent text="Loading..." />
        )}
      </div>
      <ApplyLoanCard />
    </>
  );
};

export default BlogItem;
