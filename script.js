const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");
const inputDisplay = document.getElementById("input-display");

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
        if (btn.textContent === "1") {
            inputDisplay.value += 1;
        };
    });
    btn.addEventListener("click", () => {
        if (btn.textContent === "2") {
            inputDisplay.value += 2;
        };
    });
    btn.addEventListener("click", () => {
        if (btn.textContent === "3") {
            inputDisplay.value += 3;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "4") {
            inputDisplay.value += 4;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "5") {
            inputDisplay.value += 5;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "6") {
            inputDisplay.value += 6;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "7") {
            inputDisplay.value += 7;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "8") {
            inputDisplay.value += 8;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "9") {
            inputDisplay.value += 9;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "0") {
            inputDisplay.value += 0;
        };
    });
        btn.addEventListener("click", () => {
        if (btn.textContent === "π") {
            inputDisplay.value = 3.1415926536;
        };
    });
});
