import React from "react";
import { useState } from "react";

function Ex03_Form() {
  const [profile, setProfile] = useState({
    name: "hyosung",
    age: "32",
    email: "jhsfg95@gmail.com",
    addr: "seongnamsi",
    birthday: "1995-08-03",
    job: "개발자",
  });

  const inputUpdate = (e) => {
    console.log(e.target.name, e.target.value);
    // 현재 이벤트가 일어난 요소에 값을 변경한다.
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });

    // test
    // const obj = {
    //   ...profile,
    //   [e.target.name]: "100",
    // };
    // console.log(obj);
  };

  return (
    <div>
      이름:{" "}
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={inputUpdate}
      />{" "}
      <br />
      나이:{" "}
      <input
        type="number"
        name="age"
        value={profile.age}
        onChange={inputUpdate}
      />{" "}
      <br />
      이메일:{" "}
      <input
        type="email"
        name="email"
        value={profile.email}
        onChange={inputUpdate}
      />{" "}
      <br />
      주소:{" "}
      <input
        type="text"
        name="addr"
        value={profile.addr}
        onChange={inputUpdate}
      />{" "}
      <br />
      생일:{" "}
      <input
        type="date"
        name="birthday"
        value={profile.birthday}
        onChange={inputUpdate}
      />{" "}
      <br />
      직업:{" "}
      <select name="job" value={profile.job} onChange={inputUpdate}>
        <option value="">--선택--</option>
        <option value="개발자">개발자</option>
        <option value="디자이너">디자이너</option>
        <option value="기획자">기획자</option>
        <option value="강사">강사</option>
      </select>{" "}
      <hr />
      결과: {profile.name} / {profile.age} / {profile.email} / {profile.addr} /{" "}
      {profile.birthday} / {profile.job}
    </div>
  );
}

export default Ex03_Form;
