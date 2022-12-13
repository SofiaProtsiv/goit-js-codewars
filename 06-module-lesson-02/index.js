import { sliderItems } from './slider.js';

// const taskInput = document.getElementById('new-task'); //Add a new task.
// const addButton = document.querySelector('button.add'); //first button
// const editButton = document.querySelectorAll('button.edit'); //first button
// const deleteButton = document.querySelectorAll('button.delete'); //first button
// const incompleteTaskHolder = document.getElementById('incomplete-tasks'); //ul of #incomplete-tasks
// // const completedTasksHolder = document.getElementById('completed-tasks'); //ul of #completed-tasks

// const createNewTaskElement = taskString => {
// const listItem = document.createElement('li');

// const markup = `
// <input type="checkbox" /><label>${taskString}</label
//       ><input type="text" value="${taskString}" /><button class="edit">
//         Edit</button
//       ><button class="delete">Delete</button>
// `
// listItem.innerHTML = markup;

// return listItem;
//   const listItem = document.createElement('li');

//   const checkBox = document.createElement('input');
//   const label = document.createElement('label');
//   const editInput = document.createElement('input');

//   const editButton = document.createElement('button');
//   const deleteButton = document.createElement('button');

//   label.innerText = taskString;

//   checkBox.type = 'checkbox';
//   editInput.type = 'text';

//   editButton.innerText = 'Edit';
//   editButton.className = 'edit';
//   deleteButton.innerText = 'Delete';
//   deleteButton.className = 'delete';

//   listItem.appendChild(checkBox);
//   listItem.appendChild(label);
//   listItem.appendChild(editInput);
//   listItem.appendChild(editButton);
//   listItem.appendChild(deleteButton);

//   return listItem;
// };

// const addTask = () => {
//   const listItem = createNewTaskElement(taskInput.value);

//   incompleteTaskHolder.appendChild(listItem);

//   taskInput.value = '';
// };

// const editTask = event => {
//   const listItem = event.target.parentNode;

//   if (event.target.tagName === 'BUTTON') {
//     const editInput = listItem.querySelector('input[type=text]');
//     const label = listItem.querySelector('label');
//     const editButton = listItem.querySelector('.edit');

//     const containsClass = listItem.classList.contains('editMode');

//     if (containsClass) {
//       label.innerText = editInput.value;
//       editButton.innerText = 'Edit';
//     } else {
//       editInput.value = label.innerText;
//       editButton.innerText = 'Save';
//     }

//     listItem.classList.toggle('editMode');
//   }
// };

// const deleteTask = event => {
//   if (event.target.className === 'delete') {
//     const listItem = event.target.parentNode;

//     incompleteTaskHolder.removeChild(listItem);
//     // event.currentTarget.id === 'incomplete-tasks'
//     //   ? incompleteTaskHolder.removeChild(listItem)
//     //   : completedTasksHolder.removeChild(listItem);
//   }
// };

// // const taskCompleted = event => {
// //   const listItem = event.currentTarget.parentNode;
// //   console.log(event.currentTarget.parentNode);
// //   if (event.target.tagName === 'INPUT') {
// //     completedTasksHolder.appendChild(listItem);
// //   }
// // };

// // const taskIncomplete = event => {
// //   const listItem = event.currentTarget.parentNode;
// //   if (event.target.tagName === 'INPUT') {
// //     incompleteTaskHolder.appendChild(listItem);
// //   }
// // };

// addButton.addEventListener('click', addTask);

// incompleteTaskHolder.addEventListener('click', editTask);
// incompleteTaskHolder.addEventListener('click', deleteTask);

// // completedTasksHolder.addEventListener('click', editTask);
// // completedTasksHolder.addEventListener('click', deleteTask);

// let button = document.querySelector('#superDuperButton');

// let ul = document.querySelector('ul');
// let prevstate = 1;

// const isReady = confirm('Are you ready?');
// isReady &&
//   setTimeout(function () {
//     document.getElementById('superDuperButton').disabled = true;
//   }, 5000);

// button.addEventListener('click', function () {
//   const li = document.createElement('li');
//   li.innerText = prevstate;
//   ul.children.length > 0 && ul.removeChild(ul.querySelector('li'));
//   ul.append(li);
//   prevstate += 1;
// });

// const styleBtn = document.querySelector('#style');
// const body = document.querySelector('body');
// function styleBG() {
//   body.style.background = arrayRandomElement(arr);
// }
// styleBtn.addEventListener('click', styleBG);
// function arrayRandomElement(arr) {
//   const randomColor = Math.floor(Math.random() * arr.length);
//   return arr[randomColor];
// }
// const arr = [
//   'white',
//   'blue',
//   'red',
//   'green',
//   'yellow',
//   'orange',
//   'purple',
//   'pink',
//   'grey',
//   'tomato',
// ];

// const sliderDiv = document.querySelector('.slider');
// const buttonNext = document.querySelector('#next');
// const buttonPrevious = document.querySelector('#previous');

// let prevImage = 0;

// function slideToNext() {
//   prevImage >= sliderItems.length - 1 ? (prevImage = 0) : (prevImage += 1);

//   const newImage = sliderItems[prevImage];

//   createdMarkup(newImage);
//   destroyPreviousMarkup();
// }
// function slideToPrevious() {
//   prevImage <= 0 ? (prevImage = sliderItems.length - 1) : (prevImage -= 1);

//   const newImage = sliderItems[prevImage];

//   createdMarkup(newImage);
//   destroyPreviousMarkup();
// }
// function destroyPreviousMarkup() {
//   const images = document.getElementsByTagName('img');
//   images[0] && images[0].parentNode.removeChild(images[0]);
// }
// function createdMarkup({ preview, description }) {
//   const img = document.createElement('img');
//   img.src = preview;
//   img.alt = description;
//   sliderDiv.append(img);
// }

// createdMarkup(sliderItems[0]);

// buttonNext.addEventListener('click', slideToNext);
// buttonPrevious.addEventListener('click', slideToPrevious);
//
//
//
// show a message with a type of the input
// function showMessage({ input, message, type }) {
//   // get the small element and set the message
//   const msg = input.parentNode.querySelector('small');
//   msg.innerText = message;

//   // update the class for the input
//   input.className = type ? 'success' : 'error';
//   return type;
// }

// function showError(input, message) {
//   return showMessage({ input, message, type: false });
// }

// function showSuccess(input) {
//   return showMessage({ input, message: '', type: true });
// }

// function hasValue(input, message) {
//   if (input.value.trim() === '') {
//     return showError(input, message);
//   }
//   return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
//   // check if the value is not empty
//   if (!hasValue(input, requiredMsg)) {
//     return showError(input, requiredMsg);
//   }
//   // validate email format
//   const emailRegex =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   const email = input.value.trim();

//   if (!emailRegex.test(email)) {
//     return showError(input, invalidMsg);
//   }

//   return showSuccess(input);
// }

// const form = document.querySelector('#signup');

// const NAME_REQUIRED = 'Please enter your name';
// const EMAIL_REQUIRED = 'Please enter your email';
// const EMAIL_INVALID = 'Please enter a correct email address format';

// form.addEventListener('submit', function (event) {
//   // stop form submission
//   event.preventDefault();

//   // validate the form
//   let nameValid = hasValue(form.elements['name'], NAME_REQUIRED);
//   let emailValid = validateEmail(
//     form.elements['email'],
//     EMAIL_REQUIRED,
//     EMAIL_INVALID
//   );
//   // if valid, submit the form.
//   if (nameValid && emailValid) {
//     const elements = Array.from(event.target);
//     const formData = elements.reduce((formData, { value, name }) => {
//       if (name) {
//         formData[name] = value;
//       }
//       return formData;
//     }, {});

//     console.log(formData);
//   }
// });

// розмір обєкта який рухається
const objectSize = {
  width: 20,
  height: 20,
};

const position = {
  x: 10,
  y: 10,
};
// швидкість переміщення в рх, на скільки рх буде рухатися кожного разу
const moveRate = 10;

const object = document.getElementById('object');
object.style.width = objectSize.width + 'px';
object.style.height = objectSize.height + 'px';
object.style.background = 'black';

function updateYPosition(distance) {
  position.y = position.y - distance;
  // Update y-axis position at the edge.
  if (position.y < 0) {
    position.y = 499;
  } else if (position.y > 499) {
    position.y = 0;
  }
}
// Update x-axis position.
function updateXPosition(distance) {
  position.x = position.x + distance;
  // Update x-axis position at the edge.
  if (position.x < 0) {
    position.x = 499;
  } else if (position.x > 499) {
    position.x = 0;
  }
}

function refreshPosition() {
  const x = position.x - moveRate;
  const y = position.y - moveRate;

  object.style.transform = `translate(${x}px, ${y}px)`;
}
window.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowDown') {
    // Handle "down"
    updateYPosition(-moveRate);
  } else if (event.code === 'ArrowUp') {
    // Handle "up"
    updateYPosition(moveRate);
  } else if (event.code === 'ArrowLeft') {
    // Handle "left"
    updateXPosition(-moveRate);
  } else if (event.code === 'ArrowRight') {
    // Handle "right"
    updateXPosition(moveRate);
  }
  refreshPosition();
});
