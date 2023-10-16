const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let array = [];
    array = str.split("");
    for(let i=0;i<array.length;i++){
        if(array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 122){
            array[i] = array[i].toUpperCase();
        }else{
            array[i] = array[i].toLowerCase();
        }
    }
    str = array.join("");
    console.log(str);
});