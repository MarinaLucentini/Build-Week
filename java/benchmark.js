let counter = 60;
let progress = 0;

const timer = setInterval(() => {
  const h4 = document.getElementById("second");
  counter--;
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
