# Модуль 6. Заняття 12. DOM i events

## Example 1 - Form

## Example - Slider

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
