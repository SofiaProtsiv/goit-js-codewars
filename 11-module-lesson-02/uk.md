# Модуль 11. Заняття 21. Async. Await

## Example 1 - rewrite function to async await

```js
function getFruit(name) {
  const fruits = {
    strawbery: '🍓',
    cherry: '🍒',
    pear: '🍐',
    banana: '🍌',
    orange: '🍊',
    apple: '🍎',
  };
  return Promise.resolve(fruits[name]);
}

function makeSmoothie() {
  getFruit('apple').then(response => {
    console.log(response);
    getFruit('cherry').then(response => {
      console.log(response);
    });
  });
}

makeSmoothie();
```

## Example 2 - rewrite function to async await

```js
const BASE_URL = 'https://62d459315112e98e484e5213.mockapi.io';

// GET -> /contacts
export const getContacts = () => {
  return fetch(`${BASE_URL}/contacts`).then(response => response.json());
};

// GET -> /contacts/:id
export const getContactById = id => {
  return fetch(`${BASE_URL}/contacts/${id}`).then(response => response.json());
};

// POST -> /contacts
export const createContact = contact => {
  const options = {
    method: 'POST',
    body: JSON.stringify(contact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts`, options).then(response =>
    response.json()
  );
};

// PUT -> /contacts/:id
export const updateContact = newContact => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(newContact),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  };

  return fetch(`${BASE_URL}/contacts/${newContact.id}`, options).then(
    response => response.json()
  );
};

// DELETE -> /contacts/:id
export const deleteContact = id => {
  const options = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/contacts/${id}`, options).then(response =>
    response.json()
  );
};
```

## Example 3 - Infinite scroll

```js
let nextPage = 2;

const loadNewCards = (page = 1) => {
  // Запитуємо пости по конкретній сторінці
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${page}`)
    .then(res => res.json())
    .then(cards => {
      // для кожного посту створюємо розмітку
      cards.forEach(card => {
        const post = document.createElement('div');
        post.innerHTML = `
          <h3>${card.id} ${card.title}</h3>
          <p>${card.body}</p>
        `;
        post.className = 'card';
        document.body.append(post);
      });

      // для останньої картки знову додаємо обзервер
      const lastCard = document.querySelector('.card:last-child');
      if (lastCard) {
        infinteObserver.observe(lastCard);
      }
    })
    .catch(console.error);
};

const infinteObserver = новий IntersectionObserver(
  ([entry], observer) => {
    // перевіряємо що досягли останнього елемента
    if (entry.isIntersecting) {
      // перестаємо його відстежувати
      observer.unobserve(entry.target);
      // і завантажуємо нову порцію контенту
      loadNewCards(nextPage++);
    }
  },
  {threshold: 0.5}
);

// робимо стартову ініціалізацію
loadNewCards();
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <style>
      body {
        font-family: sans-serif;
        text-align: center;
        margin: 0;
      }

      .card {
        border: 3px solid #eee;
        padding: 1rem;
      }
    </style>
  </head>
  <body>
    <script src="./index.js"></script>
  </body>
</html>
```
