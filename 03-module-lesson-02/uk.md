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

## Example 3 - Деструктуризація

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

## Example 4 - Операція spread

У нас є об'єкт `salaries` із зарплатами.

Створіть функцію `topSalary (salaries)`, яка повертає ім'я найвищого працівника.

Якщо об'єкт salaries порожній, потрібно повернути null. Якщо кілька
високооплачуваних співробітників можна повернути будь-якого з них.

`P.S. Використовуйте Object.entries та деструктурування, щоб перебрати пари ключ/значення.`

```js
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
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
  transformUsername({
    id: 1,
    firstName: 'Jacob',
    lastName: 'Mercer',
    email: 'j.mercer@mail.com',
    friendCount: 40,
  })
);

console.log(
  transformUsername({
    id: 2,
    firstName: 'Adrian',
    lastName: 'Cross',
    email: 'a.cross@hotmail.com',
    friendCount: 20,
  })
);
```

## Example 7 - mergeObjects

У нас є об'єкт foo i bar, об'єднайте їх в 1 об'єкт і додайте ще 2 властивості в
новостворений об'єкт:

```js
  esperanto: 'saluton',
  korean: 'annyeong'
```

Очікуваний результат => const newArr = { english: 'howdy', french: 'bonjour',
japanese: 'konnichiwa', german: 'gutentag', esperanto: 'saluton', korean:
'annyeong' }

Пояснити що буде з властивістю english в новому об'єкті і як це можна зробити
без spreed

```js
const foo = {
  english: 'hello',
  french: 'bonjour',
  japanese: 'konnichiwa',
};
const bar = {
  english: 'howdy',
  german: 'gutentag',
};
```

## Example 8 - Пошук max i min елемента

Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше і найменше число
в масиві, використай spread оператор.

```js
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
```

## Example 9 - Updates the values of the properties

```js
const user = {};

const createProfile = data => {
  user{...data};
  return user
};

const updateLoginData = () => {};

const deleteProfile = () => {};

console.log(createProfile({ email: 'sofia@gmail.com', password: 'sofia1111' }));

console.log(updateLoginData({ email: 'new@gmail.com' }));
console.log(updateLoginData({ password: '1111' }));

console.log(deleteProfile());
```

## Example 10 - hard

You need to use the object with an order to solve the next tasks:

1. Calculate the cost of products by specific type of product (type will be
   passed as a parameter).
2. Calculate the original order amount (without discounts).
3. Calculate the final cost of the order after all discounts have been applied.
4. Find out the number of different products that have the word “Nike” in the
   middle of the name (regular expression should be used for it).
5. Write a function, which will check that a product with some id exists or not
   in order (id will be passed as a parameter).

Also, the following conditions should be met: ● If the order amount is more than
$100, free shipping applies. ● If the total number of products is greater than
or equal to 20, a 13% discount is applied to the order. ● Discount and free
shipping can be combined together.

```js
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
