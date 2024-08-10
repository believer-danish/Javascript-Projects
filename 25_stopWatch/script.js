const playPause = document.querySelector(".play");
const play = document.querySelector(".play i");
let id;
let mil = 0;
let s = 0;
let min = 0;
let hr = 0;

function setT() {
  mil += 1;
  s += Math.floor(mil / 10);
  mil = mil % 10;
  min += Math.floor(s / 60);
  s = s % 60;
  hr += Math.floor(min / 60);
  min = min % 60;

  milli.innerText = "0" + mil;

  s < 10 ? (second.innerText = "0" + s) : (second.innerText = s);
  min < 10 ? (minute.innerText = "0" + min) : (minute.innerText = min);
  hr < 10 ? (hour.innerText = "0" + hr) : (hour.innerText = hr);
}

playPause.addEventListener("click", () => {
  play.classList.toggle("fa-pause");
  play.classList.toggle("fa-play");

  if (play.classList.contains("fa-play")) {
    clearInterval(id);
  } else {
    console.log("ho");
    id = setInterval(setT, 100);
  }
});

function reset() {
  play.classList.remove("fa-pause");
  play.classList.add("fa-play");
  clearInterval(id);
  mil = s = min = hr = 0;
    milli.innerText = second.innerText = minute.innerText = hour.innerText = "00";
    text.innerText = '';
}

function snap() {
  text.innerText =
    hour.innerText +
    "::" +
    minute.innerText +
    "::" +
    second.innerText +
    "::" +
    milli.innerText;
}
