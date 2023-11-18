function solution(balls, share) {
    const n = fac(balls);
    const m = fac(share);
    const nm = fac(balls-share);
    return Math.round(n/(nm*m));
   
}

function fac(num){
    if(num === 1 || num === 0){
        return 1;
    }else{
        return num * fac(num-1);
    }
}