//1. Використовуючи функцію if...else, напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"

const rightAnswer = 'ECMAScript';
const question = prompt('Яка офіційна назва JavaScript?');

if (question.toLowerCase() === rightAnswer.toLowerCase()) {
  alert('Вірно!😎');
} else {
  alert('Не знаєте? ECMAScript!🥲');
}

question.toLowerCase() === rightAnswer.toLowerCase()
  ? alert('Вірно!😎')
  : alert('Не знаєте? ECMAScript!🥲');
