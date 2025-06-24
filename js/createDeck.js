
const box_container = document.querySelector(".container");
const containers=document.querySelector('.containers');
const buttons = document.querySelector("#check");
const q = document.querySelector('.questions');
const ans = document.querySelector('.answers');
const nextButton = document.querySelector('#next');
const previousButton= document.querySelector('#prev');
const view = document.querySelector('.btns');


let data = localStorage.getItem("items")
if(data){
  data= JSON.parse(localStorage.getItem("items"))
  }else{
    data= []
  }

  let count = 0;
 

function viewCard() {

  
  let flashcardInfo = {
    question: question.value,
    answer: answer.value,
   
  };
  
  

    data.push(flashcardInfo);
    localStorage.setItem("items", JSON.stringify(data));
  
   

    createCard(data[data.length-1]);
    console.log(data);
   

   question.value = "";
    answer.value = "";
  

  }

 
  function create(){
    box_container.style.display="flex";
    view.style.display="flex";
  }
  

  
  
 
  function previousCards(){
    count--;
    if (count >= data.length) {
        count = 0; 
      }
     // createCard();
      ans.style.display = 'none';

  }

function createCard(notecard) {
 
    box_container.style.display = "none";
    containers.style.display="block";
    nextButton.style.display="block";
    previousButton.style.display="block";
    buttons.style.display="block";
    view.style.display="none";
    
     
      const flashcard = document.createElement("div");
      flashcard.classList.add("flashcard");
      
      flashcard.innerHTML = ` 
       
          <div class="card-front"><h3>${notecard.question}</h3></div>
          <div class="hidden-div" id="firstDiv"><h3>${notecard.answer}</h3></div>
         
    
        
      `;
    
      containers.prepend(flashcard);
      
 const first = document.getElementById('firstDiv');
   first.style.display='none';
// Hide the first div
//firstDiv.style.display = 'none';
     
  
      const previousCard = flashcard.nextElementSibling;
      if (previousCard) {
          previousCard.style.display = 'none';
      }
     
  
      
  
      notecard.question = "";
      notecard.answer = "";
    
 
  
}

function previous(){
  const currentCard = containers.querySelector(` .flashcard:not([style*="display: none"])`);
  if (currentCard) {
    
    currentCard.style.display = 'none';
    const previouscard = currentCard.previousElementSibling;
    if (previouscard) {
      previouscard.style.display = 'block';
    } else {
    
      containers.firstElementChild.style.display = 'block';
    }
  }

}
previousButton.addEventListener('click',previous);

function showNextCard() {
  const currentCard = containers.querySelector(` .flashcard:not([style*="display: none"])`);
  if (currentCard) {
    console.log("world");
    currentCard.style.display = 'none';
    const nextCard = currentCard.nextElementSibling;
    if (nextCard) {
      nextCard.style.display = 'block';
    } else {
     
      containers.firstElementChild.style.display = 'block';
    }
  }
}
  
     buttons.addEventListener("click", () => {
      
    const first = document.getElementById('firstDiv');
  

      if(first.style.display === "none"){
        first.style.display = "block"
        }else{
            first.style.display = "none";
        }
       
         
        
     });



nextButton.addEventListener("click", showNextCard);




