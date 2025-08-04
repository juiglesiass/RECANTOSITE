// Swiper Carrosel em Espaco
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  freeMode: true,
  speed:7000,
  slidesPerView:"auto",
  autoplay: {
        delay: 0,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});