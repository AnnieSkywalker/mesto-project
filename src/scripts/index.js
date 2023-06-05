import '../pages/index.css';

const R2D2 = new URL('../images/r2-d2.jpg', import.meta.url);
const Podracing2 = new URL('../images/podracing-2.jpg', import.meta.url);
const Podracing = new URL('../images/podracing.jpg', import.meta.url);
const Tuskens = new URL('../images/tuskens.jpg', import.meta.url);
const TatooineFarm = new URL('../images/tatooine-farm.jpg', import.meta.url);
const Tatooine = new URL('../images/tatooine.jpg', import.meta.url);

const initialCards = [
  {
    name: 'робот Р2-Д2',
    link: R2D2
  },
  {
    name: 'под Энакина',
    link: Podracing2
  },
  {
    name: 'гонки на подах',
    link: Podracing
  },
  {
    name: 'Тускены',
    link: Tuskens
  },
  {
    name: 'ферма',
    link: TatooineFarm
  },
  {
    name: 'Татуин',
    link: Tatooine
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

const popupList = document.querySelectorAll('.modal')

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

//валидация форм


const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('modal__input-type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('modal__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('modal__input-type_error');
  errorElement.classList.remove('modal__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {

  return inputList.some((inputElement) => {

    return !inputElement.validity.valid;
  })
};

const toggleButtonState = (inputList, buttonElement) => {
  // console.log(inputList);
  // console.log(buttonElement);
  if (hasInvalidInput(inputList)) {
    console.log(buttonElement)
    buttonElement.classList.add('modal__submit-button_inactive');
  } else {
    buttonElement.classList.remove('modal__submit-button_inactive');
  }
};

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

    // const fieldsetList = Array.from(formElement.querySelectorAll('.form__set'));

    // fieldsetList.forEach((fieldSet) => {
    //   setEventListeners(fieldSet);
    // });
  });
};

enableValidation();
