"use strict";

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  grid: {
    rows: 3,
    fill: 'row'
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row'
      }
    }
  }
});
var courseSwiper = new Swiper(".js-course-swiper", {
  slidesPerView: 1,
  spaceBetween: 20
});
var teachSwiper = new Swiper('.js-teacher-Swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var levelSwiper = new Swiper(".js-course-level", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
var recommendSwiper = new Swiper(".js-recommend", {
  slidesPerView: 1,
  spaceBetween: -30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4,
      spaceBetween: -30
    }
  }
});
var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  buttonClass: 'btn primary',
  nextArrow: '>',
  prevArrow: '<'
});
//# sourceMappingURL=all.js.map
