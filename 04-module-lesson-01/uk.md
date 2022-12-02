# Модуль 4. Заняття 7. Коллбеки. Стрілочні функції. forEach

## Example 1 - Коллбек функції

Напишіть наступні функції:

- `createProduct(obj, callback)` - приймає об'єкт товару без id, а також
  коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор
  у властивість `id` та викликає коллбек передаючи йому створений об'єкт.
- `logProduct(product)` - колббек приймаючий об'єкт продукту і логуючий його в
  консоль
- `logTotalPrice(product)` - колббек, що приймає об'єкт продукту і логіює
  загальну вартість товару в консоль

```js
// Рішення
function createProduct() {}

function logProduct() {}

function logTotalPrice() {}

createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);
```

## Example 2 - Коллбек функції

Додайте об'єкт `account` методи `withdraw(amount, onSuccess, onError)` та
`deposit(amount, onSuccess, onError)`, де перший параметр це сума операції, а
другий та третій - коллбеки.

Метод `withdraw` викликає onError якщо amount більше TRANSACTION_LIMIT або
this.balance, і onSuccess в іншому випадку.

Метод `deposit` викликає onError якщо amount більше TRANSACTION_LIMIT або менше
або дорівнює нулю, і onSuccess в іншому випадку.

```js
// Рішення
const TRANSACTION_LIMIT = 1000;

const account = {
  username: 'Jacob',
  balance: 400,
  withdraw() {},
  deposit() {},
};

function handleSuccess() {}
function handleError() {}

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);
```

## Example 3 - Коллбек функції

Напишіть функцію `each(array, callback)`, яка першим параметром очікує масив, а
другим - функцію, яка застосовується до кожного елемента масиву. Функція each
повинна повернути новий масив, елементами якого будуть результати виклику
коллбека. Використай `forEach()` для перебору масива

```js
// Рішення
function each() {}

console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value * 2;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return value - 10;
  })
);
console.log(
  each([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.ceil(value);
  })
);
console.log(
  each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
    return Math.floor(value);
  })
);
```

## Example 4 - Метод forEach

Створи стрілочну функцію `logItems()`, яка виводитьв консоль елементи масива,
зроби перебір за допомогою методу `forEach()`.

```js
logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Example 5 - Iterate an object

За допомогою методу `forEach()` виведи всі name з об'єкта employees капслоком.
Потім виведи у кого зарплата більше 12000 А в кінці підрахуй скільки компанія
виплачує працівникам, скільки працівників є у компанії та виведи імена
працівників, до прикладу `Company pay 23000 for 2 employeers: Alex,Clark`

```js
const employees = [
  {
    id: 101,
    name: 'Alex',
    sal: 10000,
  },
  {
    id: 102,
    name: 'Clark',
    sal: 13000,
  },
  {
    id: 103,
    name: 'John',
    sal: 12000,
  },
  {
    id: 104,
    name: 'Tony',
    sal: 20000,
  },
];
```

## Example 6 - Count products \*\*

Підрахуй і виведи новий об'єкт в якому буде підпраховано скільки яких продуктів
в масиві `products`

```js
// Oчікуваний результат
// {
//   apple: 2,
//   banana: 2,
//   avocado: 1,
//   cherry:1
// }

const products = ['apple', 'apple', 'banana', 'banana', 'avocado', 'cherry'];

const countProducts = products => {
  ...
}
```

## Example 7 - Count vowel

Напишіть функцію під назвою `vowelCount`, яка приймає рядок і повертає об’єкт із
ключами як голосною та значеннями як кількість разів, коли голосна з’являється в
рядку. Ця функція має бути нечутливою до регістру, тому мають враховуватися малі
та великі літери

```js
console.log(vowelCount('Elie')); // {e:2,i:1};
console.log(vowelCount('Tim')); // {i:1};
console.log(vowelCount('Matt')); // {a:1})
console.log(vowelCount('hmmm')); // {};
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1};
```

## Example 8 - Add Key And Value

Напишіть функцію під назвою `addKeyAndValue`, яка приймає масив об’єктів, та
обєкт ключ,значення в результаті повертає масив, переданий у функцію з новим
ключем і значенням, доданим для кожного об’єкта

```js
console.log(
  addKeyAndValue(
    [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    { key: 'title', value: 'instructor' }
  )
); // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
```

## Example 9 - groupBy()

Напишіть функцію `groupBy()`, яка групує елементи з масиву за значенням, що
повертається зворотним викликом, коли елемент із масиву передається як аргумент.

```js
const input = [
  {
    name: 'John',
    yearOfBirth: 1988,
    placeOfBirth: 'New York',
  },
  {
    name: 'Nancy',
    yearOfBirth: 1963,
    placeOfBirth: 'New York',
  },
  {
    name: 'John',
    yearOfBirth: 1980,
    placeOfBirth: 'Toronto',
  },
];

console.log(groupBy(input, objectEl => objectEl.name));
//Очікуваний резульат:
// {
//   ❗️John: [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     }
//   ],
//   ❗️Nancy: [
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     }
//   ]
// }

console.log(groupBy(input, objectEl => isOdd(objectEl.yearOfBirth)));
//Очікуваний резульат:
// {
//   ❗️false: [
//     {
//       name: 'John',
//       yearOfBirth: 1988,
//       placeOfBirth: 'New York',
//     },
//     {
//       name: 'John',
//       yearOfBirth: 1980,
//       placeOfBirth: 'Toronto',
//     }
//   ],
//   ❗️true: [
//     {
//       name: 'Nancy',
//       yearOfBirth: 1963,
//       placeOfBirth: 'New York',
//     }
//   ]
// }
```
