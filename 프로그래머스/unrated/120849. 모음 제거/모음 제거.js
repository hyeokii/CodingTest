function solution(my_string) {
    let arr = ["a","e","i","o","u"];
    let newStr = my_string.split("").filter((el)=> !arr.includes(el)).join("");
    return newStr;
}