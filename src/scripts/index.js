const initialCards = [
  {
    name: 'робот Р2-Д2',
    link: './src/images/r2-d2.jpg'
  },
  {
    name: 'под Энакина',
    link: './src/images/podracing-2.jpg'
  },
  {
    name: 'гонки на подах',
    link: './src/images/podracing.jpg'
  },
  {
    name: 'Тускены',
    link: './src/images/tuskens.jpg'
  },
  {
    name: 'ферма',
    link: './src/images/tatooine-farm.jpg'
  },
  {
    name: 'Татуин',
    link: './src/images/tatooine.jpg'
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


initialCards.forEach(addCard);

function addCard (item) {
  const cardsItem = createCard(item);
  cardsList.prepend(cardsItem);
}


function createCard(item) {
  insertOptions (cardsImage, cardsTitle, item.link, item.name);
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector(".cards__like").addEventListener('click', toggleLike);
  cardElement.querySelector(".cards__remove").addEventListener('click', removeCard);
  cardElement.querySelector(".cards__image").addEventListener("click", () => zoomImage(item.name, item.link));

  return cardElement;
}


function toggleLike (evt) {
  evt.target.classList.toggle('cards__like_active');
}


function removeCard (evt) {
  evt.target.closest('.cards__item').remove();
}

function openPopup (popup) {
  popup.classList.add('modal_active');
}


function closePopup (popup) {
  popup.classList.remove('modal_active');
}


function zoomImage (nameImage, linkImage) {
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

  editValueProfile(authorDescription.value, authorName.value);
  closePopup(profilePopup);
});


cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formElement = evt.target;
  const item = {
    link: cardLink.value,
    name: cardName.value
  }

  addCard(item);
  formElement.reset();
  closePopup(cardPopup);
});
