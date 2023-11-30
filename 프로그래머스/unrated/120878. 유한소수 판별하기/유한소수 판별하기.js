function solution(a, b) {
    let getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
    let num = b/getGCD(a,b);
    
    while(num > 1){
        if(num % 2 === 0){
            num = num/2;
            continue;
        }
        if(num % 5 === 0){
            num = num/5;
            continue;
        }
        if(num % 2 !== 0 || num % 5 !== 0){
            return 2;
        }
    }
    return 1;
}