//variabler
const btns = document.querySelectorAll(".btn");
const stages = document.querySelectorAll(".stage");

//variabler for musik (audio og bg-musik)
const clickSound = new Audio("sound/universfield-computer-mouse-click-352734.mp3");
const buttonSound = document.querySelectorAll("button");
const music = document.getElementById("bg-music");
const btn = document.getElementById("music-toggle");

//funktion for baggrundsmusik
  function toggleMusic() {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }

  function setVolume(value) {
    music.volume = value;
  }

  //funktion for lyd ved klik
  buttonSound.forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});

//funktion for switch
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

        //Alt med cookies vej
        case "Administrer muligheder":
            stages[25].classList.remove("active");
            stages[26].classList.add("active");
        break;
        case "Giv samtykke":
            stages[25].classList.remove("active");
            stages[27].classList.add("active");
        break;
        case "Bekræft dine valg (som de er)":
            stages[26].classList.remove("active");
            stages[29].classList.remove("active");
            stages[28].classList.add("active");
        break;
        case "Acceptér alle":
            stages[26].classList.remove("active");
            stages[29].classList.remove("active");
            stages[27].classList.add("active");
        break;
        case "Læs Præferencer for leverandører":
            stages[26].classList.remove("active");
            stages[29].classList.add("active");
        break;
        case "Fortsæt...":
            stages[27].classList.remove("active");
            stages[28].classList.remove("active");
            stages[31].classList.add("active");
        break;
        case "Manuelt slå alt fra før du går videre":
            stages[29].classList.remove("active");
            stages[30].classList.add("active");
        break;
        case "START":
            stages[30].classList.remove("active");
            stages[31].classList.add("active");
        break;

        //Opnå rewards vej
        case "No way! Get'cha head in the game":
            stages[31].classList.remove("active");
            stages[32].classList.add("active");
        break;
                case "Smid en 50'er på cool upgrades":
                    stages[32].classList.remove("active");
                    stages[35].classList.add("active");
                break;
                case "Se reklamer":
                    stages[32].classList.remove("active");
                    stages[36].classList.add("active");
                break;
                case "Ignorer og spil videre":
                    stages[32].classList.remove("active");
                    stages[38].classList.add("active");
                break;                
        case "Lyt med ét øre":
            stages[31].classList.remove("active");
            stages[33].classList.add("active");
        break;
                case "Hov, kan du gentage det?":
                    stages[33].classList.remove("active");
                    stages[34].classList.add("active");
                break;
                case "Fortsæt i din egen lille verden":
                    stages[33].classList.remove("active");
                    stages[34].classList.remove("active");
                    stages[32].classList.add("active");
                break;
        case "Gud ja, det var vist en god idé at lytte":
            stages[31].classList.remove("active");
            stages[34].classList.add("active");
        break;
        case "Del, anmeld og få din præmie!":
            stages[35].classList.remove("active");
            stages[36].classList.remove("active");
            stages[37].classList.add("active");
        break;
        case "Spil bare videre":
            stages[35].classList.remove("active");
            stages[36].classList.remove("active");
            stages[38].classList.add("active");
        break;
        
        //Frokostpausen
        case "Gameeee":
            stages[37].classList.remove("active");
            stages[38].classList.remove("active");
            stages[39].classList.add("active");
        break;
        case "Spis i klasselokalet":
            stages[39].classList.remove("active");
            stages[41].classList.add("active");
        break;
        case "Gå med i kantinen":
            stages[39].classList.remove("active");
            stages[40].classList.add("active");
        break;
        case "Hold John med selskab":
            stages[40].classList.remove("active");
            stages[42].classList.add("active");
        break;
        case "Spis skammens madpakke":
            stages[40].classList.remove("active");
            stages[43].classList.add("active");
        break;
                case "Fang din lærer":
                    stages[43].classList.remove("active");
                    stages[73].classList.add("active");
                break;
                case "Prøv igen i morgen":
                    stages[43].classList.remove("active");
                    stages[0].classList.add("active");
                break;
        case "Lån USB-stikket":
            stages[42].classList.remove("active");
            stages[57].classList.remove("active");
            stages[61].classList.add("active");
        break;
        case "Sig “Nah, ellers tak” og gå med John":
            stages[42].classList.remove("active");
            stages[44].classList.add("active");
        break;
        case "Åbn den 1. fil":
            stages[45].classList.remove("active");
            stages[46].classList.add("active");
        break;

        //Veje hvor du bliver i klassen
        case "*Ram vandflasken*":
            stages[41].classList.remove("active");
            stages[48].classList.add("active");
        break;
        case "*Ram noget sodavand*":
            stages[41].classList.remove("active");
            stages[49].classList.add("active");
        break;
        case "Bed om hjælp":
            stages[48].classList.remove("active");
            stages[50].classList.add("active");
        break;
        case "Hent noget at tørre med":
            stages[48].classList.remove("active");
            stages[52].classList.add("active");
        break;
        case "LØB UD OG HENT NOGET PAPIR":
            stages[49].classList.remove("active");
            stages[51].classList.add("active");
        break;
        case "På forhånd tak!":
            stages[50].classList.remove("active");
            stages[58].classList.add("active");
        break;
        case "Tør dig selv af":
            stages[51].classList.remove("active");
            stages[53].classList.add("active");
        break;
        case "Skynd dig tilbage":
            stages[51].classList.remove("active");
            stages[54].classList.add("active");
        break;
        case "Skynd dig tilbage igen":
            stages[52].classList.remove("active");
            stages[55].classList.add("active");
        break;
        case "Vend tilbage til klassen":
            stages[53].classList.remove("active");
            stages[57].classList.add("active");
        break;
        case "Tak for hjælpen":
            stages[54].classList.remove("active");
            stages[58].classList.add("active");
        break;
        case "Øhh, hvorfor rører du mine ting!?!":
            stages[54].classList.remove("active");
            stages[59].classList.add("active");
        break;
        case "Hmm...":
            stages[55].classList.remove("active");
            stages[60].classList.add("active");
        break;
        case "Pak dine ting og gå hjem":
            stages[55].classList.remove("active");
            stages[62].classList.add("active");
        break;
        case "Gå tilbage til klassen igen":
            stages[56].classList.remove("active");
            stages[57].classList.add("active");
        break;
        case "Giv op og gå hjem uden":
            stages[57].classList.remove("active");
            stages[62].classList.add("active");
        break;
        case "Fang dem":
            stages[60].classList.remove("active");
            stages[63].classList.add("active");
        break;
        case "Giv op og gå hjem...":
            stages[60].classList.remove("active");
            stages[64].classList.add("active");
        break;
        case "Gå hjem":
            stages[63].classList.remove("active");
            stages[64].classList.add("active");
        break;
        case "Snak med din lærer":
            stages[63].classList.remove("active");
            stages[65].classList.add("active");
        break;
        case "Tryk på beskeden":
            stages[61].classList.remove("active");
            stages[66].classList.add("active");
        break;
        case "Læs den":
            stages[62].classList.remove("active");
            stages[68].classList.add("active");
        break;
        case "Ignorér":
            stages[62].classList.remove("active");
            stages[67].classList.add("active");
        break;
        case "Læs den alligevel":
            stages[67].classList.remove("active");
            stages[68].classList.add("active");
        break;
        case "Gør som den siger":
            stages[68].classList.remove("active");
            stages[69].classList.add("active");
        break;
        case "Rapporter og slet":
            stages[68].classList.remove("active");
            stages[70].classList.add("active");
        break;
        case "Opdatér adresse":
            stages[69].classList.remove("active");
            stages[71].classList.add("active");
        break;





        

        //Alle Zzz veje der genstarter dagen
        case "Zzzz.. Vi ses i morgen":
        window.location.href = "index.html";
        break;

        //Alle veje der fører til quiz
        case "Start quiz":
        case "Øv dig":
        case "Få quizzen airdroppet":
        case "Åbn den 2. fil":
        window.location.href = "quiz.html";
        break;

        //Alle veje der fører til hacked
        case "ÅBN MIN FIIIL":
        case "Åben d. 3. fil":
        case "Acceptér beskeden":
        case "Oh shit":
        window.location.href = "hack.html";
        break;


        //DEFAULT
        default:
            console.log("Ingen case matchede", e.target.textContent)
        break;
    }
    //For at bruger starter i "toppen" af hver ny case og ikke hvor de sidst var placeret, hvis de har scrollet
    setTimeout(() => {
        window.scrollTo({
            top: 0,
            behavior: "auto"
        });
        }, 50);
};

console.log(btns);

//eventlisteners

for (const btn of btns) {
    btn.addEventListener("click", nextStage);
}