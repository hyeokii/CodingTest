 const input = require('fs').readFileSync(0).toString().split('\n');

const [a, b] = input;
if(a>0 && b>0){
      console.log(1);
    }else if(a <0 && b > 0){
      console.log(2);
    }else if(a <0 && b <0){
      console.log(3);
    }else{
      console.log(4);
    }
	process.exit();

