const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");
const clearBtn = document.getElementById("clear-btn");

const pi = "3.1415926536";

function preventKeyboardInput(event) {
    event.preventDefault();
};

function numbersButtons(btnContent) {
    if (!isNaN(btnContent)) {
        if (inputDisplay.value === "0" || inputDisplay.value === "3.1415926536") {
            inputDisplay.value = btnContent;
        } else {
            inputDisplay.value += btnContent;
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
    };
};

function updateACButton() {
    if (inputDisplay.value === "" || inputDisplay.value === "0") {
        clearBtn.textContent = "AC";
    } else {
        clearBtn.textContent = "CE";
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

        clearButton(btn);
        piButton(btnContent);
        numbersButtons(btnContent);
        updateACButton();
    });
});
