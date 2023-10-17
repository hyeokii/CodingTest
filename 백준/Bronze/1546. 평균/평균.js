let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let num = Number(line[0]);
let data = line[1].split(" ").map(Number);
let max = Math.max(...data);
let sum=0;

for(let i=0;i<data.length;i++){
  data[i] = data[i]/max*100;
  sum += data[i];
}

console.log(`${sum/data.length}`);
