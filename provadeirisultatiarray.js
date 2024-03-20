// Recupera l'array results dai dati di sessione
const results = JSON.parse(sessionStorage.getItem('results')) || [];
console.log(results); // Per controllo

// Calcola risposte giuste e sbagliate
let risposteGiuste = 0;
let risposteSbagliate = 0;

results.forEach((result) => {
  // Controlla se isCorrect è una stringa che rappresenta un booleano o un booleano diretto
  const isCorrect = result.isCorrect === true || result.isCorrect === "true";
  if (isCorrect) {
    risposteGiuste += 1;
  } else {
    risposteSbagliate += 1;
  }
});

// Aggiorna la tabella con i totali
document.getElementById('quantitàCorrette').textContent = risposteGiuste;
document.getElementById('quantitàSbagliate').textContent = risposteSbagliate;
