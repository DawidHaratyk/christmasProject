// SHOW SCROLL

const arrowUp = document.querySelector('.arrow-up');

const showArrow = () => {
  if (this.scrollY >= 600) {
    arrowUp.classList.add('active');
  } else {
    arrowUp.classList.remove('active');
  }
};

window.addEventListener('scroll', showArrow);

// SHOW NAVIGATION

const bars = document.querySelector('.bars');
const menuNav = document.querySelector('.menu-nav');
const switchContainer = document.querySelector('.change-theme');

const showNav = () => {
  menuNav.classList.toggle('active');
};

bars.addEventListener('click', showNav);

function addNav() {
  if (window.innerWidth > 800) {
    if (menuNav.classList.contains('active')) {
      return;
    } else {
      menuNav.classList.add('active');
    }
  }
}

if (window.innerWidth > 800) {
  menuNav.classList.add('active');
  menuNav.style.transition = '0s';
}

window.addEventListener('resize', addNav);

// DARK THEME

const colorSwitch = document.querySelector('.change-theme');
const colorSwitchCircle = document.querySelector('.switch');
const aside = document.querySelector('.send-container');

const changeThemeColor = function () {
  colorSwitchCircle.classList.toggle('active');
  document.body.classList.toggle('dark-theme');
  aside.classList.toggle('dark-color');
};

colorSwitch.addEventListener('click', changeThemeColor);

// ACTIVE LI ELEMENT

const liElements = [...document.querySelectorAll('.navigation-li')];
const shareItem = document.getElementById('share');
const decorationItem = document.getElementById('decoration');
const accessoryItem = document.getElementById('accessory');

window.addEventListener('scroll', function () {
  if (scrollY <= 660) {
    liElements.forEach((item) => (item.style.borderBottom = 'none'));
    liElements[0].style.borderBottom = '2px solid #DA2535';
  } else if (scrollY > 660 && scrollY <= 1300) {
    liElements.forEach((item) => (item.style.borderBottom = 'none'));
    liElements[1].style.borderBottom = '2px solid #DA2535';
  } else if (scrollY > 1300 && scrollY <= 2515) {
    liElements.forEach((item) => (item.style.borderBottom = 'none'));
    liElements[2].style.borderBottom = '2px solid #DA2535';
  } else if (scrollY > 2515) {
    liElements.forEach((item) => (item.style.borderBottom = 'none'));
    liElements[3].style.borderBottom = '2px solid #DA2535';
  }
});

// CHANGE HEART ICONS

const hearts = document.querySelectorAll('.heart');
const showHeart = document.querySelector('.for-heart-display');

hearts.forEach((item) => {
  item.addEventListener('click', function () {
    const whiteHearts = document.querySelector('.white-heart');
    whiteHearts.classList.toggle('.for-heart-display');
  });
});

// ANIMATIONS ON SCROLL

const showElementsOnScroll = () => {
  const appearElements = document.querySelectorAll('.appear-element');

  const innerHeight = window.innerHeight;

  appearElements.forEach((element) => {
    const positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop < innerHeight / 2) {
      element.classList.add('move-animation');
    }
  });

  const appearElementsLinks = document.querySelectorAll('.appear-element-link');

  appearElementsLinks.forEach((element) => {
    let positionFromTop = element.getBoundingClientRect().top;

    if (positionFromTop < innerHeight - 100) {
      element.classList.add('move-animation');
    }
  });
};

window.addEventListener('scroll', showElementsOnScroll);
