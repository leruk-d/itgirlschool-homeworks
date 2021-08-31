// function generationNumb() {
//     let arrNumbers = [];
//     console.log(arrNumbers);
//     for (let i = 0; i < 10; i++) {
//         let numberRandom = Math.floor(Math.random() * 21) - 10;
//         console.log(numberRandom);
//         arrNumbers.push(numberRandom); 
//     };

// }


// function elementMax(arrNumbers) {
//     let max = Math.max.apply(null, arrNumbers);
//     console.log(max);
// };

// function elementMin(arrNumbers) {
//     let min = Math.min.apply(null, arrNumbers);
//     console.log(min);
// };

// //сумма через функцию
// function elementsSum(arrNumbers) {
//     let sum = 0;
//     for (let i = 0; i < arrNumbers.length; i++) {
//         sum += arrNumbers[i];
//     }
//     console.log(sum);
// }
// elementsSum(arrNumbers);

// // среднее арифметическое
// function elementsAverage(arrNumbers){
//     let sum = 0;
//     for (let i = 0; i < arrNumbers.length; i++) {
//         sum += arrNumbers[i];
//     }
//     let average=sum/arrNumbers.length;
//     console.log(average);
// };

// function elementsMult(arrNumbers){
//     let mult=arrNumbers.reduce((a,b)=>a*b);
//     console.log(mult);
// }

let numbers=document.querySelector('#numbers');
let btn = document.querySelector('#btn');
let max = document.querySelector('#max');
let min = document.querySelector('#min');
let average = document.querySelector('#average');
let sum = document.querySelector('#sum');
let mult = document.querySelector('#mult');

function generationNumb() {
    let arrNumbers = [];
    console.log(arrNumbers);
    for (let i = 0; i < 10; i++) {
        let numberRandom = Math.floor(Math.random() * 21) - 10;
        arrNumbers.push(numberRandom); 
    };
numbers.innerHTML = arrNumbers;


    let maxNumber = Math.max.apply(null, arrNumbers);
    max.innerHTML ='Максимальное:'+" "+ maxNumber;


    let minNumber = Math.min.apply(null, arrNumbers);
min.innerHTML='Минимальное:'+" "+minNumber;


    let sumNumbers = 0;
    for (let i = 0; i < arrNumbers.length; i++) {
        sumNumbers += arrNumbers[i];
    }
sum.innerHTML ='Сумма:'+" "+sumNumbers;



    for (let i = 0; i < arrNumbers.length; i++) {
        sumNumbers += arrNumbers[i];
    }
    let averageNumbers=sumNumbers/arrNumbers.length;
    average.innerHTML = 'Среднее арифметическое:'+" "+averageNumbers;


    let multNumbers=arrNumbers.reduce((a,b)=>a*b);
mult.innerHTML ='Произведение чисел:'+" "+ multNumbers;

}
