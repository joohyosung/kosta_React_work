console.log("commonjs");

// cal.js import
// const cal = require("./cal");
// console.log(cal);

// 더하기 기능
// let re = cal.add(3, 4);
// console.log(re);
// re = cal.minus(10, 4);
// console.log(re);

// 1. Common 방식 - 외부에서 함수를 사용//////////////////////////////////////////
// const { add, minus } = require("./cal");

// let re = add(3, 4);
// console.log(re);
// re = minus(10, 4);
// console.log(re);

// 2. ES Module 방식 - 외부에서 함수를 사용//////////////////////////////////////////
import { add, minus } from "./cal.js";

let re = add(3, 4);
console.log(re);
re = minus(10, 4);
console.log(re);
