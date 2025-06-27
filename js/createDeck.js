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

let data = JSON.parse(sessionStorage.getItem("card")) || [];
let currIndex = 0;
let cards = []; 

function viewCard() {
  const question = questionInput.value.trim();
  const answer = answerInput.value.trim();

  if (!question || !answer) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Please enter both a question and an answer.";
    return;
  }

  errorMessage.style.display = "none";

  const flashCard = { question, answer };
  data.push(flashCard);
  sessionStorage.setItem("card", JSON.stringify(data));
  
 
  renderCards();

  questionInput.value = "";
  answerInput.value = "";
}

function create() {
  box_container.style.display = "flex";
  view.style.display = "flex";
}

function renderCards() {
  containers.innerHTML = ""; 
  cards = [];

  data.forEach((cardData, index) => {
    const flashcard = document.createElement("div");
    flashcard.classList.add("flashcard");

    flashcard.innerHTML = `
      <div class="card-front"><h3>${cardData.question}</h3></div>
      <div class="hidden-div" style="display:none;"><h3>${cardData.answer}</h3></div>
      <div class="card-number">Card ${index + 1} of ${data.length}</div>
    `;

    containers.appendChild(flashcard);
    cards.push(flashcard);
    flashcard.style.display = "none"; 
  });

  currIndex = data.length - 1;
  showCard(currIndex);

  box_container.style.display = "none";
  containers.style.display = "block";
  nextButton.style.display = "inline-block";
  previousButton.style.display = "inline-block";
  buttons.style.display = "inline-block";
  view.style.display = "none";
}

function showCard(index) {
  cards.forEach(card => card.style.display = "none");
  if (cards[index]) {
    cards[index].style.display = "block";

    const answerDiv = cards[index].querySelector(".hidden-div");
    answerDiv.style.display = "none";

  
    buttons.onclick = () => {
      answerDiv.style.display = (answerDiv.style.display === "none") ? "block" : "none";
    };
  }
}

function previous() {
  if (currIndex > 0) {
    currIndex--;
    showCard(currIndex);
  }
}
previousButton.addEventListener('click', previous);

function viewNextCard() {
  if (currIndex < data.length - 1) {
    currIndex++;
    showCard(currIndex);
  }
}
nextButton.addEventListener("click", viewNextCard);
