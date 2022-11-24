# Модуль 2. Заняття 4. Функції

## Example 1 - Індекс маси тіла

Напиши функцію `calcBMI(weight, height)` яка розраховує та повертає індекс маси
тіла людини. Для цього необхідно розділити вагу в кілограмах на квадрат висоти
людини в метрах.

Вага та висота будуть спеціально передані як рядки. Не цілі числа можуть бути
задані у вигляді `24.7` або `24,7`, тобто як роздільник дробової частини може
бути кома.

Індекс маси тіла необхідно округлити до однієї цифри після коми;

```js
const bmi = calcBMI('88,3', '1.75');
console.log(bmi); // 28.8
```

## Example 2 - Найменше з чисел

Напиши функцію `min(a,b)`, яка повертає найменше з чисел `a` та `b`.

```js
console.log(min(2, 5)); // 2
console.log(min(3, -1)); // -1
console.log(min(1, 1)); // 1
```

## Example 3 - Площа прямокутника

Напиши функцію `getRectArea(dimensions)` для обчислення площі прямокутника зі
сторонами, значення яких будуть передані до параметра `dimensions` у вигляді
рядка. Значення гарантовано розділені пробілом.

```js
function getRectArea(dimensions) {}

console.log(getRectArea('8 11'));
```

## Example 4 - Логування елементів

Напиши функцію `logItems(items)`, яка отримує масив та використовує цикл `for`,
який для кожного елемента масиву буде виводити в консоль повідомлення у форматі
`<номер елемента> - <значення елемента>`. Нумерація елементів повинна починатися
з `1`.

Наприклад для першого елемента масиву `['Mango', 'Poly', 'Ajax']` з індексом `0`
буде виведено `1 - Mango`, а для індексу 2 виведе `3 - Ajax`.

```js
function logItems(items) {}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
```

## Example 5 - Логування контактів

Напиши функцію `printContactsInfo(names, phones)` яка виводить у консоль ім'я та
телефонний номер користувача. У параметри `names` та `phones` будуть передані
рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та
телефонів у рядках вказують на відповідність. Кількість імен та телефонів
гарантовано однакова.

```js
function printContactsInfo(names, phones) {}

printContactsInfo(
  'Jacob,William,Solomon,Artemis',
  '89001234567,89001112233,890055566377,890055566300'
);
```

## Example 6 - Пошук найбільшого елемента

Напиши функцію `findLargestNumber(numbers)`яка шукає найбільше число в масиві.

```js
function findLargestNumber(numbers) {}

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83
```

## Example 7 - Середнє значення

Напишіть функцію `calAverage()` яка приймає довільну кількість аргументів і
повертає їхнє середнє значення. Усі аргументи будуть лише числами.

```js
function calAverage() {}

console.log(calAverage(1, 2, 3, 4)); // 2.5
console.log(calAverage(14, 8, 2)); // 8
console.log(calAverage(27, 43, 2, 8, 36)); // 23.2
```

## Example 8 - Форматування часу

Напиши функцію `formatTime(minutes)` яка переведе значення `minutes` (кількість
хвилин) у рядок у форматі годин та хвилин `HH:MM`.

```js
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(hours);
console.log(minutes);

const doubleDigitHours = String(hours).padStart(2, 0);
const doubleDigitMinutes = String(minutes).padStart(2, 0);
console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

function formatTime(minutes) {}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
```

## Example 9 - Колекція курсів (includes, indexOf, push і т. д.)

Напишіть функції для роботи з колекцією навчальних курсів `courses`:

- `addCourse(name)` - додає курс до кінця колекції
- `removeCourse(name)` - видаляє курс із колекції
- `updateCourse(oldName, newName)` - змінює ім'я на нове

```js
const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

addCourse('Express');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
addCourse('CSS'); // 'Ви вже маєте такий курс'

removeCourse('React');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
removeCourse('Vue'); // 'Курс із таким ім'ям не знайдено'

updateCourse('Express', 'NestJS');
console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
```

## Example 10

Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію
calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть
тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну
гравіювання всіх слів в рядку.

```js
const calculateEngravingPrice = function (message, pricePerWord) {
  // твій код
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20
  )
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)
); // 120
```

## Example 11

Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок
(в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому
рядку.

```js
const findLongestWord = function (string) {
  // твій код
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
```

## Example 12

Напиши функцію formatString(string) яка приймає рядок і форматує його якщо
необхідно.

Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому
вигляді. Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка
символів і додає в кінець рядка три крапки '...', після чого повертає укорочену
версію

```js
const formatString = function (string) {
  // твій код
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// повернеться оригінальний рядок

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// повернеться форматований рядок

console.log(formatString('Curabitur ligula sapien.'));
// повернеться оригінальний рядок

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.'
  )
);
// повернеться форматований рядок
```

## Example 13

Є масив logins з логінами користувачів. Напиши скрипт додавання логіна в масив
logins. Логін, який додається повинен:

- проходити перевірку на довжину від 4 до 16-ти символів включно бути
  унікальним, тобто бути відсутнім в масиві logins Розбий завдання на підзадачі
  за допомогою функцій.

- Напиши функцію isLoginValid(login), в якій перевір кількість символів
  параметра login і поверни true або false в залежності від того, чи потрапляє
  довжина параметра в заданий діапазон від 4-х до 16-ти символів включно.

- Напиши функцію isLoginUnique(allLogins, login), яка приймає список всіх
  логінів і логін, який додається, як параметри і перевіряє наявність login в
  массиве allLogins, повертає true якщо такого логіна ще немає і false якщо
  логін вже використовується.

- Напиши функцію addLogin(allLogins, login) яка:

Приймає новий логін і масив всіх логінів як параметри Перевіряє валідністьлогіна
використовуючи допоміжну функцію isLoginValid Якщо логін не валідний, припинити
виконання функції addLogin і повернути радок 'Помилка! Логін повинен бути від 4
до 16 символів' Якщо логін валідний, функція addLogin перевіряє унікальність
логіна за допомогою функції isLoginUnique Якщо isLoginUnique поверне false, тоді
addLogin Не додає логін в массив масив і повертає рядок 'Такий логін уже
використовується!' Якщо isLoginUnique поверне true, addLogin додає новий логін в
logins і повертає рядок 'Логін успішно доданий!'

🔔 Принцип єдиної відповідальності функції - кожна функція робить щось одне. Це
дозволяє перевикористати код і змінювати логіку роботи функції тільки в одному
місці, не зачіпаючи роботу програми в цілому.

Предикатні функції повертають тільки true або false. Такі функції прийнято
називати починаючи з is: isLoginUnique і isLoginValid в нашому випадку.

isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або
false. isLoginValid тільки перевіряє чи валідний логін і повертає true або
false. addLogin додають чи не додають логін в масив. При цьому для перевірок
умови додавання використовує результати викликів інших функцій - isLoginUnique і
isLoginValid.

```js
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function (login) {
  // твій код
};

const isLoginUnique = function (allLogins, login) {
  // твій код
};

const addLogin = function (allLogins, login) {
  // твій код
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логін успішно доданий!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такий логін вже використовується!'
console.log(addLogin(logins, 'Zod')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Помилка! Логін повинен бути від 4 до 16 символів'
```
