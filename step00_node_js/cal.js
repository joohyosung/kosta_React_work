function add(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

// 1. Common 방식 - 외부에서 함수를 사용할 수 있도록 내보내기
// module.exports = {
//   add: add,
//   minus: minus,
// };

// 2. ES Module 방식 - 외부에서 함수를 사용할 수 있도록 내보내기
export { add, minus };
