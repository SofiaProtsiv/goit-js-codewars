# Модуль 3. Заняття 1. Об'єкти

## Example 1 - Основи об'єктів

Напиши скрипт, який для об'єкта `user`, послідовно:

- додає поле `mood` зі значенням `'happy'`
- замінює значення `hobby` на `'skydiving'`
- замінює значення `premium` на `false`
- виводить вміст об'єкта `user` у форматі `ключ:значення` використовуючи
  `Object.keys()` та `for...of`

### Код

```js
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
```

## Example 2 - метод Object.keys()

Напиши функцію `countProps(obj)`, що вираховує кількість властивостей в об'єкті.
Функція повертає число – кількість властивостей.

Виклики функцій для перевірки працездатності твоєї реалізації:

```js
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
```

## Example 3 - метод Object.values()

Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція
рахує загальну суму зарплати працівників і повертає її. Якщо об'єкт `employees`
порожній, то результат має бути 0.

### Код

```js
const countTotalSalary = function (employees) {
  // твій код
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
```

## Example 4 - for...in

Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
та повертає ім'я найпродуктивнішого (який виконав найбільше завдань).
Співробітники і кількість виконаних завдань містяться як властивості об'єкта у
форматі "ім'я": "кількість завдань".

Виклики функцій для перевірки працездатності твоєї реалізації.

```js
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
```

## Example 5 - Масив об'єктів

Напишіть функцію `calcTotalPrice(stones, stoneName)`, яка приймає масив об'єктів
та рядок з назвою каменю. Функція рахує і повертає загальну вартість каміння з
таким ім'ям, ціною та кількістю з об'єкта

### Код

```js
const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Щебінь', price: 200, quantity: 2 },
];
```

## Example 6 - IsEmpty

Напишіть метод, який робить поверхневу перевірку, чи об’єкт порожній

- Очікуваний результат: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) =>
  false
- Порожні значення: "", null, NaN, undefined

```js
const isEmpty = (object) => {
      ...
};
const data = { a: 1, b: undefined };
const data2 = { a: undefined };

console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
```

## Example 7 - calculator

Створіть об'єкт calculator із трьома методами

- read(a, b) - приймає два аргументи та зберігає їх як властивості об'єкта
- sum() повертає суму збережених значень
- mult() перемножує збережені значення та повертає результат

```js
const calculator = {
  read(a, b) {},
  sum() {},
  mult() {},
};
```

## Example 8 - getAllPropValues

Напиши функцію `getAllPropValues(arr, prop)`, яка отримує масив об'єктів та ім'я
ключа. Повертає масив значень певного поля prop кожного об'єкта в масиві.

Виклики функцій для перевірки працездатності твоєї реалізації.

```js
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []
```

## Example 9 - Комплексні завдання

Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт `account`
в якому необхідно реалізувати методи для роботи з балансом та історією
транзакцій.

```js
/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Кожна транзакція це об'єкт із властивостями: id, type та amount
 */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  /*
   * Метод створює та повертає об'єкт транзакції.
   * Приймає суму та тип транзакції.
   */
  createTransaction(amount, type) {},

  /*
   * Метод, що відповідає за додавання суми до балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій
   */
  deposit(amount) {},

  /*
   * Метод, що відповідає за зняття суми з балансу.
   * Приймає суму транзакції.
   * Викликає createTransaction для створення об'єкта транзакції
   * після чого додає його до історії транзакцій.
   *
   * Якщо amount більше ніж поточний баланс, виводь повідомлення
   * про те, що зняття такої суми не можливе, недостатньо коштів.
   */
  withdraw(amount) {},

  /*
   * Метод повертає поточний баланс
   */
  getBalance() {},

  /*
   * Метод шукає та повертає об'єкт транзакції по id
   */
  getTransactionDetails(id) {},

  /*
   * Метод повертає кількість коштів
   * певного типу транзакції з усієї історії транзакцій
   */
  getTransactionTotal(type) {},
};
```

## Example 10 - Комплексні завдання

- Отримати список моделей задопомогою функції `getModels`:

- Замінити назву моделі задопомогою функції `changeModel`

- Отримати загальну ціну всіх машин за допомогою функції `getTotalPrice`

```js
const vehicles = [
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
  { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
  { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
  { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
  { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
  { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
  { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
  { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
];
function getModels() {}
function changeModel() {}

function getTotalPrice() {}

getModels(vehicles);

changeModel(vehicles, 'Mazda 6', 'Hello world');
changeModel(vehicles, 'Fusion', 'AAAAAA');
changeModel(vehicles, 'F-150', 'BBBBBB');

getTotalPrice(vehicles);
```
