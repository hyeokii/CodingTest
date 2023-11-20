function solution(order) {
    var answer = 0;
    const str = order.toString();
    for(let i=0;i<str.length;i++){
        if(str[i]%3 ==0 && str[i] != 0){
            answer++;
        }
    }
    return answer;
}