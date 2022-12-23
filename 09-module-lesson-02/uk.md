# Модуль 9. Заняття 18. Promise Asynchrony

## Example 1 - Що виведе в console.log()?

### 1 - promise

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

console.log('end');
```

### 2 - then

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then(res => {
  console.log(res);
});

console.log('end');
```

### 3 - resolve

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise1.then(res => {
  console.log(res);
});

console.log('end');
```

### 4 - no resolve

```js
console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
});

promise1.then(res => {
  console.log(2);
});

console.log('end');
```

### 5 - smth strange

```js
console.log('start');

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });

console.log('middle');

fn().then(res => {
  console.log(res);
});

console.log('end');
```

### 6 - Fulfilling Promise

```js
console.log('start');

Promise.resolve(1).then(res => {
  console.log(res);
});

Promise.resolve(2).then(res => {
  console.log(res);
});

console.log('end');
```

### 7 - catch

```js
const promise = new Promise((resolve, reject) => {
  reject(Error('Some Error Occurred'));
})
  .catch(error => console.log(error))
  .then(error => console.log(error));
```

### 8 - finally

```js
const promise = new Promise(res => res(2));
promise
  .then(v => {
    console.log(v);
    return v * 2;
  })
  .then(v => {
    console.log(v);
    return v * 2;
  })
  .finally(v => {
    console.log(v);
    return v * 2;
  })
  .then(v => {
    console.log(v);
  });
```

### 9 - setTimeout vs Promise

```js
console.log('start');

setTimeout(() => {
  console.log('setTimeout');
});

Promise.resolve().then(() => {
  console.log('resolve');
});

console.log('end');
```

### 10 - all

```js
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000)), // 3
]).then(alert);
```

### 11 - all

```js
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).catch(alert);
```

### 12 - race

```js
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 2000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);
```

### 13 - any

```js
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 1000)
  ),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000)),
]).then(alert);
```

### 13 - any

```js
Promise.any([
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Error!')), 1000)
  ),
  new Promise((resolve, reject) =>
    setTimeout(() => reject(new Error('Oops one more error!')), 2000)
  ),
]).catch(error => {
  console.log(error.errors[0]);
  console.log(error.errors[1]);
});
```

### 14 - Microtasks are mixed with macrotasks

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});

promise.then(res => {
  console.log(res);
});

console.log(4);
```

### 15 - prioritize microtasks and macrotasks

```js
const timer1 = setTimeout(() => {
  console.log('timer1');

  const promise1 = Promise.resolve().then(() => {
    console.log('promise1');
  });
}, 0);

const timer2 = setTimeout(() => {
  console.log('timer2');
}, 0);
```

### 16 - typical interview question

```js
console.log('start');

const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});

const timer1 = setTimeout(() => {
  console.log('timer1');
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);

console.log('end');
```

## Example 2 - Promise setTimeout

Вбудована функція setTimeout використовує колбек-функцію. Створіть альтернативу,
яка використовує проміси.

Функція delay(ms) повинна повертати проміс, який перейде в стан "виконаний"
через ms мілісекунд, так щоб ми могли додати до нього .then:

```js
function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('Я виконався через 3 секунди'));
```

## Example 3 - Fetch

Use [Github API](https://api.github.com/users) to get info about your github

```js
fetch(`https://api.github.com/users/${YOUR_GITHUB}`);
```

```js
document.body.insertAdjacentHTML(
  'afterbegin',
  `<div>
<img width='150' height='150' src="${avatar_url}" />
<h3>${name}</h3>
<p>${bio}</p>
<a href="${repos_url}">My github</a>
</div>`
);
```
