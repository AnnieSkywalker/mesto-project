import { insertOptions } from '../components/utils.js';

const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

const imagePopup = document.querySelector('.modal__image');

const imageBigPopup = document.querySelector('.modal__image-big');
const imageTextPopup = document.querySelector('.modal__image-text');

export const zoomImage = (nameImage, linkImage) => {
  insertOptions (imageBigPopup, imageTextPopup, linkImage, nameImage);
  openPopup(imagePopup);
}


export const openPopup = (popup) => {
  popup.classList.add('modal_active');
  document.addEventListener('keydown', closeByEscape);
}


export const closePopup = (popup) => {
  popup.classList.remove('modal_active');
  document.removeEventListener('keydown', closeByEscape);
}


export const fillProfileInputs = () => {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


export const editValueProfile = (name, description) => {
  profileAbout.textContent = description;
  profileName.textContent = name;
}


const closeByEscape = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.modal_active');
    closePopup(openedPopup);
  }
}
