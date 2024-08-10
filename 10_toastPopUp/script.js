const durationPercent = document.querySelector(".duration-percent");
const durationRange = document.querySelector("#duration");
const hPosition = document.querySelector("#h-position");
const vPosition = document.querySelector("#v-position");
const btn = document.querySelector("button");
const messageContainer = document.querySelector(".message-container");
const userInput = document.querySelector('input[type="text"]');
const popUpType = document.querySelector("#popup-type");

durationRange.addEventListener("input", () => {
  durationPercent.innerText = `${durationRange.value}s`;
});

function showToast() {
  if (hPosition.value === "right") {
    messageContainer.classList.add("right");
  } else {
    messageContainer.classList.remove("right", "from-right");
  }

  if (vPosition.value === "bottom") messageContainer.classList.add("bottom");
  else messageContainer.classList.remove("bottom");

  const newMessage = document.createElement("div");
  newMessage.classList.add("message", popUpType.value);
  newMessage.innerText = userInput.value;
  const span = document.createElement("span");
  span.innerText = "✕";
  newMessage.append(span);
  messageContainer.append(newMessage);

  if (hPosition.value === "right") {
      newMessage.classList.add("from-right");
      newMessage.classList.remove("from-left");
  } else {
    newMessage.classList.add("from-left");
    newMessage.classList.remove("from-right");
  }

  function transform() {
    console.log(hPosition.value);
      if (hPosition.value === "right") {
         newMessage.classList.remove("from-right");
      newMessage.classList.add("to-right");
    } else {
      newMessage.classList.remove("from-left");
      newMessage.classList.add("to-left");
    }
    setTimeout(() => {
      newMessage.remove();
    }, 100);
  }

  span.addEventListener("click", () => {
    transform();
  });

  setTimeout(() => {
    transform();
  }, 1000 * durationRange.value);
}

btn.addEventListener("click", showToast);
