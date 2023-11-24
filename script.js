'use strict';

// DOM elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current1 = document.getElementById('score--0');
const current2 = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

// Initially hide the dice
dice.classList.add('hidden');

// Initialize scores, current score, active player, and playing status
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

// Function to switch players
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Event listener for the "Roll Dice" button
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate a random dice number between 1 and 6
    const diceNumber = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    // Update the current score if the dice number is not 1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the other player if the dice number is 1
      switchPlayer();
    }
  }
});

// Event listener for the "Hold" button
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if the active player wins
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the other player if the game is still in progress
      switchPlayer();
    }
  }
});

// Event listener for the "New Game" button
btnNew.addEventListener('click', function () {
  // Reset scores and current scores
  score0El.textContent = 0;
  score1El.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;

  // Remove active player styles
  player0El.classList.remove('active--player');
  player1El.classList.remove('active--player');
});
