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