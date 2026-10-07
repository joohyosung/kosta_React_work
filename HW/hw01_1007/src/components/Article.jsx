import React from "react";
import Trip from "./Trip";
import img from "../assets/images/Hawaii.jpg";

function Article({ title, body }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <Trip imgSrc={img} />
    </div>
  );
}

export default Article;
