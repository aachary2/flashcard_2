
let question ={
    "What is the capital of Belgium?": "Brussels",
    "What is the capital of United States?": "Washington DC",
    "What is the capital of Japan?": "Tokyo",
    "What is the capital of England?": "London",
    "What is the capital of the Netherlands?": "Amsterdam",
    "What is the capital of Italy?": "Rome",
    "What is the capital of Poland?": "Warsaw",
    "What is the capital of South Korea?": "Seoul",
    "What is the capital of Ireland?": "Dublin"

}


let data= Object.entries(question);
let count = 0;
const cardNum = document.querySelector('.num');
const q = document.querySelector('.question');
const ans = document.querySelector('.answer');
const checkButton= document.querySelector('#check');
const nextButton= document.querySelector('#next');
const previousButton = document.querySelector('#prev');

function getQuestion(){
    q.innerHTML = `<h3>${data[count][0]}</h3>`;
    ans.innerHTML = `<h3>${data[count][1]}</h3>`
  
}
function nextCard() {
    count++;
    if (count >= data.length) {
      count = 0; 
    }
    getQuestion();
    ans.style.display = 'none';
  }
  function previousCards(){
    count--;
    if (count >= data.length) {
        count = 0; 
      }
      getQuestion();
      ans.style.display = 'none';

  }
  
checkButton.addEventListener('click',function(){
  ans.style.display='block';
});
nextButton.addEventListener('click',nextCard);
previousButton.addEventListener('click',previousCards);
getQuestion();
const colors = document.getElementById('color');
const colorBtn = document.getElementById('colorBtn');
colorBtn.addEventListener('click', () => {
 
  colors.click();
});

colors.addEventListener('input', function() {
  
  const colorChoice = colors.value;
  document.body.style.backgroundColor = colorChoice;
 
});

  