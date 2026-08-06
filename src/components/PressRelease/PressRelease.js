import React, { useEffect, useState } from "react";
import Buttons from "../Buttons/Buttons";
import NewsCard from "../NewsCard/NewsCard";
import classes from "./PressRelease.module.css";
import axios from "axios";
import LoadingComponent from "../LoadingComponent/LoadingComponent";
import { wordpressUrl } from "../../config";

const url =
  "/images/section-7/news/graph.webp";

const PressRelease = () => {
  const posts = [
    {
      profileImageUrl:
        "/images/section-7/news/circle.webp",
      createdAt: "12 April 2018",
      imageUrl: url,
      username: "Robert",
      heading: " Outdoor Fashion Photography Tips Photography Tips",
      subHeading:
        "Vulputate tempor, ut dui est. Risus lacus vitae egestas pellentesque elementum, tortor tristique purus. Nulla egestas morbi auctor quam.",
    },
    {
      profileImageUrl:
        "/images/section-7/news/circle.webp",
      createdAt: "12 April 2018",
      imageUrl: url,
      username: "Robert",
      heading: " Outdoor Fashion Photography Tips Photography Tips",
      subHeading:
        "Vulputate tempor, ut dui est. Risus lacus vitae egestas pellentesque elementum, tortor tristique purus. Nulla egestas morbi auctor quam.",
    },
  ];

  // const urlBlog =
  //   "https://www.googleapis.com/blogger/v3/blogs/1938384833396640655/posts?key=AIzaSyDrUV819ee5-oDEr7_V2EunvYVl9vzaRaU";

  const [newsPost, setNewsPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // const getPosts = async () => {
  //   const posts = await axios.get(urlBlog);
  //   console.log("posts", posts);
  //   setNewsPost(posts.data.items);
  // };

  console.log("newpost", newsPost);

  const [page, setPage] = useState(1);

  const newUrl = `${wordpressUrl}/posts?_embed&page=${page}`;
  const fetchData = async () => {
    try {
      const result = await axios.get(newUrl);
      console.log("res", result);
      setNewsPost(result.data);
      setIsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    let res = fetchData();

    return () => res;
  }, [page]);

  // console.log(page);
  useEffect(() => {
    //getPosts();
  }, []);

  return (
    <>
      <div className={classes.Press}>
        <h1 className={classes.H1}>News & Press Release</h1>
        <h6 className={classes.H6}>
          Vintage Finance personal loan serves multiple purposes and is
          available for all <br />
          salaried individuals. Life can throw up a surprise
        </h6>
        {isLoaded ? (
          <>
            <div className={classes.Cards}>
              {newsPost.length > 0 &&
                newsPost.map((post) => <NewsCard key={post.id} post={post} />)}
            </div>
            <button
              onClick={() => {
                setPage(page + 1);
                setIsLoaded(false);
              }}
            >
              Next
            </button>
          </>
        ) : (
          <LoadingComponent text="Loading..." />
        )}

        <div style={{ marginTop: "70px" }} className={classes.BtnsDiv}>
          <Buttons />
        </div>
      </div>
    </>
  );
};

export default PressRelease;
