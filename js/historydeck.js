let question ={
    "Who was the first president of USA?": "George Washington",
    "When was the Cold war": "1947-1991",
    "Who wrote the Declaration of Independence": "Thomas Jefferson",
    "Who was the second president of USA": "John Adams"


}
let data= Object.entries(question);
let count = 0;
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
  
  const colorChoices = colors.value;
  document.body.style.backgroundColor = colorChoices;
 
});


