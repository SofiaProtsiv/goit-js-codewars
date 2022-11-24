// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// const data3 = { a: 6 };
// const data4 = { a: NaN, b: '' };

// const isEmpty = object => {
//   const objectKeys = Object.keys(object);
//   if (objectKeys.length === 0) {
//     return true;
//   }

//   for (const key in object) {
//     if (object[key] || object[key] === 0 || object[key] === false) {
//       return false;
//     } else {
//       return true;
//     }
//   }
// };

// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true
// console.log(isEmpty(data3)); // false
// console.log(isEmpty(data4)); // true

/////////
//7. Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати методи для роботи з балансом та історією транзакцій

// Типів транзакцій всього два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
//   };

//   const ACCOUNT = {
//     balance: 0,

//     transactions: [],

//     createTransaction({ from, type, amount }) {
//       this.transactions.push({ from, type, amount });
//       type === "deposit" ? (this.balance += amount) : (this.balance -= amount);

//       return {
//         from,
//         type,
//         amount,
//       };
//     },
//     deposit(amount) {
//       this.transactions.push({ type: "deposit", amount });
//       this.balance += amount;
//     },
//     withdraw(amount) {
//       this.transactions.push({ type: "withdraw", amount });
//       this.balance -= amount;
//     },
//     getBalance() {
//       return this.balance;
//     },
//     getHowMuchWasDeposited() {
//       const howMuchWasDeposited = this.transactions.reduce((acc, item) => {
//         if (item.type === "deposit") {
//           acc += item.amount;
//         }
//         return acc;
//       }, 0);
//       return howMuchWasDeposited;
//     },
//     getHowMuchWasWithdrawed() {
//       const howMuchWasWithdrawed = this.transactions.reduce((acc, item) => {
//         if (item.type === "withdraw") {
//           acc += item.amount;
//         }
//         return acc;
//       }, 0);
//       return howMuchWasWithdrawed;
//     },
//     getTransactionDetails(from) {
//       const details = this.transactions.filter((item) => item.from === from)[0];
//       let newObj = { ...details };
//       delete newObj["from"];
//       return newObj;
//     },
//     getTransactionType(type) {
//       return this.transactions.filter((item) => item.type === type);
//     },
//   };

//   console.log(
//     "Transaction",
//     ACCOUNT.createTransaction({
//       type: Transaction.DEPOSIT,
//       amount: 3000,
//       from: "andrew",
//     })
//   );
//   console.log(
//     "Transaction",
//     ACCOUNT.createTransaction({
//       type: Transaction.DEPOSIT,
//       amount: 5000,
//       from: "lili",
//     })
//   );
//   console.log(
//     "Transaction",
//     ACCOUNT.createTransaction({
//       type: Transaction.WITHDRAW,
//       amount: 5000,
//       from: "sofia",
//     })
//   );
//   ACCOUNT.withdraw(3000);
//   ACCOUNT.withdraw(3000);
//   console.log("transactions", ACCOUNT.transactions);
//   console.log(
//     "TransactionType DEPOSIT",
//     ACCOUNT.getTransactionType(Transaction.DEPOSIT)
//   );
//   console.log(
//     "TransactionType WITHDRAW",
//     ACCOUNT.getTransactionType(Transaction.WITHDRAW)
//   );

//   console.log("balance", ACCOUNT.balance);
//   console.log("getTransactionDetails", ACCOUNT.getTransactionDetails("sofia"));
//   console.log("getHowMuchWasDeposited", ACCOUNT.getHowMuchWasDeposited());
//   console.log("getHowMuchWasWithdrawed", ACCOUNT.getHowMuchWasWithdrawed());

///
// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

//   user.happy = true;
//   user.hobby = "стрибки з парашутом";
//   user.premium = false;

//   for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
//   }

////
// const salaries = {
//     Mango: 100,
//     Poly: "",
//     Ajax: 1470,
//   };
//   let total = 0;

//   for (const value of Object.values(salaries)) {
//     total += Number(value);
//   }
//   console.log(total);

////
// function calcTotalPrices(stones, stoneName) {
//     for (let stone of stones) {
//       if (stone["name"] === stoneName) {
//     console.log(`Price for all stones of "${stoneName}" - ${stone["price"] * stone["quantity"]}$`)
// console.log(`quantity - ${stone["quantity"]}`)
// console.log(`price for one stone - ${stone["price"]}$`)
//       }
//     }
//   }

//   document.querySelector("body").innerHTML = calcTotalPrices(stones, "Бриллиант");

////
// const calculator = {
//     read(a, b) {
//       this.val1 = a;
//       this.val2 = b;
//     },
//     sum() {
//       return !this.val1 || !this.val2 ? false : this.val1 + this.val2;
//     },
//     mult() {
//       return !this.val1 || !this.val2 ? false : this.val1 * this.val2;
//     },
//   };

//   calculator.read(4, 6);
//   console.log(calculator.sum());
//   console.log(calculator.mult());

/////

// Это в другом файле
// const vehicles = [
//     { make: 'Honda', model: 'CR-V', type: 'suv', price: 24045 },
//     { make: 'Honda', model: 'Accord', type: 'sedan', price: 22455 },
//     { make: 'Mazda', model: 'Mazda 6', type: 'sedan', price: 24195 },
//     { make: 'Mazda', model: 'CX-9', type: 'suv', price: 31520 },
//     { make: 'Toyota', model: '4Runner', type: 'suv', price: 34210 },
//     { make: 'Toyota', model: 'Sequoia', type: 'suv', price: 45560 },
//     { make: 'Toyota', model: 'Tacoma', type: 'truck', price: 24320 },
//     { make: 'Ford', model: 'F-150', type: 'truck', price: 27110 },
//     { make: 'Ford', model: 'Fusion', type: 'sedan', price: 22120 },
//     { make: 'Ford', model: 'Explorer', type: 'suv', price: 31660 },
// ];

// console.table(vehicles);

/**
 * ПОЛУЧИТЬ СПИСОК МОДЕЛЕЙ
 */
// 1. Перебрать массив
// 2. Получить доступ к каждому обьекту
// 3. На каждой итерации взять у текущего обьекта значение свойства model
// 4. Сделать пустой массив
// 5. На каждой итерации записывать в массив значение свойства model текущего обьекта

// const models = [];
// for (const vehicle of vehicles) {
// console.group(Date.now());
// models.push(vehicle.model);
// console.log(vehicle.model);
// console.log(models);
// console.groupEnd();
// }
// console.log(models);

function getModels(cars) {
  const models = [];

  for (const car of cars) {
    models.push(car.model);
  }

  return models;
}

console.log(getModels(vehicles));

/**
 * ЗАМЕНИТЬ НАЗВАНИЕ МОДЕЛИ
 */

// const oldModelName = 'Mazda 6';
// const newModelName = 'Hello world';

// // 1. Перебираем массив поэлементно

// for (const vehicle of vehicles) {
//     if (vehicle.model === oldModelName) {
//         console.log(vehicle);
//         vehicle.model = newModelName;
//     }
// }

// console.table(vehicles);

function changeModel(cars, oldModelName, newModelName) {
  for (const car of cars) {
    if (car.model === oldModelName) {
      car.model = newModelName;
    }
  }
}

changeModel(vehicles, 'Mazda 6', 'Hello world');
console.table(vehicles);

changeModel(vehicles, 'Fusion', 'AAAAAA');
console.table(vehicles);

changeModel(vehicles, 'F-150', 'BBBBBB');
console.table(vehicles);

/**
 * ПОЛУЧИТЬ ОБЩУЮ ЦЕНУ ВСЕХ МАШИН
 */

function getTotalPrice(cars) {
  let totalPrice = 0;

  for (const car of cars) {
    totalPrice += car.price;
  }

  return totalPrice;
}

console.log('total price: ', getTotalPrice(vehicles));
