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

// Calcolo totale delle domande
const totaleDomande = results.length;

// Calcola le percentuali
const percentualeCorrette = ((risposteGiuste / totaleDomande) * 100).toFixed(2);
const percentualeSbagliate = ((risposteSbagliate / totaleDomande) * 100).toFixed(2);

// Aggiorna il documento HTML con le percentuali
// document.getElementById('summary-correct').textContent = `Correct ${percentualeCorrette}% ${risposteGiuste}/${totaleDomande} Questions`;
// document.getElementById('summary-wrong').textContent = `Wrong ${percentualeSbagliate}% ${risposteSbagliate}/${totaleDomande} Questions`;


// Aggiorna il documento HTML con le percentuali
document.getElementById('summary-correct').innerHTML = `<div>Correct </div><div>${percentualeCorrette}%</div><div>${risposteGiuste}/${totaleDomande} Questions</div>`;
document.getElementById('summary-wrong').innerHTML = `<div>Wrong </div><div>${percentualeSbagliate}%</div><div>${risposteSbagliate}/${totaleDomande} Questions</div>`;

// Determina il messaggio in base alla percentuale di risposte corrette
const messaggioEsito = percentualeCorrette >= 60 ? "Complimenti, hai superato l'esame!" : "Mi dispiace, non hai superato il test.";

// Aggiorna il documento HTML con il messaggio di esito
document.getElementById('esito-esame').textContent = messaggioEsito;
