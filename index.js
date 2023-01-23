function init() {
    firstNumber = undefined;
    lastNumber = undefined;
    lastOperator = NONE;
    clearScreen = true;
    lastButtonPressed = NONE;
}

function buttonPressed(button) {
    if (clearScreen) {
        screen.textContent = "";
        clearScreen = false;
    }

    if (lastOperator === NONE || !button.classList.contains('operator')) {
        screen.textContent += button.textContent;
    }
}

function numberPressed(number) {
    if (lastButtonPressed == NUMBER) {
        lastNumber = lastNumber * 10 + number;
    } else {
        firstNumber = lastNumber;
        lastNumber = number;
        lastButtonPressed = NUMBER;
    }
}

function operatorPressed(operator) {
    if (lastOperator !== NONE)  {
        alert("operator already used");
    } else {
        lastOperator = operator.textContent;
        lastButtonPressed = lastOperator;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        alert("dividing by zero is really not a great idea");
        return "ERROR";
    }
    
    return a / b;
}

function calculate() {
    let result;
    if (lastOperator == PLUS) {
        result = add(firstNumber, lastNumber);
    } else if (lastOperator == MINUS) {
        result = subtract(firstNumber, lastNumber);
    } else if (lastOperator == MULTIPLY) {
        result = multiply(firstNumber, lastNumber);
    } else {
        result = divide(firstNumber, lastNumber);
    }

    if (isNaN(result)) {
        alert("now you're really being nitpicky");
        result = "ERROR";
    }

    screen.textContent = result;
    init();
}

function clear() {
    screen.textContent = "";
    clearScreen = false;
}



const PLUS = "+";
const MINUS = "-";
const DIVIDE = "/";
const MULTIPLY = "*";
const NONE = " ";
const NUMBER = "number";

let lastOperator;
let firstNumber;
let lastNumber;
let clearScreen;
let lastButtonPressed;
init();

const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', () => buttonPressed(button)));


const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", () => numberPressed(+number.textContent)));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => operatorPressed(operator)));

const equals = document.querySelector(".equals");
equals.addEventListener("click", () => calculate());

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => clear());