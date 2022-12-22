const startBtn = document.querySelector('button');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

let lastHole;
let timeUp = false;
let score = 0;
let timer;
let timeLeft = 9; // seconds

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;

  startBtn.innerText = `00:10`;

  setInterval(() => {
    if (timeLeft === 0) {
      clearTimeout();
      startBtn.innerText = 'Game Over';
      startBtn.disabled = true;
    } else {
      startBtn.innerText = `00:0${timeLeft}`;
      timeLeft--;
    }
  }, 1000);

  peep();
  setTimeout(() => (timeUp = true), 10000);
}

function bonk(e) {
  if (!e.isTrusted) return;

  score++;

  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach(mole => mole.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
