import React from "react";
import "./style.css";

const BlogItem = ({ data }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="BlogItem" key={data.id}>
        <p>{data.title}</p>
        <p>{data.body}</p>
      </div>
    </div>
  );
};
export default BlogItem;
