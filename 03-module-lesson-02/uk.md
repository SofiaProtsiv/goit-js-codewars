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
