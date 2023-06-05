import '../pages/index.css';
import { showInputError, hideInputError, checkInputValidity, hasInvalidInput, toggleButtonState } from '../components/validate.js';
import { initialCards, toggleLike, removeCard } from '../components/card.js';
import { openPopup, closePopup, insertOptions, fillProfileInputs, editValueProfile } from '../components/modal.js';
import { zoomImage } from '../components/utils.js'

const cardsList = document.querySelector('.cards__list');

const cardTemplate = document.querySelector('#cards__item');
const cardsImage = cardTemplate.content.querySelector('.cards__image');
const cardsTitle = cardTemplate.content.querySelector('.cards__title');

const cardLink = document.querySelector('#card-link');
const cardName = document.querySelector('#card-name');

const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const popupList = document.querySelectorAll('.modal')

const profilePopup = document.querySelector('.modal__edit-profile');
const cardPopup = document.querySelector('.modal__add-card');

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

popupList.forEach((popup) => {
  popup.addEventListener('click', evt => {
    if (evt.target == popup) {
      closePopup(popup);
    }
  }, true);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  })
})


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


const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.modal__input'));
  const buttonElement = formElement.querySelector('.modal__submit-button')

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.modal__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement);
  });
};


enableValidation();
