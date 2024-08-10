const allCircle = document.querySelectorAll(".circle");
const allInput = document.querySelectorAll("input");
const warning = document.querySelector(".warning");

let inputObject = JSON.parse(localStorage.getItem("inputObject")) || {
  first: {
    name: "",
  },
  second: {
    name: "",
  },
  third: {
    name: "",
  },
};

allCircle.forEach((e) => {
  e.addEventListener("click", () => {
    const isFilled = [...allInput].every((input) => {
      return input.value;
    });
    if (isFilled || e.parentElement.classList.length == 2) {
      e.parentElement.classList.toggle("completed");
      let count = 0;

      allCircle.forEach((circle) => {
        if (circle.parentElement.classList.length == 2) count++;
      });
      let a = document.querySelector(".green");
      a.innerText = `${count}/3 Completed`;

      let z = 33.33 * count;
      a.style.width = `${z}%`;

      if (count == 0) {
        a.innerText = "";
      }
    } else {
      warning.classList.add("show-error");
    }
  });
});

allInput.forEach((input) => {
  input.addEventListener("click", () => {
    warning.classList.remove("show-error");
  });
  console.log(inputObject[input.id.name]);
  input.value = inputObject[input.id].name || "";

  input.addEventListener("input", (e) => {
    inputObject[e.target.id].name = e.target.value;

    localStorage.setItem("inputObject", JSON.stringify(inputObject));
  });
});
