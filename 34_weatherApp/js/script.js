const searchBtn = document.querySelector(".search-logo");
const inputBtn = document.querySelector("#search-input");
const tempSpan = document.querySelector(".temperature");
const tempDesc = document.querySelector(".temp-description");
const humidity = document.querySelector(".humidity-value");
const wind = document.querySelector(".wind-value");
const image = document.querySelector(".main-image");

async function checkWeather(city) {
  const api_key = "1e213fa12dee45a0a96124355242705";

  const url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${api_key}`;

  const response = await fetch(`${url}`); // Await the fetch response directly
  const weather_data = await response.json(); // Await JSON conversion within async function
  console.log(weather_data);
  tempSpan.innerText = `${weather_data.current.temp_c}°C`;
  tempDesc.innerText = `${weather_data.current.condition.text}`;
  humidity.innerText = `${weather_data.current.humidity}`;
  wind.innerText = `${weather_data.current.wind_kph}Km/h`;

  switch (weather_data.current.condition.text) {
    case "Mist":
      image.src = `images/mist.png`;
      break;
    case "Clear":
    case "Sunny":
      image.src = `images/clear.png`;
      break;
    case "Rainy":
      image.src = `images/rain.png`;
      break;
    case "Partly cloudy":
    case "Cloudy":
      image.src = `images/cloud.png`;
      break;
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(inputBtn.value);
});

document.addEventListener("keypress", (e) => {
  if (e.key == "Enter") checkWeather(inputBtn.value);
});
