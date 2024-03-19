// prove genera domande

// let index = 0;
// index = Math.floor(Math.random() * 11);
// adesso voglio creare la funzione del bottone
// function nextQuestion() {
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

//     bottone.classList.add("button-ans");
//     //   Usa qui la classe CSS appropriata per i bottoni
//     risposteElement.appendChild(bottone);

// Eventuale listener per il click sui bottoni

// // function mostraDomandaErisposte() {
// //   const domanda = questions[index];
// //   const questionElement = document.querySelector(".Question");
// //   const risposteElement = document.querySelector(".contenitoreRisposte");

// //   // Pulisce il contenitore delle risposte precedenti
// //   risposteElement.innerHTML = "";

// //   // Imposta il testo della domanda e il contatore
// //   questionElement.innerHTML = `<h1>${domanda.question}</h1>`;

// //   // Combina le risposte corrette e sbagliate e le mescola
// //   const tutteLeRisposte = [
// //     ...domanda.incorrect_answers,
// //     domanda.correct_answer,
// //   ];
// //   tutteLeRisposte.sort(() => Math.random() - 0.5);

// //   // Crea i bottoni per ogni risposta
// //   tutteLeRisposte.forEach((risposta) => {
// //     const bottone = document.createElement("button");
// //     bottone.textContent = risposta;
// //     bottone.classList.add("button-ans"); // Usa qui la classe CSS appropriata per i bottoni
// //     risposteElement.appendChild(bottone);

// //     // Eventuale listener per il click sui bottoni
// //   });
// // }
// // mostraDomandaErisposte();

// Mostra la prima domanda all'apertura della pagina
// timer
let counter = 60;
let progress = 0;

const h4 = document.createElement("h4");
const containerText = document.getElementById("container-text");
const second = document.createElement("p");
const rimanenti = document.createElement("p");
containerText.append(second, h4, rimanenti);
h4.classList.add("progress-textH4");
second.classList.add("progress-textP");
rimanenti.classList.add("progress-textP");
second.innerText = "SECONDS";
rimanenti.innerText = "REMAINING";
const timer = setInterval(() => {
  counter--;
  h4.innerText = " ";
  h4.innerText = counter;
  //   questo serve per il countdown dei secondi
  const progressBar = document.getElementById("progress-bar");
  progress = progress + 2;
  progressBar.style.background = `conic-gradient(cyan ${progress}%, #9b9898 0%)`;

  if (counter === 0) {
    clearInterval(timer);
  }
}, 900);
// INIZIO VERE DOMANDE CON FILTRI ECC.....
