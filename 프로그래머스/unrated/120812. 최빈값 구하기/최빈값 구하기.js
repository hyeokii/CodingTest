function solution(array) {
    var answer = 0;
    var count = new Map();
    array.map((n)=>{
        if(count.has(n)){
            count.set(n,count.get(n)+1);
        }else{
            count.set(n,1);
        }
    }) 
    let max = Math.max(...count.values());
  
    for(let i of count.keys()){
        if(answer === 0 && count.get(i) === max){
            answer = i;
        }else if(count.get(i) === max){
            answer = -1;
            break;
        }
    }
    return parseInt(answer);
}