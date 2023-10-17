let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let caseNum = Number(line[0]);

for(let i =1;i<=caseNum;i++){
  let arr = line[i].split(" ").map(Number);
  let n = arr[0];
  let sum=0;
  let count = 0;
  
  for(let j=1;j<=n;j++){
    sum += Number(arr[j]);
  }
  let avg = sum/n;
  for(let j=1;j<=n;j++){
    if(arr[j]> avg) count++;
  }
  console.log(`${(count/n*100).toFixed(3)}%`);
}