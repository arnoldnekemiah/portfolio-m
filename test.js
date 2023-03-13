// Get the elements
const menu = document.querySelector('.menu');
const links = document.querySelector('.links');
const close = document.querySelector('.close');

// Add an event listener to the menu image
menu.addEventListener('click', function() {
   // Toggle the visibility of the mobile menu and close button
   links.style.display = 'block';
   close.style.display = 'block';
   menu.style.display = 'none';
});

// Add an event listener to the close button
close.addEventListener('click', function() {
   // Toggle the visibility of the mobile menu and menu icon
   links.style.display = 'none';
   close.style.display = 'none';
   menu.style.display = 'block';
});

// Add an event listener to the mobile links
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Hide the mobile menu
    links.style.display = 'none';
  });
});
