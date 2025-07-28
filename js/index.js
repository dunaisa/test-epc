import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
const infoBtn = document.querySelector('.promo__btn-info');
const infoPopup = document.getElementById('info-popup');
const closePopupBtn = document.querySelector('.popup__close-btn');
const menuMob = document.getElementById('menu-mob');
const closeMobMenuBtn = document.querySelector('.menu-mob__close-btn');
const openMobMenuBtn = document.querySelector('.header__burger-btn');


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

function handleOpenMenu () {
  console.log('ok')
  menuMob.classList.add('opened');
};

function handleCloseMenu () {
  menuMob.classList.remove('opened');
};

openMobMenuBtn.addEventListener('click', handleOpenMenu);
closeMobMenuBtn.addEventListener('click', handleCloseMenu);

document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.promo__scheme-container');

  if (!wrapper) {
    console.warn('Swiper wrapper not found: .promo__scheme');
    return;
  }

  wrapper.classList.add('swiper');
  const slides = wrapper.querySelectorAll('.promo__scheme-block');
  slides.forEach(slide => slide.classList.add('swiper-slide'));

  const wrapperInner = document.querySelector('.promo__scheme-wrapper');
  wrapperInner.classList.add('swiper-wrapper');

  const prevBtn = document.querySelector('.promo__scheme-btn--prev');
  const nextBtn = document.querySelector('.promo__scheme-btn--next');

  // Инициализация Swiper
  const swiper = new Swiper(wrapper, {
    direction: 'horizontal',
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
    },
    slidesPerView: 1,
    centeredSlides: true,
    speed: 600,
    allowTouchMove: true,
    simulateTouch: true,
  });

  wrapper.addEventListener('wheel', function (e) {
    e.stopPropagation();
  }, { passive: false });
});

// АНИМАЦИЯ ХЭДЕРА при прокрутке страницы

// const header = document.querySelector('.header');

// window.addEventListener('scroll', function () {
//   const scrollTop = window.scrollY;

//   if (scrollTop > 25) {
//     header.classList.add('scrolled');
//   } else {
//     header.classList.remove('scrolled');
//   }
// });
