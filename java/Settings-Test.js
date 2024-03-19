function checkStartButton() {
    const bottoni1Buttons = document.querySelectorAll(".bottoni1 button.selected");
    const bottoni2Buttons = document.querySelectorAll(".bottoni2 button.selected");
    const startButton = document.querySelector(".startbutton");

    if (bottoni1Buttons.length > 0 && bottoni2Buttons.length > 0) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  }

  function selectButton(button) {
    const buttons = button.parentNode.querySelectorAll("button");
    buttons.forEach(btn => {
      if (btn === button) {
        btn.classList.add("selected");
      } else {
        btn.classList.remove("selected");
      }
    });
  }

  function startTest() {
    // Codice per avviare il test quando il pulsante "Start" è cliccato
    alert("Il test è stato avviato!");
  }