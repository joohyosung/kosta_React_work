import "./App.css";
function App() {
  const message = "집에 가고 싶다.";

  const student = {
    no: 10,
    name: "hyosung",
    addr: "seongnam",
    age: 15,
  };

  const arr = [1, 2, 3, "A", true, 3.14, [1, 2, 3]];

  // css 속성을 변수로 선언
  const cssStyle = {
    backgroundColor: "pink",
    textDecoration: "underline",
    color: "red",
    border: "5px double blue",
  };

  // 클릭1을 클릭했을 때 호출될 함수 작성
  const func1 = (e) => {
    console.log("클릭1을 눌렀어요.");
    console.log(e);
    console.log(event);
  };

  const info = <h5>안녕하세요</h5>;

  return (
    <>
      <h1 style={{ border: "5px solid red", color: "blue" }}>
        JSX 문법 공부하기
      </h1>
      <h3 style={cssStyle}>메시지: {message}</h3>
      {/* 객체는 반드시 . 표기법을 이용해서 출력 */}
      <h3>학번: {student.no}</h3>
      <h3>이름: {student.name}</h3>
      {/* 표현식에는 문자열, 숫자, 배열만 출력 가능 */}
      <h3>
        {true} / {undefined} / {null}
      </h3>
      <h3>{arr}</h3>
      <h3 className="test">{student.age > 18 ? "성인" : "미성년지"}</h3>
      {student.age > 18 ? (
        <h4 style={{ color: "red" }}>성인</h4>
      ) : (
        <h4 style={{ color: "blue" }}>미성년자</h4>
      )}
      <a href="">링크1</a>
      <hr />
      {student.age > 18 && (
        <h5>{student.age} 모든 서비스를 이용할 수 있어요.</h5>
      )}
      <button onClick={func1}>클릭1</button>
      <button
        onClick={function (e) {
          e.target.style.color = "red";
          console.log("클릭2");
        }}
      >
        클릭2
      </button>
      <button
        onClick={(e) => {
          e.target.style.color = "blue";
          console.log("클릭3");
        }}
      >
        클릭3
      </button>
      <hr />
      정보: {info}
    </>
  );
}

export default App;
