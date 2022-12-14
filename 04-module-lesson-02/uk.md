# Модуль 4. Заняття 8. Перебираючі методи масиву

# Practice 1 - CARS

Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
`splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із
файлу [cars.js](./cars.js).

## Example 1 - Метод map

Нехай функція `getModels` повертає масив моделей (поле model) всіх автомобілів.

```js
const getModels = cars => {};

console.table(getModels(cars));
```

## Example 2 - Метод map

Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
значенням властивості `price` залежно від переданої знижки.

```js
const makeCarsWithDiscount = (cars, discount) => {};

console.table(makeCarsWithDiscount(cars, 0.2));
console.table(makeCarsWithDiscount(cars, 0.4));
```

## Example 3 - Метод filter

Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша ніж
значення параметра `threshold`.

```js
const filterByPrice = (cars, threshold) => {};

console.table(filterByPrice(cars, 30000));
console.table(filterByPrice(cars, 25000));
```

## Example 4 - Метод filter

Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
onSale яких true.

```js
const getCarsWithDiscount = cars => {};

console.table(getCarsWithDiscount(cars));
```

## Example 5 - Метод filter

Нехай функція `getCarsWithType` повертає масив автомобілів тип яких збігається
зі значенням параметра `type`.

```js
const getCarsWithType = (cars, type) => {};

console.table(getCarsWithType(cars, 'suv'));
console.table(getCarsWithType(cars, 'sedan'));
```

## Example 6 - Метод find

```js
const getCarByModel = (cars, model) => {};

console.log(getCarByModel(cars, 'F-150'));
console.log(getCarByModel(cars, 'CX-9'));
```

## Example 7 - Метод sort

Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів
відсортований за зростанням значення якості `amount`.

```js
const sortByAscendingAmount = cars => {};

console.table(sortByAscendingAmount(cars));
```

## Example 8 - Метод sort

Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
відсортований за зменшенням значення властивості `price`.

```js
const sortByDescendingPrice = cars => {};

console.table(sortByDescendingPrice(cars));
```

## Example 9 - Метод sort

Нехай функція `sortByModel` повертає новий масив автомобілів відсортований за
назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
значення параметра `order`.

```js
const sortByModel = (cars, order) => {};

console.table(sortByModel(cars, 'asc'));
console.table(sortByModel(cars, 'desc'));
```

## Example 10 - Метод reduce

Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
властивостей `amount`).

```js
const getTotalAmount = cars => {};

console.log(getTotalAmount(cars));
```

## Example 11 - Ланцюжки методів

Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
тільки тих, які зараз на розпродажі.

```js
const getModelsOnSale = cars => {};

console.table(getModelsOnSale(cars));
```

## Example 12 - Ланцюжки методів

Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
(Властивість onSale), відсортованих за зростанням ціни.

```js
const getSortedCarsOnSale = cars => {};

console.table(getSortedCarsOnSale(cars));
```

# Practice 2 - USERS

Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
`splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із
файлу [users.js](./users.js).

## Example 1

Отримати масив імен всіх користувачів (поле `name`).

```js
const getUserNames = users => {
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

## Example 2

Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

```js
const getUsersWithEyeColor = (users, color) => {
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
```

## Example 3

Отримати масив імен користувачів за статтю (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твій код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

## Example 4

Отримати масив лише неактивних користувачів (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твій код
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
```

## Example 5

Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

```js
const getUserWithEmail = (users, email) => {
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
```

## Example 6

Отримати масив користувачів які у вікову категорію від `min` до `max` років
(поле `age`).

```js
const getUsersWithAge = (users, min, max) => {
  // твій код
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]
```

## Example 7

Отримати загальну суму балансу (поле `balance`) всіх користувачів.

```js
const calculateTotalBalance = users => {
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916
```

## Example 8

Масив імен всіх користувачів, у яких є один із зазначеним ім'ям.

```js
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

## Example 9

Масив імен (поле `name`) людей, відсортованих залежно від кількості їх друзів
(поле `friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

## Example 10

Отримати масив усіх умінь всіх користувачів (поле `skills`), при цьому не має
бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

```js
const getSortedUniqueSkills = users => {
  // твій код
};

console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'
```

# Practice 3 - CHARACTERS

Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
`splice` і т. д.) виконують такі операції над масивом об'єктів героїв із файлу
[characters.js](./characters.js).

## MAP

1. Get an array of all names
2. Get an array of all heights
3. Get an array of objects with just name and height properties
4. Get an array of all first names

## REDUCE

1. Get the total mass of all characters
2. Get the total height of all characters
3. Get the total number of characters in all the character names
4. Get the total number of characters by eye color (hint. a map of eye color to
   count)

## FILTER

1. Get characters with mass greater than 100
2. Get characters with height less than 200
3. Get all male characters Get all female characters

## SORT

1. Sort by name
2. Sort by mass
3. Sort by height
4. Sort by gender

## EVERY

1. Does every character have blue eyes?
2. Does every character have mass more than 40?
3. Is every character shorter than 200?
4. Is every character male?

## SOME

1. Is there at least one male character?
2. Is there at least one character with blue eyes?
3. Is there at least one character taller than 200?
4. Is there at least one character that has mass less than 50?

## Practive 4 - ORDER

Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
`splice` і т. д.) виконують такі операції над масивом об'єктів героїв із файлу
[order.js](./order.js).

```js
/**
 * Calculate the cost of products by category type of product
 * @param {Array} items - items of order
 * @param {String} productType  - product category
 * @returns Total price by product category
 */
function calculateProductsAmoutByType() {}

function calculateTotalOrderPrice() {}

/**
 * Calculate the final cost of the order after all discounts have been applied.
 * @param {Array} items - items of order
 * @param {Object} shipping - shipping method
 * @returns Total cost
 */
function calculateTotalOrderPriceAfterDiscout() {
  const orderAmount = calculateTotalOrderPrice();
}

/**
 * Find out the number of different products that have the word {search word} in product name
 * @param {Array} items - items of order
 * @param {String} searchWord - search word
 * @returns Number of orders which exist with search word
 */
function findSearchWordInItemName() {}

/**
 * Check that a product with some id exists or not in order.
 * @param {Array} items - items of order
 * @param {Number} searchId - product id
 * @returns Boolean
 */
function isIdIncludesInOrder() {}

console.log(
  'calculateOfProduct',
  calculateProductsAmoutByType(order, 'clothing')
); // 15.99
console.log('calculateTotalOrderPrice', calculateTotalOrderPrice(order)); // 510.49
console.log(
  'calculateTotalOrderPriceAfterDiscout',
  calculateTotalOrderPriceAfterDiscout(order)
); // 429.96
console.log(
  'findSearchWordInItemName',
  findSearchWordInItemName(order, 'Nike')
); // 2
console.log('isIdIncludesInOrder', isIdIncludesInOrder(order, 389)); // true
```
