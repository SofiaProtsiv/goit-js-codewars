# Модуль 10. Заняття 19. Clint-Server. Work with backend

## Example 1 - Github

Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів
GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів
користувачів.

Інформація про користувача GitHub з логіном USERNAME доступна за посиланням:
https://api.github.com/users/USERNAME.

Важливі деталі: На кожного користувача повинен бути один запит fetch. Запити не
повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна
швидше. Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о
користувачеві немає, то функція повина повертати null в масиві результатів.

## Example 2 - Weather forecast

Use [OpenWeatherMap API](https://openweathermap.org/)

Download this folder with starter files [weather_app](./weather_app.zip)

```js
// refs
const inputField = document.querySelector('.search-bar');
const locationBtn = document.querySelector('#get_location_btn');
const searchBtn = document.querySelector('#search_btn');
const infoTxt = document.querySelector('.info_text');
const content = document.querySelector('.content');

let api; // helpful variable for different fetch urls
const APP_ID = '522f7ec766b55c89fccbc47a4e7a72c0'; // SECRET API KEY

inputField.addEventListener('keyup', e => {
  // if user pressed enter btn and input value is not empty, fetch data from specific city(you can you helpful function requestApi, that got city name and make fetch request)
});

locationBtn.addEventListener('click', () => {
  if (navigator.geolocation) {
    // if browser support geolocation api
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert('Your browser not support geolocation api');
  }
});

function requestApi(city) {
  // use helpful API variable for different fetch urls
  // make fetch request, call helpful fetchData()
}
function onSuccess(position) {
  // getting latitude and longitude of the user device from coords obj
  // use helpful API variable for different fetch urls
  // make fetch request, call helpful fetchData()
}

function fetchData() {
  // infoTxt.innerText = 'Getting weather details...';
  // infoTxt variable has to helpful css classes "error" and "pending" you them
  // fetch(api) and get response or catch error
  // if response is ok, return object with weather and c then function calling weatherDetails function with passing api result as an argument
  // if smth went wrong and response is not ok say that infoTxt.innerText = 'isn't a valid city name'
}

function weatherDetails(data) {
  //getting required properties value from the whole weather information, which we cat from fetch function
  //passing a particular weather info to a particular HTML element what passed below
}
```

```html
<div class="weather">
  <h2 class="city">Weather in Kiev, UK</h2>
  <h1 class="temp">4°C</h1>
  <div class="flex">
    <img
      src="https://openweathermap.org/img/wn/ICON_ID.png"
      alt="Cloudy"
      class="icon"
    />
    <div class="description">Cloudy</div>
  </div>
  <div class="feels_like">Feels like: 2°C</div>
  <div class="humidity">Humidity:20%</div>
  <div class="wind">Wind speed: 2 km/h</div>
</div>
```

## Example 3 - Food Servise

Use [TheMealDB API](https://www.themealdb.com/api.php)

Download this folder with starter files [meal_search](./meal_search.zip)

```js
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const searchInput = document.getElementById('search-input');

// get meal list that matches with the ingredients
function getMealList() {
  // get input value
  let searchInputTxt;

  // fetch list that matches with the ingredients
  //   if (meals){
  //       render meals items, you HTML below
  //       mealList.classList.remove('notFound');
  //   } else {
  //       "Sorry, we didn't find any meal!";
  //       mealList.classList.add('notFound');
  //   }

  // pass into mealList your created meals markup
}

// get recipe of the meal
function getMealRecipe(e) {
  // get recipe of the selected meal
  // call function mealRecipeModal inside this function to render modal markup
}

// create a modal
function mealRecipeModal(meal) {
  // get the object of the selected meal and put it in the modal markup

  // some code for open modal
  mealDetailsContent.parentElement.classList.add('showRecipe');
}

// event listeners
searchBtn.addEventListener('click', getMealList);
mealList.addEventListener('click', getMealRecipe);
recipeCloseBtn.addEventListener('click', () => {
  mealDetailsContent.parentElement.classList.remove('showRecipe');
});
searchInput.addEventListener('keyup', e => {
  // if user pressed enter btn and input value is not empty
  if (e.key === 'Enter' && searchInput.value !== '') {
    getMealList();
    searchInput.value = '';
  }
});
```

Meal item

```html
<div class="meal-item">
  <div class="meal-img">
    <img src="food.jpg" alt="food" />
  </div>
  <div class="meal-name">
    <h3>Potato Chips</h3>
    <button type="button" class="recipe-btn">Get Recipe</button>
  </div>
</div>
```

Modal content

```html
<h2 class="recipe-title">Meals Name Here</h2>
<p class="recipe-category">Category Name</p>
<div class="recipe-instruct">
  <h3>Instructions:</h3>
  <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo blanditiis
    quis accusantium natus! Porro, reiciendis maiores molestiae distinctio
    veniam ratione ex provident ipsa, soluta suscipit quam eos velit autem iste!
  </p>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet aliquam
    voluptatibus ad obcaecati magnam, esse numquam nisi ut adipisci in?
  </p>
</div>
<div class="recipe-meal-img">
  <img src="food.jpg" alt="Meals Name Here" />
</div>
<div class="recipe-link">
  <a href="#" target="_blank">Watch Video</a>
</div>
```
