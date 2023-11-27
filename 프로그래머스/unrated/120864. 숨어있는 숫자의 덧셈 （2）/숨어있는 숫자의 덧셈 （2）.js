function solution(my_string) {
    return my_string.replace(/[A-z]/g," ").split(" ").map((el)=>Number(el)).reduce((a,b)=>a+b);
}