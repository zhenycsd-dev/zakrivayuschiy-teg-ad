/*
  Обновлённый скрипт для работы с новыми семантическими классами:
  ✦ .like-icon — SVG-иконка анимированного сердца (без изменений)
  ✦ .like-action-btn — кнопка с текстом "Like"/"Unlike" (вместо .card__like-button)
  ✦ .like-icon-trigger — кнопка, оборачивающая иконку сердца (вместо .card__icon-button)
  ✦ .is-liked — состояние "лайкнутой" иконки (без изменений)
  ✦ .button__text — текстовый элемент внутри кнопки (без изменений)
*/

const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.like-action-btn');
const iconButtonArray = document.querySelectorAll('.like-icon-trigger');

iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', () => {
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', () => {
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const textEl = button.querySelector('.button__text');
  if (!textEl) return;

  setTimeout(() => {
    textEl.textContent = heart.classList.contains('is-liked') ? 'Unlike' : 'Like';
  }, 500);
}