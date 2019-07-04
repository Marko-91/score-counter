const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
let p1Count = document.getElementById('p1-score');
let p2Count = document.getElementById('p2-score');
let limit = document.getElementById('limit');
const reset = document.getElementById('reset');
const input = document.getElementById('input');


let p1Score = 0;
let p2Score = 0;
let numberLimit = Number(limit.innerHTML);
let gameOver = false;

reset.addEventListener('click', function () {
  p1Score = 0; p1Count.innerText = 0;
  p2Score = 0; p2Count.innerText = 0;
  gameOver = false;
  p1Count.classList.remove(['text-success'], ['text-danger']);
  p2Count.classList.remove(['text-success'], ['text-danger']);

})

p1.addEventListener('click', function () {
  if (!gameOver) {
    p1Score++
    // console.log(p1Score);
    p1Count.innerText = p1Score;
    if (p1Score === numberLimit) {
      gameOver = true;
      p1Count.classList = 'text-success';
      p2Count.classList = 'text-danger';
    }
  }

})

p2.addEventListener('click', function () {
  if (!gameOver) {
    p2Score++
    // console.log(p2Score);
    p2Count.innerText = p2Score;
    if (p2Score === numberLimit) {
      gameOver = true;
      p1Count.classList = 'text-danger';
      p2Count.classList = 'text-success';
    }
  }

})

input.addEventListener('change', function (e) {
  limit.innerHTML = e.target.value;
  numberLimit = Number(e.target.value);
})

