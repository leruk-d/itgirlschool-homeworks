class Сalculator {
    static sum(num1, num2) {
        return +num1 + +num2;
    };
    static multi(num1, num2) {
        return +num1 * +num2;
    };
    static sub(num1, num2) {
        return +num1 - +num2;
    };
    static div(num1, num2) {
        return +num1 / +num2;
    };
}

function isNumValid(num1) {
    return !Number.isNaN(Number(num1));
}

function enterNumber() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    return [num1, num2];
}

function calcSum() {
    let [num1, num2] = enterNumber();

    if (isNumValid(num1) && isNumValid(num2)) {
        let result = Сalculator.sum(num1, num2);
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Only numbers");
    }
}

function calcSub() {
    let [num1, num2] = enterNumber();

    if (isNumValid(num1) && isNumValid(num2)) {
        let result = Сalculator.sub(num1, num2);
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Only numbers");
    }
}

function calcMult() {
    let [num1, num2] = enterNumber();

    if (isNumValid(num1) && isNumValid(num2)) {
        let result = Сalculator.multi(num1, num2);
        document.getElementById('result').innerHTML = result;
    } else {
        alert("Only numbers");
    }
}


function calcDiv() {
    let [num1, num2] = enterNumber();

    if (isNumValid(num1) && isNumValid(num2)) {
        let result = Сalculator.div(num1, num2);
        document.getElementById('result').innerHTML = result;
    } else if (num2 == 0) {
        alert("На ноль делить нельзя!")
    } else {
        alert("Only numbers");
    }
}