import "./App.css";
import Ex01, { Ex01_Export2, num } from "./components/Ex01_Export";
import Libray from "./components/Ex02_Libray";
import Ex03_ButtonTest from "./components/Ex03_ButtonTest";

export function Header() {
  return (
    <>
      <h3>Header영역입니다.</h3>
      <button>클릭</button>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Coponent개념 이해하기 = {num}</h1>
      {/* 1. import export default 개념정리
      <Header />
      <Ex01 />
      <Ex01_Export2 />

      2. Component 실습 + props
      <Libray /> */}

      {/* 3. Component + 이미지처리 */}
      <Ex03_ButtonTest />
    </>
  );
}

export default App;
