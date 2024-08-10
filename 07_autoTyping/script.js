const h1Span = document.querySelector("h1 span");

const wordList = ["Developer", "Teacher", "Believer", "Student", "Helper"];
let charIndex = 0;
let wordIndex = 0;
let reverse = false;
let skipInterval = 0;

function fun() {
  if (skipInterval >= 0) {
    skipInterval--;
    return;
  }
  if (!reverse) {
    h1Span.innerText += wordList[wordIndex][charIndex];
    charIndex++;
    skipInterval = 2;
  } else {
    h1Span.innerText = wordList[wordIndex].substring(0, charIndex--);
    
  }
  if (charIndex === wordList[wordIndex].length) {
    charIndex--;
    reverse = true;
    skipInterval = 10;
  }
  if (charIndex == -1 && reverse == true) {
    wordIndex++;
    reverse = false;
    charIndex = 0;
  }
  if (wordIndex === wordList.length) wordIndex = 0;
}

const intervalId = setInterval(fun, 80);
