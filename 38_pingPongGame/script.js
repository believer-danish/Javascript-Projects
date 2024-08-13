const table = document.querySelector(".ping-pong-table");
const ball = document.querySelector(".ball");
const paddle = document.querySelector(".paddle");
const button = document.querySelector("buttton");

let ballX = 50;
let ballY = Math.floor(Math.random() * 100);
let dx = 2;
let dy = 2;
let id;
let py = 10;
let paddleY = 0;
let prev = 0;
let flag = true;

document.querySelector(".start").addEventListener("click", () => {
  ballX = 50;
  ballY = Math.floor(Math.random() * (table.clientHeight - ball.offsetHeight));
  py = 10;
  dx = dy = 2;
  flag = true;
  clearInterval(id);
  gameEngine();
});

document.getElementById("up").addEventListener("click", () => {
  if (flag && paddleY > 0) paddleY += 10 * -1;
  paddle.style.top = `${paddleY}px`;
});

document.getElementById("down").addEventListener("click", (e) => {
  console.log('down');
  if (flag && paddleY < table.clientHeight - paddle.clientHeight) paddleY += 10;
   paddle.style.top = `${paddleY}px`;
});


document.addEventListener("pointermove", (e) => {
  if (e.clientY > prev && paddleY < table.clientHeight - paddle.clientHeight) {
    paddleY += py;
  } else if (e.clientY < prev && paddleY > 0) {
    paddleY += py * -1;
  }
  prev = e.clientY;
  paddle.style.top = `${paddleY}px`;
});

document.addEventListener("keydown", (e) => {
  e.preventDefault(); //For preventing scrolling

  if (e.key === "ArrowUp" && paddleY > 0) {
    paddleY += py * -1;
  } else if (
    e.key === "ArrowDown" &&
    paddleY < table.clientHeight - paddle.clientHeight
  ) {
    paddleY += py;
    if (paddleY + paddle.offsetHeight > table.clientHeight)
      paddleY = table.clientHeight - paddle.offsetHeight;
  }
  paddle.style.top = `${paddleY}px`;
});

const gameEngine = () => {
  id = setInterval(() => {
    ballX += dx;
    ballY += dy;
    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;
    if (ballX <= 0) {
      clearInterval(id);
      py = 0;
      flag = false;
    }
    if (ballX >= table.clientWidth - ball.offsetWidth) dx *= -1;
    if (ballY >= table.clientHeight - ball.offsetHeight || ballY <= 0) dy *= -1;

    if (
      ballX <= paddle.offsetLeft + paddle.offsetWidth &&
      ballY <= paddle.offsetTop + paddle.offsetHeight &&
      ballY + ball.offsetHeight >= paddle.offsetTop &&
      dx < 0
    )
      dx *= -1;
  }, 1);
};
document.addEventListener("DOMContentLoaded", gameEngine);
