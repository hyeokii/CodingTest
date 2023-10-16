let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = Number(input[0]);
console.log(data-543);