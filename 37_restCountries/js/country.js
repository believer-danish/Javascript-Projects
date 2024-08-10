import { data } from "./data.js";
const contName = new URLSearchParams(location.search).get("name");
const backBtn = document.querySelector(".back-btn");
const flagImg = document.querySelector(".flag img");
const contDetails = document.querySelector(".cont-details");
const logo = document.querySelector(".logo");

data.forEach((element) => {
  if (element.name.common === contName) {
    fun(element);
  }
});

function fun(element) {
  flagImg.src = element.flags.svg;

  let curr = "";
  let lang = "";
  let native;
  for (let i in element.name.nativeName) {
    native = element.name.nativeName[i];
    break;
  }

  for (let i in element.currencies) curr += `${element.currencies[i].name},`;
  for (let i in element.languages) lang += `${element.languages[i]},`;
  const sectionEle = document.createElement("section");
  sectionEle.innerHTML = `<div class="left">
              <h2 class="country-name">${element.name.common}</h2>
              <p><span>Native Name</span> : ${native.common}
              </p>
              <p><span>Population</span> : ${element.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><span>Region</span> : ${element.region}</p>
              <p><span>Sub Region</span> : ${element.subregion}</p>
              <p><span>Capital</span> : ${element.capital}</p>
            </div>

            <div class="right">
              <p><span>Top Level Domain</span> : ${element.tld}</p>
              <p><span>Currencies</span> : ${curr} </p>
              <p><span>Languages</span> : ${lang}</p>
            </div>`;
  contDetails.append(sectionEle);

  const newDivEle = document.createElement("div");
  newDivEle.classList.add("border-countries");
  console.log(newDivEle);
  newDivEle.innerHTML = ` <h3>Border Countries:</h3>`;

  const bcountry = document.createElement("div");
  bcountry.classList.add("bcountry");

  if (element.borders) {
    element.borders.forEach((ele) => {
      const spanEle = document.createElement("span");
      spanEle.innerText = ele;
      bcountry.appendChild(spanEle);
      console.log(ele);
    });
  }

  newDivEle.append(bcountry);
  contDetails.append(newDivEle);
}

backBtn.addEventListener("click", () => {
  window.history.back();
});

logo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
