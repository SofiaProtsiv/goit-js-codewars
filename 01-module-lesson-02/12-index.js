//5. Напишіть код, який запитуватиме
//Логін за допомогою prompt і логувати результат
//В консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша Esc
//Вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Привіт!"
//інакше виводити рядок "Невірний пароль!"

const login = 'sofia@gmail.com';
const password = '1111';
const loginInput = prompt('Введіть свій логін');

if (loginInput === login) {
  const passwordInput = prompt('Введіть свій пароль');
  if (passwordInput) {
    if (passwordInput === password) {
      console.log(`Привіт - ${login} 😎`);
    } else {
      console.log('Неправильний пароль');
    }
  } else {
    console.log('Скасовано');
  }
} else {
  console.log(
    `Я вас не знаю "${loginInput === null ? 'незнайомець' : loginInput}🥲"`
  );
}
