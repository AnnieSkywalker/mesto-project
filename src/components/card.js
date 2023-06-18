import { insertOptions } from '../components/utils.js';
import { zoomImage } from '../components/modal.js';
import { removeCard } from '../components/api.js';

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#cards__item');
const cardsImage = cardTemplate.content.querySelector('.cards__image');
const cardsTitle = cardTemplate.content.querySelector('.cards__title');


export function toggleLike (evt) {
  evt.target.classList.toggle('cards__like_active');
}

export function renderCard (dataCard, userId) {
  const cardsItem = createCard(dataCard, userId, handleRemoveCard );
  cardsList.prepend(cardsItem);
}


function createCard(dataCard, userId) {
  insertOptions (cardsImage, cardsTitle, dataCard.link, dataCard.name);
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector(".cards__like").addEventListener('click', toggleLike);
  cardElement.querySelector(".cards__remove").addEventListener('click', (evt) => { handleRemoveCard(evt.target, dataCard._id) });
  cardElement.querySelector(".cards__image").addEventListener("click", () => zoomImage(dataCard.name, dataCard.link));

  if (dataCard.owner._id !== userId) {
    cardElement.querySelector(".cards__remove").remove();
  }

  return cardElement;
}

function handleRemoveCard (cardElement, dataId) {
  removeCard(dataId)
    .then(() => {
      cardElement.closest('.cards__item').remove();
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
}