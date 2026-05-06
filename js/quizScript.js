const questions = [

      {
        question: "Hvad bør en stærk adgangskode bestå af?",
        answers: [
          { text: "En lang kombination af bogstaver og tal og symboler", correct: true },
          { text: "Dit navn og fødselsdag", correct: false },
          { text: "abcd1234", correct: false },
          { text: "Dit studienummer", correct: false }
        ]
      },

      {
        question: "Hvad er “phishing”?",
        answers: [
          { text: "En slags krypteringsteknik", correct: false },
          { text: "En meget sikker måde at dele filer på ", correct: false },
          { text: "En form for digital svindel, hvor nogen prøver at udgive sig for at være eks. din bank for at lokke personlige oplysninger ud af dig", correct: true },
          { text: "Når man “fisker” efter komplimenter", correct: false }
        ]
      },

      {
        question: "Hvad bør man gøre, når man modtager en mistænkelig sms (eller mail)?",
        answers: [
          { text: "Klikke på linket, så du kan se, om det din DAO-pakke er blevet leveret", correct: false },
          { text: "Ignorere eller rapporte den", correct: true },
          { text: "Give dem de oplysninger, de beder om", correct: false },
          { text: "Sende beskeden til mine venner og familie for at se, om den tilhører en af dem?", correct: false }
        ]
      },

      {
        question: "Hvad er 2FA (to-faktor-autentifikation)?",
        answers: [
          { text: "Når man har to ens adgangskoder", correct: false },
          { text: "Når man skal logge ind to gange med samme kode", correct: false },
          { text: "Når man skal have to ens brugernavne", correct: false },
          { text: "Når man skal bruge to former for identifikation ved login", correct: true }
        ]
      },

      {
        question: "Når man vil passe på sine filer, hvad er så den sikreste måde, at gøre det på?",
        answers: [
          { text: "At sende en mail til sig selv", correct: false },
          { text: "At bruge en krypteret cloud-tjeneste", correct: true },
          { text: "At bruge et USB-stik uden adgangskode", correct: false },
          { text: "At gemme filerne på en computer uden login", correct: false }
        ]
      },

      {
        question: "Der findes mange slags -ware i IT-verdenen. Hvad er malware",
        answers: [
          { text: "Et operativsystem, som styrer hvordan din enhed fungerer", correct: false },
          { text: "En type hardware, eks. din computer", correct: false },
          { text: "En skadelig software, designet til at skade dit system", correct: true },
          { text: "Et kodesprog, ligesom Python, HTML og C++", correct: false }
        ]
      },

      {
        question: "Hvorfor er det vigtigt, at opdatere computerens software regelmæssigt?",
        answers: [
          { text: "For at lukke sikkerhedshuller", correct: true },
          { text: "For at designet hele tiden er  nyt og matcher alle andres", correct: false },
          { text: "Så computeren arbejdere langsommere og ikke bliver varm så hurtigt", correct: false },
          { text: "For at bruge mindre data og mere Wi-Fi", correct: false }
        ]
      },

      {
        question: "Hvordan bruger man offentlig Wi-Fi sikkert?",
        answers: [
          { text: "Man logger på sin netbank uden beskyttelse", correct: false },
          { text: "Man deler sine adgangskoder med andre, så man ikke selv behøver huske dem", correct: false },
          { text: "Man undgår at foretage sig følsomme aktiviteter eller man bruger en VPN", correct: true },
          { text: "Man husker at slå sin antivirus fra, så man kan besøge flere hjemmesider", correct: false }
        ]
      },

      {
        question: "Hvad bør man gøre med sine login-oplysninger?",
        answers: [
          { text: "Hold dem private og sikre, så andre ikke har adgang til dem", correct: true },
          { text: "Dele dem med studiekammerater og deles om den samme konto for at spare penge", correct: false },
          { text: "Skrive dem på en fysisk seddel og tape den til din pc, så du aldrig glemmer dem", correct: false },
          { text: "Brug samme kode til alt og undgå forvirring", correct: false }
        ]
      },

      {
        question: "Data dit og data dat. Din data skal beskyttes. Men hvad er databeskyttelse så for noget?",
        answers: [
          { text: "Når man sletter al sin data", correct: false },
          { text: "Når man deler data med andre, så man ikke selv glemmer det", correct: false },
          { text: "Når man beskytter sine personlige oplysninger mod misbrug", correct: true },
          { text: "Når man gemmer sine data uden sikkerhed", correct: false }
        ]
      }

    ];

    // ------------------------
    // GAME STATE
    // ------------------------

    let currentQuestion = 0;
    let score = 0;

    // ------------------------
    // HTML ELEMENTER
    // ------------------------

    const questionElement = document.getElementById("question");

    const answersElement = document.getElementById("answers");

    const feedbackElement = document.getElementById("feedback");

    const nextBtn = document.getElementById("next-btn");

    const resultElement = document.getElementById("result");

    const progressElement = document.getElementById("progress");

    // ------------------------
    // VIS SPØRGSMÅL
    // ------------------------

    function showQuestion() {

      feedbackElement.innerHTML = "";
      nextBtn.style.display = "none";

      const q = questions[currentQuestion];

      progressElement.innerHTML =
        `Spørgsmål ${currentQuestion + 1} / ${questions.length}`;

      questionElement.innerHTML = q.question;

      answersElement.innerHTML = "";

      q.answers.forEach(answer => {

        const button =
          document.createElement("button");

        button.innerText = answer.text;

        button.classList.add("answer-btn");

        button.addEventListener("click", () => {
          selectAnswer(answer.correct);
        });

        answersElement.appendChild(button);

      });

    }

    // ------------------------
    // VÆLG SVAR
    // ------------------------

    function selectAnswer(correct) {

      const buttons =
        document.querySelectorAll(".answer-btn");

      buttons.forEach(button => {
        button.disabled = true;
      });

      const current =
        questions[currentQuestion];

      buttons.forEach((button, index) => {

        if (current.answers[index].correct) {

          button.classList.add("correct-answer");

        } else {

          button.classList.add("wrong-answer");
        }

      });

      if (correct) {

        score++;

        feedbackElement.innerHTML =
          "✅ Korrekt!";

      } else {

        feedbackElement.innerHTML =
          "❌ Forkert!";
      }

      nextBtn.style.display = "block";

    }

    // ------------------------
    // NÆSTE SPØRGSMÅL
    // ------------------------

    nextBtn.addEventListener("click", () => {

      currentQuestion++;

      if (currentQuestion < questions.length) {

        showQuestion();

      } else {

        showResult();
      }

    });

    // ------------------------
    // RESULTAT
    // ------------------------

    function showResult() {

      questionElement.style.display = "none";
      answersElement.style.display = "none";
      feedbackElement.style.display = "none";
      nextBtn.style.display = "none";
      progressElement.style.display = "none";

      if (score >= 8) {

        resultElement.innerHTML = `
          <h2>🏆 Jeg kaldte det en quiz...</h2>

          <p>
            Du kaldte det offentligt ydmygelse af andre! #respektForVoresTriviaOverlord!!!
          </p>

          <h2>Score: ${score}/10</h2>
        `;

      } else {

        resultElement.innerHTML = `
          <h2>💀For lidt rigtige...</h2>

          <p>
            I det mindste er du konsekvent... Lad os være glade for, at det her bare er en "for-sjov" quiz og ikke IRL....
          </p>

          <h2>Score: ${score}/10</h2>
        `;
      }

    }

    // ------------------------
    // START QUIZ
    // ------------------------

    showQuestion();