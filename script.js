//variabler
const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");
const clickSound = new Audio("sound/universfield-computer-mouse-click-352734.mp3");
const buttonSound = document.querySelectorAll("button");

//funktioner
const nextStage = (e) => {
    console.log(e.target.textContent);
    switch(e.target.textContent){
        //introduktion
        case "Start din dag":
            stages[0].classList.remove("active");
            stages[1].classList.add("active");
        break;
        case "Vælg spil":
            stages[1].classList.remove("active");
            stages[2].classList.add("active");
        break;
        //brug penge vej
        case "Brug penge":
            stages[2].classList.remove("active");
            stages[3].classList.add("active");
        break;
        case "Action og Eventyr":
            stages[3].classList.remove("active");
            stages[5].classList.add("active");
        break;
            case "Dead Cells: 39kr.":
                stages[5].classList.remove("active");
                stages[17].classList.add("active");
            break;
            case "Red Dead Redemption: 299kr.":
                stages[5].classList.remove("active");
                stages[17].classList.add("active");
            break;
            case "Bloons TD 6: 59kr.":
                stages[5].classList.remove("active");
                stages[17].classList.add("active");
            break;
        case "Puslespil og Hovedbrud":
            stages[3].classList.remove("active");
            stages[7].classList.add("active");
        break;
        case "Strategi og Simulation":
            stages[3].classList.remove("active");
            stages[9].classList.add("active");
        break;
        case "Rollespil(RPG)":
            stages[3].classList.remove("active");
            stages[11].classList.add("active");
        break;
        case "Casual og Familie":
            stages[3].classList.remove("active");
            stages[13].classList.add("active");
        break;
        case "Sport og Racing":
            stages[3].classList.remove("active");
            stages[15].classList.add("active");
        break;
        //forbind konto vej
        case "Forbind til spilkonto":
            stages[17].classList.remove("active");
            stages[19].classList.add("active");
        break;
        case "Facebook/Instagram":
            stages[19].classList.remove("active");
            stages[21].classList.add("active");
        break;
        case "Apple-konto":
            stages[19].classList.remove("active");
            stages[21].classList.add("active");
        break;
        case "Google-konto":
            stages[19].classList.remove("active");
            stages[21].classList.add("active");
        break;
        case "E-mail":
            stages[19].classList.remove("active");
            stages[21].classList.add("active");
        break;
        case "Send sms":
            stages[19].classList.remove("active");
            stages[21].classList.add("active");
        break;
        //indtast oplysninger vej
        case "Indtast oplysninger":
            stages[17].classList.remove("active");
            stages[20].classList.add("active");
        break;
        //gratis spil vej
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

