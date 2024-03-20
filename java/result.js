// Recupera l'array results dai dati di sessione
const results = JSON.parse(sessionStorage.getItem('results')) || [];
console.log("log di come arriva array per controllo",results); // Per controllo


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
console.log("log una volta eseguiti i calcoli mi accerto che arrivi",results)
console.log("log una volta eseguiti i calcoli mi accerto che arrivi risposte giuste",risposteGiuste)
console.log("log una volta eseguiti i calcoli mi accerto che arrivi risposte sbagliate",risposteSbagliate)


// Calcolo totale delle domande
const totaleDomande = results.length;
console.log("mi accerto il numero totale delle domande",totaleDomande)

// Calcola le percentuali
const percentualeCorrette = ((risposteGiuste / totaleDomande) * 100).toFixed(2);
const percentualeSbagliate = ((risposteSbagliate / totaleDomande) * 100).toFixed(2);

console.log("percentuale corrette",percentualeCorrette,"%")
console.log("percentuale sbagliata",percentualeSbagliate,"%")


//mette in atto tutti i calcoli eseguiti e inserisce i vari campi al suo posto 
document.getElementsByClassName('risultatiCorretti')[0].innerHTML = `<h6><span class="correct">Correct</span><br/><span class="percentuale">${percentualeCorrette}%</span><br/><span class="totSuTot">${risposteGiuste}/${totaleDomande} Questions</span></h6>`;
document.getElementsByClassName('risultatiSbagliati')[0].innerHTML = `<h6><span class="correct">Wrong</span><br/><span class="percentuale">${percentualeSbagliate}%</span><br/><span class="totSuTot">${risposteSbagliate}/${totaleDomande} Questions</span></h6>`;

// Determina il messaggio in base alla percentuale di risposte corrette
const messaggioEsito = percentualeCorrette >= 60 ? "Complimenti, hai superato l'esame!" : "Mi dispiace, non hai superato il test.";

// Aggiorna il documento HTML con il messaggio di esito
document.getElementsByClassName('testoInternoGrafico').innerHTML = messaggioEsito 