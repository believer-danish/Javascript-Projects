const song = document.querySelector("audio");
const playBtn = document.querySelector("#play");
const progress = document.querySelector("#progress");
const forward = document.querySelector(".fa-forward");
const backward = document.querySelector(".fa-backward");
let id;


function fun() {
  id = setInterval(() => {
    progress.value = song.currentTime;
  }, 10);
}

song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
});

progress.addEventListener("change", () => {
  song.play();
  song.currentTime = progress.value;
  fun();
  playBtn.classList.remove("fa-play");
  playBtn.classList.add("fa-pause");
});

playBtn.addEventListener("click", () => {
  playBtn.classList.toggle("fa-play");
  playBtn.classList.toggle("fa-pause");
  if (playBtn.classList.contains("fa-pause")) {
    song.play();
    fun();
  } else {
    song.pause();
    clearInterval(id);
  }
});

forward.addEventListener('click', () => {
    progress.value = parseInt(progress.value) + 10;
     song.currentTime = progress.value;
})

backward.onclick = () => {
    progress.value = parseInt(progress.value) - 10;
     song.currentTime = progress.value;
}