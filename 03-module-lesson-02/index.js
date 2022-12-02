// function includes(array, value) {
//   let result = false;
//   for (let i = 0; i <= array.length; i++) {
//     if (i === array.indexOf(value)) {
//       result = true;
//     }
//   }
//   return result;
// }
// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(
//   includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
// );

// function calculateSumOfNumbers(...numbers) {
//   let total = 0;
//   for (const iterator of numbers) {
//     total += iterator;
//   }
//   return total;
// }

// console.log(calculateSumOfNumbers(2, 17, 94, 1, 23, 37)); // 94
// console.log(calculateSumOfNumbers(1, 2, 3, 4, 5)); // 15

// let data = {
//   email: '',
//   password: '',
// };
// console.log(data);
// function login(loginData) {
//   data = {
//     ...loginData,
//   };
//   return data;
// }
// console.log(login({ email: 'sofia', password: '1111' }));

// console.log(data);
// const foo = {
//   english: 'hello',
//   french: 'bonjour',
//   japanese: 'konnichiwa',
// };
// const bar = {
//   english: 'howdy',
//   german: 'gutentag',
// };
// const baz = {
//   ...foo,
//   ...bar,
//   esperanto: 'saluton',
//   korean: 'annyeong',
// };

// console.log(baz);

// function transformUsername({ firstName, lastName, ...otherProps }) {
//     return {
//       fullName: `${firstName} ${lastName}`,
//       ...otherProps,
//     };
//   }

///function transformUsername({ firstName, lastName, ...otherProps }) {

/////////////
// function createContact(partialContact) {
//     return {
//       list: 'default',
//       ...partialContact,
//       id: generateId(),
//       createdAt: Date.now(),
//     };
//   }

//////
// function getStockReport({ companyName, stock }) {
//     let total = 0;
//     for (const value of Object.values(stock)) {
//       total += value;
//     }
//     return `${companyName} has ${total} items in stock`;
//   }

//////
// function printContactsInfo() {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');
//     for (let i = 0; i < nameList.length; i += 1) {
//       console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
//   }

//////////
// function calcBMI(weight, height) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
//   }

// Task 5
// Напиши функцию которая будет считать факториал числа, обязательно использовать рекурсию

// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

// function topSalary(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

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

// Task 11
// На вході масив чисел, наприклад: arr = [1,2,3,4,5].
// Напишіть функцію getSums(arr), яка повертає масив його часткових сум.
// Інакше кажучи, виклик getSums(arr) повинен повертати новий масив з тієї ж кількості елементів,
// у якому кожної позиції має бути сума елементів arr до цієї позиції включно.
// Тобто:
// для arr = [1, 2, 3, 4, 5]
// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
// Функція має модифікувати вхідний масив.
// У рішенні використовуйте метод arr.reduce.
//   const getSums = (arr) =>
//     arr.reduce((acc, num, i) => (i > 0 ? [...acc, acc[i - 1] + num] : [num]), []);
//   console.log(getSums([1, 2, 3, 4, 5])); // 1,3,6,10,15
//   console.log(getSums([-2, -1, 0, 1])); // -2,-3,-3,-2

// // Task 1
// // Додати метод getinfo в об'єкт user, який повертатиме інфу про користувача у форматі
// // Name: Peter. Surname: Parker. Age: 22. Position: spider-man.
// const user = {
//   name: "Peter",
//   surname: "Parker",
//   age: 22,
//   position: "spider-man",
// };
// const user2 = {
//   name: "Batman",
//   surname: "Hz",
//   age: 36,
//   position: "batman",
// };

// const getinfo = (usersData) => {
//   console.log(Object.entries(usersData).toString());
// };
// console.log("getinfo", getinfo(user));
// Task
// Напиши функцию, которая будет возвращать шаблонную строку из значений объекта
// const user = {
//     name: 'Peter',
//     surname: 'Parker',
//     age: 22,
//     position: 'spider-man'
// }
// console.log(getValuesString(user)) // 'Name: Peter, Surname: Parker, Age: 22, Position: spider-man'

// вызов функции для проверки работоспособности
// console.log(user.getInfo())

// Task 2
// Нужно написать функцию которая принимает 1 параметр key, которая будет перебирать объект
// если у объекта есть такой ключ - вернет true
// Есть 2 варианта решения, сначала напишем функцию, потом решим простым способом

// const obj = {
//     name: 'Igor',
//     car:  'Mercedes',
//     carColor: 'black'
// }
// const getBool = (key) => key in obj
// console.log(getBool())

// Task 3
// Нужно перебрать объекты и вывести имя лучшего сотрудника

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence
// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango
// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// const user = {};

// const createProfile = () => {
//   const email = prompt('Enter your email: ').trim();
//   const password = prompt('Enter your password: ').trim();
//   const data = {
//     email,
//     password,
//   };
//   if (email && password) {
//     const approve = confirm('Create new profile?');
//     approve ? Object.assign(user, data) : alert('Smth went wrong☹️🥲');
//     return user;
//   } else {
//     return alert('Enter login data!!!');
//   }
// };

// const updateLoginData = () => {
//   const parameter = prompt('What do you want update: email or password?')
//     .trim()
//     .toLowerCase();
//   if (parameter === 'email' || parameter === 'password') {
//     const data = prompt(`Enter your ${parameter}: `).trim();
//     if (Object.keys(user).length !== 0 && data) {
//       if (parameter === 'email' || parameter === 'password') {
//         Object.assign(user, { [parameter]: data });
//       }
//     }
//   }

//   return user;
// };

// const deleteProfile = () => {
//   for (const prop of Object.keys(user)) {
//     delete user[prop];
//   }
//   return user;
// };
// console.log(createProfile());

// console.log(updateLoginData());

// console.log(deleteProfile());

const order = {
  items: [
    {
      id: 248,
      type: 'shoes',
      name: 'Puma RS-X',
      quantity: '3',
      originalPrice: '120.00',
    },
    {
      id: 220,
      type: 'shoes',
      name: 'The Nike Monarch',
      quantity: '1',
      originalPrice: '87.50',
      salePrice: '51.99',
    },
    {
      id: 231,
      type: 'shoes',
      name: 'Nike Air Max Plus',
      quantity: '4',
      originalPrice: '187.50',
      salePrice: '151.99',
    },
    {
      id: 389,
      type: 'clothing',
      name: 'Puma T-shirt',
      quantity: '1',
      originalPrice: '15.99',
    },
    {
      id: 389,
      type: 'accessories',
      name: 'Watches TISSOT',
      quantity: '5',
      originalPrice: '99.50',
      salePrice: '89.99',
    },
  ],
  shipping: {
    id: 'shipping1',
    name: 'US Delivery',
    originalPrice: '11.00',
  },
};

/**
 * Calculate the cost of products by category type of product
 * @param {Array} items - items of order
 * @param {String} productType  - product category
 * @returns Total price by product category
 */
function calculateProductsAmoutByType({ items }, productType) {
  let acc = 0;
  // for (const { originalPrice, type } of items) {
  //   type === productType ? (acc += Number(originalPrice)) : (acc += 0);
  // }
  items.forEach(({ originalPrice, type }) => {
    type === productType ? (acc += Number(originalPrice)) : (acc += 0);
  });

  return acc;
}

function calculateTotalOrderPrice({ items }) {
  let acc = 0;
  // for (const { originalPrice } of items) {
  //   acc += Number(originalPrice);
  // }
  items.forEach(({ originalPrice }) => {
    acc += Number(originalPrice);
  });
  return acc;
}

/**
 * Calculate the final cost of the order after all discounts have been applied.
 * @param {Array} items - items of order
 * @param {Object} shipping - shipping method
 * @returns Total cost
 */
function calculateTotalOrderPriceAfterDiscout({ items, shipping }) {
  const orderAmount = calculateTotalOrderPrice({ items });
  const productsWithDiscount = [];
  let discountAmount = 0;

  for (const item of items) {
    if (item.salePrice) {
      productsWithDiscount.push(item);
    }
  }
  for (const { salePrice, originalPrice } of productsWithDiscount) {
    discountAmount += Number(originalPrice - salePrice);
  }

  let totalOrderPriceAfterDiscout = Number(
    (orderAmount - discountAmount).toFixed(2)
  );

  totalOrderPriceAfterDiscout =
    items.length >= 20
      ? (totalOrderPriceAfterDiscout / 100) * 13
      : totalOrderPriceAfterDiscout;

  totalOrderPriceAfterDiscout > 100
    ? totalOrderPriceAfterDiscout
    : (totalOrderPriceAfterDiscout += Number(shipping.originalPrice));

  return totalOrderPriceAfterDiscout;
}

/**
 * Find out the number of different products that have the word {search word} in product name
 * @param {Array} items - items of order
 * @param {String} searchWord - search word
 * @returns Number of orders which exist with search word
 */
function findSearchWordInItemName({ items }, searchWord) {
  let matchProducts = [];
  for (const item of items) {
    if (item.name.includes(searchWord)) {
      matchProducts.push(item);
    }
  }
  return matchProducts.length;
}

/**
 * Check that a product with some id exists or not in order.
 * @param {Array} items - items of order
 * @param {Number} searchId - product id
 * @returns Boolean
 */
function isIdIncludesInOrder({ items }, searchId) {
  let result = false;
  for (const { id } of items) {
    if (id === searchId) {
      result = true;
    }
  }
  return result;
}

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
