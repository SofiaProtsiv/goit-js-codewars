const sections = document.querySelectorAll('section');
const links = document.querySelectorAll('[data-link]');

const changeNav = (entries, observer) => {
  entries.forEach(entry => {
    // чекаем, то элемент пересекает наблюдаемую область более, чем на 55%
    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
      // удаляем активный класс у элемента меню
      document.querySelector('.active').classList.remove('active');
      // получаем ID секции, которая текущая
      let activeId = entry.target.id;

      // обращаемся к ссылке меню, у которой href равен ID секции
      let newLink = document
        .querySelector(`[data-link=${activeId}]`)
        .classList.add('active');
    }
  });
};

// обратите внимание на значение опции threshold
const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(changeNav, options);

// передаём все секции в обсервер
sections.forEach(section => {
  observer.observe(section);
});

const onNavButtonClick = event => {
  const link = event.target.dataset.link;

  const scrollTarget = document.querySelector(`#${link}`);

  // const topOffset = document.querySelector('.scrollto').offsetHeight;
  const topOffset = 0; // если не нужен отступ сверху
  const elementPosition = scrollTarget.getBoundingClientRect().top;
  const offsetPosition = elementPosition - topOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth',
  });
};
links.forEach(link => link.addEventListener('click', onNavButtonClick));
