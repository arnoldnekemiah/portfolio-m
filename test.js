const ad = document.getElementById('links');
function toggleMenuPopup() {
  ad.classList.toggle('menu-popup');
}
document.getElementById('btn-menu').addEventListener('click', toggleMenuPopup);

const closeBtn = document.querySelector('.close-popup');

closeBtn.addEventListener('click', () => {
  ad.classList.remove('menu-popup');
  // document.body.classList.closeBtn('menu-open');
});

const links = document.querySelectorAll('.specific-links a');

links.forEach((link) => {
  link.addEventListener('click', () => {
    ad.classList.remove('menu-popup');
  });
});