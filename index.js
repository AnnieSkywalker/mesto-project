const initialCards = [
  {
    name: 'робот Р2-Д2',
    link: './images/r2-d2.jpg'
  },
  {
    name: 'под Энакина',
    link: './images/podracing-2.jpg'
  },
  {
    name: 'гонки на подах',
    link: './images/podracing.jpg'
  },
  {
    name: 'Тускены',
    link: './images/tuskens.jpg'
  },
  {
    name: 'ферма',
    link: './images/tatooine-farm.jpg'
  },
  {
    name: 'Татуин',
    link: './images/tatooine.jpg'
  }
];


const cardsList = document.querySelector('.cards__list');

const cardTemplate = document.querySelector('#cards__item');
const cardsImage = cardTemplate.content.querySelector('.cards__image');
const cardsTitle = cardTemplate.content.querySelector('.cards__title');

const cardLink = document.querySelector('#card-link');
const cardName = document.querySelector('#card-name');

const buttonAddModalCard = document.querySelector('.modal__button-add-card');
const buttonEditModalProfile = document.querySelector('.modal__button-edit-profile');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const modalImageBig = document.querySelector('.modal__image-big');
const modalImageText = document.querySelector('.modal__image-text');

const profilePopup = document.querySelector('.modal__edit-profile');
const cardPopup = document.querySelector('.modal__add-card');
const imagePopup = document.querySelector('.modal__image');

const closeButtons = document.querySelectorAll('.modal__close');

const profileForm = document.forms["authorForm"];
const cardForm = document.forms["cardForm"];


initialCards.forEach(item => {
  addCard(item);
})


function addCard (item) {
  const cardsItem = createCard(item)
  cardsList.prepend(cardsItem);
}


function createCard(item) {
  insertingOptions (cardsImage, cardsTitle, item.link, item.name);
  const cardElement = cardTemplate.content.cloneNode(true);

  return cardElement;
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
    const valueDataAttribute = target.dataset.button ? target.dataset.button : target.dataset.image;
    const modal = document.querySelector('.modal__' + valueDataAttribute);

    openPopup(modal);
  }
}


function openPopup (popup) {
  popup.classList.add('modal_active');
}

function closePopup (popup) {
  popup.classList.remove('modal_active');
}


closeButtons.forEach((button) => {
  const popup = button.closest('.modal');

  button.addEventListener('click', () => closePopup(popup));
});


function addLike (evt) {
  const target = evt.target;

  if(target.classList.contains('cards__like')) {
    target.classList.toggle('cards__like_active');
  }
}


function removeCard (evt) {
  const target = evt.target;

  if(target.classList.contains('cards__remove')) {
    target.closest('.cards__item').remove();
  }
}


function disactiveModal (el) {
  const modal = el.closest('.modal');
  modal.classList.remove('modal_active');
}


function initialInputValueModalProfile () {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


function editValueProfile (description, name) {
  profileAbout.textContent = description;
  profileName.textContent = name;
}


function scrollingImageParameters (el) {
  const linkImage = el.getAttribute('src');
  const nameImage = el.getAttribute('alt');

  insertingOptions (modalImageBig, modalImageText, linkImage, nameImage);
}


function insertingOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}


profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const self = this;

  editValueProfile(authorDescription.value, authorName.value);

  disactiveModal(self);
});

cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const self = this;

  const item = {
    link: cardLink.value,
    name: cardName.value
  }

  addCard(item);

  cardLink.value = '';
  cardName.value = '';

  disactiveModal(self);
});



document.addEventListener('click', openModal);

cardsList.addEventListener('click', addLike);

cardsList.addEventListener('click', removeCard);
