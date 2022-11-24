# Модуль 4. Заняття 8. Перебираючі методи масиву

## Колекція об'єктів для всіх прикладів з автомобілями

```js
const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];
```

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

# ТЗ для USERS

Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
`splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із
файлу [users.js](./users.js).

# Завдання 1

Отримати масив імен всіх користувачів (поле `name`).

```js
const getUserNames = users => {
  // твой код
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
```

# Завдання 2

Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).

```js
const getUsersWithEyeColor = (users, color) => {
  // твій код
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
```

# Завдання 3

Отримати масив імен користувачів за статтю (поле `gender`).

```js
const getUsersWithGender = (users, gender) => {
  // твій код
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
```

# Завдання 4

Отримати масив лише неактивних користувачів (поле `isActive`).

```js
const getInactiveUsers = users => {
  // твій код
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
```

# Завдання 5

Отримати користувача (не масив) по `email` (поле `email`, він унікальний).

```js
const getUserWithEmail = (users, email) => {
  // твій код
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}
```

# Завдання 6

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

# Завдання 7

Отримати загальну суму балансу (поле `balance`) всіх користувачів.

```js
const calculateTotalBalance = users => {
  // твій код
};

console.log(calculateTotalBalance(users)); // 20916
```

# Завдання 8

Масив імен всіх користувачів, у яких є один із зазначеним ім'ям.

```js
const getUsersWithFriend = (users, friendName) => {
  // твій код
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
```

# Завдання 9

Масив імен (поле `name`) людей, відсортованих залежно від кількості їх друзів
(поле `friends`)

```js
const getNamesSortedByFriendsCount = users => {
  // твій код
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
```

# Завдання 10

Отримати масив усіх умінь всіх користувачів (поле `skills`), при цьому не має
бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

```js
const getSortedUniqueSkills = users => {
  // твій код
};

console.log(getSortedUniqueSkills(users));
// ['adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit' , 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam'
```
