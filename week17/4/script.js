function generationNumb() {
    let numberRandom = Math.floor(Math.random() * 21) - 10;
    console.log(numberRandom);
    arrNumbers.push(numberRandom);
}
let arrNumbers = [];
console.log(arrNumbers);

function elementMax(arrNumbers) {
    let max = Math.max.apply(null, arrNumbers);
    console.log(max);
};

function elementMin(arrNumbers) {
    let min = Math.min.apply(null, arrNumbers);
    console.log(min);
};

//сумма через функцию
function elementsSum(arrNumbers) {
    let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        sum += arrNumbers[i];
    }
    console.log(sum);
}
elementsSum(arrNumbers);

// среднее арифметическое
function elementsAverage(arrNumbers){
    let sum = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        sum += arrNumbers[i];
    }
    let average=sum/arrNumbers.length;
    console.log(average);
};

function elementsMult(arrNumbers){
    let mult=arrNumbers.reduce((a,b)=>a*b);
    console.log(mult);
}

