// const menuButton = document.querySelector('.menu');
// const closeButton = document.querySelector('.close-popup');
// const menuPopup = document.querySelector('.menu-popup');
// const specificLinks = document.querySelectorAll('.specific-links a');

// menuButton.addEventListener('click', toggleMenuPopup);
// closeButton.addEventListener('click', toggleMenuPopup);
document.getElementById('btn-menu').addEventListener('click', toggleMenuPopup)

function toggleMenuPopup() {
const a = document.getElementById('links')
  a.classList.toggle('menu-popup');
}
