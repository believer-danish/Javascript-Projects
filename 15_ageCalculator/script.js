const arrowBtn = document.querySelector(".arrow");
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const outputDay = document.querySelector(".output-day span");
const outputMonth = document.querySelector(".output-month span");
const outputYear = document.querySelector(".output-year span");
const dayLabel = document.querySelector(".day-label");
const dayError = document.querySelector(".day-error");
const monthLabel = document.querySelector(".month-label");
const monthError = document.querySelector(".month-error");
const yearLabel = document.querySelector(".year-label");
const yearError = document.querySelector(".year-error");
let currDate = new Date();
let userDate;
let x;
arrowBtn.addEventListener("click", () => {
  currDate = new Date();
  let x = false;

  if (
    inputDay.value < 32 &&
    inputMonth.value < 13 &&
    inputYear.value <= currDate.getFullYear()
  ) {
    if (currDate.getDate() >= inputDay.value)
      outputDay.innerText = Math.abs(currDate.getDate() - inputDay.value);
    else {
      outputDay.innerText = 30 - (inputDay.value - currDate.getDate());
      x = true;
    }
    if (x) {
      outputMonth.innerText = currDate.getMonth() - inputMonth.value;
      x = false;
    } else outputMonth.innerText = currDate.getMonth() + 1 - inputMonth.value;

    if (currDate.getMonth() + 1 <= inputMonth.value) {
      x = true;
      outputMonth.innerText = 12 - (inputMonth.value - currDate.getMonth());
    }
    outputYear.innerText = currDate.getFullYear() - inputYear.value;
    if (x) {
      outputYear.innerText = currDate.getFullYear() - inputYear.value - 1;
      x = false;
    }
  }
});

inputDay.addEventListener("input", (e) => {
  if (e.target.value > 31) {
    dayLabel.classList.add("error");
    dayError.classList.add("error");
  } else {
    dayLabel.classList.remove("error");
    dayError.classList.remove("error");
  }
});

inputMonth.addEventListener("input", (e) => {
  if (e.target.value > 12) {
    monthLabel.classList.add("error");
    monthError.classList.add("error");
  } else {
    monthLabel.classList.remove("error");
    monthError.classList.remove("error");
  }
});
inputYear.addEventListener("input", (e) => {
  if (e.target.value > currDate.getFullYear()) {
    yearLabel.classList.add("error");
    yearError.classList.add("error");
  } else {
    yearError.classList.remove("error");
    yearLabel.classList.remove("error");
  }
});
