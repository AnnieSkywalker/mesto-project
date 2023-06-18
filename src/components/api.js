import { likeState, updateLikeState } from '../components/card.js';

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

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const getInfoUser = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const getAllInfo = () => {
  return Promise.all([getInfoUser(), getInitialCards()])
}


export const editProfile = (data) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const editAvatar = (data) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const addNewCard = (data) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data)
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const removeCard = (dataId) => {
  return fetch(`${config.baseUrl}/cards/${dataId}`, {
    method: 'DELETE',
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}


export const changeLikeStatus = (dataId, likeState) => {
  return fetch(`${config.baseUrl}/cards/likes/${dataId}`, {
    method: likeState ? 'DELETE' : 'PUT',
    headers: config.headers
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(`Ошибка: ${res.status}`);
    });
}
