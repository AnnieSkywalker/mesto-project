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

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const profilePopup = document.querySelector('.modal__edit-profile');
const cardPopup = document.querySelector('.modal__add-card');
const imagePopup = document.querySelector('.modal__image');

const imageBigPopup = document.querySelector('.modal__image-big');
const imageTextPopup = document.querySelector('.modal__image-text');

const cardButton = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');
const closeButtons = document.querySelectorAll('.modal__close');

const profileForm = document.forms["authorForm"];
const cardForm = document.forms["cardForm"];


initialCards.forEach(item => {
  addCard(item);
})

function addCard (item) {
  const cardsItem = createCard(item);

  cardsItem.querySelector(".cards__like").addEventListener('click', addLike);
  cardsItem.querySelector(".cards__remove").addEventListener('click', removeCard);
  cardsItem.querySelector(".cards__image").addEventListener('click', zoomImage);

  cardsList.prepend(cardsItem);
}


function createCard(item) {
  insertOptions (cardsImage, cardsTitle, item.link, item.name);
  const cardElement = cardTemplate.content.cloneNode(true);

  return cardElement;
}


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

function openPopup (popup) {
  popup.classList.add('modal_active');
}


function closePopup (popup) {
  popup.classList.remove('modal_active');
}


function zoomImage (evt) {
  const target = evt.target;
  const linkImage = target.getAttribute('src');
  const nameImage = target.getAttribute('alt');

  insertOptions (imageBigPopup, imageTextPopup, linkImage, nameImage);
  openPopup(imagePopup);
}


function fillProfileInputs () {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


function editValueProfile (description, name) {
  profileAbout.textContent = description;
  profileName.textContent = name;
}


function insertOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}


cardButton.addEventListener('click', function (evt) {
  openPopup(cardPopup);
})

profileButton.addEventListener('click', function () {
  fillProfileInputs();
  openPopup(profilePopup);
})


closeButtons.forEach((button) => {
  const popup = button.closest('.modal');

  button.addEventListener('click', () => closePopup(popup));
});


profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const self = evt.target;

  editValueProfile(authorDescription.value, authorName.value);
  closePopup(self.closest('.modal'));
});


cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const self = evt.target;
  const item = {
    link: cardLink.value,
    name: cardName.value
  }

  addCard(item);
  self.reset();
  closePopup(self.closest('.modal'));
});
