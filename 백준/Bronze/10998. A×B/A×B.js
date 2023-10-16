let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let data = input[0].split(" ");
let a = Number(data[0]);
let b = Number(data[1]);
console.log(a*b);