// Напиши скрипт, який переведе значення `totalMinutes` (кількість хвилин) в
// рядок у форматі годин та хвилин `HH:MM`.

// - 70 покаже 01:10
// - 450 покаже 07:30
// - 1441 покаже 24:01

const totalMinutes = prompt('Введіть хвилини: ');

const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);

const time = `${doubleDigitHours}:${doubleDigitMinutes}`;

console.log(time);
