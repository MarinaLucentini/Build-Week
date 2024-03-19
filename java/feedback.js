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
//------------------------------------------------------------------------------------------------------------------------------------------------