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


        //bruge penge vej
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
                case "A Little To The Left: Stars: 29kr.":
                stages[7].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Unblock Me Premium: 9kr.":
                stages[7].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Girl In The Window: 19kr.":
                stages[7].classList.remove("active");
                stages[17].classList.add("active");
                break;
        case "Strategi og Simulation":
            stages[3].classList.remove("active");
            stages[9].classList.add("active");
        break;
                case "Stardew Valley: 39kr.":
                stages[9].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Minecraft: 59kr.":
                stages[9].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Goat Simulator 3: 99kr.":
                stages[9].classList.remove("active");
                stages[17].classList.add("active");
                break;
        case "Rollespil(RPG)":
            stages[3].classList.remove("active");
            stages[11].classList.add("active");
        break;
                case "Children of Morta: 59kr.":
                stages[11].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Songs of Conquest Mobile: 99kr.":
                stages[11].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Slay the Spire: 89kr.":
                stages[11].classList.remove("active");
                stages[17].classList.add("active");
                break;
        case "Casual og Familie":
            stages[3].classList.remove("active");
            stages[13].classList.add("active");
        break;
                case "Animal Crossing: Pocket Camp C: 149kr.":
                stages[13].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Is This Seat Taken: 69kr.":
                stages[13].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Unpacking: 89kr.":
                stages[13].classList.remove("active");
                stages[17].classList.add("active");
                break;
        case "Sport og Racing":
            stages[3].classList.remove("active");
            stages[15].classList.add("active");
        break;
                case "Tennis Manager 25 - MY PLAYER: 79kr.":
                stages[15].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Angler Adventures: Fishing Sim 9kr.":
                stages[15].classList.remove("active");
                stages[17].classList.add("active");
                break;
                case "Football Chariman Pro 2: 39kr.":
                stages[15].classList.remove("active");
                stages[17].classList.add("active");
                break;


        //forbind til konto vej
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
                case "Bekræft":
                    stages[20].classList.remove("active");
                    stages[21].classList.add("active");
                break;
                case "Læs vilkår":
                    stages[20].classList.remove("active");
                    stages[22].classList.add("active");
                break;
                case "Fortryd":
                    stages[20].classList.remove("active");
                    stages[24].classList.add("active");
                break;
                        case "Forbind via spilkonto":
                            stages[24].classList.remove("active");
                            stages[19].classList.add("active");
                        break;
                        case "Vælg et andet spil":
                            stages[24].classList.remove("active");
                            stages[3].classList.add("active");
                        break;
                        case "Find et gratis spil":
                            stages[24].classList.remove("active");
                            stages[4].classList.add("active");
                        break;
        case "Bekræft alligevel":
            stages[22].classList.remove("active");
            stages[21].classList.add("active");
        break;
        case "Del kun navn og kort":
                stages[22].classList.remove("active");
                stages[23].classList.add("active");
        break;
        case "Spil noget gratis":
            stages[22].classList.remove("active");
            stages[4].classList.add("active");
        break;
    
        //download gratis vej
        case "Download gratis":
            stages[2].classList.remove("active");
            stages[4].classList.add("active");
        break;
        case "Action & Eventyr":
            stages[4].classList.remove("active");
            stages[6].classList.add("active");
        break;
                case "Genshin Impact":
                    stages[6].classList.remove("active");
                    stages[18].classList.add("active");
                break;
                case "Brawl Stars":
                    stages[6].classList.remove("active");
                    stages[18].classList.add("active");
                break;
                case "Pokémon Unite":
                    stages[6].classList.remove("active");
                    stages[18].classList.add("active");
                break;
        case "Puslespil & Hovedbrud":
            stages[4].classList.remove("active");
            stages[8].classList.add("active");
        break;
                case "Bridge Constructor Studio":
                stages[8].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Criss Cross Castle":
                stages[8].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Disney Magic Match 3D":
                stages[8].classList.remove("active");
                stages[18].classList.add("active");
                break;
        case "Strategi & Simulation":
            stages[4].classList.remove("active");
            stages[10].classList.add("active");
        break;
                case "World of Warships: Legends PvP":
                stages[10].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Adorable Garden":
                stages[10].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Good Coffee, Great Coffee":
                stages[10].classList.remove("active");
                stages[18].classList.add("active");
                break;
        case "Rollespil-(RPG)":
            stages[4].classList.remove("active");
            stages[12].classList.add("active");
        break;
                case "Last Day On Earth: Survival":
                stages[12].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "AFK Journey":
                stages[12].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Viking Rise":
                stages[12].classList.remove("active");
                stages[18].classList.add("active");
                break;
        case "Casual & Familie":
            stages[4].classList.remove("active");
            stages[14].classList.add("active");
        break;
                case "Rope Dodge":
                stages[14].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Disney Solitaire":
                stages[14].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Gardenscapes":
                stages[14].classList.remove("active");
                stages[18].classList.add("active");
                break;
        case "Sport & Racing":
            stages[4].classList.remove("active");
            stages[16].classList.add("active");
        break;
                case "Volley Girls:High School Story":
                stages[16].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "HAIKYU!! FLY HIGH":
                stages[16].classList.remove("active");
                stages[18].classList.add("active");
                break;
                case "Golf Battle":
                stages[16].classList.remove("active");
                stages[18].classList.add("active");
                break;


        case "Start spil":
            stages[18].classList.remove("active");
            stages[21].classList.remove("active");
            stages[23].classList.remove("active"); //---------------------------------------------<<<<<<<OBS nr 23??
            stages[25].classList.add("active");
        break;

        //---------------------------------
        //Akt 2 begynder
        //---------------------------------

        
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

