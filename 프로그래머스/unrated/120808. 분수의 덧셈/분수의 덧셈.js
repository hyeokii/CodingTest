function solution(numer1, denom1, numer2, denom2) {
    var numer = numer1*denom2+numer2*denom1; //10
    var denom = denom1*denom2; //8
    
    const gcd = (a,b) => ( a % b === 0 ? b : gcd(b,a%b));
    const c = gcd(numer,denom);
    var answer = [numer/c,denom/c];
    return answer;
}