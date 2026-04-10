const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");
const clearBtn = document.getElementById("clear-btn");

const pi = "3.1415926536";

let firstNumber = null;
let operation = null;
let secondNumber = null;
let result = null;

function preventKeyboardInput(event) {
    event.preventDefault();
};

function numbersButtons(btnContent) {
    if (!isNaN(btnContent)) {
        if (inputDisplay.value === "0" || inputDisplay.value === "3.1415926536" || secondNumber !== null) {
            firstNumber = result;
            secondNumber = null;
            inputDisplay.value = btnContent;
            clearBtn.textContent = "CE";
        } else {
            inputDisplay.value += btnContent;
            clearBtn.textContent = "CE";
        };
    };
};

function piButton(btnContent) {
    if (btnContent === "π") {
        inputDisplay.value = pi;
    };
};

function clearButton(btn) {
    if (btn.id === "clear-btn") {
        inputDisplay.value = "";
        inputDisplay.placeholder = "0";
        firstNumber = null;
        secondNumber = null;
        operation = null;
        clearBtn.textContent = "AC"
    };
};

buttons.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
        clickDownSound.currentTime = 0;
        clickDownSound.play();
    });
    btn.addEventListener("mouseup", () => {
        clickUpSound.currentTime = 0;
        clickUpSound.play();
    });

    btn.addEventListener("click", () => {
        const btnContent = btn.textContent;

        if ("+-÷x".includes(btnContent)) {
            firstNumber = Number(inputDisplay.value);
            operation = btnContent;
            inputDisplay.placeholder = firstNumber;
            inputDisplay.value = "";
        }

        if (btnContent === "=") {
            secondNumber = Number(inputDisplay.value);
            if (operation === "+") {
                result = firstNumber + secondNumber;
                inputDisplay.value = result;
            } else if (operation === "-") {
                result = firstNumber - secondNumber;
                inputDisplay.value = result;
            } else if (operation === "x") {
                result = firstNumber * secondNumber;
                inputDisplay.value = result;
            } else if (operation === "÷") {
                result = firstNumber / secondNumber;
                inputDisplay.value = result;
            }
        }

        clearButton(btn);
        piButton(btnContent);
        numbersButtons(btnContent);
    });
});
