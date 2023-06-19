export const insertOptions = (image, text, link, name) => {
  image.setAttribute('src', link);
  image.setAttribute('alt', name);
  text.textContent = name;
}


export const deactivateButtonSubmit = (formElement, link, name, config) => {
  const buttonElement = formElement.querySelector('button[type="submit"]');

  if(link == '' || name == '') {
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  }
}

export const isLoading = (textButton, state) => {
  if (state) {
    textButton.textContent = "Сохранение..."
  } else {
    textButton.textContent = "Сохранить"
  }
}

export const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(`Ошибка: ${response.status}`);
}
