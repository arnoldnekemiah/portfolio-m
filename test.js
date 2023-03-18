// Humburger menu section
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

// popup window
const data = [
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Keeping track of hundreds  of components website',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio2.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
  {
    title: 'Multi Post Stories',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    technologies: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    featureImg: './Images/Snapshoot-Portfolio2.png',
    liveLink: 'https://arnoldnekemiah.github.io/portfolio-m/',
    linkSource: 'https://github.com/arnoldnekemiah/portfolio-m',
    iconCancel: './Images/IconPop.png',
  },
];
const seeProject = document.querySelectorAll('.popup');
const section = document.createElement('div');
section.className = 'popup-container';
let content = '';
data.forEach((item) => {
  content = `
  <div class="popup-details-container">
       <span class="popup-name-image">
          <h1 class="popup-name">${item.title}</h1>
          <img src=${item.iconCancel} class="popup-image"> 
       </span>
    <div class="evelop">
    <div class="conatainer1">
      <ul class="popup-unorded-list">
          ${item.technologies.map((itemList) => `<li class="popup-list">${itemList}</li>`).join('')}
      </ul>
    <span class="desktop-diff">
          <img src=${item.featureImg} class="popup-feature-img">
    </span>
</div>

  <div class="left-side">
    <p class="popup-description">${item.description}</p>
    <span class="popup-button">
      <button class="button popup-button-1">
        <a href=${item.liveLink}>See Project</a>
        <img class="git" src="./Images/Iconic.png">
      </button>
      <button class="button popup-button-1">
        <a href=${item.linkSource}>See Source</a>
        <img src="./Images/Vectoric.png">
      </button>
    </span>
  </div>
    </div>
      
  </div> 
  `;
});
section.innerHTML = content;
function closePopup() {
  document.body.removeChild(section);
  document.body.style.overflow = 'scroll';
}
function createPopup() {
  document.body.appendChild(section);
  document.body.style.overflow = 'hidden';
  const closeProject = document.querySelector('.popup-image');
  closeProject.addEventListener('click', closePopup);
}
for (let i = 0; i < seeProject.length; i += 1) {
  seeProject[i].addEventListener('click', createPopup);
}

// form validation
const form = document.querySelector('.form');
const emailInput = document.querySelector('#mail');
const errorMessage = document.querySelector('#error-message');

form.addEventListener('submit', (event) => {
  const emailValue = emailInput.value;
  if (emailValue === emailValue.toLowerCase()) {
    errorMessage.style.display = 'none';
  } else {
    event.preventDefault();
    errorMessage.style.display = 'flex';
  }
});

//Save user data
// using localstroage

const email = document.getElementById('mail');
const username = document.getElementById('username');
const message = document.getElementById('message');

if (localStorage.getItem('contact-data') !== null) {
  const data = JSON.parse(localStorage.getItem('contact-data'));
  email.value = data.email;
  username.value = data.username;
  message.value = data.message;
}

const contactData = {
  email,
  username,
  message,
};

email.addEventListener('change', (e) => {
  contactData.email = e.target.value;
  contactData.username = username.value;
  contactData.message = message.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

username.addEventListener('change', (e) => {
  contactData.username = e.target.value;
  contactData.message = message.value;
  contactData.email = email.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});

message.addEventListener('change', (e) => {
  contactData.message = e.target.value;
  contactData.email = email.value;
  contactData.username = username.value;
  localStorage.setItem('contact-data', JSON.stringify(contactData));
});
// Helper function to set form data from object
function setFormData(dataSave, data) {
  for (const key in data) {
    if (dataSave.elements[key]) {
      dataSave.elements[key].value = data[key];
    }
  }
}