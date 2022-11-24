# Модуль 3 Заняття 6. Деструктуризація та rest/spread

## Example 1 - Деструктуризація

Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.

```js
function calcBMI() {}

// Було
// console.log(calcBMI('88,3', '1.75'));
// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

// Очікується
console.log(
  calcBMI({
    weight: '88,3',
    height: '1.75',
  })
);
console.log(
  calcBMI({
    weight: '68,3',
    height: '1.65',
  })
);
console.log(
  calcBMI({
    weight: '118,3',
    height: '1.95',
  })
);
```

## Example 2 - Деструктуризація

Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.

```js
function printContactsInfo() {}

// Було
// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300',
// );

// Очікується
printContactsInfo({
  names: 'Jacob,William,Solomon,Artemis',
  phones: '89001234567,89001112233,890055566377,890055566300',
});
```

## Example 3 - Глибока деструктуризація

Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.

```js
function getBotReport(companyName, repairBots, defenceBots) {
  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

// Було
// console.log(getBotReport('Cyberdyne Systems', 150, 50));

// Очікується
console.log(
  getBotReport({
    companyName: 'Cyberdyne Systems',
    bots: {
      repair: 150,
      defence: 50,
    },
  })
); // "Cyberdyne Systems has 200 bots in stock"
```

## Example 4 - Деструктуризація

Перепиши функцію так, щоб вона приймала об'єкт параметрів із властивостями
`companyName` та `stock` та виводила репорт про кількість товарів на складі
будь-якої компанії.

```js
function getStockReport() {}

console.log(
  getStockReport({
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  })
); // "Cyberdyne Systems has 200 items in stock"

console.log(
  getStockReport({
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  })
); // "Belacci has 35 item in stock"
```

## Example 5 - Операція spread

Доповни функцію `createContact(partialContact)` так, щоб вона повертала новий
об'єкт контакту з доданими властивостями `id` та `createdAt`, а також `list` зі
значенням "default" якщо в `partialContact` немає такої властивості.

```js
function createContact() {}

console.log(
  createContact({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  createContact({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);

function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
```

## Example 6 - Операція rest

Напиши функцію `transformUsername(user)` так, щоб вона повертала новий об'єкт із
властивістю `fullName`, замість `firstName` та `lastName`.

```js
function transformUsername() {}

console.log(
  transformId({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformId({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
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
