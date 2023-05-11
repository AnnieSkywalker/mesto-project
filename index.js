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
const buttonAddModalCard = document.querySelector('.modal__button-add-card');
const buttonEditModalProfile = document.querySelector('.modal__button-edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');


initialCards.forEach(item => {
  addCard(item.link, item.name);
})


function initialInputValueModalProfile () {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


function addCard (link, name) {
  const cardTemplate = document.querySelector('#cards__item');
  const cardsImage = cardTemplate.content.querySelector('.cards__image');
  const cardsTitle = cardTemplate.content.querySelector('.cards__title');

  insertingOptions (cardsImage, cardsTitle, link, name);
  const cardsItem = cardTemplate.content.cloneNode(true);
  cardsList.append(cardsItem);
}


function editValueProfile (description, name) {
  profileAbout.textContent = description;
  profileName.textContent = name;
}


function openModal (evt) {
  const target = evt.target;

  if (target.dataset.button === 'edit-profile') {
    initialInputValueModalProfile();
  }

  if (target.hasAttribute('data-image')) {
    scrollingImageParameters(target);
  }

  if (target.hasAttribute('data-button') || target.hasAttribute('data-image')) {
    let valueDataAttribute = target.dataset.button ? target.dataset.button : target.dataset.image;
    let modal = document.querySelector('.modal__' + valueDataAttribute);

    modal.classList.add('modal_active');
  }
}

function scrollingImageParameters (el) {
  const modalImageBig = document.querySelector('.modal__image-big');
  const modalImageText = document.querySelector('.modal__image-text');
  let linkImage = el.getAttribute('src');
  let nameImage = el.getAttribute('alt');

  insertingOptions (modalImageBig, modalImageText, linkImage, nameImage);
}

function insertingOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}


function closeModal(evt) {
  const target = evt.target;

  if(target.classList.contains('modal__close') || target.classList.contains('modal')) {
    disactiveModal(target);
  }
}


function disactiveModal (el) {
  let modal = el.closest('.modal');
  modal.classList.remove('modal_active');
}


function addNewCard (evt) {
  evt.preventDefault();
  const self = this;
  const link = document.querySelector('#card-link');
  const name = document.querySelector('#card-name');

  addCard(link.value, name.value)

  link.value = '';
  name.value = '';

  disactiveModal(self);
}


function editProfile(evt) {
  evt.preventDefault();
  const self = this;

  editValueProfile(authorDescription.value, authorName.value);

  disactiveModal(self);
}


function addLike (evt) {
  const target = evt.target;

  if(target.classList.contains('cards__like')) {
    target.classList.toggle('cards__like_active');
  }
}


cardsList.addEventListener('click', addLike);

document.addEventListener('click', openModal);

document.addEventListener('click', closeModal);

buttonAddModalCard.addEventListener('click', addNewCard);

buttonEditModalProfile.addEventListener('click', editProfile);
