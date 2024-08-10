const btn = document.querySelector("button");
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digits = "0123456789";
const special = "!@#$%^&*()_-";
const allChar = lower + upper + digits + special;

btn.addEventListener("click", () => {
  let pass = "";

  pass += lower[Math.floor(Math.random() * lower.length)];
  pass += upper[Math.floor(Math.random() * upper.length)];
  pass += digits[Math.floor(Math.random() * digits.length)];
  pass += special[Math.floor(Math.random() * special.length)];

  while (pass.length < 12) {
    pass += allChar[Math.floor(Math.random() * allChar.length)];
  }
  password.value = pass;
});

copyBtn.addEventListener("click", () => {
  password.select();
  document.execCommand("copy");
});
