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

// Маска ввода формы телефона и слайдер

$(document).ready(function(){
  $('input[type = tel]').mask('+7 (000) 000 00 00');
  $('.partners__list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('button[name=partners__scroll-to-left-button]'),
    nextArrow: $('button[name=partners__scroll-to-right-button]'),
    arrows: true,
    responsive: [
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: 0,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          dots: true
        }
      },
    ]
  });
});
