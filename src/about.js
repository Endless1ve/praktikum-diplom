import './pages/about.css';
import Swiper from 'swiper';
const slider = document.querySelector('.swiper-container')
const swiper = new Swiper(slider, {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 8,
    loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints:{
   768:{
    centeredSlides: false,
    spaceBetween: 8,
   },
   1440:{
    spaceBetween: 16,
   }
  }

});