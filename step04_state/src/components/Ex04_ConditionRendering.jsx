import React from "react";
import Ex01_Count from "./Ex01_Count";
import { useState } from "react";
import Ex03_Form from "./Ex03_Form";

function Ex04_ConditionRendering() {
  // isLogin이 fasle이면 Count화면, true이면 Form화면
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          // 화면 교체
          setIsLogin(!isLogin);
        }}
      >
        {isLogin ? "Count 예제로 변경" : "Form 예제로 변경"}
      </button>
      {/* isLogin이 true일 때만 h1 태그 출력 */}
      <hr />
      {isLogin && <h1>회원가입하기</h1>}
      {!isLogin ? <Ex01_Count /> : <Ex03_Form />}
    </div>
  );
}

export default Ex04_ConditionRendering;
