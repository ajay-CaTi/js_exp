// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0E1 = document.getElementById("current--0");
const current1E1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

//
let currentScore, scores, activePlayer, playing;

const init = () => {
  let scores = [0, 0];
  let currentScore = 0;
  let activePlayer = 0;
  let playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0E1.textContent = 0;
  current1E1.textContent = 0;

  diceEl.classList.add("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

init();

const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
console.log(score0El, score1El);

// Rolling dice functionality

btnRoll.addEventListener("click", () => {
  if (playing) {
    // gen a random dice roll
    const dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    // display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `utils/dice_images/dice-${dice}.png`;
    // check th roll dice 1: if true  switch to next player
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (playing) {
    // 1.  Add current score to active player score
    scores[activePlayer] += currentScore;
    document.getAnimations(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. check if player score id >=100
    // finish game
    if (scores[activePlayer] >= 20) {
      // finish game
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player-winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player-active");
    } else {
      switchPlayer();
    }

    // switch to next player
    switchPlayer();
  }
});

btnNew.addEventListener("click", init());
