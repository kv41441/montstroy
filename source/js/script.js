const headerMenu = document.querySelector('.hidden-nav');
const headerMenuButton = document.querySelector("button[name=page-header__menu-button]");


// Открытие/закрытие выпадающих списков

$(headerMenuButton).click(() => {
  if (headerMenu.classList.contains('hidden-nav--closed') && $(window).width() < 1024) {
    $('.hidden-nav').slideDown(800);
    $('.hidden-nav').removeClass('hidden-nav--closed');
    $('.hidden-nav').addClass('hidden-nav--opened');
  } else if (headerMenu.classList.contains('hidden-nav--opened') && $(window).width() < 1024) {
    $('.hidden-nav').slideUp(800);
    $('.hidden-nav').removeClass('hidden-nav--opened');
    $('.hidden-nav').addClass('hidden-nav--closed');
  }
});


$('.services__item h3').click((evt) => {
  const currentServicesItem = evt.target.parentNode;
  const currentServicesList = evt.target.parentNode.querySelector('ul');
  console.log(evt.target.parentNode.querySelector('ul'))

  if (currentServicesItem.classList.contains('services__item--closed') && $(window).width() < 1024) {
    $(currentServicesList).slideDown(800);
    $(currentServicesItem).removeClass('services__item--closed');
    $(currentServicesItem).addClass('services__item--opened');
  } else if (currentServicesItem.classList.contains('services__item--opened') && $(window).width() < 1024) {
    $(currentServicesList).slideUp(800);
    $(currentServicesItem).removeClass('services__item--opened');
    $(currentServicesItem).addClass('services__item--closed');
  }
});

// Слайдер

var currentBreakpoint = '';
var swiper;
var swiperFeatures;

var desktopSwiperConfig = {
  init: false,
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.arrow--partners-next',
    prevEl: '.arrow--partners-prev',
  },
};

var tabletSwiperConfig = {
  init: false,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  pagination: {
    el: '.partners__toggles',
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }
};

var tabletSwiperConfigFeatures = {
  init: false,
  slidesPerView: 3,
  spaceBetween: 0,
  centeredSlides: true,
  effect: 'coverflow',
  loop: true,
  pagination: {
    el: '.features__toggles',
    clickable: true,
  },
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }
};

var mobileSwiperConfig = {
  init: false,
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.partners__toggles',
    clickable: true,
  },
};

var mobileSwiperConfigFeatures = {
  init: false,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: '.features__toggles',
    clickable: true,
  },
};

function initSwiper() {
  if (window.matchMedia('(max-width: 767px)').matches && currentBreakpoint !== 'mobile') {
    currentBreakpoint = 'mobile';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', mobileSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
    swiperFeatures = new Swiper('.swiper-container-features', mobileSwiperConfigFeatures);
    swiperFeatures.init();
  }

  if (window.matchMedia('(min-width: 768px) and (max-width: 1199px)').matches && currentBreakpoint !== 'tablet') {
    currentBreakpoint = 'tablet';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', tabletSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
    swiperFeatures = new Swiper('.swiper-container-features', tabletSwiperConfigFeatures);
    swiperFeatures.init();
  }

  if (window.matchMedia('(min-width: 1200px)').matches && currentBreakpoint !== 'desktop') {
    currentBreakpoint = 'desktop';

    if (swiper) swiper.destroy();
    swiper = new Swiper('.swiper-container', desktopSwiperConfig);
    swiper.init();

    if (swiperFeatures) swiperFeatures.destroy();
  }
}

initSwiper();

window.addEventListener('resize', initSwiper);


// Маска ввода формы телефона

$(document).ready(function(){
  $('input[type = tel]').mask('+7 (000) 000 00 00');
});
