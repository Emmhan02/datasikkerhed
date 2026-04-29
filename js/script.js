//variabler
const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");
const clickSound = new Audio("sound/universfield-computer-mouse-click-352734.mp3");
const buttonSound = document.querySelectorAll("button");

//funktioner
const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent){
        case "Start din dag":
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
        break;
        case "Download spil":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
        break;
        case "Brug penge":
            stages[2].classList.remove("active");
            stages[3].classList.add("active");
        break;
        case "Download gratis":
            stages[2].classList.remove("active");
            stages[4].classList.add("active");
        break;
        case "Action & Eventyr":
            stages[3].classList.remove("active");
            stages[5].classList.add("active");
        break;
    }
};

buttonSound.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

console.log(btns);

//eventlisteners

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}