const firstNum=document.getElementById("firstNum")
const operator=document.getElementById("operator") 
const display = document.getElementById("display") 
const result = document.getElementById("result")  
const button=document.getElementById("button") 
const equalSign=document.getElementById("equalSign")
     


function arith(number) {
    document.getElementById('display').value+=number;
    result.innerText += number
}
function calc(){
    if(operator.value  == '*'){
        display.innerText = (firstNum.value) + firstNum.value;
    }
    else if(operator.value == '+'){
        display.innerText = Number(firstNum.value) + Number(firstNum.value);

    }
    else if(operator.value == '-'){
        display.innerText = Number(firstNum.value) - Number(firstNum.value);   
    } 
}  




  

function calc() {
   

    if(operator.value  == '*'){
        display.innerText = (firstNum.value) * firstNum.value;
    }
    else if(operator.value == '+'){
        display.innerText = Number(firstNum.value) + Number(firstNum.value);

    }
    else if(operator.value == '-'){
        display.innerText = Number(firstNum.value) - Number(firstNum.value);   
    } 
}

calc(firstNum, firstNum)

equalSign
//toptal.com