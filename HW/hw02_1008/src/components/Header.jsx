import "../css/Header.css";

function Header() {
  const today = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = days[today.getDay()];

  return (
    <div className="Header">
      <h3>오늘의 Plan😁</h3>
      <h1>{year}년 {month}월 {date}일 {day}요일</h1>
    </div>
  );
}

export default Header;
