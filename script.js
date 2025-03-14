window.addEventListener("DOMContentLoaded", function () {
  const advice = document.querySelector(".advice");
  const adviceId = document.querySelector(".advice-id");
  const adviceGenerator = document.querySelector(".advice-generator");

  adviceGenerator.addEventListener("click", generateAdvice);

  function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        advice.innerHTML = `<q>${data.slip.advice}</q>`;
        adviceId.textContent = `Advice #${data.slip.id}`;
      });
  }

  generateAdvice();
});
