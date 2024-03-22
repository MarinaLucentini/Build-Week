// Array delle domande
const questions = [
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "How long is an IPv6 address?",
    correct_answer: "128 bits",
    incorrect_answers: ["32 bits", "64 bits", "128 bytes"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The numbering system with a radix of 16 is more commonly referred to as ",
    correct_answer: "Hexidecimal",
    incorrect_answers: ["Binary", "Duodecimal", "Octal"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "In most programming languages, the operator ++ is equivalent to the statement &quot;+= 1&quot;.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The programming language &#039;Swift&#039; was created to replace what other programming language?",
    correct_answer: "Objective-C",
    incorrect_answers: ["C#", "Ruby", "C++"],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "The NVidia GTX 1080 gets its name because it can only render at a 1920x1080 screen resolution.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    type: "boolean",
    difficulty: "easy",
    category: "Science: Computers",
    question: "Ada Lovelace is often considered the first computer programmer.",
    correct_answer: "True",
    incorrect_answers: ["False"],
  },
  {
    type: "multiple",
    difficulty: "easy",
    category: "Science: Computers",
    question:
      "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    correct_answer: "1000",
    incorrect_answers: ["512", "1024", "500"],
  },
  // Altre domande...
]

const finish = () => {
  const rimuoviTimer = document.getElementsByClassName("containerTimer")[0]
  const rimuoviTitoloDomanda = document.getElementsByClassName("Question")[0]
  const rimuoviBottoniRisposta = document.getElementsByClassName(
    "contenitoreRisposte"
  )[0]
  const centraBottoneAlCentro = document.getElementById("show-result-button")
  rimuoviTimer.classList.add("stilePerUtimaDomanda")
  rimuoviTitoloDomanda.classList.add("stilePerUtimaDomanda")
  rimuoviBottoniRisposta.classList.add("stilePerUtimaDomanda")
  centraBottoneAlCentro.classList.add("stilePerUtimaDomandaBottone")
  clearInterval(timer)
}

// Array per salvare l'esito di ogni risposta
const results = []

// Codice per il timer
let counter = 10
let progress = -19
let timer

// Definizione dell'elemento h4 e inizializzazione del timer
const h4 = document.createElement("h4")
const containerText = document.getElementById("container-text")
const second = document.createElement("p")
const rimanenti = document.createElement("p")
containerText.append(second, h4, rimanenti)
h4.classList.add("progress-textH4")
second.classList.add("progress-textP")
rimanenti.classList.add("progress-textP")
second.innerText = "SECONDS"
rimanenti.innerText = "REMAINING"

// Funzione per avviare il timer
function startTimer() {
  clearInterval(timer)
  counter = 50
  progress = 0
  timer = setInterval(() => {
    counter--
    h4.innerText = counter
    const progressBar = document.getElementById("progress-bar")
    progress = progress + 2
    progressBar.style.background = `conic-gradient(cyan ${progress}%, #9b9898 0%)`

    if (counter === 0) {
      clearInterval(timer)
      index++
      if (index < questions.length) {
        const domanda = questions[index]
        results.push({
          question: domanda.question,
          selectedAnswer: "Time Out",
          correctAnswer: domanda.correct_answer,
          isCorrect: false,
        })
        console.log("Tempo scaduto!")
        nextQuestion()
        startTimer()
      } else {
        console.log("Tempo scaduto ultima domanda!")
        results.push({
          question: "tempo scaduto",
          selectedAnswer: "Time Out",
          correctAnswer: "non hai risposto",
          isCorrect: false,
        })
        // Se siamo all'ultima domanda, aggiungi il pulsante per mostrare i risultati
        const footer = document.querySelector("footer")
        const showResultButton = document.createElement("button")
        showResultButton.textContent = "MOSTRA RISULTATO TEST"
        showResultButton.id = "show-result-button"
        showResultButton.classList.add("button-ans")
        footer.innerHTML = "" // Rimuovi eventuali vecchi pulsanti nel footer
        footer.appendChild(showResultButton)
        showResultButton.addEventListener("click", () => {
          window.location.href = "result.html" // Redirigi verso la pagina dei risultati
        })
        // Salva l'array results nei dati di sessione dopo che l'utente ha completato il quiz
        sessionStorage.setItem("results", JSON.stringify(results))
        finish()
        console.log("Hai completato tutte le domande! è il timer è scaduto")
      }
    }
  }, 1000)
}

// Variabile per tenere traccia dell'indice della domanda corrente
let index = 0

// Funzione per mostrare la prossima domanda
function nextQuestion() {
  const contatoreElement = document.querySelector(".valoreContatore")
  const questionElement = document.querySelector(".Question")
  const risposteElement = document.querySelector(".contenitoreRisposte")
  risposteElement.innerHTML = ""
  // Controlla se siamo all'ultima domanda
  if (index === questions.length - 1) {
    // Se siamo all'ultima domanda, ferma il timer
    startTimer()
  } else {
    // Se non siamo all'ultima domanda, avvia il timer per la prossima domanda
    startTimer()
  }
  const domanda = questions[index]
  questionElement.innerHTML = `<h1>${domanda.question}</h1>`
  contatoreElement.textContent = `${index + 1}`
  const tutteLeRisposte = [...domanda.incorrect_answers, domanda.correct_answer]
  tutteLeRisposte.sort(() => Math.random() - 0.5)
  tutteLeRisposte.forEach((risposta, rispostaIndex) => {
    const bottone = document.createElement("button")
    bottone.textContent = risposta
    bottone.classList.add("button-ans")
    risposteElement.appendChild(bottone)
    bottone.addEventListener("click", () => {
      let isCorrect = risposta === domanda.correct_answer
      //modifica background colore bottone in base alla risposta
      if (isCorrect) {
        bottone.classList.add("green")
      } else {
        bottone.classList.add("red")
      }

      console.log(isCorrect ? "Risposta corretta!" : "Risposta sbagliata!")
      //dove vengono push i dati inerenti alle risposte
      results.push({
        question: domanda.question,
        selectedAnswer: risposta,
        correctAnswer: domanda.correct_answer,
        isCorrect: isCorrect,
      })
      index++
      // Controlla se siamo all'ultima domanda
      if (index === questions.length) {
        // Se siamo all'ultima domanda, aggiungi il pulsante per mostrare i risultati
        const footer = document.querySelector("footer")
        const showResultButton = document.createElement("button")
        showResultButton.textContent = "MOSTRA RISULTATO TEST"
        showResultButton.id = "show-result-button"
        showResultButton.classList.add("button-ans")
        footer.innerHTML = "" // Rimuovi eventuali vecchi pulsanti nel footer
        footer.appendChild(showResultButton)
        showResultButton.addEventListener("click", () => {
          console.log("Hai completato tutte le domande!")
          window.location.href = "result.html" // Redirigi verso la pagina dei risultati
        })
        // Salva l'array results nei dati di sessione dopo che l'utente ha completato il quiz
        finish()
        sessionStorage.setItem("results", JSON.stringify(results))
      } else {
        // Se non siamo all'ultima domanda, mostra la prossima domanda
        setTimeout(nextQuestion, 300)
      }
    })
  })
}

// Chiama la funzione startTimer per avviare il quiz
nextQuestion()
startTimer()
console.log(
  "Array che viene riepito ogni volta che l'utente compila le domande",
  results
)
