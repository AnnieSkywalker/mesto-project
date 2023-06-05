const R2D2 = new URL('../images/r2-d2.jpg', import.meta.url);
const Podracing2 = new URL('../images/podracing-2.jpg', import.meta.url);
const Podracing = new URL('../images/podracing.jpg', import.meta.url);
const Tuskens = new URL('../images/tuskens.jpg', import.meta.url);
const TatooineFarm = new URL('../images/tatooine-farm.jpg', import.meta.url);
const Tatooine = new URL('../images/tatooine.jpg', import.meta.url);

export const initialCards = [
  {
    name: 'робот Р2-Д2',
    link: R2D2
  },
  {
    name: 'под Энакина',
    link: Podracing2
  },
  {
    name: 'гонки на подах',
    link: Podracing
  },
  {
    name: 'Тускены',
    link: Tuskens
  },
  {
    name: 'ферма',
    link: TatooineFarm
  },
  {
    name: 'Татуин',
    link: Tatooine
  }
];

export function toggleLike (evt) {
  evt.target.classList.toggle('cards__like_active');
}


export function removeCard (evt) {
  evt.target.closest('.cards__item').remove();
}