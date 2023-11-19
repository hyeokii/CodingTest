function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort((a,b)=>a-b);
    answer = arr[numbers.length-1] * arr[numbers.length-2]
    return answer;
}