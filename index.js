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

function closeModal(el) {
  const modal = document.querySelectorAll('.modal');

  if(el.classList.contains('modal__close') || el.classList.contains('modal')) {
    modal.forEach(item => item.classList.remove('modal_active'));
  }
}

// const modalSubmitButton = document.querySelector('.modal__submit-button');

// modalSubmitButton.addEventListener(click, function() {
//   const description = document.querySelector('#author-description');
//   const name = document.querySelector('#author-name');

//   addProfile(name, description);

//   description.value = '';
//   name.value = '';
// })

cardsList.addEventListener('click', function(evt) {
  const target = evt.target;

  if(target.classList.contains('cards__like')) {
    target.classList.toggle('cards__like_active');
  }
})

const profileEditButton = document.querySelector('.profile__edit-button');

profileEditButton.addEventListener('click', function() {
  const modalProfile = document.querySelector('.modal__edit-profile');

  modalProfile.classList.add('modal_active');
})


const profileAddButton = document.querySelector('.profile__add-button');

profileAddButton.addEventListener('click', function() {
  const modalCard = document.querySelector('.modal__add-card');
  modalCard.classList.add('modal_active');
})

document.addEventListener('click', function(evt) {
  let target = evt.target;

  closeModal(target)
})