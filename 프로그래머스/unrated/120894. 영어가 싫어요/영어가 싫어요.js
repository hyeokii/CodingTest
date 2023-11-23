function solution(numbers) {
    var answer = "";
    let str = "";
    for(let i=0;i<numbers.length;i++){
        str += numbers[i];
        if(str == "one"){
            answer += 1;
            str="";
        }else if(str == "two"){
            answer += 2;
            str="";
        }
        else if(str == "three"){
            answer += 3;
            str="";
        }
        else if(str == "four"){
            answer += 4;
            str="";
        }else if(str == "five"){
            answer += 5;
            str="";
        }else if(str == "six"){
            answer += 6;
            str="";
        }else if(str == "seven"){
            answer += 7;
            str="";
        }else if(str == "eight"){
            answer += 8;
            str="";
        }else if(str == "nine"){
            answer += 9;
            str="";
        }else if(str == "zero"){
            answer += 0;
            str="";
        }
    }
    return Number(answer);
}