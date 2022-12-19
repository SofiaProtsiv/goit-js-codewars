# Модуль 7. Заняття 14. Debounce and Trottle

## Example 1 - Find country

- Use html from file [find_countries.html](./find_countries.html).
- Use data from file [countries.js](./countries.js)

```js
const refs = {
 searchInputRef: document.querySelector('#search-box');
 errorTextRef: document.querySelector('.output-error');
 listRef: document.querySelector('.country-list');
}

const {searchInputRef, errorTextRef, listRef} = refs;

const handleInput = event => {
//get value from input and normalize it

  if (value === '') {
// what we should do when input value is empty?
  }

  const countryInfo = // find how much countries includes value in their names

  if (countryInfo.length > 1) {
  // call function createCountryList() for render list of countryInfo items
  }

  if (countryInfo.length === 1) {
 // call function createCountryCard() for render 1 item;
  }

  if (countryInfo.length === 0) {
// show that `Country ${value} not found!`;
  }
};

// upgrade this event listener to avoid function calling every input event
searchInputRef.addEventListener('input', handleInput);

const createCountryList = counrtiesList => {
  return counrtiesList.map(() => {
    return `<li>
      <div class="countryFlag"">
      <p class="countryName">Ukraine 🇺🇦</p>
  </li>`;
  });
};

const createCountryCard = () => {
  return `<div class="previewCard">
      <div class="countryFlag">
      <p class="countryName">Ukraine 🇺🇦</p>
  </div>
  <p class="countryCapital"><b>Capital </b> Kyiv</p>
  <p class="countryPopulation"><b>Population: </b>41 342 765</p>
  <p class="countryArea"><b>Area: </b>603.628</p>`;
};
```

## Example 2 - Weather

- Use html from file [weather.html](./weather.html).
- Use data from file [weather.js](./weather.js)

```js
const weatherBlock = document.querySelector("#weather");
const input = document.querySelector("#input-field");
const message = document.querySelector("#error-text");

const handleInput = (event) => {
  let { value } = event.target;

  if (value === "") {}

  const weatherInfo = ...;

  if (weatherInfo.length > 1) {
  `Too many results found, please refine your search...`;
  }

  if (weatherInfo.length === 1) {
 getWeather();
  }

  if (weatherInfo.length === 0) {
`Country ${value} not found!`;
  }
};

function getWeather() {
  return `
	<div class="weather__header">
		<div class="weather__main">
			<div class="weather__city"></div>
			<div class="weather__status"></div>
		</div>
		<div class="weather__icon">
			<img src="http://openweathermap.org/img/w/${icon}.png" alt="">
		</div>
	</div>
	<div class="weather__temp"></div>
	<div class="weather__feels-like">Feels like: </div>`;
}
```

## Example 3 - Active header menu

- Use html from file [active-header.html](./menu2.0/menu.html).
- Live demo - https://6hmc4.csb.app/
- Practical usage - https://codepen.io/michellebarker/pen/QWpzwYN
- Корисні статті на цю тему:
  1. https://misha.agency/javascript/intersection-observer-api.html#target
  2. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API/Timing_element_visibility#setting_up
  3. https://habr.com/ru/post/494670/

```js
// refs
const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('[data-link]');

// Налаштуванння
let options = {
  root: null,
  rootMargin: '0px',
  threshold: [0.2, 0.5, 0.8],
};

// Функція зворотного виклику. Виклик callback повертає об'єкт, що містить записи про зміни, що відбулися з цільовим елементом:
const onEntry = entries => {
  // Перевірка кожного елемета:

  // Перевіряємо, чи елемент перетинає спостерігається більш, ніж на 50%, якщо так то видаляємо активний клас елемент меню

  // отримуємо ID секції, яка поточна
  let activeId = entry.target.id;

  // звертаємося до посилання меню, у якій data-link еф дорівнює ID секції і додаємо їй активний клас
};

// Наш наглядач за переходом по секціях
const sectionObserver = new IntersectionObserver(onEntry, options);

// Далі створюється цільовий елемент, за яким спостерігає observer:
sections.forEach(section => {
  sectionObserver.observe(section);
});

// дана функція дозволить нам повертатись до певної секції
const onNavButtonClick = event => {
  const href = event.target.dataset.id;

  const scrollTarget = document.querySelector(`#${href}`);

  // const topOffset = document.querySelector('.scrollto').offsetHeight;
  const topOffset = 0; // якщо не потрібний відступ зверху
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
```

## Example 4 - Video

- Use html from file [video.html](./video/video.js).
- Live demo - https://ubxyt.csb.app/

```js
// refs
const videos = document.querySelectorAll('video');

const options = {
  // Тригер спрацює як при вході з верхньої границі так і з нижньої
  threshold: [0.2, 0.8],
};
const onEntry = entries => {
  entries.forEach(entry => {
    const video = entry.target;

    // Якщо відео не в viewport чи видимо лише на 20%, то зупиняємо, інакше запкскаємо знову
  });
};

let videoObserver = new IntersectionObserver(onEntry, options);

videos.forEach(video => videoObserver.observe(video));
```
