const infoBtn = document.querySelector('.promo__btn-info');
const infoPopup = document.getElementById('info-popup');
const closePopupBtn = document.querySelector('.popup__close-btn');
const menuMob = document.getElementById('menu-mob');
const closeMobMenuBtn = document.querySelector('.header__btn--mob');


function handleOpenInfoPopup () {
  infoPopup.classList.add('opened');
  document.body.style.overflow = 'hidden';
};

function handleCloseInfoPopup () {
  infoPopup.classList.remove('opened');
  document.body.style.overflow = '';
};

infoPopup.addEventListener('click', (e) => {
  if (e.target === infoPopup) {
    handleCloseInfoPopup();
  }
});

infoBtn.addEventListener('click', handleOpenInfoPopup);
closePopupBtn.addEventListener('click', handleCloseInfoPopup);



