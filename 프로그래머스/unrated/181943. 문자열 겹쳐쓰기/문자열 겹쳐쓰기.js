function solution(my_string, overwrite_string, s) {
    const Str = [...my_string];
    Str.splice(s,overwrite_string.length,overwrite_string);
    return Str.join("")
}