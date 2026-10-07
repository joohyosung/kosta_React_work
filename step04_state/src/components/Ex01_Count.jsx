import React from "react";
import { useState } from "react";

let i = 0;

function Ex01_Count() {
  /* const re = useState();
  console.log(re); */

  const [no, setNo] = useState(0);
  console.log(no);
  console.log(setNo);

  // 감소하는 함수
  const minusFun = () => {
    // useState 변수 값 변경
    // no--; 직접 값 변경 불가(변경 함수 이용해서 변경할 수 있디.)
    setNo(no - 1); // 상태값을 변경하면 현재 컴포넌트와 하위 컴포넌트가 re-rendering된다.
    i--;
  };

  // 증가하는 함수
  const plusFun = () => {
    setNo(no + 1);
    i++;
  };

  return (
    <div>
      <h2>숫자 증가 or 감소</h2>
      <button onClick={minusFun}>빼기</button>
      <span>
        no={no} / i={i}
      </span>
      <button onClick={plusFun}>더하기</button>
    </div>
  );
}

export default Ex01_Count;
