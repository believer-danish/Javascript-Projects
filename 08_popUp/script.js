const btn = document.querySelector("button");
const content = document.querySelector(".content");
const container = document.querySelector(".popup-container");
const span = document.querySelector("span");

function openPop(e) {
  if (e.target !== e.currentTarget) return;
  container.classList.toggle("open-container");
  content.classList.toggle("open-content");
}

btn.addEventListener("click", openPop);
span.addEventListener("click", openPop);
container.addEventListener("click", openPop);
