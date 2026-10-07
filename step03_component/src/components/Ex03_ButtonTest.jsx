import React from "react";
import Ex03_ButtonImg from "./Ex03_ButtonImg";
import location from "../assets/images/location.png";
import mail from "../assets/images/mail.png";
import search from "../assets/images/search.png";
import emotion5 from "../assets/images/emotion5.png";
import { Header } from "../App";

function Ex03_ButtonTest() {
  const btnClick = (e) => {
    console.log(e.target);
    console.log(e.target.innerText + "클릭~");

    e.target.style.border = "5px double red";
  };

  const obj = { a: 10, b: 20, c: "hi" };

  return (
    <>
      <div style={{ display: "flex", gap: "30px" }}>
        <Ex03_ButtonImg imgSrc={location} text="위치" btnClick={btnClick}>
          <Header />
        </Ex03_ButtonImg>
        <Ex03_ButtonImg
          imgSrc={mail}
          text="메일"
          btnClick={btnClick}
          {...obj}
        />
        {/* a={10} b={20} c="hi"*/}
        <Ex03_ButtonImg imgSrc={search} text="검색" btnClick={btnClick} />
      </div>
      <hr />

      <div style={{ display: "flex", gap: "30px" }}>
        <img src="emotion1.png" alt="public 이미지" />
        <img src={emotion5} alt="화난표정" />
        <img src="../assets/images/emotion1.png" alt="?" />
      </div>
    </>
  );
}

export default Ex03_ButtonTest;
