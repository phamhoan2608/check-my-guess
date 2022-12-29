"use strict";
const checkNumber = Number.parseInt(Math.random() * 20) + 1;
const numberDOM = document.querySelector(".number");
const guessDOM = document.querySelector("input[type='number'].guess");
const btnCheck = document.querySelector(".btn.check");
const btnAgain = document.querySelector(".btn.again");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const scoreDOM = document.querySelector(".score");
const highScoreDOM = document.querySelector(".highscore");
let score = 20;
let highScore = 0;

btnCheck.addEventListener("click", () => {
  const guessValue = Number(document.querySelector("input[type='number'].guess").value);

  if (guessDOM !== "" && guessValue > 0) {
    if (checkNumber === guessValue) {
      numberDOM.innerHTML = checkNumber;
      message.innerHTML = "You win";
      body.style.backgroundColor = "#60b347";
      const highScoreTmp = score;
      if (highScoreTmp > highScore) {
        highScore = highScoreTmp;
        highScoreDOM.innerHTML = highScoreTmp;
      }
      guessDOM.innerHTML = "";
    } else if (checkNumber > guessValue) {
      message.innerHTML = "Too low";
      score--;
    } else {
      message.innerHTML = "Too High";
      score--;
    }
    scoreDOM.innerHTML = score;
  }
});

btnAgain.addEventListener("click", () => {
  body.style.backgroundColor = "#222";
  guessDOM.value = "";
  score = 20;
  scoreDOM.innerHTML = score;
  numberDOM.innerHTML = "?";
  message.innerHTML = "Start guessing...";
});
