// Створіть функцію getUsers(names), яка отримує на вхід масив логінів користувачів GitHub, робить запит на GitHub за інформацією про них та повертає масив об'єктів користувачів.
// Інформація про користувача GitHub з логіном USERNAME доступна за посиланням: https://api.github.com/users/USERNAME.

// Важливі деталі:

// На кожного користувача повинен бути один запит fetch.
// Запити не повині чекати завершеня один одного. Потрібно, щоб дані поверталися як можна швидше.
// Якщо якийсь запит завершуєтся помилкою або вияволось, що даних о користувачеві немає, то функція повина повертати null в масиві результатів .

const BASE_URL = 'https://api.github.com/users/';
const userLogins = [
  'luxplanjay',
  'dykyys',
  'qweeqer',
  'Maxwelllife',
  'xWinst',
  'AleksZhov',
  'gsmoff',
];

const getUsers = names => {
  const promises = names.map(name => {
    return fetch(`${BASE_URL}${name}`).then(response => {
      if (!response.ok) {
        throw new Error('error in fetch');
      }

      return response.json();
    });
  });
  return Promise.all(promises);
};

getUsers(userLogins)
  .then(data => console.log(data))
  .catch(error => console.error(error));
