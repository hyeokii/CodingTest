let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = line.map(x => Number(x)); 
let max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max)+1);