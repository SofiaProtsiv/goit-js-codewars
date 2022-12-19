let nextPage = 2;

const loadNewCards = (page = 1) => {
  // запрашиваем посты по конкретной странице
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then(res => res.json())
    .then(cards => {
      // для каждого поста создаем разметку
      cards.forEach(card => {
        const post = document.createElement('div');
        post.innerHTML = `
          <h3>${card.id} ${card.title}</h3>
          <p>${card.body}</p>
        `;
        post.className = 'card';
        document.body.append(post);
      });

      // для последней карточки снова добавляем обзёрвер
      const lastCard = document.querySelector('.card:last-child');
      if (lastCard) {
        infinteObserver.observe(lastCard);
      }
    })
    .catch(console.error);
};

const infinteObserver = new IntersectionObserver(
  ([entry], observer) => {
    // проверяем что достигли последнего элемента
    if (entry.isIntersecting) {
      // перестаем его отслеживать
      observer.unobserve(entry.target);
      // и загружаем новую порцию контента
      loadNewCards(nextPage++);
    }
  },
  { threshold: 0.5 }
);

// делаем стартовую инициализацию
loadNewCards();
