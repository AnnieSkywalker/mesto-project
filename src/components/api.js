const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    authorization: '0d542192-e955-4b61-8a86-b9e7957fbdbe',
    'Content-Type': 'application/json'
  }
}

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(data => console.log(data));
}
