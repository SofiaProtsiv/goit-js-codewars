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

// const phonebook = {
//   contacts: [],
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
//   generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return new Date();
//   },
// };

// console.log(
//   phonebook.add({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   phonebook.add({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );
