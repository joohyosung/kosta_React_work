import React, { Children } from "react";

import "./Ex03_ButtonImg.css";

function Ex03_ButtonImg({ imgSrc, text, btnClick, a, b, c }) {
  console.log(a, b, c);
  console.log(Children);
  return (
    <div className="divBtn">
      <img src={imgSrc} alt={text} />
      <button onClick={btnClick}>{text}</button>
    </div>
  );
}

export default Ex03_ButtonImg;
