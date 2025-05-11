const buttons = document.querySelectorAll(".disable");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.disabled = true;
  });
});