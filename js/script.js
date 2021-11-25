window.onload = function () {
  // Menu
  $('.menu-1').mouseenter(function () {
    $('.sub-menu-1').show();
  });
  $('.menu-1').mouseleave(function () {
    $('.sub-menu-1').hide();
  });

  $('.menu-2').mouseenter(function () {
    $('.sub-menu-2').show();
  });
  $('.menu-2').mouseleave(function () {
    $('.sub-menu-2').hide();
  });

  $('.menu-3').mouseenter(function () {
    $('.sub-menu-3').show();
  });
  $('.menu-3').mouseleave(function () {
    $('.sub-menu-3').hide();
  });

  // Swiper - Slide
  // Visual Slide
  new Swiper('.sw-visual', {
    loop: true,
    speed: 1000,
    allowTouchMove: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: '.sw-visual-prev',
      nextEl: '.sw-visual-next',
    },
  });
}