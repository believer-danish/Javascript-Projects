const contryContainer = document.querySelector(".country-container");
const selectEle = document.querySelector("#filter-region");
const inputEle = document.querySelector(".search-input");
const logo = document.querySelector(".logo");

import { data } from "./data.js";
console.log(data);

function renderCountry(ele) {
  const newELement = document.createElement("a");
  console.log(location.href);
  newELement.href = location.href + `country.html?name=${ele.name.common}`;
  newELement.innerHTML = ` <div class="country">
            <div class="country image">
              <img src="${ele.flags.svg}" alt="" />
            </div>
            <div class="country-details">
              <h2 class="country-name">${ele.name.common}</h2>
              <p><span>Population</span> : ${ele.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><span>Region</span> : ${ele.region}</p>
              <p><span>Capital</span> : ${ele.capital}</p>
              </div>
              </div>`;

  contryContainer.append(newELement);
}

data.forEach((ele) => {
  renderCountry(ele);
});

selectEle.addEventListener("change", () => {
  contryContainer.innerText = "";

  data.forEach((ele) => {
    if (ele.region === selectEle.value) {
      renderCountry(ele);
    }
  });
});

inputEle.addEventListener("input", (e) => {
  contryContainer.innerText = "";
  data.forEach((ele) => {
    if (ele.name.common.toLowerCase().includes(inputEle.value.toLowerCase())) {
      renderCountry(ele);
    }
  });
});

logo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
