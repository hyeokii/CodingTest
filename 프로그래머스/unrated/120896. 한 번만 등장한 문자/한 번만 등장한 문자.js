function solution(s) {
    let arr = [];
    let sarr = s.split("");
    
    sarr.forEach((item)=>{
        if(s.indexOf(item) === s.lastIndexOf(item)){
            arr.push(item);
        }
    })
    
    return arr.sort().join("");
}