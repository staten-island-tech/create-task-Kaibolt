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
  if (user.value > computer) {
    greater.push(user.value);
  }
  if (user.value != computer) {
    all.push(user.value);
  }
  if (user.value < computer) {
    lower.push(user.value);
  }
}
console.log(computerNumber);
DOMSelectors.submit.addEventListener("click", function () {
  if (DOMSelectors.guess.value != computerNumber) {
    guessHistory(
      DOMSelectors.guess,
      computerNumber,
      highGuesses,
      allGuesses,
      lowGuesses
    );

    DOMSelectors.guess.value = "";
    console.log(highGuesses);
    console.log(allGuesses);
    console.log(lowGuesses);
  }
  if ((DOMSelectors.guess.value = computerNumber)) {
    console.log("Win!");
  }
});
