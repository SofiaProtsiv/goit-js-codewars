// // Рішення 1
// function createProduct(partialProduct, callback) {
//   const product = { id: Date.now(), ...partialProduct };
//   callback(product);
// }

// function logProduct(product) {
//   console.log(product);
// }

// function logTotalPrice(product) {
//   console.log(product.price * product.quantity);
// }

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

// // Рішення 2
// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: 'Jacob',
//   balance: 400,
//   withdraw(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount > this.balance) {
//       onError(`Amount can't exceed account balance of ${this.balance} credits`);
//     } else {
//       this.balance -= amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//     } else if (amount <= 0) {
//       onError(`Amount must be more than 0 credits`);
//     } else {
//       this.balance += amount;
//       onSuccess(`Account balance: ${this.balance}`);
//     }
//   },
// };

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }
// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.withdraw(300, handleSuccess, handleError);
// account.deposit(1700, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.deposit(-600, handleSuccess, handleError);
// account.deposit(600, handleSuccess, handleError);

// Рішення 3
// function each(array, callback) {
//   const newArr = [];
//   for (const el of array) {
//     newArr.push(callback(el));
//   }
//   return newArr;
//   array.forEach(el => {
//     newArr.push(callback(el));
//   });
//   return newArr;
//}
// console.log(
//   each([64, 49, 36, 25, 16], function (value) {
//     return value * 2;
//   })
// );

// Рішення 5
// const employees = [
//   {
//     id: 101,
//     name: 'Alex',
//     salary: 10000,
//   },
//   {
//     id: 102,
//     name: 'Clark',
//     salary: 13000,
//   },
// ];
// const each = array => {
//   let totalSalary = 0;
//   let totalEmployeers = 0;
//   let names = [];

//   array.forEach(({ name }) => {
//     console.log(name.toUpperCase());
//   });
//   array.forEach(({ name, salary }) => {
//     salary > 10000 && console.log(name, salary);
//   });
//   array.forEach(({ name, salary }) => {
//     totalSalary += salary;
//     totalEmployeers += 1;
//     names.push(name);
//   });
//   console.log(
//     `Company pay ${totalSalary} for ${totalEmployeers} employeers: ${[
//       ...names,
//     ]}`
//   );
// };
// each(employees);

/// Рішення 6
// const input = [
//   {
//     name: 'John',
//     yearOfBirth: 1988,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'Nancy',
//     yearOfBirth: 1963,
//     placeOfBirth: 'New York',
//   },
//   {
//     name: 'John',
//     yearOfBirth: 1980,
//     placeOfBirth: 'Toronto',
//   },
// ];

// const isOdd = num => {
//   return num % 2 === 1;
// };

// const groupBy = (array, callback) => {
//   const groupByObj = {};

//   for (const objectEl of array) {
//     const key = callback(objectEl);

//     if (groupByObj[key]) {
//       groupByObj[key].push(objectEl);
//     } else {
//       groupByObj[key] = [objectEl];
//     }
//   }
//   return groupByObj;
// };

// console.log(groupBy(input, objectEl => objectEl.name));

// console.log(groupBy(input, objectEl => isOdd(objectEl.yearOfBirth)));

const products = ['apple', 'apple', 'banana', 'banana', 'avocado', 'cherry'];

const countProducts = products => {
  const groupBasket = {};

  products.forEach(product => {
    groupBasket[product] = (groupBasket[product] || 0) + 1;
  });

  return groupBasket;
};

console.log(countProducts(products));
