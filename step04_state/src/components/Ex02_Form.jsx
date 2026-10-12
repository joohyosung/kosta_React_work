import React from "react";
import { useState } from "react";

function Ex02_Form() {
  const [userName, setUserName] = useState();
  const inputNameChange = (e) => {
    console.log(e);
    setUserName(e.target.value);
  };
  const [age, setAge] = useState();
  return (
    <div>
      <h1>폼 입력 값 - useState 사용하기</h1>
      <form action="">
        이름:
        <input
          type="text"
          name="userName"
          onChange={inputNameChange}
          value={userName}
        />
        <br />
        나이:
        <input
          type="text"
          name="age"
          onChange={(e) => {
            setAge(e.target.value);
          }}
          value={age !== 0 ? age : ""}
        />
      </form>
      <div>
        결과: {userName} / {age}
      </div>
    </div>
  );
}

export default Ex02_Form;
