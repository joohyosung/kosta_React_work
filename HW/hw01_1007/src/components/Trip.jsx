import React from "react";

function Trip({ imgSrc }) {
  return (
    <div>
      <img className="imgstyle" src={imgSrc} alt="" />
    </div>
  );
}

export default Trip;
