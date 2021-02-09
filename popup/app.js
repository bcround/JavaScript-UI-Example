// DOM
const $popup = document.querySelector('.popup-bg');
const $popupInput = document.querySelector('.popup-input');

const closeModal = () => {
  $popup.classList.remove('is-active');
};

const renderPopupText = () => {
  document.querySelector('.popup-message').textContent = `from popup: ${$popupInput.value}`;
  $popupInput.value = '';
};

document.querySelector('.toggle-popup').onclick = () => {
  $popup.classList.add('is-active');
};

document.querySelector('.popup-form').onsubmit = e => {
  e.preventDefault();
  renderPopupText();
  closeModal();
}

$popup.onclick = e => {
  if (!e.target.matches('.popup-bg *') || e.target.matches('button[type="button"]')) closeModal();
}