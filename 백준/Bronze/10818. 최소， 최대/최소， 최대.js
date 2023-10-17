let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = line[0];
let arr = line[1].split(" ").map(Number);
let min = 1000001;
let max = -1000001;

for(let i=0;i<n;i++){
  if(arr[i] < min) min = arr[i];
  if(arr[i] > max) max = arr[i];
}
console.log(`${min} ${max}`);