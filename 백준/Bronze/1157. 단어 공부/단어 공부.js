let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n")[0];
let map = new Map();
let maxCount = 0;
let max = "";
for(let i=0;i<input.length;i++){
  if(map.has(input[i].toUpperCase())){
    map.set(input[i].toUpperCase(), Number(map.get(input[i].toUpperCase()))+1);
  }else{
    map.set(input[i].toUpperCase(),1);
  }
}
for( const [key,val] of map){
  if(maxCount == val){
    max = "?";
  }else if(maxCount < val){
    maxCount = val;
    max = key;
  }
}
console.log(max);