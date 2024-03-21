document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.stars img')
  const feedbackMessage = document.getElementById('feedback-message')
  const imageContainer = document.getElementById('imageContainer')
  const moreInfoButton = document.getElementById('moreInfoButton')
  const submitButton = document.getElementById('submitButton')

  function handleClick(index) {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('light')
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove('light')
    }
  }

  function handleMouseOver(event) {
    for (let i = 0; i <= event.currentTarget.dataset.index; i++) {
      stars[i].classList.add('light')
    }
    for (
      let i = parseInt(event.currentTarget.dataset.index) + 1;
      i < stars.length;
      i++
    ) {
      stars[i].classList.remove('light')
    }
  }

  // Aggiunge un ascoltatore per il click sul pulsante "Submit"
  submitButton.addEventListener('click', submitFeedback)

  // Funzione per gestire l'invio del feedback
  function submitFeedback() {
    const feedbackText = document.getElementById('formFeedbackText').value
    console.log('Feedback submitted:', feedbackText)

    const selectedStars = document.querySelectorAll('.stars img.light')

    if (selectedStars.length >= 6) {
      // Nasconde le stelline e la sezione del commento dopo il submit
      document.querySelector('.stars').style.display = 'none'
      document.querySelector('.commentArea').style.display = 'none'
      submitButton.style.display = 'none'

      // Mostra l'immagine dopo il submit solo se più di 6 stelline sono state selezionate
      imageContainer.innerHTML = `
        <div id="gifContainer" style="display: flex; justify-content: center; align-items: center;">
          <img src="https://media1.tenor.com/m/6vWYnc0dkisAAAAd/your-feedback-is-appreciated-we-value-your-feedback.gif" alt="Love GIF" style="max-width: 100%;">
        </div>`
      imageContainer.style.display = 'block'

      // Mostra il messaggio di ringraziamento
      feedbackMessage.innerText = 'Thanks for your feedback'
    } else {
      // Nasconde le stelline, la sezione del commento e il tasto submit dopo il submit
      document.querySelector('.stars').style.display = 'none'
      document.querySelector('.commentArea').style.display = 'none'
      submitButton.style.display = 'none'

      // Mostra l'immagine di tristezza e il messaggio
      imageContainer.innerHTML = `
        <div id="gifContainer" style="display: flex; justify-content: center; align-items: center;">
          <img src="https://media1.tenor.com/m/9rRu1_qcVpIAAAAC/shredder-mr-burns.gif" alt="Sad GIF" style="max-width: 100%;">
        </div>`
      imageContainer.style.display = 'block'

      feedbackMessage.innerText =
        'Sorry, please let us know how we can improve.'
    }

    // Aggiunge il bottone "More Info" al container dell'immagine
    moreInfoButton.style.display = 'block'
    moreInfoButton.style.margin = '0 auto'
    moreInfoButton.style.marginBottom = '20px'
    imageContainer.appendChild(moreInfoButton)
  }

  // Aggiunge un ascoltatore per il click sul bottone "More Info"
  moreInfoButton.addEventListener('click', redirectToMoreInfoPage)

  function redirectToMoreInfoPage() {
    // Modifica l'URL per il reindirizzamento
    window.location.href = 'https://epicode.com/it/'
  }

  // Aggiunge un ascoltatore per il click sulle stelle
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      handleClick(index)
    })
    star.addEventListener('mouseover', handleMouseOver)
  })
})
