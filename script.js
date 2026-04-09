const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");

const pi = "3.1415926536";

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
        const btnNumber = btn.textContent;

        if (btnNumber === "π") {
            inputDisplay.value = pi;
            return;
        }

        if ("0123456789".includes(btnNumber)) {
            if (inputDisplay.value === pi) {
                inputDisplay.value = btnNumber;
            } else if (inputDisplay.value === "0") {
                inputDisplay.value = btnNumber;
            } else {
                inputDisplay.value += btnNumber;
            }
        }
    });
});
