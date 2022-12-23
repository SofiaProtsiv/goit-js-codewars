/// example 1
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
delay(3000).then(() => alert('выполнилось через 3 секунды'));

// example 3
fetch(`https://api.github.com/users/SofiaProtiv`)
  .then(response => {
    if (response.ok) {
      console.log(`${response.url}: ${response.status}`);
      return response;
    } else {
      return `❌ Error!`;
    }
  })
  .then(response => response.json())
  .then(user =>
    document.body.insertAdjacentHTML(
      'afterbegin',
      `<div>
<img width='150' height='150' src="${user.avatar_url}" />
<h3>${user.name}</h3>
<p>${user.bio}</p>
<a href="${user.repos_url}">My github</a>
</div>`
    )
  )
  .catch(error => {
    console.log(error);
    return document.body.insertAdjacentHTML(
      'afterbegin',
      ` <h1>NOT FOUND 404</h1>`
    );
  });

// example 3
let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
  .then(responses => {
    // все промисы успешно завершены
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`); // покажет 200 для каждой ссылки
    }
    return responses;
  })
  // преобразовать массив ответов response в response.json(),
  // чтобы прочитать содержимое каждого
  .then(responses => Promise.all(responses.map(r => r.json())))
  // все JSON-ответы обработаны, users - массив с результатами
  .then(users => users.forEach(user => console.log(user.name)));
