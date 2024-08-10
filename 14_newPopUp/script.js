const main = document.querySelector("main");
const newsLetter = document.querySelector(".news-container h1");
const popUp = document.querySelector(".pop-up");
const span = document.querySelector("span");

span.addEventListener("click", () => {
  popUp.classList.remove("active");
  main.classList.remove("container");
});

main.addEventListener("click", (e) => {
  popUp.classList.remove("active");
  main.classList.remove("container");
  console.log(e.target);
});

newsLetter.addEventListener("click", (e) => {
  e.stopPropagation();
  popUp.classList.add("active");
  main.classList.add("container");
});

popUp.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log(e.target);
});
