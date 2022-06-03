const displayNode = document.querySelector('#display');
let displayValue = '';
let firstNumber;
let secondNumber;
let operator;
let result;

const digitButtons = document.querySelectorAll('.digit');
digitButtons.forEach(btn => btn.addEventListener('click', inputDigit));

const operationButtons = document.querySelectorAll('.operator');
operationButtons.forEach(btn => btn.addEventListener('click', inputOperation));

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', getResult);

const allclearButton = document.querySelector('#allclear');
allclearButton.addEventListener('click', clearAll);



function updateDisplay() {
    displayNode.textContent = displayValue;
}

function inputDigit(e) {
    displayValue += e.target.innerText;
    updateDisplay();
}

function inputOperation(e) {
    const id = e.target.id;

    if (!firstNumber) {
        firstNumber = parseInt(displayValue);
        displayValue = ''; 
    }
    
    switch (id) {
        case 'add':
            operator = add;
            break;
        case 'substract':
            operator = substract;
            break;
        case 'multiply':
            operator = multiply;
            break;
        case 'divide':
            operator = divide;
            break;
    }
}

function getResult() {
    if (firstNumber && operator) {
        secondNumber = parseInt(displayValue);
        result = operate(operator, firstNumber, secondNumber);
        displayValue = result;
        updateDisplay();
    }
}

function clearAll() {
    displayValue = '';
    firstNumber = undefined;
    secondNumber = undefined;
    operator = undefined;
    result = undefined;
    updateDisplay();
}

const add = function(a, b) {
    return a + b;
}

const substract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, a, b) {
    return operator(a, b);
}