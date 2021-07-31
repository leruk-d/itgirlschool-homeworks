function isNumValid(num1){
return!Number.isNaN(Number(num1));
}

function calcSum() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 + +num2;
    document.getElementById('result').innerHTML=result;
}else {
        alert("Only numbers");
    }
}

function calcSub() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 - +num2;
    document.getElementById('result').innerHTML=result;
} else{
    alert("Only numbers");
}
}

function calcMult() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 * +num2;
    document.getElementById('result').innerHTML=result;
} else{
    alert("Only numbers");
}
}


function calcDiv() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
    (num2>0)? result:("На ноль делить нельзя!");
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 / +num2; 
    document.getElementById('result').innerHTML=result;
    (num2==0)? alert("На ноль делить нельзя!"):result;
} else {
    alert("Only numbers");
}
}
