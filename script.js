const clickDownSound = new Audio("sounds/down.wav");
const clickUpSound = new Audio("sounds/up.wav");

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
        clickDownSound.currentTime = 0;
        clickDownSound.play();
    });
        btn.addEventListener("mouseup", () => {
        clickUpSound.currentTime = 0;
        clickUpSound.play();
    });
});


