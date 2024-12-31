"use script";

const grossScore0 = document.querySelector("#score--0");

const grossScore1 = document.querySelector("#score--1");

const player0 = document.querySelector(".player--0");

const player1 = document.querySelector(".player--1");

const currentScore0 = document.querySelector("#current--0");

const currentScore1 = document.querySelector("#current--1");

const diceImage = document.querySelector(".dice");

const newGameBtn = document.querySelector(".btn--new");

const rollDiceBtn = document.querySelector(".btn--roll");

const holdBtn = document.querySelector(".btn--hold");

// Starting - functionalities
let activePlayer = 0;
let currentScore = 0;
let scores = [0, 1];
let playing = true;

// hiding dice
diceImage.style.display = "none";
// Reseting Scores
grossScore0.textContent = 0;
grossScore1.textContent = 0;

rollDiceBtn.addEventListener("click", function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6) + 1;

    console.log(randomDice);

    diceImage.src = `./assets/dice-pig_game/dice-${randomDice}.png`;

    if (randomDice !== 1) {
      diceImage.style.display = "block";
      currentScore += randomDice;

      // currentScore0.textContent = currentScore;

      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    } else {
      // Reseting the score of the last player
      currentScore = 0;

      // displaying reset score
      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

      player0.classList.toggle("player--active");

      player1.classList.toggle("player--active");

      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      // *another method
      // activePlayer = activePlayer === 0 ? 1 : 0;

      // Reset current score
      currentScore = 0;

      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (playing) {
    // if --> scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;

    //   displaying the gross scores
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      playing = false;

      document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

      document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");

      diceImage.style.display = "none";

      rollDiceBtn.classList.add("hidden");
    } else {
      // swap active player
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");

      //   Reseting current scores after swaped player
      currentScore = 0;

      document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    }
  }
});

newGameBtn.addEventListener("click", function () {
  document.querySelector(`.player--0`).classList.add("player--active");

  document.querySelector(`.player--0`).classList.remove("player--winner");

  document.querySelector(`.player--1`).classList.remove("player--winner");

  rollDiceBtn.classList.remove("hidden");

  currentScore = 0;

  scores = [0, 0];

  activePlayer = 0;

  console.log("current", currentScore);
  console.log("score", scores);

  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  document.querySelector(`#score--0`).textContent = scores[0];

  document.querySelector(`#score--1`).textContent = scores[1];

  playing = true;
});
