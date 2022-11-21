const monthNumber = Math.random() * (12 - 1) + 1;

if (monthNumber >= 3 && monthNumber < 6) {
  alert('Весна');
}
if (monthNumber >= 6 && monthNumber < 9) {
  alert('Літо');
}
if (monthNumber >= 9 && monthNumber < 12) {
  alert('Осінь');
}
if (monthNumber == 1 || monthNumber == 2 || monthNumber == 12) {
  alert('Зима');
}
