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
const messaggioEsito = percentualeCorrette >= 60 ? "Congratulations!" : "I am sorry";
const messaggioEsito2 = percentualeCorrette >= 60 ? "You passed the exam." : "You failed the test.";
//prove
console.log(messaggioEsito)
console.log(messaggioEsito2)

// Aggiorna il documento HTML con il messaggio di esito
document.getElementsByClassName('testoInternoGrafico')[0].innerHTML = `<h3>${messaggioEsito}</h3></br><h4>${messaggioEsito2}</h4><h5>We'll send you the certificate<br />in few minutes.<br />
check your email (including<br />promotions/ spam folder)</h5>`

//reazione al click che ti porta alla pagina feedback
const button = document.querySelector(".bottoneRateUs");
button.addEventListener("click", function() {
  window.location.href = "feedback.html"; 
  sessionStorage.setItem("refreshIndexPage", "true");
})