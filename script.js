'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(`secret number => ${secretNumber}`);

const checkButton = document.querySelector('.check');
const guessInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreLabel = document.querySelector('.score');
const secretNumberLabel = document.querySelector('.number');
const playAgainButton = document.querySelector('.again');
const bg = document.querySelector('body');
const highscoreLabel = document.querySelector('.highscore');

scoreLabel.textContent = score;

function youLost() {
  message.style.color = 'red';
  message.textContent = 'You lost! try again';
  guessInput.disabled = true;
  checkButton.style.visibility = 'hidden';
  scoreLabel.textContent = 0;
}

function youWon() {
  secretNumberLabel.style.width = '30rem';
  secretNumberLabel.textContent = secretNumber;
  bg.style.backgroundColor = 'green';
  guessInput.disabled = true;
  checkButton.style.visibility = 'hidden';
  message.textContent = 'Correct Number!';

  if (score > highScore) {
    highScore = score;
    highscoreLabel.textContent = highScore;
  }
}

function wrongNumber(str) {
  message.textContent = str;
  score--;
  document.querySelector('.score').textContent = score;
}

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    if (score >= 1) {
      youWon();
    } else {
      youLost();
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      wrongNumber('Too High!');
    } else {
      youLost();
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      wrongNumber('Too Low!');
    } else {
      youLost();
    }
  }
});

playAgainButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`secret number => ${secretNumber}`);
  score = 20;
  message.textContent = 'Start guessing..';
  scoreLabel.textContent = score;
  bg.style.backgroundColor = '#222';
  secretNumberLabel.style.width = '15rem';
  secretNumberLabel.textContent = '?';
  guessInput.value = '';
  guessInput.disabled = false;
  checkButton.style.visibility = 'visible';
});
