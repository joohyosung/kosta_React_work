// 컴포넌트 역할
export let num = 100;
export default function Ex01_Export() {
  return (
    <>
      <h3>여기는 Ex01_Export 입니다. = {num}</h3>
    </>
  );
}

export function Ex01_Export2() {
  return <h3>여기는 Ex01_Export2입니다.</h3>;
}
