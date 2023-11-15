function solution(emergency) {
    const copy = [...emergency].sort((a,b)=>b-a);
    let arr =new Array(emergency.length).fill(0);
    let rank = 1;
    for(let i=0;i<emergency.length;i++){
        let index = emergency.indexOf(copy[i]);
        arr.splice(index,1,rank);
        rank++;
    }
    return arr;
}