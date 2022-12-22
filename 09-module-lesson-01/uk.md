# Модуль 9. Заняття 17. Timers and date. Asynchrony

## Example 1 - Alarm clock

- Download this folder with starter files
  [alarm_clock](./alarm_clock/alarm_clock.zip)

Завдання направлене на створення простого будильника.

У цьому будильнику, є цифровий годинник, який показує поточний час разом із
деякими параметрами будильника: година, хвилини, секунди. Користувачі можуть
вибрати час і встановлювати будильники на будь-який час, як тільки настане час,
на якицй користувач поставив будильник він подпсть сигнал, що час настав, і буде
продовжуватись до тих пір поки користувач не вимкне будильник

## Example 2 - Whack-a-mole!

- Use HTMl from this file [whack_a_mole.html](./game/index.html) Create your
  first game! Use setTimeout and setInterval to finish the game logic

```js
// refs
const startBtn = document.querySelector('button');
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');

// helpful variables
let lastHole;
let timeUp = false;
let score = 0;
let timer;
let timeLeft = 9; // seconds

// get random time when mole will shown
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// get random hole where mole will shown
function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole === lastHole) {
    return randomHole(holes);
  }

  lastHole = hole;
  return hole;
}

// a function that shows us a mole that climbs out of a hole
function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);

  hole.classList.add('up');

  // add some code, that will remove class "up" after some time
  // if game is still continue (timeUp false) call peep() function
  // your code
}

function startGame() {
  // add some code, that will show how much time is left until the end of the game, if timeLeft === 0 change button text to "Game Over"
  // your code

  // start our game
  peep();

  // add some code, which will stop our game after 10sec( timeUp = true, game is over)
  // your code
}

// give you a point when you hit a mole
function bonk(e) {
  if (!e.isTrusted) return;

  score++;

  this.parentNode.classList.remove('up');
  scoreBoard.textContent = score;
}

// event listeners
moles.forEach(mole => mole.addEventListener('click', bonk));
startBtn.addEventListener('click', startGame);
```
