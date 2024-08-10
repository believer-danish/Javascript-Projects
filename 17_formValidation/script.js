const form = document.querySelector(".form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const formControl = document.querySelectorAll(".form-control");

if (localStorage.getItem('flag') == 'true') {
    swal({
        title: "Form Submitted!",
        text: `Welcome ${userName.value.trim()}`,
        icon: "success",
        button: "Aww yiss!",
    });
}

localStorage.setItem('flag', 'false');

    

function setErrorMsg(inputField, msg) {
  const formControl = inputField.parentElement;
  const errorMsg = formControl.querySelector(".error-message");
  errorMsg.innerText = msg;
  formControl.classList.remove("success");
  formControl.classList.add("error");
  errorMsg.classList.add("visible");
  errorMsg.classList.remove("visible-s");
}

function setSuccessMsg(inputField) {
  console.log("s");
  const formControl = inputField.parentElement;
  const errorMsg = formControl.querySelector(".error-message");
  errorMsg.innerText = "valid";
  errorMsg.classList.add("visible", "visible-s");
  formControl.classList.remove("error");
  formControl.classList.add("success");
}

function checkUserName(userNameVal) {
  let flag = false;
  for (let i = 0; i < userNameVal.length; i++)
    if (userNameVal[i] >= "0" && userNameVal[i] <= 9) flag = true;

  if (userNameVal === "") setErrorMsg(userName, "User Name can't be empty");
  else if (userNameVal.length <= 3)
    setErrorMsg(userName, "Minimum 3 character required");
  else if (flag) {
    setErrorMsg(userName, "Number Not allowed");
  } else setSuccessMsg(userName);
}

function checkEmail(emailVal) {
  if (emailVal === "") setErrorMsg(email, "Email cant't be empty");
  else {
    setSuccessMsg(email);
  }
}
function checkPhone(phoneVal) {
  if (phoneVal === "") setErrorMsg(phone, "Can't be empty");
  else if (phoneVal.length != 10)
    setErrorMsg(phone, "Enter valid 10 digit number");
  else setSuccessMsg(phone);
}

function checkPassword(passwordVal) {
  if (passwordVal === "") setErrorMsg(password, "Password Can't be empty");
  else if (passwordVal.length < 6)
    setErrorMsg(
      password,
      "Password length should be greater than 6 characters"
    );
  else setSuccessMsg(password);
}

function confirmPassword(cpasswordVal, passwordVal) {
  if (cpasswordVal === "") setErrorMsg(cpassword, "Can't be empty");
  else if (cpasswordVal != passwordVal)
    setErrorMsg(cpassword, "Password Didn;t match");
  else setSuccessMsg(cpassword);
}

function validate() {
  const userNameVal = userName.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  checkUserName(userNameVal);
  checkEmail(emailVal);
  checkPhone(phoneVal);
  checkPassword(passwordVal);
  confirmPassword(cpasswordVal, passwordVal);
}

form.addEventListener("submit", (event) => {
  validate();

  let res = true;
  formControl.forEach((e) => {
    if (!e.classList.contains("success")) res = false;
  });
  if (res == false) event.preventDefault();
  else {
      localStorage.setItem('flag', 'true');
  }
});
