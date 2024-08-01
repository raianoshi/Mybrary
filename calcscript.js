let currentInput = '';
let currentOperation = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(operation) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else if (currentOperation) {
        firstOperand = operate(firstOperand, parseFloat(currentInput), currentOperation);
    }
    currentOperation = operation;
    currentInput = '';
    //updateDisplay('');
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    firstOperand = null;
    updateDisplay('0');
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}

function calculate() {
    if (currentInput === '' || firstOperand === null || currentOperation === null) return;
    const secondOperand = parseFloat(currentInput);
    const result = operate(firstOperand, secondOperand, currentOperation);
    updateDisplay(result);
    resetCalculator();
}

function operate(a, b, operation) {
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}

function resetCalculator() {
    currentInput = '';
    currentOperation = null;
    firstOperand = null;
}
