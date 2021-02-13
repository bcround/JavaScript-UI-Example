// DOM
const $submenus = document.querySelectorAll('.submenu');

const showSubmenu = target => {
  const $submenu = target.closest('.menu-container').children[1];

  $submenus.forEach($submenu => {
    $submenu.style.height = '0';
  })

  $submenu.style.height = `${$submenu.scrollHeight}px`;
};

const activateMenu = target => {
  document.querySelectorAll('.menu-container').forEach(menu => menu.classList.remove('active'));
  target.closest('.menu-container').classList.add('active');
};

document.querySelector('.accordion').onclick = e => {
  const target = e.target;

  if (!target.matches('.menu-container *')) return;

  showSubmenu(target);
  activateMenu(target);
}

const init = () => {
  $submenus[0].style.height = 'auto';
  $submenus[0].style.height = `${$submenus[0].scrollHeight}px`;
};

document.addEventListener('DOMContentLoaded', init);