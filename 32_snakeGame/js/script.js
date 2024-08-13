let direction = { x: 1, y: 0 };
foodAudio = new Audio("assets/audio/food.mp3");
gameOverAudio = new Audio("assets/audio/gameover.mp3");
moveAudio = new Audio("assets/audio/move.mp3");
musicAudio = new Audio("assets/audio/music.mp3");

const board = document.querySelector(".board");
const allDiv = document.querySelectorAll(".board div");
const reset = document.querySelector(".reset");
const score = document.querySelector(".score-cnt");

let lastPainted = 0;
let speed = 0.1;
let snakeArr = [
  {
    x: 1 + Math.floor(Math.random() * 20),
    y: 1 + Math.floor(Math.random() * 20),
  },
];
const foodLoc = {
  x: 1 + Math.floor(Math.random() * 20),
  y: 1 + Math.floor(Math.random() * 20),
};

// Game Functions

function changeDirection(e) {
  // musicAudio.play();
  switch (e.key) {
    case "ArrowUp":
      if (direction.y != 1) {
        direction.y = -1;
        direction.x = 0;
      }
      break;
    case "ArrowDown":
      if (direction.y != -1) {
        direction.y = 1;
        direction.x = 0;
      }
      break;
    case "ArrowLeft":
      if (direction.x != 1) {
        direction.x = -1;
        direction.y = 0;
      }
      break;
    case "ArrowRight":
      if (direction.x != -1) {
        direction.x = 1;
        direction.y = 0;
      }
      break;
  }
}

function moveSnake() {
  for (let i = snakeArr.length - 1; i > 0; i--) {
    snakeArr[i].x = snakeArr[i - 1].x;
    snakeArr[i].y = snakeArr[i - 1].y;
  }
  snakeArr[0].x += direction.x;
  snakeArr[0].y += direction.y;

  if (snakeArr[0].x > 20) snakeArr[0].x %= 20;
  else if (snakeArr[0].x < 1) snakeArr[0].x = 20;
  if (snakeArr[0].y > 20) snakeArr[0].y %= 20;
  else if (snakeArr[0].y < 1) snakeArr[0].y = 20;
}

function checkFood() {
  if (snakeArr[0].x === foodLoc.x && snakeArr[0].y === foodLoc.y) {
    foodAudio.play();
    const a = snakeArr[snakeArr.length - 1].x;
    const b = snakeArr[snakeArr.length - 1].y;

    snakeArr.push({ x: -1, y: -1 });
    foodLoc.x = 1 + Math.floor(Math.random() * 20);
    foodLoc.y = 1 + Math.floor(Math.random() * 20);
  }
}
function checkCollison() {
  for (let i = 1; i < snakeArr.length; i++) {
    if (snakeArr[0].x === snakeArr[i].x && snakeArr[0].y === snakeArr[i].y) {
      return true;
    }
  }
}

function gameEngine() {
  //Part 1 : Update the snake
  if (checkCollison()) {
    gameOverAudio.play();
    musicAudio.currentTime = 0;
    musicAudio.pause();

    window.cancelAnimationFrame(id);
    return;
  }
  moveSnake();
  checkFood();

  // Part 2 Display the snake
  board.innerHTML = "";
  score.innerText = snakeArr.length - 1;

  snakeArr.forEach((e, index) => {
    const snakeEle = document.createElement("div");
    snakeEle.style.gridRow = `${e.y} / span 1`;
    snakeEle.style.gridColumn = `${e.x} / span 1`;
    if (index == 0) snakeEle.classList.add("head");
    else snakeEle.classList.add("snake-body");

    board.append(snakeEle);
  });

  //Part 3: Display food

  const foodEle = document.createElement("div");
  foodEle.style.gridRow = `${foodLoc.y} / span 1`;
  foodEle.style.gridColumn = `${foodLoc.x} / span 1`;
  foodEle.classList.add("food");
  board.append(foodEle);
}

function main(ctime) {
  // console.log(ctime);
  id = window.requestAnimationFrame(main);
  const diff = (ctime - lastPainted) / 1000;

  if (diff <= speed) return;

  lastPainted = ctime;
  gameEngine();
}
function resetFun() {
  score.innerText = "0";
  foodLoc.x = 1 + Math.floor(Math.random() * 20);
  foodLoc.y = 1 + Math.floor(Math.random() * 20);
  direction = { x: 1, y: 0 };
  id = window.requestAnimationFrame(main);

  musicAudio.play();

  snakeArr = [
    {
      x: 1 + Math.floor(Math.random() * 20),
      y: 1 + Math.floor(Math.random() * 20),
    },
  ];
}

// Main Logic

// let id = window.requestAnimationFrame(main);
document.addEventListener("keydown", changeDirection);
reset.addEventListener("click", resetFun);

document.querySelector(".music").addEventListener("click", () => {
  if (musicAudio.play) musicAudio.pause();
  else musicAudio.play();
});

document.querySelector(".mbcontrol").addEventListener("click", (e) => {
  if (e.target != e.currentTarget) {
    if (e.target.classList.contains("up")) {
      if (direction.y != 1) {
        direction.y = -1;
        direction.x = 0;
      }
    } else if (e.target.classList.contains("down")) {
      if (direction.y != -1) {
        direction.y = 1;
        direction.x = 0;
      }
    } else if (e.target.classList.contains("left")) {
      if (direction.x != 1) {
        direction.x = -1;
        direction.y = 0;
      }
    } else if (e.target.classList.contains("right")) {
      if (direction.x != -1) {
        direction.x = 1;
        direction.y = 0;
      }
    }
  }
});



