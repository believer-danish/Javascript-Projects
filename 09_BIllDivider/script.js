const billAmountInput = document.querySelector("#bill-amount");
const tipItem = document.querySelectorAll(".tip-item");
const generateBtn = document.querySelector(".generate-bill-btn");
const tipContainer = document.querySelector(".tip-container");
const noOfPeople = document.querySelector("#no-of-people");
const customTip = document.querySelector("#custom-tip");
const tipAmount = document.querySelector(".tip-amount span");
const total = document.querySelector(".total span");
const each = document.querySelector(".each span");
const reset = document.querySelector(".reset-btn");

let tipValue = 0;

billAmountInput.addEventListener("input", () => {
  tipItem.forEach((e) => {
    if (billAmountInput.value) e.classList.add("tip-back");
    else e.classList.remove("tip-back");
  });

  if (billAmountInput.value && noOfPeople.value)
    generateBtn.classList.add("tip-back", "gen-btn-style");
  else generateBtn.classList.remove("tip-back", "gen-btn-style");

  if (billAmountInput.value) {
    noOfPeople.classList.add("gen-btn-style");
    noOfPeople.disabled = customTip.disabled = false;
    customTip.classList.add("gen-btn-style");
  } else {
    noOfPeople.classList.remove("gen-btn-style");
    customTip.classList.remove("gen-btn-style");
    noOfPeople.disabled = customTip.disabled = true;
    noOfPeople.value = null;
    customTip.value = null;
  }
});

tipContainer.addEventListener("click", (e) => {
  if (e.target != e.currentTarget) {
    tipItem.forEach((item) => {
      item.classList.remove("tip-outline");
      if (item == e.target) item.classList.add("tip-outline");
    });
  }
  tipValue = parseInt(e.target.innerText);
});

customTip.addEventListener("input", () => {
  tipValue = customTip.value;
  if (tipValue && billAmountInput.value && noOfPeople.value)
    generateBtn.classList.add("gen-btn-style");
  else generateBtn.classList.remove("gen-btn-style");
  tipItem.forEach((e) => {
    e.classList.remove("tip-outline");
  });
});

noOfPeople.addEventListener("input", () => {
  if (tipValue && billAmountInput.value && noOfPeople.value)
    generateBtn.classList.add("gen-btn-style");
  else generateBtn.classList.remove("gen-btn-style");
});

generateBtn.addEventListener("click", () => {
  tipAmount.innerText = `₹ ${
    billAmountInput.value * (tipValue / 100).toFixed(2)
  }`;
  total.innerText = `₹ ${parseInt(
    billAmountInput.value * (1 + tipValue / 100)
  )}`;
  let x = parseInt(billAmountInput.value * (1 + tipValue / 100));
  each.innerText = `₹  ${Math.ceil(x / noOfPeople.value)}`;
});

reset.addEventListener("click", () => {
  billAmountInput.value = noOfPeople.value = customTip.value = null;
  tipItem.forEach((e) => {
    e.classList.remove("tip-outline");
  });

  total.innerText = each.innerText = tipAmount.innerText = "";
});
