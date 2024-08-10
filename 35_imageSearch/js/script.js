const gridCont = document.querySelector(".grid-container");
const form = document.querySelector("form");
const input = document.querySelector("input");
const loadMore = document.querySelector("#load-more");
let inputData = "";
let page = 0;

async function load(query) {
  page++;
  const url = `https://pixabay.com/api/?key=44108066-de4e0051e9898166ca63d71c5&q=${query}&per_page=10&page=${page} `;
    console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);

  data.hits.forEach((element) => {
    const ele = document.createElement("div");
    ele.innerHTML = `<img src = ${element.largeImageURL}>`;
    ele.classList.add("box");

    gridCont.append(ele);
  });
  return data;
}

form.addEventListener("submit", (e) => {
  page = 0;
  e.preventDefault();
  gridCont.innerHTML = "";
  inputData = input.value;
  const data = load(inputData).then((d) => {
    if (d.total === 0) {
      gridCont.innerHTML = `<h1>Not Found</h1>`;
    }
  });
});

loadMore.addEventListener("click", (e) => {
  load(inputData);
});

load("");
