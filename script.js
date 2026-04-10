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
            firstNumber = result;
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

function operate(btnId) {
    if (btnId === "=") {
        secondNumber = Number(inputDisplay.value);
        if (operation === "+") {
            result = firstNumber + secondNumber;
            inputDisplay.value = result;
        } else if (operation === "-") {
            result = firstNumber - secondNumber;
            inputDisplay.value = result;
        } else if (operation === "*") {
            result = firstNumber * secondNumber;
            inputDisplay.value = result;
        } else if (operation === "÷") {
            result = firstNumber / secondNumber;
            inputDisplay.value = result;
        } else if (operation === "xy") {
            result = firstNumber ** secondNumber;
            inputDisplay.value = result;
        };
    } else if (operation === "√x") {
        result = Math.sqrt(firstNumber);
        inputDisplay.value = result;
    } else if (operation === "%") {
        result = firstNumber / 100;
        inputDisplay.value = result;
    } else if (operation === "+/-") {
        if (firstNumber > 0 || firstNumber < 0) {
            firstNumber = firstNumber * -1;
            result = firstNumber;
            inputDisplay.value = result;
        }
    };
};

function clearButton(btn) {
    if (btn.id === "clear-btn") {
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
        const btnContent = btn.textContent;
        const btnId = btn.id;

        clearButton(btn);
        piButton(btnId);
        numbersButtons(btnId);
        operationSelected(btnId);
        operate(btnId);
    });
});
