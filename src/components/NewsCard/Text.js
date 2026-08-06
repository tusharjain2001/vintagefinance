import React from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

const Text = ({ post }) => {
  function transform(node, index) {
    if (node.type === "tag" && node.name === "img") {
      return null;
    }
    if (node.type === "tag" && node.name === "a") {
      return null;
    }
    if (
      (node.type === "tag" && node.name === "p") ||
      node.name === "span" ||
      node.name === "h1" ||
      node.name === "h2" ||
      node.name === "h3" ||
      node.name === "h4" ||
      node.name === "h5" ||
      node.name === "h6"
    ) {
      return (
        <div style={{ fontSize: "10px" }} className="h2">
          {console.log("node", processNodes(node.children))}
          {node.children.length > 0 && processNodes(node.children, transform)}
        </div>
      );
    }
  }

  const options = {
    decodeEntities: true,
    transform,
  };
  return <div>{ReactHtmlParser(post.content, options)}</div>;
};

export default Text;
