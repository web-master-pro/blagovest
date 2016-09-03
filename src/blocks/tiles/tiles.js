$(document).ready(function(){

    var owl = $('.tiles__slider');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 1500,
        autoHeight: false,
        animateOut: 'fadeOut'
    });

});


