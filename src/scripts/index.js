import '../pages/index.css';
import { settings, enableValidation } from '../components/validate.js';
import { renderCard } from '../components/card.js';
import { openPopup, closePopup, fillProfileInputs, editValueProfile, zoomImage } from '../components/modal.js';
import { deactivateButtonSubmit } from '../components/utils.js';
import { getAllInfo, editProfile, editAvatar, addNewCard } from '../components/api.js';


const cardLink = document.querySelector('#card-link');
const cardName = document.querySelector('#card-name');

const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');
const authorAvatar = document.querySelector('#author-avatar')

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


const profileForm = document.forms["authorForm"];
const profileAvatarForm = document.forms["authorAvatarForm"];
const cardForm = document.forms["cardForm"];


let userId = null;

getAllInfo()
  .then(([userData, cardsList]) => {
    profileName.textContent = userData.name;
    profileAbout.textContent = userData.about;
    profileAvatar.src = userData.avatar;
    userId = userData._id;

    cardsList.reverse().forEach((card => {
      renderCard (card, userId);
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

  editProfile({name: authorName.value, about: authorDescription.value})
    .then((serverData) => {
      editValueProfile(serverData.name, serverData.about);

      console.log(`Обновился профиль имя: ${serverData.name}, о профиле: ${serverData.about}`)
    })
    .then(() => {
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
});

profileAvatarForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  editAvatar({ avatar: authorAvatar.value })
    .then((serverData) => {
      console.log(serverData);
      profileAvatar.src = serverData.avatar;

      console.log(`Обновился профиль аватар: ${serverData.avatar}`)
    })
    .then(() => {
      closePopup(profileAvatarPopup);
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
});


cardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formElement = evt.target;

  addNewCard({name: cardName.value, link: cardLink.value,})
    .then((serverData) => {
      renderCard(serverData, userId);
    })
    .then(() => {
      formElement.reset();
      deactivateButtonSubmit(formElement, cardLink.value, cardName.value, settings);
      closePopup(cardPopup);
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
});


enableValidation(settings);
