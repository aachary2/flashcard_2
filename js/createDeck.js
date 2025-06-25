const box_container = document.querySelector(".container");
const containers = document.querySelector('.containers');
const buttons = document.querySelector("#check");
const q = document.querySelector('.questions');
const ans = document.querySelector('.answers');
const nextButton = document.querySelector('#next');
const previousButton = document.querySelector('#prev');
const view = document.querySelector('.btns');
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");
const errorMessage = document.getElementById("error");

let data = localStorage.getItem("card");
if (data) {
  data = JSON.parse(data);
} else {
  data = [];
}

let count = 0;
let index = 0;

function viewCard() {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (!question || !answer) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter both a question and an answer.";
    return;
  }

  errorMessage.style.display = "none";

  let flashQuestions = {
    question: question,
    answer: answer,
    index: index,
  };

  data.push(flashQuestions);
  localStorage.setItem("card", JSON.stringify(data));

  createCard(flashQuestions);

  questionInput.value = "";
  answerInput.value = "";
}

function create() {
  box_container.style.display = "flex";
  view.style.display = "flex";
}

function createCard(notecard) {
  box_container.style.display = "none";
  containers.style.display = "block";
  nextButton.style.display = "block";
  previousButton.style.display = "block";
  buttons.style.display = "block";
  view.style.display = "none";

  const flashcard = document.createElement("div");
  flashcard.classList.add("flashcard");

  flashcard.innerHTML = `
    <div class="card-front"><h3>${notecard.question}</h3></div>
    <div class="hidden-div" id="firstDiv"><h3>${notecard.answer}</h3></div>
    <div class="card-number">Card Number: ${data.length}</div>
  `;

  containers.prepend(flashcard);

  const first = flashcard.querySelector('#firstDiv');
  first.style.display = 'none';

  const previousCard = flashcard.nextElementSibling;
  if (previousCard) {
    previousCard.style.display = 'none';
  }

  buttons.addEventListener("click", () => {
    first.style.display = (first.style.display === "none") ? "block" : "none";
  });
}

function previous() {
  const curr = containers.querySelector(`.flashcard:not([style*="display: none"])`);
  if (curr) {
    curr.style.display = 'none';
    const previouscard = curr.previousElementSibling;
    if (previouscard) {
      previouscard.style.display = 'block';
    }
  }
}
previousButton.addEventListener('click', previous);

function viewNextCard() {
  const curr = containers.querySelector(`.flashcard:not([style*="display: none"])`);
  if (curr) {
    curr.style.display = 'none';
    const nextCard = curr.nextElementSibling;
    if (nextCard) {
      nextCard.style.display = 'block';
    }
  }
}
nextButton.addEventListener("click", viewNextCard);
