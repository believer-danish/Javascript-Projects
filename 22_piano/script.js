const piano = document.querySelector(".piano");
const audio = document.querySelector("audio");

const whiteKeys = ["a", "s", "d", "f", "g", "h", "j"];
const blackKeys = ["z", "x", "c", "v", "b"];
const white = document.querySelectorAll(".white");
const black = document.querySelectorAll(".black");

piano.addEventListener("mousedown", (e) => {
  if (e.target != e.currentTarget) {
    audio.src = `notes/${e.target.getAttribute("note")}.mp3`;
    audio.currentTime = 0;
    audio.play();

    e.target.classList.add("active");
  }
});

piano.addEventListener("mouseup", (e) => {
  e.target.classList.remove("active");
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) {
    console.log("hi");
    // return;
  }
  const key = e.key;
  const whiteIndex = whiteKeys.indexOf(key);
  const blackIndex = blackKeys.indexOf(key);

  if (whiteIndex > -1) {
    audio.src = `notes/${white[whiteIndex].getAttribute("note")}.mp3`;
    white[whiteIndex].classList.add("active");
    audio.play();
  }
  if (blackIndex > -1) {
    audio.src = `notes/${black[blackIndex].getAttribute("note")}.mp3`;
    audio.play();
    black[blackIndex].classList.add("active");
  }
});

document.addEventListener("keyup", (e) => {
  const key = e.key;
  const whiteIndex = whiteKeys.indexOf(key);
  const blackIndex = blackKeys.indexOf(key);
  if (whiteIndex > -1) {
    white[whiteIndex].classList.remove("active");
  }
  if (blackIndex > -1) {
    black[blackIndex].classList.remove("active");
  }
});
