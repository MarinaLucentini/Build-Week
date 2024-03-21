document.addEventListener('DOMContentLoaded', function () {
  const stars = document.querySelectorAll('.stars img')
  const feedbackArea = document.querySelector('.feedbackArea')
  const feedbackMessage = document.getElementById('feedback-message')

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

  // Funzione per gestire il click su una stella
  function handleClick(index) {
    // Colora le stelle
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add('light')
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove('light')
    }
  }

  // Funzione per gestire il passaggio del mouse sulle stelle
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
  const submitButton = document.getElementById('submitButton')
  submitButton.addEventListener('click', submitFeedback)

  // Funzione per gestire l'invio del feedback
  function submitFeedback() {
    const feedbackText = document.getElementById('formFeedbackText').value
    console.log('Feedback submitted:', feedbackText)

    const selectedStars = document.querySelectorAll('.stars img.light')
    const feedbackMessage = document.getElementById('feedback-message')
    const imageContainer = document.getElementById('imageContainer')

    if (selectedStars.length >= 6) {
      // Nasconde le stelline e la sezione del commento dopo il submit
      const starsContainer = document.querySelector('.stars')
      starsContainer.style.display = 'none'

      const commentArea = document.querySelector('.commentArea')
      commentArea.style.display = 'none'

      // Nascondi il tasto submit
      submitButton.style.display = 'none'

      // Mostra l'immagine dopo il submit solo se più di 6 stelline sono state selezionate
      imageContainer.innerHTML = `
      <div id="gifContainer" style="display: flex; justify-content: center; align-items: center;">
        <img src="https://media.tenor.com/pW3rsRJePgcAAAAi/love-in-love.gif" alt="Love GIF" style="max-width: 100%;">
      </div>`
      imageContainer.style.display = 'block'

      // Mostra il messaggio di ringraziamento
      feedbackMessage.innerText = 'Thanks for your feedback'
    } else if (selectedStars.length <= 6) {
      // Nasconde le stelline, la sezione del commento e il tasto submit dopo il submit
      const starsContainer = document.querySelector('.stars')
      starsContainer.style.display = 'none'

      const commentArea = document.querySelector('.commentArea')
      commentArea.style.display = 'none'

      submitButton.style.display = 'none'

      // Mostra l'immagine di tristezza e il messaggio
      imageContainer.innerHTML = `
      <div id="gifContainer" style="display: flex; justify-content: center; align-items: center;">
        <img src="https://media1.tenor.com/m/ctO2QkhV05kAAAAC/crying-crying-meme.gif" alt="Sad GIF" style="max-width: 100%;">
      </div>`
      imageContainer.style.display = 'block'

      feedbackMessage.innerText =
        'Sorry, please let us know how we can improve.'
    }
  }

  // Aggiunge un ascoltatore per il click sulle stelle
  stars.forEach((star, index) => {
    star.addEventListener('click', () => {
      handleClick(index)
    })
    star.addEventListener('mouseover', handleMouseOver)
  })
})
