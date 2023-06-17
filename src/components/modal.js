import { insertOptions } from '../components/utils.js';

const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const imagePopup = document.querySelector('.modal__image');

const imageBigPopup = document.querySelector('.modal__image-big');
const imageTextPopup = document.querySelector('.modal__image-text');

export function zoomImage (nameImage, linkImage) {
  insertOptions (imageBigPopup, imageTextPopup, linkImage, nameImage);
  openPopup(imagePopup);
}


export function openPopup (popup) {
  popup.classList.add('modal_active');
  document.addEventListener('keydown', closeByEscape);
}


export function closePopup (popup) {
  popup.classList.remove('modal_active');
  document.removeEventListener('keydown', closeByEscape);
}


export function fillProfileInputs () {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


export function editValueProfile (name, description) {
  profileAbout.textContent = description;
  profileName.textContent = name;
}


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.modal_active');
    closePopup(openedPopup);
  }
}
