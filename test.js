const menuButton = document.querySelector('.menu');
const closeButton = document.querySelector('.close-popup');
const menuPopup = document.querySelector('.menu-popup');
const specificLinks = document.querySelectorAll('.specific-links a');

menuButton.addEventListener('click', toggleMenuPopup);
closeButton.addEventListener('click', toggleMenuPopup);
specificLinks.forEach(link => link.addEventListener('click', toggleMenuPopup));

function toggleMenuPopup() {
  menuPopup.classList.toggle('active');
}
