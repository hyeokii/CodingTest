let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let arr = new Array(28);
for(let i=0;i<28;i++){
  arr[i] = Number(input[i]);
}
for(let i=1;i<=30;i++){
  if(!arr.includes(i)){
    console.log(i)
  };
}