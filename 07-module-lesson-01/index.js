// import { quiz } from './quiz.js';

// const form = document.querySelector('#form');
// const button = document.querySelector('#btn');
// form.addEventListener('submit', checkAnswers);

// function createQuizeMarkup({ title, questions }) {
//   const questionMarkupWrapper = questions
//     .map(({ question, choices }, i) => {
//       const html = `<section class="section">
//   <h3>${question}</h3>
//   <ol>
//     ${markupForChoise(choices, i)}
//   </ol>
//   </section>
//   `; // создание разметки в хтмл (при этом квест как строчка,а И как итератор , который запускает функцию отпределенное количество раз. Парк ту - фунция , которую мы вызываем выполняет создание разметки вариантов ответов , при этом эта ф-я так же имеет строчки, которые будут записаны с помощью итератора. )
//       return html;
//     })
//     .join(''); // это обьедение всех элементов массива в строку

//   const mainTitle = `<h1>${title}</h1>`; // создание разметки тайтла

//   return mainTitle + questionMarkupWrapper; // возвращаем результат ф-и , конкатенация элементов
// }

// function markupForChoise(choices, i) {
//   const choicesPart = choices
//     .map((choice, iTwo) => {
//       const htmlTwo = `
//       <li>
//         <label>
//           <input type="radio" required name="choises${i}" value="${iTwo}" />
//           ${choice}
//         </label>
//       </li>`; // создание разметки выриантов ответов , где чоиз - строка , иту - сколько раз должна выполниться ф-я, и- для того чтобы варианты ответов были активны в одном вопросе
//       return htmlTwo; // возврат строки
//     })
//     .join(''); // это обьедение всех элементов массива в строку --- зачем? обязательно ли?надо
//   return choicesPart; // а вот это возврат ф-и
// }

// form.insertAdjacentHTML('afterbegin', createQuizeMarkup(quiz)); // куда и что мы будем вставлять

// function checkAnswers(event) {
//   event.preventDefault();

//   let userAnswers = [];

//   const checkedData = new FormData(event.currentTarget);

//   checkedData.forEach(value => {
//     userAnswers.push(Number(value));
//   });

//   const correctAnswers = quiz.questions.map(({ answer }) => answer);

//   const total = correctAnswers.filter(
//     correctAnswer => userAnswers.indexOf(correctAnswer) !== -1
//   ).length;

//   //   let total = 0;
//   //   for (let i = 0; i < userAnswer.length; i++) {
//   //     if (userAnswer[i] === correctAnswer[i]) {
//   //       total += 1;
//   //     }
//   //   }

//   const result = Math.round((total / correctAnswers.length) * 100);

//   let message;
//   if (result >= 80) {
//     message = `Молодець! Ты набрав ${result} %`;
//   } else {
//     message = `Вчи ще! Ты набрав ${result} %`;
//   }

//   const mesHtml = `<p class="result ${
//     result >= 80 && 'success'
//   }">${message}</p>`;

//   button.insertAdjacentHTML('afterend', mesHtml); // куда и что мы будем вставлять
//   button.setAttribute('disabled', 'disabled');
// }

const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

// This is where delegation «magic» happens
function selectColor(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const selectedColor = event.target.dataset.color;
  document.querySelector('body').style.background = selectedColor;
  output.textContent = `Selected color: ${selectedColor}`;
  output.style.color = selectedColor;
}

// Some helper functions to render palette items
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomColor();
    const item = document.createElement('button');
    item.type = 'button';
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add('item');
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
