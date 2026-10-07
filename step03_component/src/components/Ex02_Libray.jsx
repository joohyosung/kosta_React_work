import { Book } from "./Ex02_Book";
export default function Libray() {
  const author = { name: "queen", age: 25, addr: "jeaju" };
  return (
    <>
      <Book
        name="Spring"
        totalPage="200"
        author={{ name: "king", age: 20, addr: "seoul" }}
      />
      <Book name={"JPA"} totalPage={150} author={author} />
      <Book name={"HTML"} totalPage={250} />
    </>
  );
}
