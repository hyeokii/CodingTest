let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let testCase = input[0];
let count = 0;

for(let i =1;i<=testCase;i++){
  let str = input[i];
  let setData = new Set(str[0]);
  let isWord = true;
  if(str.length > 1){
    for(let j=0;j<str.length-1;j++){
      if(str[j] != str[j+1]){
        if(setData.has(str[j+1])){
          isWord = false;
          break;
        }else{
          setData.add(str[j+1]);
        }
      }
    }
  }
  if(isWord){
    count++;
  }
}
console.log(count);
