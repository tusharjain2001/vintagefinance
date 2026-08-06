import React from "react";
import Blogs from "../../components/BlogComponent/Blogs/Blogs";
//import PressRelease from "../../components/PressRelease/PressRelease";

const New = ({ open }) => {
  return (
    <div>
      <Blogs open={open} />
    </div>
  );
};

export default New;
