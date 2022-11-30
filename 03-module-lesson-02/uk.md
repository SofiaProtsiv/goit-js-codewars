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

## Example 8 - mergeObjects

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

## Example 9 - Пошук max i min елемента

Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше і найменше число
в масиві, використай spreed оператор.

```js
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
```

## Example 10 - Пошук max i min елемента

Напиши функцію `calculateSumOfNumbers()`яка рахує суму чисел, використай spreed
оператор.

```js
function calculateSumOfNumbers() {}

console.log(calculateSumOfNumbers(2, 17, 94, 1, 23, 37)); // 174
console.log(calculateSumOfNumbers(1, 2, 3, 4, 5)); // 15
```
