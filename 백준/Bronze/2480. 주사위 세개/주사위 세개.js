let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let [a,b,c] = line[0].split(" ").map(Number);

if(a === b && b === c){
  console.log(10000+a*1000);
}else if(a === b){
  console.log(1000+a*100);
}
else if(a === c){
  console.log(1000+a*100);
}else if(b === c){
  console.log(1000+b*100);
}else{
  let max = Math.max(a,b,c);
  console.log(max*100);
}