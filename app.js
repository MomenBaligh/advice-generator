const text = document.querySelector(".advice");
const adviceNumber = document.querySelector(".id");
const dice = document.querySelector(".dice-container");

generateAdvice();
dice.onclick = () => generateAdvice();

function generateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      adviceNumber.innerText = data.slip.id;
      text.innerText = `"${data.slip.advice}"`;
    });
}
