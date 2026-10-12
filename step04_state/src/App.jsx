import "./App.css";
import Ex01_Count from "./components/Ex01_Count";
import Ex02_Form from "./components/Ex02_Form";
import Ex03_Form from "./components/Ex03_Form";
import Ex04_ConditionRendering from "./components/Ex04_ConditionRendering";

function App() {
  return (
    <>
      <h1>useState 연습하기</h1>
      {/* 1. userState를 이용한 숫자 증가, 감소 */}
      {/* <Ex01_Count /> */}

      {/* 2. useState를 이용한 폼요소 관리 */}
      {/* <Ex02_Form /> */}

      {/* 3. 폼요소의 정보를 하나의 useState로 관리 */}
      {/* <Ex03_Form /> */}

      {/* 4. 조건부 렌더링 */}
      <Ex04_ConditionRendering />
    </>
  );
}
export default App;
