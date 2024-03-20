const stars = document.querySelectorAll(".stars img")

stars.forEach((star, index1) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("light")
        : star.classList.remove("light")
    })
  })
})
const starsContainer = document.querySelector(".stars")
const feedbackMessage = document.getElementById("feedback-message")

starsContainer.addEventListener("click", () => {
  // Nasconde le stelle
  starsContainer.style.display = "none"

  // Verifica quante stelle sono state selezionate
  const selectedStars = document.querySelectorAll(".stars img.light").length
  if (selectedStars >= 6) {
    feedbackMessage.innerText = "Thanks for your feedback!"
  } else {
    feedbackMessage.innerText = "Sorry, please let us know how we can improve."
  }
})

infoButton.addEventListener("click", () => {
  window.location.href = "https://epicode.com/"
})
