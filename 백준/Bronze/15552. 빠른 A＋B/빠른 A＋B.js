let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = line[0];
let answer = ""
for(let i=0; i< n;i++){
  let data = line[i+1].split(" ");
  answer += Number(data[0])+ Number(data[1]) +"\n";
}
console.log(answer);