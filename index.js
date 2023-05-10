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


function addCard (link, name) {
  const cardTemplate = document.querySelector('#cards__item');
  const cardsImage = cardTemplate.content.querySelector('.cards__image');
  const cardsTitle = cardTemplate.content.querySelector('.cards__title');

  cardsImage.setAttribute('src', link);
  cardsImage.setAttribute('alt', name);
  cardsTitle.textContent = name;
  const cardsItem = cardTemplate.content.cloneNode(true);
  cardsList.append(cardsItem);
}

initialCards.forEach(item => {
  addCard(item.link, item.name);
})

cardsList.addEventListener('click', function(evt) {
  const target = evt.target;

  if(target.classList.contains('cards__like')) {
    target.classList.toggle('cards__like_active');
  }
})

const profileAddButton = document.querySelector('.profile__add-button');

profileAddButton.addEventListener('click', function() {
  const modalProfile = document.querySelector('.modal__profile');

  modalProfile.classList.add('modal_active');
})

document.addEventListener('click', function(evt) {
  const target = evt.target;
  const modalProfile = document.querySelector('.modal__profile');

  if(target.classList.contains('modal__close') || target.classList.contains('modal')) {
    modalProfile.classList.remove('modal_active');
  }
})