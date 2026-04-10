const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");
const clearBtn = document.getElementById("clear-btn");

const pi = "3.1415926536";

const operationsArray = [ "+", "-", "÷", "*", "xy", "√x", "%", "+/-"];

let firstNumber = null;
let operation = null;
let secondNumber = null;
let result = null;
let memory = null;

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
    if (!isNaN(btnId)) {
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
    result = Number(inputDisplay.value) / 100;
    inputDisplay.value = result;
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

function operate(btnId) {
    if (btnId === "=") {
        if (operation === null) return;

        secondNumber = Number(inputDisplay.value);

        if (operation === "+") {
            sum();
        } else if (operation === "-") {
            subtracion();
        } else if (operation === "*") {
            multiply();
        } else if (operation === "÷") {
            division();
        } else if (operation === "xy") {
            exponecial();
        }

        firstNumber = result;
        operation = null;
        secondNumber = null;

    } else if (operation === "mc") {
        memoryClear();
    } else if (operation === "mr") {
        memoryRecall();
    } else if (operation === "m-") {
        memorySubtraction();
    } else if (operation === "m+") {
        memoryAdd();
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
    btn.addEventListener("mousedown", () => {
        playMouseDownSound();
    });
    btn.addEventListener("mouseup", () => {
        playMouseUpSound();
    });

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

        clearButton(btnId);
        piButton(btnId);
        numbersButtons(btnId);
        operationSelected(btnId);
        operate(btnId);
    });
});
