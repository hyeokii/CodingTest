let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = line[0];
for(let i=1;i<=9;i++){
  console.log(n+" * "+i+" = "+n*i);
}