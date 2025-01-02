const DOMSelectors = {
  guess: document.querySelector("#userInput"),
  submit: document.querySelector("#submitGuess"),
};
const computerNumber = randomNumber(35);
let highGuesses = [];
let allGuesses = [];
let lowGuesses = [];
let attempts = 0;
let userGuess = DOMSelectors.guess;
function randomNumber(maximum) {
  const number = Math.floor(Math.random() * maximum + 1);
  return number;
}
function guessHistory(user, computer, greater, all, lower) {
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
console.log(computerNumber);

//for (let i = 0; i != 10; ) {

DOMSelectors.submit.addEventListener("click", function () {
  while (attempts < 10) {
    console.log("attempts " + attempts);
    if (userGuess.value != computerNumber) {
      guessHistory(userGuess, computerNumber);
      userGuess.value = "";
      attempts++;
    } else {
      console.log("Win");
      attempts = 10;
      //      i = 10;
    }
    //  console.log(i);
    console.log(highGuesses);
    console.log(allGuesses);
    console.log(lowGuesses);
    console.log("attempts " + attempts);
  }
});
//}
