const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#cards__item');
const cardsImage = cardTemplate.content.querySelector('.cards__image');
const cardsTitle = cardTemplate.content.querySelector('.cards__title');

initialCards.forEach(item => {
  cardsImage.setAttribute('src', item.link);
  cardsImage.setAttribute('alt', item.name);
  cardsTitle.textContent = item.name;
  const cardsItem = cardTemplate.content.cloneNode(true);
  cardsList.append(cardsItem);
})
