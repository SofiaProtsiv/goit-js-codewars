// refs
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

currentTime.innerText = new Date().toLocaleTimeString([], {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

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
    // case 'ampm':
    //   for (let i = 2; i > 0; i--) {
    //     let ampm = i == 1 ? 'AM' : 'PM';
    //     let option = `<option value="${ampm}">${ampm}</option>`;
    //     element.firstElementChild.insertAdjacentHTML('afterend', option);
    //   }
    //   break;
  }
});

setInterval(() => {
  let date = new Date();
  //   let h = date.getHours();
  //   let m = date.getMinutes();
  //   let s = date.getSeconds();
  //   let ampm = 'AM';

  //   if (h >= 12) {
  //     h = h - 12;
  //     ampm = 'PM';
  //   }

  //   h = h == 0 ? (h = 12) : h;
  //   h = h < 10 ? '0' + h : h;
  //   m = m < 10 ? '0' + m : m;
  //   s = s < 10 ? '0' + s : s;

  //   currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

  //   if (alarmTime === `${h}:${m} ${ampm}`) {
  //     ringtone.play();
  //     ringtone.loop = true;
  //   }

  currentTime.innerText = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  let timeToCheck = date.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  if (alarmTime === timeToCheck) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

function setAlarm() {
  if (isAlarmSet) {
    alarmTime = '';
    ringtone.pause();
    content.classList.remove('disable');
    setAlarmBtn.classList.remove('active');
    setAlarmBtn.innerText = 'Set Alarm';
    return (isAlarmSet = false);
  }

  let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
  if (
    time.includes('Hour') ||
    time.includes('Minute') ||
    time.includes('Second')
    // time.includes('AM/PM')
  ) {
    return alert('Please, select a valid time to set Alarm!');
  }
  alarmTime = time;
  isAlarmSet = true;
  content.classList.add('disable');
  setAlarmBtn.classList.add('active');
  setAlarmBtn.innerText = 'Clear Alarm';
}

// додай слухача подій на кнопку Set Alarm
setAlarmBtn.addEventListener('click', setAlarm);
