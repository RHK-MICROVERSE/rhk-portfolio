function controlMobileMenu() {
  const open = document.getElementById('mobile-nav');
  const close = document.getElementById('close-menu');
  const portfolio = document.getElementById('mobile-portfolio');
  const about = document.getElementById('mobile-about');
  const contact = document.getElementById('mobile-contact');
  function openMenu() {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.remove('invisible');
    menu.classList.add('visible');
  }
  function closeMenu() {
    const menu = document.querySelector('#mobile-menu');
    menu.classList.remove('visible');
    menu.classList.add('invisible');
  }
  open.addEventListener('click', () => {
    openMenu();
  });
  close.addEventListener('click', () => {
    closeMenu();
  });
  portfolio.addEventListener('click', () => {
    closeMenu();
  });
  about.addEventListener('click', () => {
    closeMenu();
  });
  contact.addEventListener('click', () => {
    closeMenu();
  });
  // =========================================

  const details = [
    {
      img: './images/3A_background_for_main_program.png',
      name: 'GLOBAL SUMMIT 2023',
      description:
        '"A joyful celebration believing in the value of openness and sharing, creating a positive change with people from over 80 countries is taking place in October, in Korea.',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'April 05, 2023',
      projectId: 1,
      seeLive: 'https://rhk-microverse.github.io/Conference/',
      seeSource: 'https://github.com/RHK-MICROVERSE/Conference',
    },
    {
      img: './images/5_card-img.png',
      name: 'Professional Art Printing Data-2',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'March 05, 2023',
      projectId: 2,
    },
    {
      img: './images/5_card-img.png',
      name: 'Professional Art Printing Data-3',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'February 05, 2023',
      projectId: 3,
    },
    {
      img: './images/5_card-img.png',
      name: 'Professional Art Printing Data-3',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'February 05, 2023',
      projectId: 4,
    },
    {
      img: './images/5_card-img.png',
      name: 'Professional Art Printing Data-3',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'February 05, 2023',
      projectId: 5,
    },
    {
      img: './images/5_card-img.png',
      name: 'Professional Art Printing Data-6',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'February 05, 2023',
      projectId: 6,
    },
    {
      img: './images/0_FontImage.png',
      name: 'To Do List',
      description:
        'To-do list" is a Single Page Application that helps to organize daily task.It simply lists the things that one needs to do and allows one to mark them as complete. Built with Javascript, HTML, & CSS. Styled by <a href = "https://www.youtube.com/watch?v=AcUd-_Yjjqg"> Emilia Andrzejewska</a>.This SPA has been built and deployed using webpack.',
      technologies: ['html', 'css', 'javascript'],
      addDate: 'January 01, 2023',
      projectId: 7,
      seeLive: 'https://rhk-microverse.github.io/To-Do-List/',
      seeSource: 'https://github.com/RHK-MICROVERSE/To-Do-List',
    },
  ];

  // My Recent Work Starts Here
  details.forEach((item) => {
    if (item.projectId === details.length) {
      const myRecentProjectDetails = `
      <div class="mrwImgDesktop">
        <img src="${item.img}" alt="my-recent-project-image" />
      </div>
      <div class="mrwRightSide">
        <div class="mrwSubtitle">
          <p class="multiPostStories">${item.name}</p>
        </div>
        <div class="supText">
          <p class="myRecentWorkDescription">${item.description}</p>
        </div>
        <ul class="mrwWrapper">
          <li class='mrwBox'>${item.technologies[0]}</li>
          <li class='mrwBox'>${item.technologies[1]}</li>
          <li class='mrwBox'>${item.technologies[2]}</li>
        </ul>
        <div class="mrwBtnContiner">
          <button class="mrwSeeProjectBtn" id='mrwSeeProjectButton'>See Project</button>
        </div>
      </div>
      `;
      document.querySelector('.myRecentWrokBottom').innerHTML = myRecentProjectDetails;
    }
  });

  // My Recent Work Ends Here

  // handle remove technologies lists from popup
  // eslint-disable-line no-return-assign
  function removeTechnologiesList() {
    const technologiesList = document.querySelector('#technologiesList');
    const removeElement = document.querySelector('#technologiesList li');
    if (removeElement !== null) {
      technologiesList.removeChild(removeElement);
    }
  }

  // create cards dynamically for each project from  DETAILS array on page load
  details.forEach((detail) => {
    if (detail.projectId < details.length) {
      // create project sections (cards)
      const cardMaster = document.querySelector('#card-master');
      const cardDetails = document.createElement('div');
      cardDetails.classList.add('cards-details');
      cardMaster.appendChild(cardDetails);
      const cardContainer = document.createElement('div');
      cardDetails.appendChild(cardContainer);
      cardContainer.classList.add('card-container');
      // eslint-disable-line no-return-assign
      cardContainer.setAttribute('style', `background-image:url(${detail.img});`);
      // for the card title
      const cardTitle = document.createElement('div');
      cardTitle.classList.add('card-title');
      cardContainer.appendChild(cardTitle);
      const cardTitleh1 = document.createElement('h1');
      cardTitle.appendChild(cardTitleh1);
      cardTitleh1.innerText = detail.name;
      // for the subcard / description
      const cardSubText = document.createElement('div');
      cardSubText.classList.add('card-sup-txt');
      cardContainer.appendChild(cardSubText);
      const cardDescription = document.createElement('p');
      cardDescription.classList.add('card-description');
      cardSubText.appendChild(cardDescription);
      cardDescription.textContent = detail.description;
      // create the technologies section
      const technologies = document.createElement('div');
      technologies.classList.add('technologies');
      const technologiesUl = document.createElement('ul');
      // create technologies lists in the card
      detail.technologies.forEach((technology) => {
        const techLi = document.createElement('li');
        technologiesUl.appendChild(techLi);
        techLi.classList.add('card-box');
        techLi.textContent = technology;
      });
      technologiesUl.classList.add('mrwWrapper');
      cardContainer.appendChild(technologiesUl);

      // create the see project button
      const cardProjectButton = document.createElement('div');
      cardProjectButton.classList.add('card-project-btn');
      cardContainer.appendChild(cardProjectButton);
      const detailButton = document.createElement('button');
      detailButton.classList.add('card-button-see-project');
      cardProjectButton.appendChild(detailButton);
      detailButton.textContent = 'See Project';

      removeTechnologiesList();

      // CLICK EVENT FOR 'See Project'
      const detailsPopup = document.querySelector('#popup');
      cardProjectButton.addEventListener('click', () => {
        detailsPopup.classList.remove('hide');
        detailsPopup.classList.add('show');
        // update content of popup based on clicked project card
        const popupTitle = document.querySelector('#popupTitle');
        popupTitle.textContent = detail.name;
        // update technologies lists based on the content on the selected card
        const technologiesList = document.querySelector('#technologiesList');
        let el = '';
        detail.technologies.forEach((technology) => {
          el += `
            <li class="popup-box">${technology}</li>
          `;
        });
        technologiesList.innerHTML = el;
        // update the image of the popup
        const seeLive = document.querySelector('.seeLive');
        const seeSource = document.querySelector('.seeSource');
        document.querySelector('.img-snapshot-desktop').setAttribute('src', `${detail.img}`);
        document.querySelector('.img-snapshot-desktop').setAttribute('width', '400px');
        document.querySelector('.img-snapshot-desktop').setAttribute('height', '400px');
        // update the seeLive and seeSource
        seeLive.setAttribute('href', `${detail.seeLive}`);
        seeSource.setAttribute('href', `${detail.seeSource}`);
        // update the popup description text based on the projects card text
        const popupText = document.querySelector('#popup-text p');
        popupText.textContent = '';
        popupText.textContent = detail.description;
      });

      // handle closing details popup
      const closePopups = document.querySelector('#close-cross');
      closePopups.addEventListener('click', () => {
        detailsPopup.classList.remove('show');
        detailsPopup.classList.add('hide');
        // remove technologies list items up on closing the popup
        removeTechnologiesList();
      });
    } else if (detail.projectId === details.length) {
      const firstButton = document.querySelector('.mrwSeeProjectBtn');
      const detailsPopup = document.querySelector('#popup');
      const seeLive = document.querySelector('.seeLive');
      const seeSource = document.querySelector('.seeSource');
      firstButton.addEventListener('click', () => {
        detailsPopup.classList.remove('hide');
        detailsPopup.classList.add('show');
        // update content of popup based on clicked project card
        const popupTitle = document.querySelector('#popupTitle');
        popupTitle.textContent = detail.name;
        // update technologies lists based on the content on the selected card
        const technologiesList = document.querySelector('#technologiesList');
        let el = '';
        detail.technologies.forEach((technology) => {
          el += `
            <li class="popup-box">${technology}</li>
          `;
        });
        technologiesList.innerHTML = el;
        // update the image of the popup
        document.querySelector('.img-snapshot-desktop').setAttribute('src', `${detail.img}`);
        // update the seeLive and seeSource
        seeLive.setAttribute('href', `${detail.seeLive}`);
        seeSource.setAttribute('href', `${detail.seeSource}`);
        // update the popup description text based on the projects card text
        const popupText = document.querySelector('#popup-text p');
        popupText.textContent = '';
        popupText.textContent = detail.description;
      });
    }
  });
}

document.querySelector('.details-popup').innerHTML = `<div class="popup-container">
<div class="sub-popup-container">
  <div class="popup-top">
    <div class="popup-name">
      <h3 id="popupTitle"></h3>
    </div>
    <div class="close-cross" id="close-cross">
      <img src="./images/22_x-regular-24.png" alt="icon-cross" />
    </div>
  </div>
  <div>
    <ul class="technologies" id="technologiesList">
    </ul>
  </div>
  <div class="img-text-button">
    <div class="snapshot-img">
      <img
        class="img-snapshot-mobile"
        src="./images/21_Snapshoot Portfolio_mobile.png"
        alt="snapshot-mobile"
      />
      <img
        class="img-snapshot-desktop"
        src="./images/25_Snapshoot Portfolio_desktop.png"
        alt="snapshot-desktop"
      />
    </div>
    <div class="text-button">
      <div class="popup-text" id="popup-text">
        <p></p>
      </div>
      <div class="popup-buttons">
        <div class="popup-button seelive">
          <a class='seeLive' href=''>
          <p>See Live</p>
          <i class="see-live"
            ><img
              class="popup-btn-img"
              src="./images/23_see_live.png"
              alt="seelive"
          /></i>
          </a>
        </div>
        <div class="popup-button seesource">
          <a class='seeSource' href=''>
          <p>See Source</p>
          <i class="see-source"
            ><img
              class="popup-btn-img"
              src="./images/24_see_source.png"
              alt="seelive"
          /></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</div>`;

// Dynamic Card ends here
controlMobileMenu();

// Form Validation and Local Storage Start Here
function ReadElement(selected) {
  return document.querySelector(selected);
}

const uname = ReadElement('#name-input');
const uemail = ReadElement('#user-email');
const umessage = ReadElement('#textarea-input');
const validator = ReadElement('.validator-input');
const submitbtn = ReadElement('#submit-form');

let visitorName;
let visitorEmail;
let visitorMessage;
let visitorData = [];

function getUpdatedInput(selected) {
  function alphaFunction() {
    visitorName = uname.value;
    visitorEmail = uemail.value;
    visitorMessage = umessage.value;
    visitorData = [visitorName, visitorEmail, visitorMessage];
    localStorage.setItem('visitorData', visitorData);
  }
  selected.addEventListener('change', alphaFunction);
}

visitorName = getUpdatedInput(uname);
visitorEmail = getUpdatedInput(uemail);
visitorMessage = getUpdatedInput(umessage);

const alphaFormData = localStorage.getItem('visitorData');
const alphaFormDataArray = alphaFormData.split(',');

if (alphaFormDataArray.length > 0) {
  [uname.value, uemail.value, umessage.value] = alphaFormDataArray;
}

function EmailValidation(e) {
  const visitorEmail = uemail.value;
  let text;
  if (visitorEmail !== visitorEmail.toLowerCase() || visitorEmail === '') {
    text = 'Email is required and email has to be in lowercase';
    validator.innerHTML = text;
    validator.classList.remove('validator-green');
    validator.classList.add('validator-red');
    submitbtn.style.marginTop = '20px';
    e.preventDefault();
  } else {
    text = 'Email has been inserted in lowercase as required';
    validator.innerHTML = text;
    validator.classList.remove('validator-red');
    validator.classList.add('validator-green');
    submitbtn.style.marginTop = '20px';
  }
}
submitbtn.addEventListener('submit', EmailValidation);

// Form Validation and Local Storage END here
