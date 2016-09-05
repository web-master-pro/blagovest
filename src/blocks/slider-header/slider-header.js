$(document).ready(function(){

    $(".slider-header__nav").append('<ul class="slider-header__dots"></ul>');
    $(".slider-header__slide").each(function( index ) {
        $(this).attr("data-index", index + 1);
        var imgSrc = $(this).attr("src");
            dot = '<li class="slider-header__dot"></li>';
        $(".slider-header__dots").append(dot)
    });

    var owl = $('.slider-header__slider');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        slideBy: 1,
        autoplay: false,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        navSpeed: 1500,
        autoHeight: false,
        dotsContainer: '.slider-header__dots',
        animateOut: 'fadeOut'
    });

    $(".slider-header__next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-header__prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });

    $('.slider-header__dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 1500]);
    });

});


