import React from "react";
import { useSearchParams } from "react-router-dom";

function Admin() {
  const [params] = useSearchParams();
  console.log(params);

  return (
    <div>
      <h3>Admin입니다.</h3>
      <h4>
        {params.get("n")} / {params.get("a")}
      </h4>
    </div>
  );
}

export default Admin;
