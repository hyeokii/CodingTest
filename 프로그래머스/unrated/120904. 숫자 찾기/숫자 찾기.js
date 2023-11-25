function solution(num, k) {
    var answer = num.toString().split("").map((el)=>Number(el));
    for(let i=0;i<answer.length;i++){
        if(answer[i] == k){
            return i+1;
        }
    }
    return -1;
}