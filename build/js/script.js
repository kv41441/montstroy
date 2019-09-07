const servicesListItem = document.querySelector('.services__item ul');


// Открытие/закрытие списков

/*$(footerNavHeader).click(() => {
  if (footerNav.classList.contains('footer-nav--closed') && $(window).width() < 768) {
    $('.footer-nav__list').slideDown(800);
    $('.footer-nav').removeClass('footer-nav--closed');
    $('.footer-nav').addClass('footer-nav--opened');
  } else if (footerNav.classList.contains('footer-nav--opened') && $(window).width() < 768) {
    $('.footer-nav__list').slideUp(800);
    $('.footer-nav').removeClass('footer-nav--opened');
    $('.footer-nav').addClass('footer-nav--closed');
  }
});

$(contactsHeader).click(() => {
  if (contacts.classList.contains('contacts--closed') && $(window).width() < 768) {
    $('.contacts__list').slideDown(800);
    $('.contacts').removeClass('contacts--closed');
    $('.contacts').addClass('contacts--opened');
  } else if (contacts.classList.contains('contacts--opened') && $(window).width() < 768) {
    $('.contacts__list').slideUp(800);
    $('.contacts').removeClass('contacts--opened');
    $('.contacts').addClass('contacts--closed');
  }
});*/

// Маска ввода формы телефона

$(document).ready(function(){
  $('input[type = tel]').mask('+7 (000) 000 00 00');
});
