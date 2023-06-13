export function insertOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}

export function inactiveButtonSubmit (formElement, link, name, config) {
  const buttonElement = formElement.querySelector('button[type="submit"]');

  if(link == '' || name == '') {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
}