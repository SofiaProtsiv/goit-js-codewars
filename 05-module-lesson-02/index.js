//4. Напиши клас Notes який управляє колекцією нотаток у властивості items.
//Нотатка це об'єкт із властивостями text priority
//Додай класу статичну властивість Priopity, у якому зберігатиметься об'єкт із пріоритетами.
//Додай методи addNote(note), removeNote(text), updatePriority(text, newPriority)

// class Notes {
//   static Priority() {
//     return {
//       HIGHT: "hight",
//       LOW: "low",
//     };
//   }

//   constructor() {
//     this.items = [];
//   }

//   addNote(note) {
//     return this.items.push(note);
//   }

//   removeNote(noteName) {
//     const index = this.items.findIndex((item) => item.text === noteName);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }

//   updatePriority({ text, newPriority }) {
//     const index = this.items.findIndex((item) => item.text === text);
//     if (index !== -1) {
//       this.items[index].priority = newPriority;
//     }
//   }
// }

// const note = new Notes();

// note.addNote({ text: "Note1", priority: Notes.Priority().LOW });
// note.addNote({ text: "Note2", priority: Notes.Priority().LOW });
// note.addNote({ text: "Note3", priority: Notes.Priority().HIGHT });

// // note.updatePriority({ text: "Note2", newPriority: Notes.Priority().HIGHT });

// // note.removeNote("Note2");

// console.table(note.items);

//3. Напиши клас Client який створює об'єкт з властивостями login email
//Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get getClientData() {
//     return {
//       login: this.#login,
//       email: this.#email,
//     };
//   }

//   set changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const client = new Client("mango", "mango@gmail.com");

// console.log(client);

// client.changeEmail = "kiwi@gmail.com";

// console.log(client.getClientData);

// class Product {
//   constructor({ productID, productName, productQuantity, productItemPrice }) {
//     this.productID = productID;
//     this.productName = productName;
//     this.productsInBasket = 0;
//     this.productQuantity = productQuantity;
//     this.productItemPrice = productItemPrice;
//     this.productTotalPrice = 0;

//     this.updateProductQuantity.bind(this);
//   }

//   updateProductQuantity(operation) {
//     if (operation === 'add') {
//       if (this.productQuantity === 0) {
//         return alert(`${this.productName} немає більше в наявності🥲`);
//       }
//       this.productsInBasket += 1;
//       this.productQuantity -= 1;
//     }
//     if (operation === 'remove') {
//       this.productsInBasket -= 1;
//       this.productQuantity += 1;
//     }
//     this.productTotalPrice = this.productsInBasket * this.productItemPrice;
//   }
// }

// class Basket {
//   constructor() {
//     this.productList = [];

//     this.addProduct.bind(this);
//     this.removeProduct.bind(this);
//     this.removeItemOfProduct.bind(this);
//     this.showBasket.bind(this);
//     // this.checkIfProductExists.bind(this);
//   }
//   addProduct(product) {
//     const alreadyInBasket = myBasket.checkIfProductExists(product.productName);
//     if (alreadyInBasket) {
//       return product.updateProductQuantity('add');
//     } else {
//       this.productList.push(product);
//       product.updateProductQuantity('add');
//     }
//   }
//   // checkIfProductExists(productName) {
//   //   return (
//   //     this.productList.filter(
//   //       product => product.productName == productName
//   //     )[0] != undefined
//   //   );
//   // }
//   removeProduct(productName) {
//     this.productList = [...this.productList].filter(
//       product => product.productName !== productName
//     );
//   }
//   removeItemOfProduct(productName) {
//     for (const product of this.productList) {
//       if (product.productName === productName) {
//         product.updateProductQuantity('remove');
//       }
//       if (product.productsInBasket === 0) {
//         this.removeProduct(productName);
//       }
//     }
//   }
//   showBasket() {
//     const amount = this.productList.reduce(
//       (total, { productTotalPrice }) => (total += productTotalPrice),
//       0
//     );
//     console.table(this.productList);
//     console.log(`В вашій корзині товарів на суму ${amount}грн`);
//   }
// }

// const myBasket = new Basket();

// const product1 = new Product({
//   productID: 156848,
//   productName: 'Apple',
//   productQuantity: 5,
//   productItemPrice: 20,
// });
// const product2 = new Product({
//   productID: 266757,
//   productName: 'Mango',
//   productQuantity: 13,
//   productItemPrice: 90,
// });

// myBasket.addProduct(product1);
// myBasket.addProduct(product1);
// myBasket.addProduct(product1);
// myBasket.addProduct(product1);
// myBasket.addProduct(product1);
// // myBasket.addProduct(product1);

// myBasket.addProduct(product2);
// myBasket.addProduct(product2);
// myBasket.addProduct(product2);

// myBasket.removeItemOfProduct('Apple');
// myBasket.removeItemOfProduct('Apple');
// // myBasket.removeItemOfProduct('Apple');
// // myBasket.removeItemOfProduct('Apple');
// // myBasket.removeItemOfProduct('Apple');

// myBasket.removeItemOfProduct('Mango');
// // myBasket.removeItemOfProduct('Mango');
// // myBasket.removeItemOfProduct('Mango');

// myBasket.removeProduct('Apple');

// myBasket.showBasket();

// class Toggle {
//   constructor({ isOpen = false } = {}) {
//     this.on = isOpen;
//   }

//   toggle() {
//     this.on = !this.on;
//   }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

// class User {
//   #login;
//   #email;
//   constructor({ login, email }) {
//     this.#login = login;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLogin) {
//     this.#login = newLogin;
//   }
// }
class Car {
  static getSpecs(car) {
    console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, 
      isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
  }

  constructor(car) {
    this._speed = 0;
    this._price = car.price;
    this._maxSpeed = car.maxSpeed;
    this._isOn = false;
    this._distance = 0;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
  }

  accelerate(value) {
    let newSpeed = this._speed + value;
    if (newSpeed <= this._maxSpeed) {
      this._speed = newSpeed;
    }
  }

  decelerate(value) {
    let newSpeed = this._speed - value;
    if (newSpeed > 0) {
      this._speed = newSpeed;
    }
  }

  drive(hours) {
    if (this._isOn) {
      this._distance += hours * this._speed;
    }
  }
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
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
