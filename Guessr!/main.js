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

function gamePlay(high, all, low, Gstatus) {
  while (attempts < 10) {
    if (userGuess.value != computerNumber) {
      guessHistory(userGuess, computerNumber);
      attempts++;
      high.innerHTML = "High Guesses: " + `${highGuesses}`;
      all.innerHTML = "Guess History: " + `${allGuesses}`;
      low.innerHTML = "Low Guesses: " + `${lowGuesses}`;
      Gstatus.innerHTML = "Attempts: " + (10 - attempts);
      userGuess.value = "";
      console.log("attempts " + attempts);
      break;
    } else {
      attempts = 11;
      return (won = 1);
    }
  }
}
console.log("Dont even try cheating, the answer isn't here.");
let won = 0;
DOMSelectors.submit.addEventListener("click", function () {
  gamePlay(
    DOMSelectors.highGuess,
    DOMSelectors.allGuess,
    DOMSelectors.lowGuess,
    DOMSelectors.guessStatus
  );
  if (won == 1) {
    console.log("You win!");
    DOMSelectors.winStatus.innerHTML("You have won!");
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
