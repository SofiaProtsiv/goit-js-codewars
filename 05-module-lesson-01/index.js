// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],
//   calcTotalPrice() {
//     let totalPrice = 0;
//     for (const { price, quantity } of this.stones) {
//       totalPrice += price * quantity;
//     }
//     return totalPrice;
//   },
//   calcTotalPriceByType(stoneName) {
//     let totalPrice = 0;
//     for (const { name, price, quantity } of this.stones) {
//       name === stoneName && (totalPrice = price * quantity);
//     }
//     return totalPrice;
//   },
//   removeStone(stoneName) {
//     for (const stone of this.stones) {
//       const indexToRemove = this.stones.indexOf(stone);
//       if (stone.name === stoneName) {
//         this.stones.splice(indexToRemove, 1);
//       }
//     }
//     return this.stones;
//   },
//   updateStone(stoneName, data) {
//     for (const stone of this.stones) {
//       if (stone.name === stoneName) {
//         Object.assign(stone, data);
//       }
//     }
//     return this.stones;
//   },
// };
// console.log(chopShop.calcTotalPrice()); //24700
// console.log(chopShop.calcTotalPriceByType('Emerald')); // 5200
// console.log(chopShop.removeStone('Emerald'));
// console.log(
//   chopShop.updateStone('Sapphire', {
//     name: 'Sapphir',
//     quantity: 10,
//     inStock: false,
//   })
// );
// const calculator = {
//   read(a, b) {
//     this.val1 = a;
//     this.val2 = b;
//   },
//   sum() {
//     return !this.val1 || !this.val2 ? false : this.val1 + this.val2;
//   },
//   mult() {
//     return !this.val1 || !this.val2 ? false : this.val1 * this.val2;
//   },
// };

// calculator.read(4, 6);
// console.log(calculator.sum());
// console.log(calculator.mult());

// const phonebook = {
//   contacts: [],
//   getContacts() {
//     return this.contacts;
//   },
//   add(contact) {
//     const newContact = {
//       list: 'default',
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);
//     return this.contacts;
//   },
//   update(contactNameToUpdate, newContactData) {
//     this.contacts.find(contact => {
//       if (contact.name === contactNameToUpdate) {
//         Object.assign(contact, newContactData);
//       }
//     });

//     // for (const contact of this.contacts) {
//     //   if (contact.name === contactNameToUpdate) {
//     //     Object.assign(contact, newContactData);
//     //   }
//     // }
//     return this.contacts;
//   },
//   delete(contactName) {
//     const indexToRemove = this.contacts.findIndex(
//       contact => contact.name === contactName
//     );
//     this.contacts.splice(indexToRemove, 1);

//     // for (const contact of this.contacts) {
//     //   const indexToRemove = this.contacts.indexOf(contact);
//     //   if (contact.name === contactName) {
//     //     this.contacts.splice(indexToRemove, 1);
//     //   }
//     // }
//     return this.contacts;
//   },
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return new Date();
//   },
// };

// phonebook.add({
//   name: 'Sofia',
//   phone: '+380786387268',
//   list: 'friends',
//   img: '👩🏼',
//   favorite: true,
// });
// phonebook.add({
//   name: 'Marina',
//   phone: '+3806578454533',
// });
// phonebook.add({
//   name: 'Poly',
//   phone: '+380657845543',
//   img: '👩🏼‍🔧',
// });
// console.table(phonebook.getContacts());

// phonebook.update('Poly', {
//   name: 'Polina',
//   phone: '+380657845543',
//   img: '👩🏼‍🎤',
//   list: 'family',
//   favorite: true,
// });
// console.table(phonebook.getContacts());

// phonebook.delete('Marina');
// console.table(phonebook.getContacts());
///

//
///
//
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// const account = {
//   balance: 0,
//   transactions: [],
//   lastId: 0,

//   createTransaction(amount, type, id) {
//     return { amount, type, id };
//   },
//   deposit(amount) {
//     this.lastId += 1;
//     const transaction = this.createTransaction(
//       amount,
//       Transaction.DEPOSIT,
//       this.lastId
//     );
//     this.addTransaction(transaction);
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.lastId += 1;
//       const transaction = this.createTransaction(
//         amount,
//         Transaction.WITHDRAW,
//         this.lastId
//       );
//       this.addTransaction(transaction);
//       this.balance -= amount;
//     } else {
//       console.log('Not enough money on account');
//     }
//   },

//   addTransaction(transaction) {
//     this.transactions.push(transaction);
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     return this.transactions.find(transaction => transaction.id === id);
//   },
//   getTransactionTotal(type) {
//     return this.transactions.reduce((total, transaction) => {
//       if (transaction.type === type) {
//         total += transaction.amount;
//       }
//       return total;
//     }, 0);
//   },
// };

// account.deposit(100);
// console.log(account.getBalance());
// account.deposit(10);
// console.log(account.getBalance());
// account.withdraw(20);
// console.log(account.getBalance());
// account.withdraw(40);
// console.log(account.getBalance());

// console.log('Transaction 1: ');
// console.log(account.getTransactionDetails(1));
// console.log('Transaction 2: ');
// console.log(account.getTransactionDetails(2));
// console.log('Transaction 3: ');
// console.log(account.getTransactionDetails(3));
// console.log('Transaction 4: ');
// console.log(account.getTransactionDetails(4));

// console.log(
//   'Withdrawals: ' + account.getTransactionTotal(Transaction.WITHDRAW)
// );
// console.log('Deposits: ' + account.getTransactionTotal(Transaction.DEPOSIT));

////

// const apple = { name: '🍎', price: 50 };
// const grape = { name: '🍇', price: 70 };
// const lemon = { name: '🍋', price: 60 };
// const strawberry = { name: '🍓', price: 110 };

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     for (const item of this.items) {
//       if (product === item) {
//         return (item.quantity += 1);
//       }
//     }

//     this.items.push(product);
//     product.quantity = 1;
//   },
//   remove(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         this.items.splice(this.items.indexOf(item), 1);
//       }
//     }
//   },
//   clear() {
//     this.items.splice(0, this.items.length);

//     return 'Корзина очищена!';
//   },
//   countTotalPrice() {
//     let totalPrice = 0;

//     for (const item of this.items) {
//       totalPrice += item.price * item.quantity;
//     }

//     return totalPrice;
//   },
//   increaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         return (item.quantity += 1);
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity -= 1;
//       }

//       if (item.quantity < 1) {
//         return this.remove(productName);
//       }
//     }
//   },
// };

// console.table(cart.getItems());

// cart.add(apple);
// cart.add(apple);
// cart.add(apple);
// cart.add(grape);
// cart.add(grape);
// cart.add(grape);
// cart.add(lemon);
// cart.add(lemon);
// cart.add(strawberry);
// cart.add(strawberry);

// console.table(cart.getItems());

// cart.remove('🍎');
// console.table(cart.getItems());

// console.log(cart.clear());
// console.table(cart.getItems());

// cart.add(apple);
// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action.call(inventory, itemName);///❗️❗️❗️
// };

// invokeInventoryAction('Medkit', inventory.add);
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, 'order-4');
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const car = {
//   registrationNumber: 'GA12345',
//   brand: 'Toyota',
// };

// function displayDetails(ownerName) {
//   console.log(
//     `${ownerName}, this is your car: ${this.registrationNumber} ${this.brand}`
//   );
// }
// displayDetails.apply(car, ['Sofia']);
// displayDetails.call(car, 'Sofia');

// function Item(name, price) {
//   this.name = name;
//   this.price = price;
//   this.description = `${this.name}, ${this.price}€`;
// }

// function Car(details) {
//   Item.apply(this, details);
// }

// function Fruit(details) {
//   Item.apply(this, details);
// }

// const carDetails = ['BMW', 120000];
// const bmw = new Car(carDetails);
// console.log(bmw);
// const fruitDetails = ['Banana', 2];
// const banana = new Fruit(fruitDetails);
// console.log(banana);
