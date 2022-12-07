import users from './users.js';
import cars from './cars.js';
import characters from './characters.js';
// Task 1
// Отримати масив імен всіх користувачів (поле name).
// console.log(getUserNames(usersData))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
// const getUserNames = usersData => {
//   return usersData.map(user => user.name);
// };
// console.log('allNames', getUserNames(users));

// // Task 2
// // Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).
// // console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]
// const getUsersWithEyeColor = (usersData, color) => {
//   return usersData.filter(user => user.eyeColor === color);
//   //   return usersData.reduce((acc, el) => {
//   //     if (el.eyeColor === color) {
//   //       acc.push(el.name);
//   //     }
//   //     return acc;
//   //   }, []);
// };
// console.log(
//   'allUsersWithSimilarEyesColor',
//   getUsersWithEyeColor(users, 'blue')
// );

// // Task 3
// // Отримати масив імен користувачів за статтю (поле gender)
// // console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
// const getUsersWithGender = (usersData, gender) => {
//   return users.filter(user => user.gender === gender).map(user => user.name);
//   //   return usersData.reduce((acc, el) => {
//   //     if (el.gender === gender) {
//   //       acc.push(el.name);
//   //     }
//   //     return acc;
//   //   }, []);
// };
// console.log('getUsersWithGender', getUsersWithGender(users, 'male'));

// // Task 4
// // Отримати масив тільки неактивних користувачів (поле єактивним).
// // console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]
// const getInactiveUsers = usersData => {
//   return usersData.filter(user => user.isActive);
// };
// console.log('getInactiveUsers', getInactiveUsers(users));

// // Task 5
// // Отримати користувача (не масив) по email (поле email, він унікальний).
// const getUserWithEmail = (usersData, email) => {
//   return usersData.find(user => user.email === email);
// };
// console.log(
//   'getUserWithEmail',
//   getUserWithEmail(users, 'shereeanthony@kog.com')
// ); // {об'єкт користувача Sheree Anthony}
// // console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {об'єкт користувача Elma Head}

// // Task 6
// // Отримати масив користувачів віком від min до max
// const getUsersWithAge = ({ usersData, min, max }) => {
//   return usersData.filter(user => min <= user.age && user.age <= max);
//   //===================================================
//   //   return usersData.reduce((acc, user) => {
//   //     if (min <= user.age && user.age <= max) acc.push(user);
//   //     return acc;
//   //   }, []);
// };
// console.log(
//   'getUsersWithAge',
//   getUsersWithAge({ usersData: users, min: 20, max: 30 })
// ); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// // console.log( getUsersWithAge( { usersData: users, min: 30, max: 40 }); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// // Task 7
// // Отримати загальну суму балансу (поле balance) всіх користувачів.
// const calculateTotalBalance = usersData => {
//   return usersData.reduce((acc, user) => {
//     return acc + user.balance;
//   }, 0);
// };
// console.log('calculateTotalBalance', calculateTotalBalance(users)); // 20916

// // Task 8
// // Масив імен всіх користувачів які мають один із зазначеним ім'ям.
// const getUsersWithFriend = (usersData, friendName) => {
//   return usersData
//     .filter(user => user.friends.some(friend => friend === friendName))
//     .map(user => user.name);
//   //   return usersData.filter((user) => user.friends.includes(friend));
// };
// console.log('getUsersWithFriend', getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 9
// Масив імен (поле name) людей, відсортованих залежно кількості їх друзів (поле friends)
//   const getNamesSortedByFriendsCount = (usersData) => {
//     return usersData
//       .sort((a, b) => a.friends.length - b.friends.length)
//       .map((user) => user.name);
//   };
//   console.log(
//     "getNamesSortedByFriendsCount",
//     getNamesSortedByFriendsCount(users)
//   );
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Task 10
// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не повинно бути
// Уміння, що повторюються, і вони повинні бути відсортовані в алфавітному порядку.
//   const getSortedUniqueSkills = (usersData) => {
//     return usersData
//       .map((user) => user.skills)
//       .reduce((allSkills, user) => [...allSkills, ...user], [])
//       .filter((elem, index, array) => array.indexOf(elem) === index)
//       .sort((b, a) => b.localeCompare(a, "en"));
//   };
//   console.log("getSortedUniqueSkills", getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// Задание 1
// Получить массив имен всех пользователей (поле `name`).

const getUserNames = users => {
  return users.map(user => user.name);
};

// console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// # Задание 2
// Получить массив объектов пользователей по цвету глаз (поле `eyeColor`).

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

// console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// # Задание 3
// Получить массив имен пользователей по полу (поле `gender`).

const getUsersWithGender = (users, gender) => {
  return users.filter(user => user.gender === gender).map(user => user.name);
};

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// # Задание 4
// Получить массив только неактивных пользователей (поле `isActive`).

const getInactiveUsers = users => {
  return users.filter(user => user.isActive);
};

// console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// # Задание 5
// Получить пользоваля (не массив) по `email` (поле `email`, он уникальный).

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

// console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
// console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// # Задание 6
// Получить массив пользователей попадающих в возрастную категорию от `min` до `max` лет (поле `age`).

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age >= min && user.age <= max);
};

// console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
// console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// # Задание 7
// Получить общую сумму баланса (поле `balance`) всех пользователей.

const calculateTotalBalance = users => {
  return users.reduce((acc, user) => acc + user.balance, 0);
};

// console.log(calculateTotalBalance(users)); // 20916

// # Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user['friends'].includes(friendName))
    .map(user => user.name);
};

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// # Задание 9
// Массив имен (поле `name`) людей, отсортированных в зависимости от количества их друзей (поле `friends`)

const getNamesSortedByFriendsCount = users => {
  const sortByNumOfFriends = (userOne, userTwo) =>
    userOne['friends'].length - userTwo['friends'].length;
  return users.sort(sortByNumOfFriends);
};

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// # Задание 10
// Получить массив всех умений всех пользователей (поле `skills`), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users => {
  const arr = [];
  users.flatMap(user => {
    arr.push(...user.friends);
  });
  console.log(arr);
  return arr.filter((user, index, arr) => arr.indexOf(user) === index);
  //   allFriends.push(...user.friends);
  //   return allFriends;

  //

  //   return users
  //     .reduce((allSkills, user) => {
  //       allSkills.push(...user.skills);
  //       return allSkills;
  //     }, [])
  //     .filter((user, index, arr) => arr.indexOf(user) === index)
  //     .sort();
  //   let skillsNotUnique = users.reduce(
  //     (acc, { skills }) => [...acc, ...skills],
  //     []
  //   );

  //   skillsNotUnique = skillsNotUnique.sort();

  //   return [...new Set(skillsNotUnique)];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

// # Practice 1 - CARS

// Напиши функції які за допомогою методів масиву, що перебирають (жодних `for`,
// `splice` і т. д.) виконують такі операції над масивом об'єктів користувачів із
// файлу [cars.js](./cars.js).

// ## Example 1 - Метод map

// Нехай функція `getModels` повертає масив моделей (поле model) всіх автомобілів.

const getModels = cars => cars.map(car => car.model);

// console.table(getModels(cars));

// ## Example 2 - Метод map

// Нехай функція `makeCarsWithDiscount` повертає новий масив об'єктів із змінним
// значенням властивості `price` залежно від переданої знижки.

const makeCarsWithDiscount = (cars, discount) =>
  cars.map(car => car.price - car.price * discount);

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

// ## Example 3 - Метод filter

// Нехай функція `filterByPrice` повертає масив автомобілів ціна яких менша ніж
// значення параметра `threshold`.

const filterByPrice = (cars, threshold) =>
  cars.filter(car => car.price < threshold);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

// ## Example 4 - Метод filter

// Нехай функція `getCarsWithDiscount` повертає масив автомобілів властивість
// onSale яких true.

const getCarsWithDiscount = cars => cars.filter(car => car.onSale);

// console.table(getCarsWithDiscount(cars));

// ## Example 5 - Метод filter

// Нехай функція `getCarsWithType` повертає масив автомобілів тип яких збігається
// зі значенням параметра `type`.

const getCarsWithType = (cars, type) => cars.filter(car => car.type === type);

// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

// ## Example 6 - Метод find

const getCarByModel = (cars, model) => cars.find(car => car.model === model);

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

// ## Example 7 - Метод sort

// Нехай функція `sortByAscendingAmount` повертає новий масив автомобілів
// відсортований за зростанням значення якості `amount`.

const sortByAscendingAmount = cars => cars.sort((a, b) => b.amount - a.amount);

// console.table(sortByAscendingAmount(cars));

// ## Example 8 - Метод sort

// Нехай функція `sortByDescendingPrice` повертає новий масив автомобілів
// відсортований за зменшенням значення властивості `price`.

const sortByDescendingPrice = cars => cars.sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

// ## Example 9 - Метод sort

// Нехай функція `sortByModel` повертає новий масив автомобілів відсортований за
// назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від
// значення параметра `order`.

const sortByModel = (cars, order) =>
  order === 'asc'
    ? cars.sort((a, b) => a.model.localeCompare(b.model))
    : cars.sort((a, b) => b.model.localeCompare(a.model));

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

// ## Example 10 - Метод reduce

// Нехай функція `getTotalAmount` повертає загальну кількість автомобілів (значення
// властивостей `amount`).

const getTotalAmount = cars =>
  cars.reduce((total, car) => (total += car.price), 0);

// console.log(getTotalAmount(cars));

// ## Example 11 - Ланцюжки методів

// Нехай функція `getAvailableCarNames` повертає масив моделей автомобілів, але
// тільки тих, які зараз на розпродажі.

const getModelsOnSale = cars =>
  cars.filter(car => !car.onSale).map(car => car.model);

// console.table(getModelsOnSale(cars));

// ## Example 12 - Ланцюжки методів

// Нехай функція `getSortedCarsOnSale` повертає масив автомобілів на розпродажі
// (Властивість onSale), відсортованих за зростанням ціни.

const getSortedCarsOnSale = cars =>
  cars
    .filter(car => car.onSale)
    .sort((a, b) => a.price - b.price)
    .map(car => car.model);

// console.table(getSortedCarsOnSale(cars));

///characters
// ## MAP

// 1. Get an array of all names
const allNames = characters => characters.map(character => character.name);
// console.log(allNames(characters));
// 2. Get an array of all heights
const allHeights = characters => characters.map(character => character.height);
// console.log(allHeights(characters));
// 3. Get an array of objects with just name and height properties
const heightAndName = characters =>
  characters.map(character => {
    return { [character.name]: character.height };
  });
// console.log(heightAndName(characters));
// 4. Get an array of all first names
const allFirstNames = characters =>
  characters.map(character => character.name.split(' ')[0]);
// console.log(allFirstNames(characters));
// ## REDUCE

// 1. Get the total mass of all characters
const totalMassOfAll = characters =>
  characters.reduce((total, character) => (total += Number(character.mass)), 0);
// console.log(totalMassOfAll(characters));
// 2. Get the total height of all characters
const totalHeightOfAll = characters =>
  characters.reduce(
    (total, character) => (total += Number(character.height)),
    0
  );
// console.log(totalHeightOfAll(characters));
// 3. Get the total number of characters in all the character names
const totalSymbolsInNames = characters =>
  characters.reduce(
    (total, character) => (total += character.name.split('').length),
    0
  );
// console.log(totalSymbolsInNames(characters));
// 4. Get the total number of characters by eye color (hint. a map of eye color to
//    count)
const eyeColorCount = characters =>
  characters
    .map(({ eye_color }) => eye_color)
    .reduce(
      (total, color) => {
        total[color] ? (total[color] += 1) : (total[color] = 1);
        return total;
      },

      {}
    );

// console.log(eyeColorCount(characters));

// ## FILTER

// 1. Get characters with mass greater than 100
const massGreaterThan = characters =>
  characters.filter(character => character.mass > 100);

// console.log(massGreaterThan(characters));
// 2. Get characters with height less than 200
const heightLessThan = characters =>
  characters.filter(character => character.height < 200);

// console.log(heightLessThan(characters));
// 3. Get all male characters Get all female characters
const getAllFemaleCharacters = characters =>
  characters.filter(character => character.gender === 'female');

// console.log(getAllFemaleCharacters(characters));

// ## SORT

// 1. Sort by name
// 2. Sort by mass
// 3. Sort by height
// 4. Sort by gender

// ## EVERY

// 1. Does every character have blue eyes?
// 2. Does every character have mass more than 40?
// 3. Is every character shorter than 200?
// 4. Is every character male?

// ## SOME

// 1. Is there at least one male character?
// 2. Is there at least one character with blue eyes?
// 3. Is there at least one character taller than 200?
// 4. Is there at least one character that has mass less than 50?
