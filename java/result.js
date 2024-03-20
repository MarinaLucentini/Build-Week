// Recupera l'array results dai dati di sessione
const results = JSON.parse(sessionStorage.getItem('results')) || [];
console.log("log di come arriva array",results); // Per controllo


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
console.log("log una volta eseguiti i calcoli",results)


// Calcolo totale delle domande
const totaleDomande = results.length;

// Calcola le percentuali
const percentualeCorrette = ((risposteGiuste / totaleDomande) * 100).toFixed(2);
const percentualeSbagliate = ((risposteSbagliate / totaleDomande) * 100).toFixed(2);



document.getElementsByClassName('risultatiCorretti').innerHTML = "<h6><span>Correct</span><br/><span>${percentualeCorrette}%</span><br/><span>${risposteGiuste}/${totaleDomande} Questions</span> </h6>"
document.getElementsByClassName('risultatiSbagliati').innerHTML = "<h6><span>Wrong</span><br/><span>${percentualeSbagliate}%</span><br/><span>${risposteSbagliate}/${totaleDomande} Questions</span> </h6>"


// Determina il messaggio in base alla percentuale di risposte corrette
const messaggioEsito = percentualeCorrette >= 60 ? "Complimenti, hai superato l'esame!" : "Mi dispiace, non hai superato il test.";

// Aggiorna il documento HTML con il messaggio di esito
document.getElementsByClassName('testoInternoGrafico').innerHTML = messaggioEsito 