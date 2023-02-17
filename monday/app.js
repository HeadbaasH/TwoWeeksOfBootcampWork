let firstNumber = prompt('Enter First Number: ')

let firstInt = parseInt(firstNumber)

let operand = prompt('+, -, =, /')

let secondNumber = prompt('Enter Second Number: ')

let secondInt = parseInt(secondNumber)

function add(a, b) {
    let result = (a + b);
    return result;
}
function sub(a, b) {
    let result = (a - b);
    return result;
}
function mult(a, b) {
    let result = (a * b);
    return result;
}
function div(a, b) {
    let result = (a / b);
    return result;
}


if(operand == '+') {
    result = add(firstInt, secondInt);
}
else if(operand == '-') {
    result = sub(firstInt, secondInt);
}
else if(operand == '*') {
    result = mult(firstInt, secondInt);
}
else if(operand == '/') {
    result = div(firstInt, secondInt);
}
else {
    console.log('Wrong.')
}

console.log(result)