import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>USER전용 페이지입니다.</h1>
      <h3>{params.id}님 접속중</h3>
    </div>
  );
}

export default User;
