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

## Example 2 - метод Object.values()

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

## Example 3 - Масив об'єктів

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

## Example 4 - IsEmpty

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

## Example 4 - calculator

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

## Example 5 - Комплексні завдання

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

## Example 6 - Комплексні завдання

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
