let secretNumber;
let attemptsLeft;
const maxAttempts = 7;

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function startGame() {
  secretNumber = generateRandomNumber();
  attemptsLeft = maxAttempts;
  document.getElementById("feedback").innerText = "";
  document.getElementById("attempts").innerText = `Attempts left: ${attemptsLeft}`;
  document.getElementById("guessInput").value = "";
  document.getElementById("resetBtn").style.display = "none";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attempts = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    feedback.innerText = "Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;

  if (guess === secretNumber) {
    feedback.innerText = `🎉 Correct! The number was ${secretNumber}.`;
    endGame();
  } else if (guess < secretNumber) {
    feedback.innerText = "Too low! Try a higher number.";
  } else {
    feedback.innerText = "Too high! Try a lower number.";
  }

  if (attemptsLeft > 0 && guess !== secretNumber) {
    attempts.innerText = `Attempts left: ${attemptsLeft}`;
  } else if (attemptsLeft === 0 && guess !== secretNumber) {
    feedback.innerText = `❌ Game over! The number was ${secretNumber}.`;
    endGame();
  }
}

function endGame() {
  document.getElementById("attempts").innerText = "";
  document.getElementById("resetBtn").style.display = "inline-block";
}

function resetGame() {
  startGame();
}

startGame();
