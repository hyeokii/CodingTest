function solution(t, p) {
    const len1 = p.length;
    const len2 = t.length;
    const len = len2-len1;
    let arr = [];
    for(let i =0;i<=len;i++){
        if(t.slice(i,i+len1) <= p){
            arr.push(t.slice(i,i+len1));
        }
    }
    return arr.length;
    
}