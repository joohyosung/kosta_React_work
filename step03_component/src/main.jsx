import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Test1() {
  return (
    <>
      <h1>첫번째 컴포넌트</h1>
    </>
  );
}
function Test2() {
  return (
    <>
      <h1>두번째 컴포넌트</h1>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Test1 />
    <Test2 />
  </StrictMode>,
);
