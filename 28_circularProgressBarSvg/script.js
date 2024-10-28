const span = document.querySelector("span");
const form = document.querySelector("form");
const input = document.querySelector("input");
const circle = document.querySelector("circle");
let id;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val = input.value / 100;
  circle.style.setProperty("--percent", val);
  let count = 0;

  id = setInterval(() => {
    if (count < input.value) count += 1;
    if (count > input.value) count -= 1;
    if (count === input.value) {
      clearInterval(id);
    }

    span.innerText = `${count}%`;
  }, 20);
});
