let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = line[0];
let sum =0;

for(let i=1;i<=n;i++){
  sum += i;  
}
console.log(sum);