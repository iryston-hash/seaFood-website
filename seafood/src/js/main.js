$(function() {

    $('.header-slider').slick({
        dots: true,
        fade: true,
        infinite: true,
        responsive: [
          { 
            breakpoint: 361, 
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 7000,
            }

          }
          
        ] ,
        lazyLoad: 'ondemand',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slider-up.svg" alt="slider up"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slider-down.svg" alt="sldier down"></button>',
    });
        

    $('.product__name').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        focusOnSelect: true,
        infinite: true,
        centerMode: true,
        responsive: [
          { 
            breakpoint: 800, 
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              vertical: false,
              arrows: false,
              dots: true,
              centerMode: true,
            }

          }
          
        ] ,

        asNavFor: '.product__content',
        prevArrow: '<button type="button" class="product-prev"><img src="images/icons/product-slider-up.svg" alt="slider up"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/icons/product-slider-down.svg" alt="slider down"></button>',
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
        
      
      });
      window.addEventListener('load', AOS.refresh);

      
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
}); 


$(document).ready(function(){
  $(".menu__btn").click(function(){
    $('.menu__list').toggleClass("menu__list--active");
  });
});
