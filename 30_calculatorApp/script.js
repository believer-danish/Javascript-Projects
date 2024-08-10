const theme = document.querySelector(".themes");
const themeBall = document.querySelector(".themes .ball");
const keyContainer = document.querySelector(".key-container");
const resetEqual = document.querySelector(".reset-equal");
const userInput = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");
const screen = document.querySelector(".screen");
const header = document.querySelector("header");
const ball = document.querySelector(".ball");
const [one, two, three] = document.querySelectorAll(".one, .two, .three");
let ans;

function submit(userExp) {
  let flag = 1;
  try {
    ans = eval(userExp);
  } catch (err) {
    errorMessage.innerText = "invalid";
    errorMessage.style.opacity = 1;
    setTimeout(() => {
       errorMessage.style.opacity = 0;
    }, 2000);
    userInput.value = "";
    flag = 0;
  }

  if (flag) {
    flag = 1;
    userInput.value = ans;
  }
}

theme.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) {
    if (e.target.classList.contains("one"))
      themeBall.classList.remove("ball-half", "ball-full");
    if (e.target.classList.contains("two"))
      themeBall.classList.add("ball-half");

    if (e.target.classList.contains("three")) {
      themeBall.classList.add("ball-full");
      themeBall.classList.remove("ball-half");
    }
  }
});

keyContainer.addEventListener("click", (e) => {
  if (e.target != e.currentTarget && e.target != resetEqual) {
    {
      const val = e.target.dataset.value;
      if (val === "del") {
        userInput.value = userInput.value.substring(
          0,
          userInput.value.length - 1
        );
      } else if (val === "reset") {
        userInput.value = "";
      } else if (val === "=") {
        submit(userInput.value);
      } else {
        userInput.value += e.target.dataset.value;
      }
      userInput.focus();
    }
  }
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    submit(userInput.value);
  }
  if (e.key == "Delete") {
    userInput.value = userInput.value.substring(0, userInput.value.length - 1);
  }
});

one.addEventListener("click", () => {
  ball.style.setProperty("background", "coral");
  document.body.classList.remove("two-mb");
  screen.classList.remove("two-screen");
  keyContainer.classList.remove("two-keypad");
  header.classList.remove("two-header");
  userInput.classList.remove("two-header");
  document.body.classList.remove("three-mb");
  screen.classList.remove("three-screen");
  keyContainer.classList.remove("three-keypad");
  header.classList.remove("three-header");
  userInput.classList.remove("three-header");
});
two.addEventListener("click", () => {
  ball.style.setProperty("background", "orange");
  document.body.classList.add("two-mb");
  screen.classList.add("two-screen");
  keyContainer.classList.add("two-keypad");
  header.classList.add("two-header");
  userInput.classList.add("two-header");

  document.body.classList.remove("three-mb");
  screen.classList.remove("three-screen");
  keyContainer.classList.remove("three-keypad");
  header.classList.remove("three-header");
  userInput.classList.remove("three-header");
});
three.addEventListener("click", () => {
  ball.style.setProperty("background", "cyan");
  document.body.classList.add("three-mb");
  screen.classList.add("three-screen");
  keyContainer.classList.add("three-keypad");
  header.classList.add("three-header");
  userInput.classList.add("three-header");
});
