// змінні
const currentTime = document.querySelector('h1');
const content = document.querySelector('.content');
const selectMenu = document.querySelectorAll('select');
const setAlarmBtn = document.querySelector('button');

// тут зберігатиметься час на який ти поставив будильник (до прикладу 03:10 АМ)
let alarmTime;

// тут зберігатиметься бульове значення, чи поставили ми будильник чи ні
let isAlarmSet;

// тут ми ставорюємо музику для будильника
const ringtone = new Audio('./files/ringtone.mp3');

// не забуть поставити поточний час для годинника, бо по дефолту в html 00:00:00

// візьми до уваги такий формат створення елементів, в HTML це зайняло би досить загато часу і стрічок коду
selectMenu.forEach(element => {
  const selectName = element.dataset.select;

  switch (selectName) {
    case 'hour':
      for (let i = 23; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
    case 'minute':
      for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
    case 'second':
      for (let i = 59; i >= 0; i--) {
        i = i < 10 ? `0${i}` : i;
        let option = `<option value="${i}">${i}</option>`;
        element.firstElementChild.insertAdjacentHTML('afterend', option);
      }
      break;
  }
});

// додай можливість змінювати час нашого годинника кожну секунду
// якщо alarmTime на якому моменті співпаде з поточним часом, то увімкни рингтон:
// if (case) {
//   ringtone.play();
//   ringtone.loop = true;
// }

// cствори функцію setAlarm яка:
//1. перевіряє чи ти обрав всі параметри, секунди, хвилини та годину,
//якщо ж ти не обрав щось то поверни alert('Please, select a valid time to set Alarm!');

// 2. Якщо ти назначив будильник на якийсь час, і нажав кнопку 'Set Alarm', то
// збережи час на який ти поставив будильник(alarmTime)
// укажи що будильник поставлено (isAlarmSet)
// зроби всі селекти неактивними, дадавши на блок content клас disable
// зміни колір кнопки на активний, додавши клас active
// та звичайно ж не забувай про текст кнопки, тепер він має бути Clear Alarm, бо ти щойно включив будильник

// 3. Якщо ж ти хочеш вимкнути будильний, або скасувати його, то зупини рингтон (ringtone.pause()) і зроби зворотні дії
function setAlarm() {}

// додай слухача подій на кнопку Set Alarm
