function solution(n) {
    var answer = 0;
    if(Number(n%7) === 0){
        answer = n/7;
    }else{
        answer = n/7+1;
    }
    return parseInt(answer);
}