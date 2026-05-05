let quiz;
let questionsData = [];

class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentIndex = 0;
    this.score = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  nextQuestion() {
    this.currentIndex++;
  }
}

class MultipleChoiceQuiz extends Quiz {
  checkAnswer(selected) {
    if (selected === this.getCurrentQuestion().answer) {
      this.score++;
      return true;
    }
    return false;
  }
}

const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const scoreEl = document.getElementById("score");

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const resultScreen = document.getElementById("result-screen");

async function loadQuestions() {
  let response = await fetch("questions.json");
  questionsData = await response.json();
}

startBtn.addEventListener("click", async () => {
  await loadQuestions();

  quiz = new MultipleChoiceQuiz(questionsData);

  startScreen.style.display = "none";
  quizContainer.style.display = "block";

  showQuestion();
});

function showQuestion() {
  answersEl.innerHTML = "";

  let current = quiz.getCurrentQuestion();
  questionEl.textContent = current.question;

  for (let i = 0; i < current.options.length; i++) {
    let btn = document.createElement("button"); // DOM creation
    btn.textContent = current.options[i];

    btn.addEventListener("click", () => {
      let correct = quiz.checkAnswer(current.options[i]);

      if (correct) {
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
      }
    });

    answersEl.appendChild(btn);
  }
}

nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();

  if (quiz.currentIndex < quiz.questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  resultScreen.style.display = "block";

  scoreEl.textContent = `You scored ${quiz.score} out of ${quiz.questions.length}`;
  localStorage.setItem("lastScore", JSON.stringify(quiz.score));
}

restartBtn.addEventListener("click", () => {
  location.reload();
});