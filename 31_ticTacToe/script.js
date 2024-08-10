const gameOverAudio = new Audio("gameover.mp3");
const tingAudio = new Audio("ting.mp3");
const [startGameBtn, onePlayerBtn, twoPlayerBtn] = document.querySelectorAll(
  ".start-game,.one-player,.two-player"
);
const ticTacToe = document.querySelector(".tic-tac-toe-app");
const gridContainer = document.querySelector(".grid-container");
const allBox = document.querySelectorAll(".box");
const result = document.querySelector(".result");
const line = document.querySelector(".line");
const xoBtn = document.querySelector(".x-o");

let turn = "X";
let comp = "";
let user = "";
let gameOver = false;
let count = 0;
const winCon = [
  [0, 1, 2, 0, 17, 0], // [gridpos, gridpos ,gridpos,linepos,linepos,linepos]
  [3, 4, 5, 0, 50, 0],
  [6, 7, 8, 0, 80, 0],
  [0, 3, 6, -31, 49, 90],
  [1, 4, 7, 0, 49, 90],
  [2, 5, 8, 31, 49, 90],
  [0, 4, 8, 0, 49, 51],
  [2, 4, 6, 0, 49, -51],
];

function changeTurn() {
  turn = turn === "X" ? "O" : "X";
  tingAudio.play();
  result.innerText = `${turn}'s Turn`;
}

function startGame() {
  startGameBtn.style.display = "none";
  ticTacToe.style.display = "block";
}

function onePlay() {
  xoBtn.classList.toggle("flex");
}

function twoPlay() {
  startGame();
}

function checkDraw() {
  if (count >= 9 && !gameOver) result.innerText = "DRAW";
}

function compPlay() {
  let flag = false;
  winCon.forEach((e, i) => {
    if (!flag) {
      let cnt = 0;

      if (allBox[e[0]].innerText === comp) cnt++;
      if (allBox[e[1]].innerText === comp) cnt++;
      if (allBox[e[2]].innerText === comp) cnt++;

      if (cnt === 2) {
        if (allBox[e[0]].innerText === "") allBox[e[0]].innerText = comp;
        if (allBox[e[1]].innerText === "") allBox[e[1]].innerText = comp;
        if (allBox[e[2]].innerText === "") allBox[e[2]].innerText = comp;
        flag = true;
      }
      cnt = 0;

      if (allBox[e[0]].innerText === user) cnt++;
      if (allBox[e[1]].innerText === user) cnt++;
      if (allBox[e[2]].innerText === user) cnt++;
      if (
        allBox[e[0]].innerText === comp ||
        allBox[e[1]].innerText === comp ||
        allBox[e[2]].innerText === comp
      )
        cnt--;
      if (cnt === 2) {
        if (allBox[e[0]].innerText === "") allBox[e[0]].innerText = comp;
        if (allBox[e[1]].innerText === "") allBox[e[1]].innerText = comp;
        if (allBox[e[2]].innerText === "") allBox[e[2]].innerText = comp;
        flag = true;
      }
    }
  });
  if (flag) {
    count++;
    changeTurn();
    checkWin();
    checkDraw();
    return;
  }

  for (let i = 0; i < 8; i++) {
    if (allBox[i].innerText === "") {
      allBox[i].innerText = comp;
      break;
    }
  }
  count++;
  changeTurn();
  checkWin();
  checkDraw();
}

function checkWin() {
  winCon.forEach((e, i) => {
    if (
      allBox[e[0]].innerText != "" &&
      allBox[e[0]].innerText === allBox[e[1]].innerText &&
      allBox[e[0]].innerText === allBox[e[2]].innerText
    ) {
      gameOver = true;
      result.innerText = `${allBox[e[0]].innerText}  WINS.`;
      excitedGif.style.width = "100%";
      line.style.setProperty("width", `100%`);
      line.style.setProperty("left", `${e[3]}%`);
      line.style.setProperty("top", `${e[4]}%`);
      line.style.setProperty("rotate", `${e[5]}deg`);
    }
  });
}

function mark(e) {
  if (e.target != e.currentTarget && !gameOver && e.target.innerText === "") {
    e.target.innerText = turn;
    count++;
    changeTurn();
    checkWin();
    checkDraw();

    if (turn === comp) {
      compPlay();
    }
  }
}

onePlayerBtn.addEventListener("click", onePlay);
twoPlayerBtn.addEventListener("click", twoPlay);
gridContainer.addEventListener("click", mark);
reset.addEventListener("click", () => location.reload());

xBtn.addEventListener("click", () => {
  startGame();
  comp = "O";
  user = "X";
});

oBtn.addEventListener("click", () => {
  startGame();
  comp = "X";
  user = "O";
  compPlay();
});
