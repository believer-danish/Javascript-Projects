const userInput = document.querySelector(".user-input");
const lowerCase = document.querySelector("#lower-case");
const upperCase = document.querySelector("#upper-case");
const trimCase = document.querySelector("#trim-case");
const snakeCase = document.querySelector("#snake-case");
const kebabCase = document.querySelector("#kebab-case");
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");

function convert(str, flag = 0) {
  str = str.toLowerCase();
  const strArray = str.split(" ");

  const finalArray = strArray.map((e, i) => {
    if (i == 0 && flag == 0) return e;
    const x = e.charAt(0).toUpperCase() + e.slice(1); 
    return x;
  });

  return finalArray.join(""); 
}

function transformString() {
  lowerCase.innerText = userInput.value.toLowerCase();
  upperCase.innerText = userInput.value.toUpperCase();
  trimCase.innerText = userInput.value.replaceAll(" ", "");
  snakeCase.innerText = userInput.value.replaceAll(" ", "_");
  kebabCase.innerText = userInput.value.replaceAll(" ", "-");
  camelCase.innerText = convert(userInput.value);
  pascalCase.innerText = convert(userInput.value, 1);
}

userInput.addEventListener("input", transformString);
