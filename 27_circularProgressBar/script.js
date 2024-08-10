const testing = document.querySelector(".testing");
const progressBar = document.querySelector(".progressbar");
let progressValue = 0;
let x = 0;
progressBar.style.setProperty("color", 'red');



testing.addEventListener("click", (e) => {
  if (e.target.closest("h3")) {
    progressValue = e.target.dataset.progress;

    let id = setInterval(() => {
      progressBar.setAttribute("value-now", x);
      progressBar.style.setProperty("--progress", x + "%");
      
      x = x + 1;
      if (x > progressValue) {
        x = 0;
        clearInterval(id);
      }
    }, 20);
  }
});
