const cardContainer = document.getElementById('card-container');
const loadMoreButton = document.getElementById('load-more');
const cardCountElem = document.getElementById('card-count');
const cardTotalElem = document.getElementById('card-total');

const cardLimit = 99;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

cardTotalElem.innerHTML = cardLimit;

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);

  return `hsl(${h}deg, 90%, 85%)`;
};

const handleButtonStatus = () => {
  if (pageCount === currentPage) {
    loadMoreButton.classList.add('disabled');
    loadMoreButton.setAttribute('disabled', true);
  }
};

const createCard = index => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = index;
  card.style.backgroundColor = getRandomColor();
  cardContainer.appendChild(card);
};

const addCards = pageIndex => {
  currentPage = pageIndex;

  handleButtonStatus();

  const startRange = (pageIndex - 1) * cardIncrease;
  const endRange =
    pageIndex * cardIncrease > cardLimit ? cardLimit : pageIndex * cardIncrease;

  cardCountElem.innerHTML = endRange;

  for (let i = startRange + 1; i <= endRange; i++) {
    createCard(i);
  }
};
addCards(currentPage);
loadMoreButton.style.backgroundColor = getRandomColor();
loadMoreButton.addEventListener('click', () => {
  addCards(currentPage + 1);
});
