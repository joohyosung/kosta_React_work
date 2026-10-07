// export function Book(props) {
//   console.log(props);
//   return (
//     <>
//       <h1>책 제목: {props.name}</h1>
//       <h2>총 페이지: {props.totalPage}</h2>
//     </>
//   );
// }

// 구조 분해 할당
export function Book({
  totalPage,
  name,
  author = { name: "geust", age: 22, addr: "ohri" },
}) {
  console.log(totalPage, name, author);
  return (
    <>
      <h1>책 제목: {name}</h1>
      <h2>총 페이지: {totalPage}</h2>
      <h2>
        저자: {author.name} / {author.age} / {author.addr}
      </h2>
    </>
  );
}
