"use strict"
const rollBtn = document.querySelector(".btn-roll");

let player0 = document.querySelector(".player-0");
let player1 = document.querySelector(".player-1");

let score0 = document.querySelector(".score-0");
let score1 = document.querySelector(".score-1");

let diceImg = document.querySelector("img");

let current0 = document.querySelector(".current-score-0");
let current1 = document.querySelector(".current-score-1");



score0.textContent = 0;
score1.textContent = 0;

diceImg.classList.add("hidden");
let  currentScore = 0;


let activePlayer = 0;

///// roll 

rollBtn.addEventListener("click", function () {
  const diceNumber = Math.trunc(Math.random() * 6) + 1;


  diceImg.src = `dice-${diceNumber}.png`;
  diceImg.classList.remove("hidden");
  if (diceNumber !== 1) {
  
    currentScore += diceNumber;
    document.querySelector(`.current-score-${activePlayer}`).textContent =
      currentScore;
  } else {
    currentScore = 0;
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1.classList.toggle("active");
    player0.classList.toggle("active");
  }
});




// hold
document.querySelector(".btn-hold").addEventListener("click", function () {

  let scoreTotal = Number(
    document.querySelector(`.score-${activePlayer}`).textContent
  );

  scoreTotal += currentScore;

  document.querySelector(`.score-${activePlayer}`).textContent = scoreTotal;

  if (scoreTotal >= 100) {
    document.querySelector("main").style.backgroundColor = "green";
    prompt("you winn!! 🥇 do you want to play another round!!")
   
    
  } else {

    currentScore = 0;

    document.querySelector(
      `.current-score-${activePlayer}`
    ).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    player1.classList.toggle("active");
    player0.classList.toggle("active");
  }
});
//new game


document.querySelector(".btn-new-game").addEventListener("click", function () {
  document.querySelector("main").style.backgroundColor = "rgb(255, 255, 255, 0.3)"
  score0.textContent = 0;
score1.textContent = 0;
 current1.textContent=0
  current0.textContent=0
})
