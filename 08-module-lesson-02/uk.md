# Модуль 8. Заняття 16. Local storage

## Example 3 - Counter

- Use HTMl from this file [counter.html](./counter/index.html)

```js
// get all action buttons
const actions = some_code;

// get counter value from local storage, if there is no value pass 0
let counter = some_code;

// change counters text in html to current value

// for all action buttons add event listener
// action_name 'increase' => counter++;
// action_name 'decrease' => counter--;
// action_name 'reset' => counter = 0;
// action_name 'save' => set current counter valueto LS;
// action_name 'clear-save' => clear LS;

// in every action, update counter text in html
```

## Example 2 - Theme switcher

- Use HTMl from this file [theme.html](./theme/index.html)
- Use local storage to save seleted theme (dark / light)

```js
// refs
const themeSwitcher = document.getElementById('theme-switch');

// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;

function clickHandler() {
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function checkTheme() {
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}

// add event listener
```

## Example 3 - Authorization

- Download this folder with starter files [authorization](./authorization)

Завдання полягає у сторенні імітації реєстрації та входу користувача в особистий
кабінет. Використовуй локалальне сховище щоб зберігати "реєстраційні дані".
Зроби перевірку чи користувач уже був зареєстрований, якщо ж не був то створи
йому акаунт.

Додатково можна попрактикуватися і використати такі бібліотекия:

- [Notifli](https://github.com/notiflix/Notiflix#readme)
- [Joi](https://joi.dev/api/?v=17.7.0)
