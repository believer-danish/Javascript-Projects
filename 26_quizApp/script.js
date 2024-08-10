const quizData = [
  {
    question: "What does HTML stands for?",
    answer: [
      "Hypertext Machine language.",

      "Hypertext and links markup language.",

      "Hypertext Markup Language.",

      "Hightext machine language.",
    ],
    correct: 2,
  },

  {
    question: "How is document type initialized in HTML5?",
    answer: [
      "</DOCTYPE HTML>",

      "</DOCTYPE>",

      "<!DOCTYPE HTML>",

      "</DOCTYPE html>.",
    ],
    correct: 2,
  },

  {
    question:
      "Which of the following HTML element is used for creating an unordered list?",
    answer: ["<ui>", "<i>", "<li>", "<em>."],
    correct: 0,
  },
  {
    question:
      "Which of the following is the correct way of creating an hyperlink in HTML?",
    answer: [
      "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
      "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
      "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
      "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>",
    ],
    correct: 2,
  },
  {
    question: "What is the purpose of using div tags in HTML?",
    answer: [
      "For creating Different styles.",
      "For creating different sections.",
      "For adding headings.",
      "For adding titles.",
    ],
    correct: 1,
  },
];

const questionElement = document.querySelector(".question");
const allLi = document.querySelectorAll("li");
const nxtBtn = document.querySelector(".nxt-btn");
const quizSection = document.querySelector(".quiz-section");
const heroSection = document.querySelector(".hero-section");
const resultSection = document.querySelector(".result-section");
const timerBtn = document.querySelector(".timer");
const rightAns = document.querySelector(".right-ans");
const wrongAns = document.querySelector(".wrong-ans");
let currentQuestion = 0;
let score = 0;
let flag = true;
const limit = 5;
let selected = false;
let id;
let count = 0;

if (localStorage.getItem("highScore"))
  highScore.innerText = `Highest Score : ${localStorage.getItem(
    "highScore"
  )}/25`;

function timer() {
  count += 1;

  if (count < 10) timerBtn.innerText = `0${count}`;
  else timerBtn.innerText = count;

  if (count === 15) {
    timerBtn.classList.add("dulll");
    main.classList.add("dull");
  }
  if (count === 25) {
    timerBtn.classList.add("redd");
    main.classList.add("red");
  }

  if (count === 30) {
    clearInterval(id);
    currentQuestion++;
    count = 0;
    timerBtn.classList.remove("redd", "dulll");
    main.classList.remove("red", "dull");
    quizLoad();
  }
}

function quizLoad() {
  if (currentQuestion < limit) {
    const { question, answer } = quizData[currentQuestion];
    questionElement.innerText = question;

    answer.forEach((e, i) => {
      // window[`option${i + 1}`].innerText = e;
      document.querySelector(`#option${i + 1}`).innerText = e;
    });
    id = setInterval(timer, 1000);
  }
}

allLi.forEach((e, i) => {
  e.addEventListener("click", () => {
    if (flag) {
      flag = false;
      selected = true;
      const correct = quizData[currentQuestion].correct;
      clearInterval(id);
      count = 0;
      if (correct === i) {
        score += 5;
        correctAudio.play();
        currentScore.innerText = score;
        e.classList.add("correct");

        e.querySelector(".right img").src = "correct.png";
      } else {
        wrongAudio.play();
        e.classList.add("wrong");
        allLi[correct].classList.add("correct");
        e.querySelector(".right .message").innerText = "wrong";
        e.querySelector(".right img").src = "wrong.png";
      }
    }
  });
});

function showResult() {
  const rpercent = (score / 25) * 100;
  const wpercent = ((25 - score) / 25) * 100;
  greenText.innerText = `${rpercent}%`;
  redText.innerText = `${wpercent}%`;
  rightAns.style.width = `${rpercent}%`;
  wrongAns.style.width = `${wpercent}%`;
  resultMessage.innerText = `${score}/25`;
}

function reset() {
  allLi.forEach((e) => {
    e.classList.remove("correct");
    e.classList.remove("wrong");
    e.querySelector(".right .message").innerText = "";
    e.querySelector(".right img").src = "";
    timerBtn.classList.remove("redd", "dulll");
    main.classList.remove("red", "dull");
  });
}

nxtBtn.addEventListener("click", () => {
  if (selected) {
    currentQuestion += 1;
    flag = true;
    selected = false;
    reset();

    quizLoad();
    document.querySelector(".error-message").style = "transform:scale(0)";
  } else {
    document.querySelector(".error-message").style = "transform:scale(1)";
  }

  if (currentQuestion >= quizData.length) {
    quizSection.classList.add("dead");
    resultSection.classList.remove("dead");
  }
  if (currentQuestion === limit - 1) {
    nxtBtn.innerText = "Submit";
  }
  if (currentQuestion === limit) {
    showResult();
  }
});

volume.addEventListener("click", () => {
  if (volume.src === "http://127.0.0.1:5500/26_quizApp/volumeUp.svg") {
    volume.src = "mute.svg";
    correctAudio.src = "";
    wrongAudio.src = "";
  } else {
    volume.src = "volumeUp.svg";
    correctAudio.src = "correct.mp3";
    wrongAudio.src = "wrong.mp3";
  }
});

function resetPage() {
  location.reload();
  if (localStorage.getItem("highScore") < score)
    localStorage.setItem("highScore", score);
}

function startQuiz() {
  quizLoad();
  heroSection.classList.add("dead");
  quizSection.classList.add("active");
}
