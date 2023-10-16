let fs = require("fs");
let line = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = line[0].split(" ");
let h = Number(data[0]);
let m = Number(data[1]);
let t = Number(line[1]);

let totalMinute = h*60+m+t;
totalMinute %= 1440;
h = parseInt(totalMinute/60);
m = totalMinute % 60;
console.log(h,m);