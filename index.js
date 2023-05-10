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
const buttonAddCard = document.querySelector('.modal__button-add-card');
const modalClose = document.querySelector('.modal__close');



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

function openModal (evt) {
  const target = evt.target;

  if(target.hasAttribute('data-button')) {
    const modal = document.querySelector('.modal__' + target.dataset.button);

    modal.classList.add('modal_active');
  }
}

function closeModal(evt) {
  const target = evt.target;

  if(target.classList.contains('modal__close') || target.classList.contains('modal')) {
    disactiveModal(target);
  }
}

function disactiveModal (el) {
  console.log(el);
  let modal = el.closest('.modal');
  modal.classList.remove('modal_active');
}

function addNewCard (evt) {
  evt.preventDefault();
  let self = this;
  const link = document.querySelector('#card-link');
  const name = document.querySelector('#card-name');

  addCard(link.value, name.value)

  link.value = '';
  name.value = '';

  disactiveModal(self);
}

cardsList.addEventListener('click', function(evt) {
  const target = evt.target;

  if(target.classList.contains('cards__like')) {
    target.classList.toggle('cards__like_active');
  }
})


document.addEventListener('click', openModal)

document.addEventListener('click', closeModal);

buttonAddCard.addEventListener('click', addNewCard);