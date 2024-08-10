const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const countElement = document.querySelector(".count");
const inputElement = document.querySelector("input");

minusBtn.addEventListener("click", () => {
  countElement.innerText =
    parseInt(countElement.innerText) - parseInt(inputElement.value);
});

plusBtn.addEventListener("click", () => {
  countElement.innerText =
    parseInt(countElement.innerText) + parseInt(inputElement.value);
});

document.querySelector('button[type="reset"]').addEventListener("click", () => {
  countElement.innerText = 0;
  inputElement.value = 1;
});
