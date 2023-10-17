let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = line[0];
let str = "";
for(let i=1;i<=n;i++){
  for(let j=0; j< i;j++){
    str += "*"
  }  
  console.log(str);
  str="";
}
