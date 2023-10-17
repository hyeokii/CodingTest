let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let mySet = new Set();
for(let i=0;i<line.length-1;i++){
  mySet.add(line[i]%42);
}
console.log(mySet.size);