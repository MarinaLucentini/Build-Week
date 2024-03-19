// array di oggetti
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

//------------------------------------------------------------------------------------------------------------------------------------------------
// // prove genera domande

// let index = Math.floor(Math.random() * 11);
// function mostraDomandaErisposte() {
//   const domanda = questions[index];
//   const questionElement = document.querySelector(".Question");
//   const contatoreElement = document.querySelector(".valoreContatore");
//   const risposteElement = document.querySelector(".contenitoreRisposte");

//   // Pulisce il contenitore delle risposte precedenti
//   risposteElement.innerHTML = "";

//   // Imposta il testo della domanda e il contatore
//   questionElement.innerHTML = `<h1>${domanda.question}</h1>`;
//   //   contatoreElement.textContent = `${index + 1}`;

//   // Combina le risposte corrette e sbagliate e le mescola
//   const tutteLeRisposte = [
//     ...domanda.incorrect_answers,
//     domanda.correct_answer,
//   ];
//   tutteLeRisposte.sort(() => Math.random() - 0.5);

//   // Crea i bottoni per ogni risposta
//   tutteLeRisposte.forEach((risposta) => {
//     const bottone = document.createElement("button");
//     bottone.textContent = risposta;
//     bottone.classList.add("button-ans"); // Usa qui la classe CSS appropriata per i bottoni
//     risposteElement.appendChild(bottone);

//     // Eventuale listener per il click sui bottoni
//   });
// }

// mostraDomandaErisposte(); // Mostra la prima domanda all'apertura della pagina
// // timer
// let counter = 60;
// let progress = 0;

// const h4 = document.createElement("h4");
// const containerText = document.getElementById("container-text");
// const second = document.createElement("p");
// const rimanenti = document.createElement("p");
// containerText.append(second, h4, rimanenti);
// h4.classList.add("progress-textH4");
// second.classList.add("progress-textP");
// rimanenti.classList.add("progress-textP");
// second.innerText = "SECONDS";
// rimanenti.innerText = "REMAINING";
// const timer = setInterval(() => {
//   counter--;
//   h4.innerText = " ";
//   h4.innerText = counter;
//   //   questo serve per il countdown dei secondi
//   const progressBar = document.getElementById("progress-bar");
//   progress = progress + 2;
//   progressBar.style.background = `conic-gradient(cyan ${progress}%, #9b9898 0%)`;

//   if (counter === 0) {
//     clearInterval(timer);
//     // qui inseriamo la funzione per cambiare la domanda
//   }
// }, 900);
// //------------------------------------------------------------------------------------------------------------------------------------------------