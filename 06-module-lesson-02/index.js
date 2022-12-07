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
