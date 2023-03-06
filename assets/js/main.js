(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 
  $('select').niceSelect();

  // owlCarousel
  $(".hero_slider").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 700,
    items: 1,
    navText: [
      '<i class="fas fa-arrow-circle-left"></i>',
      '<i class="fas fa-arrow-circle-right"></i>'
    ],
    nav: true,
    dots: false
  });

  // owlCarousel
  $(".pricing__slider").owlCarousel({
    loop: false,
    margin: 20,
    items: 3,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right active"></i>'
    ],
    nav: false,
    dots: false,
    responsive: {
      0: {
        margin: 0,
        items: 1

      },
      450: {
        margin: 20,
        items: 2

      },
      767: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  });

  // owlCarousel
  $(".testm__slider").owlCarousel({
    loop: true,
    margin: 5,
    items: 1,
    navText: [
      '<i class="far fa-chevron-left"></i>',
      '<i class="far fa-chevron-right"></i>'
    ],
    nav: true,
    dots: false
  });

 
})(jQuery);
