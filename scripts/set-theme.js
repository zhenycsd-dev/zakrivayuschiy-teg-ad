/*
  Обновлённый скрипт с учётом нового имени класса кнопки:
  ✦ .theme-toggle — вместо .theme-menu__button (в HTML)
  ✦ theme-dark, theme-light, theme-auto — без изменений
  ✦ data-theme и disabled — без изменений
*/

function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-toggle');

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute('data-theme') === theme) {
        item.setAttribute('disabled', true);
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  if (root.classList.contains('theme-light')) {
    setDisabled('light');
  } else if (root.classList.contains('theme-dark')) {
    setDisabled('dark');
  } else {
    setDisabled('auto');
  }

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const selectedTheme = button.getAttribute('data-theme');
      changeTheme(selectedTheme);
      setDisabled(selectedTheme);
    });
  });
});