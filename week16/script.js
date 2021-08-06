// function compareNumeric(a,b){
//     return a - b
// }

function sumInput() {
    let elements = [];

    while (true) {
        let num = prompt("Введите число", '');

        if ( num === "" || num === null || !isFinite(num)) break;

        elements.push(+num);
    }

    let sum = 0;

    for (let element of elements) {
        sum += element;
    }
    //  console.log(elements.sort(compareNumeric));
    console.log(elements.sort((a,b)=>a-b));
    return sum;
}
// console.log(elements.sort(compareNumeric));

alert(sumInput());




// elements.sort(function(a,b){ 
//     return a - b
// });
// alert(elements);
// console.log(elements.sort((a,b)=>a-b));