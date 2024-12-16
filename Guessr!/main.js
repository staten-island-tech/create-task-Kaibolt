const DOMSelectors = {
  guess: document.querySelector("#userInput"),
  submit: document.querySelector("#submitGuess"),
};
const computerNumber = randomNumber(35);
let highGuesses = [];
let allGuesses = [];
let lowGuesses = [];

function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1);
  return number;
}
function guessHistory(user, computer, greater, all, lower) {
  if (user > computer) {
    greater.push(DOMSelectors.guess.value);
  }
  if (user != computer) {
    all.push(DOMSelectors.guess.value);
  }
  if (user < computer) {
    lower.push(DOMSelectors.guess.value);
  }
  userValue = "";
}

DOMSelectors.submit.addEventListener("click", function () {
  console.log(computerNumber);
  if (DOMSelectors.guess.value != computerNumber) {
    console.log(DOMSelectors.guess.value);
    DOMSelectors.guess.innerHTML = "";
  }
  console.log(allGuesses);
});
