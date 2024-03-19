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

// Codice per il timer
let counter = 60
let progress = 0

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
const timer = setInterval(() => {
  counter--
  h4.innerText = " "
  h4.innerText = counter
  // Questo serve per il countdown dei secondi
  const progressBar = document.getElementById("progress-bar")
  progress = progress + 2
  progressBar.style.background = `conic-gradient(cyan ${progress}%, #9b9898 0%)`

  if (counter === 0) {
    clearInterval(timer)
    console.log("Tempo scaduto!")
    // Puoi aggiungere qui la logica per gestire il tempo scaduto
  }
}, 1000)

// Variabile per tenere traccia dell'indice della domanda corrente
let index = 0

// Funzione per mostrare la prossima domanda
function nextQuestion() {
  const contatoreElement = document.querySelector(".valoreContatore")
  const questionElement = document.querySelector(".Question")
  const risposteElement = document.querySelector(".contenitoreRisposte")

  // Pulisce il contenitore delle risposte precedenti
  risposteElement.innerHTML = ""

  // Reimposta il timer
  counter = 60
  progress = 0

  // Ottiene la domanda corrente
  const domanda = questions[index]

  // Imposta il testo della domanda e il contatore
  questionElement.innerHTML = `<h1>${domanda.question}</h1>`
  contatoreElement.textContent = `${index + 1}`

  // Combina le risposte corrette e sbagliate e le mescola
  const tutteLeRisposte = [...domanda.incorrect_answers, domanda.correct_answer]
  tutteLeRisposte.sort(() => Math.random() - 0.5)

  // Crea i bottoni per ogni risposta
  tutteLeRisposte.forEach((risposta) => {
    const bottone = document.createElement("button")
    bottone.textContent = risposta
    bottone.classList.add("button-ans") // Usa qui la classe CSS appropriata per i bottoni
    risposteElement.appendChild(bottone)

    // Eventuale listener per il click sui bottoni
    bottone.addEventListener("click", () => {
      // Qui puoi gestire la logica per verificare se la risposta è corretta o sbagliata
      // Ad esempio:
      if (risposta === domanda.correct_answer) {
        console.log("Risposta corretta!")
      } else {
        console.log("Risposta sbagliata!")
      }

      // Passa alla prossima domanda
      index++
      if (index < questions.length) {
        nextQuestion()
      } else {
        console.log("Hai completato tutte le domande!")
        // Puoi aggiungere qui la logica per mostrare il punteggio finale o fare altre azioni
      }
    })
  })
}

// Mostra la prima domanda all'apertura della pagina
nextQuestion()
