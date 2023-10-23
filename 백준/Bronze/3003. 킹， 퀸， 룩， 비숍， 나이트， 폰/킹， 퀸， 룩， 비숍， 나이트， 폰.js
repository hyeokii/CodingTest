let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let chess = [1,1,2,2,2,8];
let arr = input[0].split(" ").map(num=>Number(num));
let result = ""
for(let i = 0;i<arr.length;i++){
  result += chess[i] - arr[i]+" "; 
}
console.log(result);