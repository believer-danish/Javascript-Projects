const userInput = document.querySelector("#user-input");
let prev = 0;
function formatNumber() {
  let x = userInput.value[userInput.value.length - 1];
  if (!Number.isInteger(+x)) {
    userInput.value = userInput.value.substr(0, userInput.value.length - 1);
  }
  if (userInput.value.length === 4 && prev < userInput.value.length)
    userInput.value = `+(${userInput.value.substr(
      0,
      userInput.value.length - 1
    )}) - ${userInput.value[userInput.value.length - 1]}`;

  if (userInput.value.length === 9 && prev >= userInput.value.length) {
    userInput.value = userInput.value.substr(2, 3);
  }

  prev = userInput.value.length;
}

userInput.addEventListener("input", formatNumber);
