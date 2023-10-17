function solution(array) {
    const mid = Math.floor(array.length/2);
    const arr = array.sort((a,b)=>a-b);
    return arr[mid];
}