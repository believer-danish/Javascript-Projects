const myDate = new Date(2027, 3, 30);
const daysElement = document.querySelector(".days h1");
const hoursElement = document.querySelector(".hours h1");
const minutesElement = document.querySelector(".minutes h1");
const secondsElement = document.querySelector(".seconds h1");

console.log(myDate.toLocaleString());
setInterval(function () {
  const currentDate = new Date().getTime();
  const diff = myDate - currentDate;

  let days = diff / (1000 * 60 * 60 * 24);
  let hours = (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
  let minutes = (hours * 60) % 60;
  let seconds = Math.floor(minutes * 60) % 60;
  days = Math.floor(days);
  minutes = Math.floor(minutes);
  hours = Math.floor(hours);

  daysElement.innerText = days;
  hoursElement.innerText = hours;
  minutesElement.innerText = minutes;
  secondsElement.innerText = seconds;

  
}, 1000);
