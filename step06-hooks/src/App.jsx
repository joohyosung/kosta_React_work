import "./App.css";
import Context01 from "./components/Context01";
import Ex01_Effect from "./components/Ex01_Effect";
import Ex02_Effect from "./components/Ex02_Effect";
import Ex03_Memo from "./components/Ex03_Memo";
import Ex04_Ref from "./components/Ex04_Ref";
import Ex05_Ref from "./components/Ex05_Ref";
import Ex06_Ref from "./components/Ex06_Ref";
import Ex07_Reducer from "./components/Ex07_Reducer";

function App() {
  return (
    <>
      {/* 1. useEffect의 라이프사이클 */}
      {/* <Ex01_Effect/> */}

      {/* 2. useEffect를 이용한 자원정리 */}
      {/* <Ex02_Effect/> */}

      {/* 3. useMemo - 연산작업 기억시키기  */}
      {/* <Ex03_Memo/> */}

      {/* 4. useRef를이용한 Dom접근  */}
      {/* <Ex04_Ref/> */}

      {/* 5. useRef와 useState 차이 */}
      {/* <Ex05_Ref/> */}

      {/* 6. useRef vs useState  vs let 차이 */}
      {/* <Ex06_Ref/>
     <h3 style={{color:"red"}}>Ex06_Ref 컴포넌트 위 아래 두번 넣기</h3>
     <Ex06_Ref/> */}

      {/* 6. use=useContext / createContext */}
      {/* <Context01 /> */}

      {/* 7. Reducer */}
      <Ex07_Reducer />
    </>
  );
}

export default App;
