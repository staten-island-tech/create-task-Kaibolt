const DOMSelectors = {
  guess: document.querySelector("#userInput"),
  submit: document.querySelector("#submitGuess"),
};
const computerNumber = randomNumber(35);
let highGuesses = [];
let allGuesses = [];
let lowGuesses = [];
let userGuess = DOMSelectors.guess;
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

//for (let i = 0; i != 10; ) {

while (i != 10) {
  DOMSelectors.submit.addEventListener("click", function () {
    if (userGuess.value != computerNumber) {
      guessHistory(
        userGuess,
        computerNumber,
        highGuesses,
        allGuesses,
        lowGuesses
      );
      //      i++;
      userGuess.value = "";
    } else {
      console.log("Win");
      //      i = 10;
    }
    //  console.log(i);
    console.log(highGuesses);
    console.log(allGuesses);
    console.log(lowGuesses);
    i++;
  });
  //}
}
