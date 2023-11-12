function solution(n) {
    //6 4 최소공배수
    for(let i=1;;i++){
        if(6*i%n === 0){
            return i;
        }
    }
}