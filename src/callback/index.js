function sum (num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, fnCallback){
    return fnCallback(num1, num2);
}

console.log(calc(1, 2, sum));

