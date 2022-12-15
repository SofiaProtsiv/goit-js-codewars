export const quiz = {
  title: 'Тест на базовый рівень знань JavaScript.',
  questions: [
    {
      id: 1,
      question: 'Що повертає метод Array.prototype.filter()?',
      choices: [
        'Масив, якщо результат роботи містить більше одного елемента',
        'Один елемент, якщо він пройшов фільтрацію',
        'Завжди масив',
      ],
      answer: 2,
    },
    {
      id: 2,
      question: "Як отримати список усіх ключів об'єкту obj?",
      choices: [
        'obj.keys()',
        'Object.keys(obj)',
        'obj.keys',
        'Object.getKeys(obj)',
      ],
      answer: 1,
    },
    {
      id: 3,
      question: 'Що таке статичне властивість класу?',
      choices: [
        'Властивість доступна тільки екземплярам, але не класу',
        'Властивість доступна тільки класу, але не його екземплярам',
        'Властивість, яку не можна змінювати після створення',
      ],
      answer: 1,
    },
    {
      id: 4,
      question: 'Виберіть не існуючий HTTP-метод.',
      choices: ['PUT', 'GET', 'GRAB', 'DELETE', 'PATCH'],
      answer: 2,
    },
  ],
};
