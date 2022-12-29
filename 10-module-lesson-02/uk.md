# Модуль 9. Заняття 18. Promise Asynchrony

## Example 1 - Reception "Load more"

Use [file](./load_more/index.html) to create load more functional

Щоб динамічно змінювати номер групи на кожний наступний запит, достатньо
оголосити ще одну глобальну змінну, назвемо її page і встановимо початкове
значення 1 - перша група елементів. Після кожного успішного запиту, в колбек
методу then() будемо збільшувати значення page на одиницю. Складаючи параметри
запиту, використовуємо її значення.

Після завантаження першої групи елементів, текст на кнопці зміниться, а сама
кнопка опуститься під список постів. Коли користувач прокрутить сторінку і знову
клікне по ній - виконається запит за другою групою елементів, яка додасться до
вже існуючої розмітки списку постів. У разі відсутності постів для завантаження
під час кліку на кнопку «Fetch posts» - показуємо повідомлення.

Ми додали перевірку кінця колекції на фронтенді, тому що JSONPlaceholder API не
реалізує цей функціонал на бекенді. У нашому випадку достатньо розділити
загальну кількість елементів в колекції на кількість елементів в одній групі. Це
схоже на випадок, коли бекенд повертає не кількість доступних сторінок, а
загальну кількість елементів в колекції.

## Example 2 - Pagination

Use files from pagination folder => [files](./pagination.zip)