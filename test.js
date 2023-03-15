const ad = document.getElementById('links');
function toggleMenuPopup() {
  ad.classList.toggle('menu-popup');
}
document.getElementById('btn-menu').addEventListener('click', toggleMenuPopup);
const closeBtn = document.querySelector('.close-popup');
closeBtn.addEventListener('click', () => {
  ad.classList.remove('menu-popup');
});
const links = document.querySelectorAll('.specific-links a');
links.forEach((link) => {
  link.addEventListener('click', () => {
    ad.classList.remove('menu-popup');
  });
});