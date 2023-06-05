import { openPopup, insertOptions } from './modal.js';

const imagePopup = document.querySelector('.modal__image');

const imageBigPopup = document.querySelector('.modal__image-big');
const imageTextPopup = document.querySelector('.modal__image-text');

export function zoomImage (nameImage, linkImage) {
  insertOptions (imageBigPopup, imageTextPopup, linkImage, nameImage);
  openPopup(imagePopup);
}