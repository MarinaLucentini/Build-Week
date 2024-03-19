
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
    // qui inseriamo la funzione per cambiare la domanda
  }
}, 900);
// INIZIO VERE DOMANDE CON FILTRI ECC.....
