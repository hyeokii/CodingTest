let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = line[0].split(" ");
let h = Number(data[0]);
let m = Number(data[1]);

if(m - 45 < 0){
  if(h == 0){
    h = 23;
    m = 60 + (m-45);
  }else{
    h = h -1;
    m = 60 + (m-45); 
  }
}else{
  m -= 45;
}
console.log(h ,m);