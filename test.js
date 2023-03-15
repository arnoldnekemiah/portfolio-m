

document.getElementById('btn-menu').addEventListener('click', toggleMenuPopup)
const ad = document.getElementById('links')
const closeBtn = document.querySelector('.close-popup');

function toggleMenuPopup() {
  ad.classList.toggle('menu-popup');
}

closeBtn.addEventListener('click', () => {
  ad.classList.remove('menu-popup');
  document.body.classList.closeBtn('menu-open');
});