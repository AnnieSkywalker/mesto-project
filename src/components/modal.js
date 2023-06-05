const authorDescription = document.querySelector('#author-description');
const authorName = document.querySelector('#author-name');

const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__about');

export function openPopup (popup) {
  popup.classList.add('modal_active');
}

export function closePopup (popup) {
  popup.classList.remove('modal_active');
}

export function insertOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}

export function fillProfileInputs () {
  authorDescription.value = profileAbout.textContent;
  authorName.value = profileName.textContent;
}


export function editValueProfile (description, name) {
  profileAbout.textContent = description;
  profileName.textContent = name;
}
