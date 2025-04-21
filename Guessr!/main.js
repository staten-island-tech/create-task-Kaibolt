const DOMSelectors = {
  guess: document.querySelector("#userInput"),
  submit: document.querySelector("#submitGuess"),
  highGuess: document.querySelector("#hG"),
  allGuess: document.querySelector("#aG"),
  lowGuess: document.querySelector("#lG"),
  winStatus: document.querySelector("#status"),
  guessStatus: document.querySelector("#gS"),
};

let computerNumber = randomNumber(35);
let highGuesses = [];
let allGuesses = [];
let lowGuesses = [];
let attempts = 0;
let userGuess = DOMSelectors.guess;

function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1);
  return number;
}

function guessHistory(user, computer) {
  if (user.value > computer) {
    highGuesses.push(user.value);
  }
  if (user.value != computer) {
    allGuesses.push(user.value);
  }
  if (user.value < computer) {
    lowGuesses.push(user.value);
  }
}

console.log("Dont even try cheating, the answer isn't here.");

DOMSelectors.submit.addEventListener("click", function () {
  while (attempts < 10) {
    if (userGuess.value != computerNumber) {
      guessHistory(userGuess, computerNumber);
      attempts++;
      DOMSelectors.highGuess.innerHTML = "High Guesses: " + `${highGuesses}`;
      DOMSelectors.allGuess.innerHTML = "Guess History: " + `${allGuesses}`;
      DOMSelectors.lowGuess.innerHTML = "Low Guesses: " + `${lowGuesses}`;
      DOMSelectors.guessStatus.innerHTML = "Attempts: " + (10 - attempts);
      userGuess.value = "";
      console.log("attempts " + attempts);
      break;
    } else {
      console.log("Win");
      DOMSelectors.winStatus.innerHTML = "Win Status: Win!";
      attempts = 11;
      break;
    }
  }
});

document.querySelector("#restart").addEventListener("click", function () {
  attempts = 0;
  highGuesses = [];
  allGuesses = [];
  lowGuesses = [];
  computerNumber = randomNumber(35);
  DOMSelectors.highGuess.innerHTML = "High Guesses: " + `${highGuesses}`;
  DOMSelectors.allGuess.innerHTML = "Guess History: " + `${allGuesses}`;
  DOMSelectors.lowGuess.innerHTML = "Low Guesses: " + `${lowGuesses}`;
  DOMSelectors.guessStatus.innerHTML = "Attempts: " + (10 - attempts);
  DOMSelectors.winStatus.innerHTML = "Win Status: False";
  userGuess.value = "";
});
