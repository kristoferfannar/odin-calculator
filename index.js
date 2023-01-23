function buttonPressed(button) {
    screen.textContent += button.textContent;
}

function numberPressed(number) {
    lastNumber = number;
}

function operatorPressed(operator) {
    lastOperator = operator.textContent;
}

const PLUS = "+";
const MINUS = "-";
const DIVIDE = "/";
const MULTIPLY = "*";
let lastOperator;
let lastNumber;


const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', () => buttonPressed(button)));


const numbers = document.querySelectorAll(".number");
numbers.forEach(number => number.addEventListener("click", () => numberClicked(+number.textContent)));

const operators = document.querySelectorAll(".operator");
operators.forEach(operator => operator.addEventListener("click", () => operatorPressed(operator)));