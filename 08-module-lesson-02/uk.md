# Модуль 8. Заняття 16. Local storage

## Example 1 - Counter

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

- Download this folder with starter files
  [authorization](./authorization/src.zip)

Завдання полягає у сторенні імітації реєстрації та входу користувача в особистий
кабінет. Використовуй локалальне сховище щоб зберігати "реєстраційні дані".
Зроби перевірку чи користувач уже був зареєстрований, якщо ж не був то створи
йому акаунт.

Додатково можна попрактикуватися і використати такі бібліотекия:

- [Notifli](https://github.com/notiflix/Notiflix#readme)
- [Joi](https://joi.dev/api/?v=17.7.0)

## Example 4 - Food service

Створи сторінку меню з можливістю вибору теми для сервісу замовлення їжі.
[Посилання на демо відео](https://monosnap.com/file/ergR3f8MzeZo7hMAzbQBdvaw6XYrrE).

- У папці [src](./foodservice/src.zip) ти знайдеш стартову розмітку, стилі та
  дані

### Тема

Реалізуй функціонал зміни теми при натисканні (подія `change`) на чекбокс
`input.js-switch-input` у тулбарі.

- За промовчанням тема світла.
- При зміні теми необхідно додавати на елемент `body` клас `light-theme`або
  `dark-theme`.
- Вибрана тема повинна зберігатись між перезавантаженнями сторінки. Для
  зберігання активної теми використовуй localStorage.
- Якщо при завантаженні сторінки тема темна, не забудь поставити властивість
  `checked` у чекбокса `input.js-switch-input` в `true`, щоб повзунок зрушив у
  правильне становище.

Для зручності зберігання списку використовуй такий перелік `Theme`.

```js
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
```

### Шаблонізація

Використовуючи шаблонізатор [Handlebars](https://handlebarsjs.com/) створи
шаблон одиного елемента меню. Після цього, використовуючи шаблон, створи
розмітку всього меню за даними з menu.json і додай у DOM в `ul.js-menu`.

Для іконок використовуємо `Material Icons`, лінк на веб-фонт вже є у вихідному
HTML.

Нижче вказана розмітка елемента меню, яка повинна виходити за шаблоном (дані
будуть різні кожному за об'єкта).

```html
<li class="menu__item">
  <div class="card">
    <img
      src="https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg"
      alt="Картопля, запечена в мундирі"
      class="card__image"
    />
    <div class="card__content">
      <h2 class="card__name">Картопля, запечена в мундирі</h2>
      <p class="card__price">
        <i class="material-icons">monetization_on</i>
        100 кредитів
      </p>

      <p class="card__descr">
        Ароматна, ситна, шипляча домашня картопля, фарширована сметанно-беконною
        начинкою — це дуже простий і дуже ефектний спосіб. нагодувати велику
        кількість людей, практично не витративши на готування ні сил, ні часу.
        Звичайну картоплю за бажання тут можна замінити на солодкий батат, а
        начинку додати, наприклад, кукурудзу або солодкий червоний перець.
      </p>

      <ul class="tag-list">
        <li class="tag-list__item">Картопля</li>
        <li class="tag-list__item">Часник</li>
        <li class="tag-list__item">Сметана</li>
        <li class="tag-list__item">Бекон</li>
        <li class="tag-list__item">Твердий сир</li>
        <li class="tag-list__item">Зелена цибуля</li>
      </ul>
    </div>

    <button class="card__button button">
      <i class="material-icons button__icon">shopping_cart</i>
      В кошик
    </button>
  </div>
</li>
```
