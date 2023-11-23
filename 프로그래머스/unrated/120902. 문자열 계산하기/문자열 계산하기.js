function solution(my_string) {
    let arr = my_string.split(" ");
    let answer = Number(arr[0]);
    arr.forEach((item,idx)=>{
        if(item === "+"){
            answer += Number(arr[idx+1]);
        }
        if(item === "-"){
            answer -= Number(arr[idx+1]);
        }
    })
    return answer; 
}