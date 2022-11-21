// За кожний місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків протягом року,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

const salary = Number(prompt('Введіть зарплату: '));
const workingMonths = Number(prompt('Введіть кількість робочих місяців: '));

let taxes = 0;

for (let i = 0; i <= workingMonths - 1; i++) {
  taxes += salary * 0.05;
}

const salaryWithTaxex = salary * workingMonths - taxes;

console.log('salaryWithTaxex', salaryWithTaxex);
console.log('taxes', taxes);
