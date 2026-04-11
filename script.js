const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");
const clearBtn = document.getElementById("clear-btn");

const pi = "3.1415926536";

const operationsArray = [ "+", "-", "÷", "*", "xy"];

const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "÷": (a, b) => a / b,
    "xy": (a, b) => a ** b
};

let firstNumber = null;
let operation = null;
let secondNumber = null;
let result = null;
let memory = null;
let lastOperation = null;
let lastSecondNumber = null;

function preventKeyboardInput(event) {
    event.preventDefault();
};

function playMouseDownSound() {
    clickDownSound.currentTime = 0;
    clickDownSound.play();
};

function playMouseUpSound() {
    clickUpSound.currentTime = 0;
    clickUpSound.play();
};

function piButton(btnId) {
    if (btnId === "pi") {
        inputDisplay.value = pi;
    };
};

function numbersButtons(btnId) {
    if (!isNaN(btnId) || btnId === ".") {
        if (inputDisplay.value === "0" || inputDisplay.value === "3.1415926536" || secondNumber !== null) {
            secondNumber = null;
            inputDisplay.value = btnId;
            clearBtn.textContent = "CE";
        } else {
            inputDisplay.value += btnId;
            clearBtn.textContent = "CE";
        };
    };
};

function operationSelected(btnId) {
    if (operationsArray.includes(btnId)) {
        firstNumber = Number(inputDisplay.value);
        operation = btnId;
        inputDisplay.placeholder = firstNumber;
        inputDisplay.value = "";
    };
};

function sum() {
    result = firstNumber + secondNumber;
    inputDisplay.value = result;
};

function subtracion() {
    result = firstNumber - secondNumber;
    inputDisplay.value = result;
};

function multiply() {
    result = firstNumber * secondNumber;
    inputDisplay.value = result;
};

function division() {
    result = firstNumber / secondNumber;
    inputDisplay.value = result;
};

function exponecial() {
    result = firstNumber ** secondNumber;
    inputDisplay.value = result;
};

function squareRoot() {
    result = Math.sqrt(Number(inputDisplay.value));
    inputDisplay.value = result;
};

function percentage() {
    const currentValue = Number(inputDisplay.value);

    if (firstNumber !== null && operation !== null) {

        if (operation === "+" || operation === "-") {
            secondNumber = firstNumber * (currentValue / 100);
        } else if (operation === "*") {
            secondNumber = currentValue / 100;
        } else if (operation === "÷") {
            secondNumber = currentValue / 100;
        };

        inputDisplay.value = secondNumber;
    } else {
        result = currentValue / 100;
        inputDisplay.value = result;
    };
};

function plusMinus() {
    result = Number(inputDisplay.value) * -1;
    inputDisplay.value = result;
};

function memoryClear() {
    memory = 0;
};

function memoryRecall() {
    inputDisplay.value = memory;
};

function memorySubtraction() {
    inputDisplay.value = memory - inputDisplay.value;
};

function memoryAdd() {
    inputDisplay.value = memory + inputDisplay.value;
};

function round2() {
    const value = Number(inputDisplay.value);
    if (isNaN(value)) return;

    const rounded = value.toFixed(2);
    inputDisplay.value = rounded;
    result = Number(rounded);
};

function round0() {
    const value = Number(inputDisplay.value);
    const rounded = Math.round(value);
    inputDisplay.value = rounded;
    result = rounded;
};

function operate(btnId) {
    if (btnId === "=") {

        if (operation === null && lastOperation !== null) {
            if (lastOperation === "+") {
                result = firstNumber + lastSecondNumber;
            } else if (lastOperation === "-") {
                result = firstNumber - lastSecondNumber;
            } else if (lastOperation === "*") {
                result = firstNumber * lastSecondNumber;
            } else if (lastOperation === "÷") {
                result = firstNumber / lastSecondNumber;
            } else if (lastOperation === "xy") {
                result = firstNumber ** lastSecondNumber;
            };

            inputDisplay.value = result;
            firstNumber = result;
            return;
        };

        if (operation === null) return;

        secondNumber = Number(inputDisplay.value);

        if (operations[operation]) {
            result = operations[operation](firstNumber, secondNumber);
            inputDisplay.value = result;
        }

        lastOperation = operation;
        lastSecondNumber = secondNumber;

        firstNumber = result;
        operation = null;
        secondNumber = null;
    };
};

function clearButton(btnId) {
    if (btnId === "clear-btn") {
        inputDisplay.value = "";
        inputDisplay.placeholder = "0";
        firstNumber = null;
        secondNumber = null;
        operation = null;
        clearBtn.textContent = "AC";
    };
};

buttons.forEach((btn) => {
    // Melhora a compatibilidade de áudio para mobile
    btn.addEventListener("mousedown", playMouseDownSound);
    btn.addEventListener("touchstart", (e) => { playMouseDownSound(); }, {passive: true});
    btn.addEventListener("mouseup", playMouseUpSound);
    btn.addEventListener("touchend", (e) => { playMouseUpSound(); }, {passive: true});

    btn.addEventListener("click", () => {
        const btnId = btn.id;

        if (btnId === "√x") {
            return squareRoot();
        };
        if (btnId === "%") {
            return percentage();
        };
        if (btnId === "+/-") {
            return plusMinus();
        };
        if (btnId === "mc") {
            return memoryClear();
        };
        if (btnId === "mr") {
            return memoryRecall();
        };
        if (btnId === "m-") {
            return memorySubtraction();
        };
        if (btnId === "m+") {
            return memoryAdd();
        };
        if (btnId === "r2") {
            return round2();
        };
        if (btnId === "r0") {
            return round0();
        };

        clearButton(btnId);
        piButton(btnId);
        numbersButtons(btnId);
        operationSelected(btnId);
        operate(btnId);
    });
});
