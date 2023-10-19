let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let data = input[1];
let answer = 0;
for(let i of data){
  answer += Number(i)
}
console.log(answer);