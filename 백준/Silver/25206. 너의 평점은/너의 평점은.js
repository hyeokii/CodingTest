let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let sum = 0.0;
let credit = 0.0;
for(let i=0;i <input.length-1;i++){
  let data = input[i].split(" ");
  if(data[2] !== "P" ){
    credit += parseFloat(data[1]);
  }
  switch(data[2]){
    case "A+" : sum += 4.5*parseFloat(data[1]);
              break;
    case "A0" : sum += 4.0*parseFloat(data[1]);
              break;
    case "B+" : sum += 3.5*parseFloat(data[1]);
              break;
    case "B0" : sum += 3.0*parseFloat(data[1]);
              break;
    case "C+" : sum += 2.5*parseFloat(data[1]);
              break;
    case "C0" : sum += 2.0*parseFloat(data[1]);
              break;
    case "D+" : sum += 1.5*parseFloat(data[1]);
              break;
    case "D0" : sum += 1.0*parseFloat(data[1]);
              break;
    case "F" :  sum += 0.0;
              break;
    default: break;
  }
}
console.log((sum/credit).toFixed(5));