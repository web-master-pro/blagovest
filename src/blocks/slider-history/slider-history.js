$(document).ready(function(){

    var owl = $('.slider-history__slider');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        slideBy: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 1500,
        autoHeight: false,
        animateOut: 'fadeOut',
        animateIn: "fadeOut"
    });

    $(".slider-history__next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-history__prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });


});


