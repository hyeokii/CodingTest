let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = line[0].split(" ");
let A = Number(data[0]);
let B = Number(data[1]);
let C = Number(data[2]);

console.log(A+B+C);
