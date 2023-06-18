import { insertOptions } from '../components/utils.js';
import { zoomImage } from '../components/modal.js';
import { removeCard, changeLikeStatus } from '../components/api.js';


export const renderCard = (dataCard, userId) => {
  const cardsList = document.querySelector('.cards__list');
  const cardsItem = createCard(dataCard, userId, handleLikeStatus, handleRemoveCard );
  cardsList.prepend(cardsItem);
}


export const likeState = (likesArr, userId) => {
  return Boolean(likesArr.find(objItem => objItem._id === userId));
}


export const updateLikeState = (cardElement, likesArr, userId) => {
  const ButtonLike =  cardElement.querySelector('.cards__like');
  const NumberLike =  cardElement.querySelector('.cards__number-likes');

  NumberLike.textContent = likesArr.length;

  if(likeState(likesArr, userId)) {
    ButtonLike.classList.add('cards__like_active');
  } else {
    ButtonLike.classList.remove('cards__like_active');
  }
}


const checkActivityLike = (cardElementButtonLike) => {
  return cardElementButtonLike.classList.contains('cards__like_active');
}


const createCard = (dataCard, userId) => {
  const cardTemplate = document.querySelector('#cards__item');
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardsImage = cardElement.querySelector('.cards__image');
  const cardsTitle = cardElement.querySelector('.cards__title');
  const cardButtonLike =  cardElement.querySelector(".cards__like");

  insertOptions (cardsImage, cardsTitle, dataCard.link, dataCard.name);

  cardElement.querySelector(".cards__group-like").addEventListener('click', (evt) => { handleLikeStatus(evt.target.parentNode, dataCard._id, userId, checkActivityLike(cardButtonLike))} );
  cardElement.querySelector(".cards__remove").addEventListener('click', (evt) => { handleRemoveCard(evt.target, dataCard._id) });
  cardElement.querySelector(".cards__image").addEventListener("click", () => zoomImage(dataCard.name, dataCard.link));

  updateLikeState(cardElement, dataCard.likes, userId);

  if (dataCard.owner._id !== userId) {
    cardElement.querySelector(".cards__remove").remove();
  }

  return cardElement;
}


const handleRemoveCard = (cardElement, dataId) => {
  removeCard(dataId)
    .then(() => {
      cardElement.closest('.cards__item').remove();
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
}


const handleLikeStatus = (cardElement, dataId, userId, state) =>{
  changeLikeStatus(dataId, state)
    .then((serverData) => {
      updateLikeState(cardElement, serverData.likes, userId);
    })
    .catch((err) => {
      console.log(`Что-то пошло не так, ошибка ${err} `)
    })
}
