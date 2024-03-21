// Recupera l'array results dai dati di sessione
const results = JSON.parse(sessionStorage.getItem("results")) || []
console.log("log di come arriva array per controllo", results) // Per controllo

// Calcola risposte giuste e sbagliate
let risposteGiuste = 0
let risposteSbagliate = 0

results.forEach(result => {
  // Controlla se isCorrect è una stringa che rappresenta un booleano o un booleano diretto
  const isCorrect = result.isCorrect === true || result.isCorrect === "true"
  if (isCorrect) {
    risposteGiuste += 1
  } else {
    risposteSbagliate += 1
  }
})
console.log("log una volta eseguiti i calcoli mi accerto che arrivi", results)
console.log(
  "log una volta eseguiti i calcoli mi accerto che arrivi risposte giuste",
  risposteGiuste
)
console.log(
  "log una volta eseguiti i calcoli mi accerto che arrivi risposte sbagliate",
  risposteSbagliate
)

// Calcolo totale delle domande
const totaleDomande = results.length
console.log("mi accerto il numero totale delle domande", totaleDomande)

// Calcola le percentuali
const percentualeCorrette = ((risposteGiuste / totaleDomande) * 100).toFixed(2)
const percentualeSbagliate = (
  (risposteSbagliate / totaleDomande) *
  100
).toFixed(2)

console.log("percentuale corrette", percentualeCorrette, "%")
console.log("percentuale sbagliata", percentualeSbagliate, "%")

//mette in atto tutti i calcoli eseguiti e inserisce i vari campi al suo posto
document.getElementsByClassName(
  "risultatiCorretti"
)[0].innerHTML = `<h6><span class="correct">Correct</span><br/><span class="percentuale">${percentualeCorrette}%</span><br/><span class="totSuTot">${risposteGiuste}/${totaleDomande} Questions</span></h6>`
document.getElementsByClassName(
  "risultatiSbagliati"
)[0].innerHTML = `<h6><span class="correct">Wrong</span><br/><span class="percentuale">${percentualeSbagliate}%</span><br/><span class="totSuTot">${risposteSbagliate}/${totaleDomande} Questions</span></h6>`

// Determina il messaggio in base alla percentuale di risposte corrette
// const messaggioEsito =
//   percentualeCorrette >= 60 ? "Congratulations!" : "I am sorry";
// const messaggioEsito2 =
//   percentualeCorrette >= 60 ? "You passed the exam." : "You failed the test.";
// //prove
// console.log(messaggioEsito);
// console.log(messaggioEsito2);

// // Aggiorna il documento HTML con il messaggio di esito
// document.getElementsByClassName(
//   "testoInternoGrafico"
// )[0].innerHTML = `<h3>${messaggioEsito}</h3></br><h4>${messaggioEsito2}</h4><h5>We'll send you the certificate<br />in few minutes.<br />
// check your email (including<br />promotions/ spam folder)</h5>`;

//reazione al click che ti porta alla pagina feedback
const button = document.querySelector(".bottoneRateUs")
button.addEventListener("click", function () {
  window.location.href = "feedback.html"
  sessionStorage.setItem("refreshIndexPage", "true")
})
const grafic = () => {
  const passedOrNot = document.getElementById("passed")
  const passedOrNot2 = document.getElementById("passed2")
  const graficResult = document.getElementById("grafic")
  graficResult.classList.add("grafic")
  if (percentualeCorrette >= 60) {
    passedOrNot.innerText = "Congratulations!"
    passedOrNot2.innerText = "You passed the exam."
  } else {
    passedOrNot.innerText = "I am sorry"
    passedOrNot2.innerText = "You failed the test."
  }
  graficResult.style.background = `conic-gradient(red ${percentualeSbagliate}%, green 0%)`
}
grafic()

//inizio lista
const list = () => {
  const listAnswer = document.getElementById("list")
  for (let i = 0; i < results.length; i++) {
    const question = document.createElement("li")
    listAnswer.appendChild(question)

    question.innerText = i + 1 + " " + results[i].question

    if (results[i].correctAnswer === results[i].selectedAnswer) {
      const selectedAnswer = document.createElement("p")
      question.appendChild(selectedAnswer)
      selectedAnswer.classList.add("answer")
      selectedAnswer.innerText =
        "Selected answer is:" + " " + results[i].selectedAnswer + " "
      const checked = document.createElement("img")
      selectedAnswer.appendChild(checked)
      checked.src =
        "https://th.bing.com/th/id/R.b8c2a80b495234d91c635a32ef0f0099?rik=5TxvifYPiX%2fyYg&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fRcd%2fRpo%2fRcdRpoLoi.png&ehk=f3CulHw8q4hRI18oWolrpyk21R9S%2fTMxC8AEqvOU35U%3d&risl=&pid=ImgRaw&r=0"
      checked.style = "width:20px"
    } else {
      const selectedAnswer = document.createElement("p")
      question.appendChild(selectedAnswer)
      selectedAnswer.innerText =
        "Selected answer is:" + " " + results[i].selectedAnswer + " "
      const correctAnswer = document.createElement("p")
      question.appendChild(correctAnswer)
      correctAnswer.classList.add("answer")
      correctAnswer.innerText =
        "Correct answer is:" + " " + results[i].correctAnswer
      const wrong = document.createElement("img")
      selectedAnswer.appendChild(wrong)
      wrong.src =
        "https://th.bing.com/th/id/R.e88bb40ecefdbd2d2f9a02944e23e687?rik=egJSj%2bSgNwIo%2bw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9cR%2fLbg%2f9cRLbgE7i.png&ehk=um2l3QR5q%2bY4Ii8W05U1Ly%2f%2bmY5QrVU8ZFS1fmzOXlc%3d&risl=&pid=ImgRaw&r=0"
      wrong.style = "width:20px"
    }
    // const correctAnswer = document.createElement("p");
    // question.appendChild(correctAnswer);
    // correctAnswer.innerText = "Correct answer" + " " + results[i].correctAnswer;
    //   " " +
    //   "Selected answer" +
    //   " " +
    //   results[i].selectedAnswer +
    //   " " +
    //   "Correct answer" +
    //   " " +
    //   results[i].correctAnswer;
    // if (results[i].selectedAnswer === results[i].correctAnswer) {
    //   const giusto = document.createElement("p");
    //   answer.appendChild(giusto);
    //   giusto.innerText = "Bravo!";
    // } else {
    //   const sbagliato = document.createElement("p");
    //   answer.appendChild(sbagliato);
    //   sbagliato.innerText = "Sbagliato!";
    // }
  }
}
list()
