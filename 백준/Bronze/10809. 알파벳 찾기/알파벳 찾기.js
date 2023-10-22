let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];
let count = new Array(26).fill(-1);
let result = ""
for(let i=0; i<input.length;i++){
  if(count[input.charCodeAt(i)-97] == -1){
    count[input.charCodeAt(i)-97] = i;
  }
}
for(let i=0; i<count.length;i++){
  result += count[i]+" ";
}
console.log(result);