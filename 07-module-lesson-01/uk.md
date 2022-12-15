# Модуль 7. Заняття 13. Events

## Example 1 - Color Palete

Use html from file [palete.html](./palete.html).

```js
const colorPalette = document.querySelector('.color-palette');
const output = document.querySelector('.output');

colorPalette.addEventListener('click', selectColor);

createPaletteItems();

function selectColor(event) {}

function createPaletteItems() {}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
```

## Example 2 - Todo List

This todo list design is pure css. The css and html are ready, but we need to
code the Javascript part of the application. Use html from file
[todo_list.html](../06-module-lesson-02/todoList.html).

As you can see, when you initially run, the ability to delete or add items to
the to-do list does not yet exist!

📝 Instructions: Please add the "delete task" and "add task" functionality. 💡
Hints: Analize the HTML code, how the list is designed and built, what do you
have to add into the HTML if you want a new item appear inside the list?

If we were to delete any particular element, we would have to add a listener to
the click handler on the trash icon and then delete the entire li in which the
icon.

You don't have to edit anything from the HTML nor the CSS, only the javascript!

```js
const taskInput = document.getElementById('new-task'); //input to create new task.
const addButton = document.querySelector('button.add'); //add button
const tasksHolder = document.getElementById('tasks-list'); //ul of todos

const createNewTaskElement = newTodo => {};

const addTask = () => {};

const editTask = () => {};

const deleteTask = () => {};

addButton.addEventListener('click', addTask);
tasksHolder.addEventListener('click', editTask);
tasksHolder.addEventListener('click', deleteTask);
```

## Example 3 - Quiz

Створи форму опитувальника з можливістю пройти тест. Кожне питання – це секція
форми, де відповіді представлені групою радіокнопок.

Заголовок тесту та набір питань знаходяться в об'єкті, що експортується з файлу
[quiz-data.js](./quiz.js). Кожен питання представлений об'єктом з наступними
властивостями.

- `question` - текст питання
- `choices` - масив відповідей
- `answer` - індекс правильної відповіді з масиву `choices`

Необхідно динамічно створити розмітку форми за цими даними.

При сабмите форми перевір на скільки запитань користувач відповів правильно і
виведи (можна під формою) повідомлення про успіх чи невдачу. Успішним
проходження тесту вважається при `80%` або більше вірних відповідей.

### HTML-розмітка

Початкова розмітка у HTML-документі тут [quiz.html](./quiz.html)

Кожне питання представлене наступною HTML-розміткою. Текст питання та кількість
Варіантів відповідей залежить від даних питання. Подумай, що підставити в
атрибути `name` та `value` радіокнопок.

``html

<section>
   <h3>1. Текст питання</h3>
   <ol>
     <li>
       <label>
         <input type="radio" name="" value="" />
         Відповідь 1
       </label>
     </li>
     <li>
       <label>
         <input type="radio" name="" value="" />
         Відповідь 2
       </label>
     </li>
   </ol>
</section>
````

```js
const form = document.querySelector('#form');
const button = document.querySelector('#btn');

form.addEventListener('submit', checkAnswers);

function createQuizeMarkup({ title, questions }) {}

function markupForChoise(choices, i) {}

//тут у форму нам потрібно вставити нашу створену розмітку, результат функції createQuizeMarkup(quiz)

function checkAnswers(event) {
  //витягуємо всі дані з форми

  //витягуємо з нашого quiz правильні відповіді і порівнюємо їх з відповідями користувача, дізнаємося довжину масива, для розрахунку результату теста у %

  // обчислення резульату теста
  const result = Math.round((total / correctAnswers.length) * 100);

  let message;
  if (result >= 80) {
    message = `Молодець! Ты набрав ${result} %`;
  } else {
    message = `Вчи ще! Ты набрав ${result} %`;
  }

  //зроби кнопку після відправки неактивною і виведи користувачу його рультат теста під кнопкою у текстовому вигляді (message)
}
```
