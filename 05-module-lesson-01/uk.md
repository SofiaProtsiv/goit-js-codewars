# Модуль 5. Заняття 9. Контекст виклику функції та this

## Example 1 - Майстерня коштовностей

Напишіть метод `calcTotalPrice(stoneName)`, який приймає назву каменю і
розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та
кількістю з властивості `stones`.

```js
const chopShop = {
  stones: [
    { name: 'Emerald', price: 1300, quantity: 4 },
    { name: 'Diamond', price: 2700, quantity: 3 },
    { name: 'Sapphire', price: 1400, quantity: 7 },
    { name: 'Ruby', price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {},
};

console.log(chopShop.calcTotalPrice('Emerald')); // 5200
console.log(chopShop.calcTotalPrice('Diamond')); // 8100
console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
console.log(chopShop.calcTotalPrice('Ruby')); // 1600
```

## Example 2 - Телефонна книга

Напиши метод `add()`, який приймає об'єкт юзера і додає його в список контактів
`contacts`. На виході метод add повертає масив об'єктів(contacts) з доданими
властивостивостями `id` та `createdAt`, а також `list` зі значенням "default"
якщо немає такої властивості.

```js
const phonebook = {
  contacts: [],
  add() {
    ...
  },
  generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
  },
  getDate() {
    return Date.now();
  },
};

console.log(
  phonebook.add({
    name: 'Mango',
    email: 'mango@mail.com',
    list: 'friends',
  })
);
console.log(
  phonebook.add({
    name: 'Poly',
    email: 'poly@hotmail.com',
  })
);
```

## Example 3 - Калькулятор

Створіть об'єкт `calculator` з трьома методами:

- `read(a, b)`- приймає два значення та зберігає їх як властивості об'єкта.
- `add()` - повертає суму збережених значень.
- `mult()` - перемножує збережені значення та повертає результат.

```js
const calculator = {};
```

## Example 4 - Комплексні завдання

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
