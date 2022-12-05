# Модуль 5. Заняття 10. Прототипи та класи

## Example 1 - Блогер

Напиши клас `Blogger` для створення об'єкта блогера з наступними властивостями:

- `email` - пошта, рядок
- `age` - вік, число
- `posts` - кількість постів, число
- `followers` - кількість підписників
- `topics` - масив тем на яких спеціалізується блогер

Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

- Додай метод `getInfo()`, який, повертає рядок:
  `User ${пошта} is ${вік} years old and has ${кількість постів} posts`.
- Додай метод `generateId()`, який повертає
  `'_' + Math.random().toString(36).substr(2, 9)`
- Додай метод `getDate()`, який повертає `new Date()`
- Додай метод `createNewPost(value)`, який у параметрі `post` приймає об'єкт з
  постом, який потрібно додати користувачеві.

```js
const mango = new User({
  name: 'mango@mail.com',
  age: 24,
  posts: [
    {
      img: '😍',
      description: 'in love',
      location: 'Kyiv, Ukraine',
      createdAt: '03.12.2021 15:20',
      id: 'vtr76u6tg',
    },
    {
      img: '👨‍👩‍👦',
      description: 'weekend',
      location: 'Kyiv, Ukraine',
      createdAt: '15.12.2021 18:50',
      id: 'igj6u566tg',
    },
  ],
  followers: 27,
  topics: ['tech', 'cooking'],
});
console.log(mango.getInfo());
mango.createNewPost({
  img: '👩🏼‍🎤',
  description: 'Halloween party',
  tags: '@jasmine453',
});
console.log(mango.getInfo());

const poly = new User({
  name: 'poly@mail.com',
  age: 19,
  followers: 566,
  posts: [
    {
      img: '🧛🏼‍♂️',
      description: 'Vampir',
      location: 'Kyiv, Ukraine',
      createdAt: '03.09.2021 15:00',
      id: 'qwe123qwe',
    },
    {
      img: '🦸🏼‍♂️',
      description: 'superhero',
      location: 'Lviv, Ukraine',
      createdAt: '08.10.2021 19:10',
      id: 'oip898bjk5',
    },
    {
      img: '💄',
      description: 'new lipstick',
      location: 'Kyiv, Ukraine',
      createdAt: '15.11.2021 08:00',
      id: 'rty654vnn',
    },
  ],
  topics: ['sports', 'gaming', 'health'],
});
console.log(poly.getInfo());
poly.createNewPost({
  img: '🎅🏼',
  description: 'Happy new year!',
  location: 'Kyiv, Ukraine',
});
console.log(poly.getInfo());
```

## Example 2 - User

Напиши клас `User` який створює об'єкт із властивостями `login` та `email`.
Оголоси приватні властивості `#login` та `#email`, доступ до яких зроби через
гетер та сетер `login` та `email`.

```js
const mango = new User({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.login); // Mango
mango.login = 'Mangodoge';
console.log(mango.login); // Mangodoge

const poly = new User({
  login: 'Poly',
  email: 'poly@mail.com',
});

console.log(poly.login); // Poly
poly.login = 'Polycutie';
console.log(poly.login); // Polycutie
```

## Example 3 - Нотатки

Напиши клас `Notes` який керує колекцією нотаток у властивості `items`. Замітка
це об'єкт із властивостями `text` та `priority`. Додай класу статичну
властивість `Priority`, у якому зберігатиметься об'єкт із пріоритетами.

```js
{
  LOW: 'low',
  NORMAL: 'normal',
  HIGH: 'high'
}
```

Додай методи `addNote(note)`, `removeNote(text)` та
`updatePriority(text, newPriority)`.

```js
const myNotes = new Notes([]);

myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
console.log(myNotes.items);

myNotes.addNote({
  text: 'Моя друга замітка',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('Моя перша замітка');
console.log(myNotes.items);

myNotes.updateNote('Моя друга замітка', Notes.Priority.HIGH);
console.log(myNotes.items);
```

## Example 4 - Toggle

Напишіть клас `Toggle` який приймає об'єкт налаштувань `{isOpen: boolean}` і
оголошує одну властивість `on` - стан вкл/викл (true/false). За замовчуванням
значення властивості `on` повинно бути `false`.

```js
const firstToggle = new Toggle({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
console.groupEnd('firstToggle');

const secondToggle = new Toggle();
console.group('secondToggle');
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
```

## Example 5 - Напиши клас Car із зазначеними властивостями і методами.

```js
class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   *  speed - поточна швидкість, початкова 0
   *  price - ціна автомобіля
   *  maxSpeed - максимальна швидкість
   *  isOn - заведений автомобіль, значення true або false. Спочатку false
   *  distance - загальний кілометраж, спочатку 0
   */
  constructor() {}

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {}

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {}

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {}

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {}

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
```

## Example 6 - Order, product basket, class, bind

To define the “Basket” class. The “Basket” should have the following attributes:

- Product list
- Total price

And the Basket should have methods:

- addProduct
- removeProduct
- removeItemOfProduct
- showBasket
- checkIfProductExists

Then, define the “Product” class with the following attributes:

- Product ID
- Product Name
- Product Quantity in stock
- Product Quantity in basket
- Product Item Price (for the one item)
- Product Total Price (Product Item Price\*quantity in basket)

Once both classes were defined, you should do the following actions inside your
script:

- Create 1 entity of “Basket”
- Create 5 different entities of “Product”
- Add each of the new entities of “Product” to the “Basket” product list

The Basket “calculate” method should be called to update the “Basket” total
price once the product list is updated. Take a look that in case the product
already exists in the Basket, just the quantity and product total price of the
product should be updated. The Basket “calculate” method should be called to
update the basket total price.

“Basket” entity should be a global variable and be available via console.

```js
class Product {
  constructor() {}
  updateProductQuantity(operation) {}
}

class Basket {
  constructor() {}
  addProduct(product) {}
  checkIfProductExists(productName) {}
  removeProduct(productName) {}
  removeItemOfProduct(productName) {}
  showBasket() {}
}

const myBasket = new Basket();

const product1 = new Product({
  productID: 156848,
  productName: 'Apple',
  productQuantity: 5,
  productItemPrice: 20,
});
const product2 = new Product({
  productID: 266757,
  productName: 'Mango',
  productQuantity: 13,
  productItemPrice: 90,
});

myBasket.addProduct(product1);
myBasket.addProduct(product1);
myBasket.addProduct(product1);
myBasket.addProduct(product1);
myBasket.addProduct(product1);
// myBasket.addProduct(product1);

myBasket.addProduct(product2);
myBasket.addProduct(product2);
myBasket.addProduct(product2);

myBasket.removeItemOfProduct('Apple');
myBasket.removeItemOfProduct('Apple');
// myBasket.removeItemOfProduct('Apple');
// myBasket.removeItemOfProduct('Apple');
// myBasket.removeItemOfProduct('Apple');

myBasket.removeItemOfProduct('Mango');
// myBasket.removeItemOfProduct('Mango');
// myBasket.removeItemOfProduct('Mango');

myBasket.removeProduct('Apple');

myBasket.showBasket();
```
