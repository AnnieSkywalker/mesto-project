import { insertOptions } from '../components/utils.js';
import { zoomImage } from '../components/modal.js';

const cardsList = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#cards__item');
const cardsImage = cardTemplate.content.querySelector('.cards__image');
const cardsTitle = cardTemplate.content.querySelector('.cards__title');


export function toggleLike (evt) {
  evt.target.classList.toggle('cards__like_active');
}


export function removeCard (evt) {
  evt.target.closest('.cards__item').remove();
}


export function renderCard (item, userId) {
  const cardsItem = createCard(item, userId);
  cardsList.prepend(cardsItem);
}


function createCard(item, userId) {
  insertOptions (cardsImage, cardsTitle, item.link, item.name);
  const cardElement = cardTemplate.content.cloneNode(true);

  cardElement.querySelector(".cards__like").addEventListener('click', toggleLike);
  cardElement.querySelector(".cards__remove").addEventListener('click', removeCard);
  cardElement.querySelector(".cards__image").addEventListener("click", () => zoomImage(item.name, item.link));

  if (item.owner._id !== userId) {
    cardElement.querySelector(".cards__remove").remove();
  }

  return cardElement;
}