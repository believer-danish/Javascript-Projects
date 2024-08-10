const choicesDiv = document.querySelector(".choices");
const result = document.querySelector(".result h1");
const userScoreEle = document.getElementById("user-score");
const compScoreEle = document.getElementById("comp-score");
let userScore = 0;
let compScore = 0

function setMessage(user, comp, status) {
    switch (status) {
        case "win":
            result.innerText = `${user} beats ${comp}. You Win!!`
            userScore++;
            userScoreEle.innerText = userScore;
            break;
        case "lost":
            result.innerText = `${comp} beats ${user}. You Lost!!`
             compScore++;
             compScoreEle.innerText = compScore;
            break;
        case "draw":
            result.innerText = `${user} cancelled ${comp}. Draw!!`
            break;
    }
}

function getCompChoice() {
  const choiceArr = ["rock", "paper", "scissor"];

  const indx = Math.floor(Math.random() * 3);
  return choiceArr[indx];
}

function game(userChoice) {
  const compChoice = getCompChoice();
  console.log(compChoice);

  switch (userChoice + compChoice) {
    case "rockrock":
    case "paperpaper":
    case "scissorscissor":
      setMessage(userChoice, compChoice, "draw");
      break;

    case "rockscissor":
    case "paperrock":
    case "scissorpaper":
      setMessage(userChoice, compChoice, "win");
      break;

    case "rockpaper":
    case "paperscissor":
    case "scissorrock":
         setMessage(userChoice, compChoice, "lost");
      break;
  }
}

choicesDiv.addEventListener("click", (e) => {
  if (e.currentTarget != e.target) {
    if (e.target.classList.contains("rock")) {
      game("rock");
    }
    if (e.target.classList.contains("paper")) {
      game("paper");
    }
    if (e.target.classList.contains("scissor")) {
      game("scissor");
    }
  }
});
