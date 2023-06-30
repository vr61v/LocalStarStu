var swiper = new Swiper(".instruments__content", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  keyboard: true,
  fade: true,

  pagination: { 
    el: ".swiper-pagination", 
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0:{slidesPerView: 1,},
    600:{slidesPerView: 2,},
    1000:{slidesPerView: 3,},
  },
});

var swiper = new Swiper(".credits__content", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  grabCursor: true,
  keyboard: true,
  fade: true,

  pagination: { 
    el: ".swiper-pagination", 
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0:{slidesPerView: 1,},
    600:{slidesPerView: 2,},
    1000:{slidesPerView: 3,},
  },
});