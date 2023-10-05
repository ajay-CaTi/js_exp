let score = 20;
let highScore = 20;
let secretNumber = Math.floor(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// console.log(secretNumber);

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // document.querySelector(".message").textContent = "No Number";
    displayMessage("No Number");
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;

    if (highScore > score) {
      document.querySelector(".highscore").textContent = highScore;
    } else {
      highScore = score;
      document.querySelector(".highscore").textContent = score;
    }

    // document.querySelector(".message").textContent = "Correct Number!...";
    displayMessage("Correct Number!...");

    // correct number css change

    document.querySelector("body").style.backgroundColor = "green";

    document.querySelector(".number").style.width = "35rem";
  }

  // when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // guess is too high

      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "Too High!..." : "Too Low!...";
      displayMessage(guess > secretNumber ? "Too High!..." : "Too Low!...");
      document.querySelector(".score").textContent = --score;
    } else {
      displayMessage("We loose game...");
      document.querySelector(".score").textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       // guess is too high

  //       document.querySelector(".message").textContent = "Too High!...";
  //       document.querySelector(".score").textContent = --score;
  //     } else {
  //       document.querySelector(".message").textContent = "We loose game...";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       // guess is too low

  //       document.querySelector(".message").textContent = "Too Low!...";
  //       document.querySelector(".score").textContent = --score;
  //     } else {
  //       document.querySelector(".message").textContent = "We loose game!...";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
