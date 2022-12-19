// Налаштування
let options = {
  root: document.querySelector('.scroll-list'),
  // root - елемент, який виступає в ролі області перегляду для target (предок цільового елемента або null для viewport)
  rootMargin: '5px',
  // rootMargin - відступи навколо root (margin у CSS, за умовчанням всі відступи дорівнюють 0)
  threshold: 0.5,
  // threshold - число або масив чисел, що вказує допустимий відсоток перетину target та root
};

// Функція зворотного виклику. Виклик callback повертає об'єкт, що містить запис про зміни, що відбулися з цільовим елементом:

let callback = (entries, observer) => {
  entries.forEach(entry => {
    // entry - те, що змінюєтьс
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

// Спостерігач
let observer = new IntersectionObserver(callback, options);
// Далі створюється цільовий елемент, за яким спостерігає спостерігач:

let target = document.querySelector('.list-item');
observer.observe(target);
