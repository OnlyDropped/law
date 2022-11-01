$('.right').slick({
  slidesToShow: 3, 
  slidesToScroll: 1,
  speed: 1500,
  arrows: true,
  easing: 'easeOutElastic',
  cssEase: 'ease-in-out',
  rtl: false,
  dots: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/slick-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/slick-next.svg" alt=""></button>',
    responsive: [
    {
      breakpoint: 821,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]

})


const btn = document.querySelector('.header-nav__btn');
const nav = document.querySelector('.header-nav__wrap');
const menu = document.querySelector('.header-nav__wrap');

btn.addEventListener('click', function () {
  btn.classList.toggle('header-nav__btn--active');
  nav.classList.toggle('header-nav__wrap--show')
})

