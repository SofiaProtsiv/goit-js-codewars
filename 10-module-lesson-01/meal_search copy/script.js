const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const searchInput = document.getElementById('search-input');
const categoryList = document.querySelector('.category_list');
const areaList = document.querySelector('.area_list');
const buttonsWrapper = document.querySelector('.buttons_wrapper');
const filterWrapper = document.querySelector('.list_wrapper');
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  .then(response => response.json())
  .then(({ meals }) => meals)
  .then(meals => {
    let markup = '';
    meals.forEach(({ strCategory }) => {
      markup += `<li>${strCategory}</li>`;
      categoryList.innerHTML = markup;
    });
  });

fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  .then(response => response.json())
  .then(({ meals }) => meals)
  .then(meals => {
    let markup = '';
    meals.forEach(({ strArea }) => {
      markup += `<li id="${strArea}">${strArea}</li>`;
      areaList.innerHTML = markup;
    });
  });

buttonsWrapper.addEventListener('click', handleFilter);

function handleFilter(event) {
  const categoryBtn = buttonsWrapper.querySelector('[data-action="category"]');
  const areaBtn = buttonsWrapper.querySelector('[data-action="area"]');

  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  if (event.target.dataset.action === 'category') {
    categoryList.classList.remove('hidden');
    areaList.classList.add('hidden');
    areaBtn.classList.remove('active');
    categoryBtn.classList.add('active');
  } else {
    areaList.classList.remove('hidden');
    categoryList.classList.add('hidden');
    areaBtn.classList.add('active');
    categoryBtn.classList.remove('active');
  }
}
filterWrapper.addEventListener('click', selectFilterOption);
function selectFilterOption(event) {
  if (event.target.tagName !== 'LI') {
    return;
  }
  const selectedOption = event.target.textContent;
  event.target.classList.add('active');

  Array.from(categoryList.children).forEach(li => {
    li.addEventListener('click', event => {
      Array.from(categoryList.children).forEach(li =>
        li.classList.remove('active')
      );
      event.target.classList.add('active');
    });
  });

  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedOption}`
  )
    .then(response => response.json())
    .then(({ meals }) => meals)
    .then(meals => {
      let html = '';
      if (meals) {
        meals.forEach(meal => {
          html += `
            <div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = "meal-img">
                    <img src = "${meal.strMealThumb}" alt = "food">
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                </div>
            </div>
                `;
        });
        mealList.classList.remove('notFound');
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
      }

      mealList.innerHTML = html;
    });
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
// get meal list that matches with the ingredients
function getMealList() {
  let searchInputTxt = searchInput.value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then(response => response.json())
    .then(({ meals }) => {
      let html = '';
      if (meals) {
        meals.forEach(meal => {
          html += `
            <div class = "meal-item" data-id = "${meal.idMeal}">
                <div class = "meal-img">
                    <img src = "${meal.strMealThumb}" alt = "food">
                </div>
                <div class = "meal-name">
                    <h3>${meal.strMeal}</h3>
                    <a href = "#" class = "recipe-btn">Get Recipe</a>
                </div>
            </div>
                `;
        });
        mealList.classList.remove('notFound');
      } else {
        html = "Sorry, we didn't find any meal!";
        mealList.classList.add('notFound');
      }

      mealList.innerHTML = html;
    });
}

// get recipe of the meal
function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains('recipe-btn')) {
    let mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then(response => response.json())
      .then(data => mealRecipeModal(data.meals));
  }
}

// create a modal
function mealRecipeModal(meal) {
  meal = meal[0];
  console.log(meal);
  let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('showRecipe');
}
