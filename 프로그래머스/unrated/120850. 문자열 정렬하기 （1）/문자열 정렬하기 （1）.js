function solution(my_string) {
    var answer = "";
    const num = ["0","1","2","3","4","5","6","7","8","9"];
    return my_string.split("").filter((el)=>num.includes(el)).sort((a,b)=>a-b).map(el=>Number(el));
    
}