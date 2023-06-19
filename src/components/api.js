import { likeState, updateLikeState } from '../components/card.js';
import { checkResponse } from '../components/utils.js';

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-25',
  headers: {
    authorization: '0d542192-e955-4b61-8a86-b9e7957fbdbe',
    'Content-Type': 'application/json'
  }
}


const request = (url, options) => {
  return fetch(url, options).then(checkResponse);
}


export const getInitialCards = () => {
  return request(`${config.baseUrl}/cards`, { headers: config.headers });
}


export const getInfoUser = () => {
  return request(`${config.baseUrl}/users/me`, { headers: config.headers });
}


export const getAllInfo = () => {
  return Promise.all([getInfoUser(), getInitialCards()])
}


export const editProfile = (data) => {
  return request(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  });
}


export const editAvatar = (data) => {
  return request(`${config.baseUrl}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(data)
  });
}


export const addNewCard = (data) => {
  return request(`${config.baseUrl}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(data)
  });
}


export const removeCard = (dataId) => {
  return request(`${config.baseUrl}/cards/${dataId}`, {
    method: 'DELETE',
    headers: config.headers
  });
}


export const changeLikeStatus = (dataId, likeState) => {
  return request(`${config.baseUrl}/cards/likes/${dataId}`, {
    method: likeState ? 'DELETE' : 'PUT',
    headers: config.headers
  });
}
