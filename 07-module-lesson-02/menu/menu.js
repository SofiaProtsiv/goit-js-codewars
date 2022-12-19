const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.menu-item');

let options = {
  root: null,
  rootMargin: '0px',
  threshold: [0.2, 0.5, 0.8],
};

const onEntry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      links.forEach(link => link.classList.remove('active'));

      const activeId = entry.target.id;

      const activeLink = document.querySelector(
        `.menu-item[data-id=${activeId}]`
      );
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
};

const sectionObserver = new IntersectionObserver(onEntry, options);

sections.forEach(sec => {
  sectionObserver.observe(sec);
});
const onNavButtonClick = event => {
  const href = event.target.dataset.id;

  const scrollTarget = document.querySelector(`#${href}`);

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
