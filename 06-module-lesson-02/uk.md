# Модуль 6. Заняття 12. DOM i events

## Example 1 - Form

```js
const form = document.querySelector('#signup');

const NAME_REQUIRED = 'Please enter your name';
const EMAIL_REQUIRED = 'Please enter your email';
const EMAIL_INVALID = 'Please enter a correct email format';

// show a message with a type of the input
function showMessage({ input, message, type }) {
  // get the small element and set the message
  ...
  // update the class for the input: add "success" if type===true, add "error" if type===false
  ...
  // return type(true/false) to understand to show message or no
  return type;
}

function showError(input, message) {
  return showMessage({ input, message, type: false });
}

function showSuccess(input) {
  return showMessage({ input, message: '', type: true });
}

function hasValue(input, message) {
  // check if the value is not empty if empty show error message else show success message
  ...
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if the value is not empty, if value is empty return error message
  ...
  // validate email format,  if format is wrong show "ivalid" error message
    const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const email = ...;

  if (!emailRegex.test(email)) {
   ...
  }
// if format validate ok and email input is not empty show success
}

function handleSubmit(event) {
  // stop form submission
  ...
  // validate the form
  ...
  // if valid, submit the form and return { formData[name] = value }.
  ...
}

form.addEventListener('submit', handleSubmit);

```

## Example - Style Body

При кліку на кнопку з `id="style"` стилізуй `body` background рандомним кольором
з масиву `arr`, для отримання рандомного кольору з масиву використай функцію
`arrayRandomElement`. Use html from file [styleBG.html](./styleBG.html).

```js
function styleBG() {}

function arrayRandomElement(arr) {
  const randomColor = Math.floor(Math.random() * arr.length);
  return arr[randomColor];
}
const arr = [
  'white',
  'blue',
  'red',
  'green',
  'yellow',
  'orange',
  'purple',
  'pink',
  'grey',
  'tomato',
];
```

## Example - Clicker

### 📝 Instructions:

1. Using the createElement function, add a new `<li>` element to the `#myList`
   whenever the `#superDuperButton` is clicked.

### 💡 Hint:

- Get the `#superDuperButton` button with the `getElementById` function.

- Add a click event listener to the `#superDuperButton`.

- Inside of that listener function, add the needed code to create the new `li`
  element and append to the list as a child.

```js
const isReady = confirm('Are you ready?');
isReady &&
  setTimeout(function () {
    document.getElementById('superDuperButton').disabled = true;
  }, 5000);
```

## Example - Todo List

This todo list design is pure css. The css and html are ready, but we need to
code the Javascript part of the application. Use html from file
[todo_list.html](./todoList.html).

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

## Exapmle - Slider

This todo list design is pure css. The css and html are ready, but we need to
code the Javascript part of the application. Use html from file
[slider.html](./slider.html).

```js
const sliderDiv = ...;
const buttonNext = ...;
const buttonPrevious = ...;

let prevImage = 0;

function slideToNext() {}
function slideToPrevious() {}
function destroyPreviousMarkup() {}
function createdMarkup() {}

createdMarkup(sliderItems[0]);

buttonNext.addEventListener('click', slideToNext);
buttonPrevious.addEventListener('click', slideToPrevious);
```

## Example - keybord game

```js
// object size
const objectSize = {
  width: 20,
  height: 20,
};

// start object position
const position = {
  x: 10,
  y: 10,
};

// how many px the object will move with each press of the arrows on the keyboard
const moveRate = 10;

// get object
const object = document.getElementById('object');
// style object
object.style.width = objectSize.width + 'px';
object.style.height = objectSize.height + 'px';
object.style.background = 'black';

// Update y-axis position at the edge.
function updateYPosition(distance) {
  // if y < 0 say that y = 499
  // if y > 499 say that y = 0
}

// Update x-axis position at the edge.
function updateXPosition(distance) {
  // if y < 0 say that y = 499
  // if y > 499 say that y = 0
}

function refreshPosition() {
  // add new transform-style to object
}

window.addEventListener('keydown', function (event) {
  // determine which arrow on the keyboard was pressed,
  // if ArrowDown is pressed, call the updateYPosition(-moveRate) function;
  // if ArrowUp is pressed, call the updateYPosition(moveRate) function;
  // if ArrowLeft is pressed, call the updateXPosition(-moveRate)function;
  // if ArrowRight is pressed, call the updateXPosition(moveRate) function;
  // then call refreshPosition() function
});
```
