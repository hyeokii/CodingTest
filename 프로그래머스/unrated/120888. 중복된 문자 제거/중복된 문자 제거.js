function solution(my_string) {
    var answer = [...my_string];
    for(let i=0;i<answer.length;i++){
        for(let j=i+1;j<answer.length;j++){
            if(answer[i] == answer[j]){
                answer[j] = "";
            }
        }
    }
    return answer.join("");
    
}