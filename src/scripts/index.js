import '../pages/index.css';
import { settings, enableValidation, toggleButtonState } from '../components/validate.js';
import { initialCards, toggleLike, removeCard, addCard } from '../components/card.js';
import { openPopup, closePopup, fillProfileInputs, editValueProfile, zoomImage } from '../components/modal.js';
import { deactivateButtonSubmit } from '../components/utils.js';
import { getInitialCards, getInfoUser, getAllInfo} from '../components/api.js';

getInitialCards()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const cardLink = document.querySelector('#card-link');
const cardName = document.querySelector('#card-name');

const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const popupList = document.querySelectorAll('.modal')

const profilePopup = document.querySelector('.modal__edit-profile');
const profileAvatarPopup = document.querySelector('.modal__edit-avatar-profile');
const cardPopup = document.querySelector('.modal__add-card');

const cardButton = document.querySelector('.profile__add-button');
const profileButton = document.querySelector('.profile__edit-button');
const profileAvatarButton = document.querySelector('.profile__edit-avatar-button');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');
const profileAvatar = document.querySelector('.profile__avatar')


const profileForm = document.forms["authorForm"];6
const profileAvatarForm = document.forms["authorAvatarForm"];
const cardForm = document.forms["cardForm"];


getAllInfo()
  .then(([userData, cardsList]) => {
    profileName.textContent = userData.name;
    profileAbout.textContent = userData.about;
    profileAvatar.src = userData.avatar;

    cardsList.reverse().forEach((card => {
      addCard(card);
    }));
  })
  .catch((err) => {
    console.log(err);
  });


cardButton.addEventListener('click', function (evt) {
  openPopup(cardPopup);
})


profileButton.addEventListener('click', function () {
  fillProfileInputs();
  openPopup(profilePopup);
})


profileAvatarButton.addEventListener('click', function () {
  fillProfileInputs();
  openPopup(profileAvatarPopup);
})


popupList.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('modal_active')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('modal__close')) {
      closePopup(popup);
    }
  })
})


profileForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  editValueProfile(authorDescription.value, authorName.value);
  closePopup(profilePopup);
});

profileAvatarForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log('запрос');

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
  deactivateButtonSubmit(formElement, cardLink.value, cardName.value, settings);
  closePopup(cardPopup);
});


enableValidation(settings);
