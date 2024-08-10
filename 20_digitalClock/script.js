const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const ap = document.querySelector(".ap");

setInterval(() => {
  const myDate = new Date();
  hours.innerText = Math.floor(myDate.getHours() % 12);
  minutes.innerText = myDate.getMinutes();
  if (parseInt(myDate.getSeconds()) < 10)
    seconds.innerText = `0${myDate.getSeconds()}`;
  else seconds.innerText = myDate.getSeconds();

  if (myDate.getHours() > 12) ap.innerText = "PM";
  else ap.innerText = "AM";
}, 1000);
