import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingComponent from "../../LoadingComponent/LoadingComponent";
import { wordpressUrl } from "../../../config";
import classes from "./Blogs.module.css";
import Blog from "../Blog/Blog";
import ApplyLoanCard from "../../ApplyLoanCard/ApplyLoanCard";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useHistory } from "react-router-dom";
import { blog } from "../../../App";
import BlogsHeader from "../BlogsHeader/BlogsHeader";

const Blogs = ({ open }) => {
  const [newsPost, setNewsPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const history = useHistory();
  const [totalPages, setTotalPages] = useState();
  const newUrl = `${wordpressUrl}/posts?_embed&page=${page}`;
  const fetchData = async () => {
    try {
      const result = await axios.get(newUrl);
      setNewsPost(result.data);
      setTotalPages(result.headers["x-wp-totalpages"]);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      fetchData();
    }

    return () => (isSubscribed = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <>
      <BlogsHeader open={open} />
      <div className={classes.CardsWrapper}>
        {isLoaded ? (
          <>
            <div className={classes.Cards}>
              {newsPost.length > 0 &&
                newsPost.map((post) => <Blog key={post.id} post={post} />)}
            </div>
            <div className={classes.BottomContainer}>
              <button
                onClick={() => {
                  setPage(page - 1);
                  setIsLoaded(false);
                  history.push(`${blog}/page/${page}`);
                }}
                disabled={page <= 1}
                className={classes.Btn}
                style={{
                  opacity: page <= 1 ? "0.65" : "1",
                  cursor: page <= 1 && "not-allowed",
                }}
              >
                <ArrowBackIcon style={{ fontSize: 36, marginRight: 10 }} />
                <span>Previous</span>
              </button>
              <div>
                {page} <span>out of {totalPages}</span>
              </div>
              <button
                onClick={() => {
                  setPage(page + 1);
                  setIsLoaded(false);
                }}
                className={classes.Btn}
                style={{
                  opacity: page >= totalPages ? "0.65" : "1",
                  cursor: page >= totalPages && "not-allowed",
                }}
                disabled={page >= totalPages}
              >
                <span>Next</span>
                <ArrowForwardIcon style={{ fontSize: 36, marginLeft: 10 }} />
              </button>
            </div>
          </>
        ) : (
          <LoadingComponent text="Loading..." />
        )}
      </div>
      <ApplyLoanCard />
    </>
  );
};

export default Blogs;
