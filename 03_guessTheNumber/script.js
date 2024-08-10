(() => {
  const formElement = document.querySelector("form");
  const inputElement = document.querySelector("#user-number");
  const result = document.querySelector(".result");
  const userGuess = document.querySelector(".user-guess");
  const submitBtn = document.querySelector(".submit-btn");
  const startBtn = document.querySelector(".start-btn");

  const arr = [];
  let randomNumber = Math.floor(Math.random() * 101);

  formElement.addEventListener("submit", (e) => {
    e.preventDefault();

    if (randomNumber == inputElement.value) {
      result.innerText = "You Win Congrats";
      submitBtn.disabled = true;
      startBtn.disabled = false;
    } else if (randomNumber > inputElement.value) result.innerText = "Too Low";
    else result.innerText = "Too High";
    arr.push(inputElement.value);
    userGuess.innerText = "Your Guess: " + arr.join(", ");
    formElement.reset();
  });

  startBtn.addEventListener("click", () => {
    submitBtn.disabled = false;
    startBtn.disabled = true;
    arr.splice(0);
    result.innerText = "";
    userGuess.innerText = "";
    randomNumber = Math.floor(Math.random() * 101);
  });
})();
