let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];
let pel = 1;

for(let i=0;i<input.length/2;i++){
  if(input[i] !== input[input.length-i-1]){
    pel = 0;
    break;
  }
}
console.log(pel);