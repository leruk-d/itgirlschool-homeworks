function isNumValid(num1){
return!Number.isNaN(Number(num1));
}

function calcSum() {
    let num1= document.getElementById('num1').value;
    let num2= document.getElementById('num2').value;
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 + +num2;
    document.getElementById('result').innerHTML=result;
} else{
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
if(isNumValid(num1) &&isNumValid(num2)){
    result = +num1 / +num2; 
    document.getElementById('result').innerHTML=result;
} else{
    alert("Only numbers");
}
}

function clickMe(){
    let colorDiv= document.getElementById('result');
    colorDiv.style.background = 'red';
}
function clickPic(){
    let catImage=document.getElementById('image')
    catImage.src="https://bigpicture.ru/wp-content/uploads/2019/08/Screenshot_2019-08-01-Котик-выглядит-так-будто-встал-по-будильнику-Он-постоянно-сонный-и-похож-на-шар-и-это-благодаря-пор....png";
}

function clickPic1(){
    let catImage=document.getElementById('image')
    catImage.src="https://storage.theoryandpractice.ru/tnp/uploads/image_unit/000/156/586/image/base_87716f252d.jpg";
}