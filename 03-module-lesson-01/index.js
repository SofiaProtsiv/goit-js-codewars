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
