export function insertOptions (image, text, link, name) {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}


export function deactivateButtonSubmit (formElement, link, name, config) {
  const buttonElement = formElement.querySelector('button[type="submit"]');

  if(link == '' || name == '') {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
}

export function isLoading(textButton, state) {
  if (state) {
    textButton.textContent = "Сохранение..."
  } else {
    textButton.textContent = "Сохранить"
  }
}
