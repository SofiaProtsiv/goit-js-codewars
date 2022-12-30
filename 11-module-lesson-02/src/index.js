import 'material-icons/iconfont/material-icons.css';
import throttle from 'lodash.throttle';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getRefs } from './js/getRers';

import * as ContactsAPI from './js/service/contact.service';
import { createListContacts } from './templates/createListContacts';
import { createCardContact } from './templates/createCardContact';

const refs = getRefs();

const getContacts = async () => {
  try {
    const data = await ContactsAPI.getContacts();
    const markup = createListContacts([...data].reverse());
    refs.list.innerHTML = markup.join('');
  } catch (error) {
    console.log(error);
  }
};

// document.addEventListener('DOMContentLoaded', getContacts);

refs.info.addEventListener('click', async () => {
  try {
    const data = await ContactsAPI.getContactById(23);
    const markup = createCardContact(data);
    refs.list.innerHTML = markup;
  } catch (error) {
    console.log(error);
  }
});

refs.update.addEventListener('click', async () => {
  const newContact = {
    name: 'Kiwi',
    email: 'kiwi@gmail.com',
    id: 51,
  };

  try {
    const { name } = await ContactsAPI.updateContact(newContact);
    Notify.success(`${name} was updated!!!`);
  } catch (error) {
    console.log(error);
  }
});

refs.list.addEventListener('click', async event => {
  if (event.target.nodeName !== 'BUTTON') return;
  const card = event.target.closest('.js-contact-card');

  card.remove();

  try {
    const { name } = await ContactsAPI.deleteContact(card.dataset.id);
    Notify.info(`${name} was deleted`, { position: 'left-top' });
  } catch (error) {
    Notify.failure('Something wrong!', { position: 'left-top' });
  }
});

const handleSearchInput = async event => {
  const searchValue = event.target.value.trim().toLowerCase();

  const data = await ContactsAPI.getContacts();

  const filteredContacts = data.filter(({ name }) => {
    return name.toLowerCase().includes(searchValue);
  });

  refs.list.innerHTML = '';

  const markup = createListContacts(filteredContacts);
  refs.list.innerHTML = markup.join('');
};

refs.searchForm.addEventListener('input', throttle(handleSearchInput, 300));

// const t0 = Date.now();
// aa();
// console.log('THE END');
// console.log(`На всё про всё заняло ${(Date.now() - t0) / 1000} секунд`);

// async function aa() {
//   console.log(' 1 - Начинаем');
//   const t1 = Date.now();
//   setTimeout(() => {
//     console.log('Отлучусь на 100  миллисекунд');
//     console.log(`Меня не было всего ${Date.now() - t1} милесекунд`);
//   }, 100);

//   //   Далее идёт просто очень долгая операция, которая выполняется более 1 секунды  (где-то 1.7 секунды =  1700 ms)
//   for (let i = 0; i < 1000000000; i++) {
//     if (i % 2 === 0) {
//       Math.pow(i, 1.5);
//     }
//   }
//   //   Конец долгоиграющей операции

//   console.log(
//     '2 - Я перебрал 100 миллионов!!! чисел и у каждого четного извлек корень квадратный и возвл в 3-ю степень'
//   );
//   console.log(`3 - И это заняло ${(Date.now() - t1) / 1000} секунд`);
//   console.log(await second());
//   // console.log(); //undefind
//   console.log('Пора заканчивать');
// }
// function second() {
//   const x = new Promise(r => {
//     console.log('4 - Мы тут Promise создаём, если что ...');
//     r();
//   });
//   console.log('5 - Ну, Promise вроде создали');
//   return x;
// }
