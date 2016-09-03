$(document).ready(function(){

    var currentItem = 1,
        totalItems = $(".slider-report__slide").length;

    $(".slider-report__nav").append('<ul class="slider-report__dots"></ul>');
    $(".slider-report__slide").each(function( index ) {
        $(this).attr("data-index", index + 1);
        var imgSrc = $(this).attr("src");
            dot = '<li class="slider-report__dot"><img src="' + imgSrc + '" alt=""></li>';
        $(".slider-report__dots").append(dot)
    });

    var owl = $('.slider-report__slider');
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
        autoHeight: true,
        dotsContainer: '.slider-report__dots',
        animateOut: 'fadeOut'
    });

    owl.on("changed.owl.carousel", function(event) {
        currentItem = $(event.target)
            .find(".owl-item")
            .eq(event.item.index)
            .find(".slider-report__slide")
            .attr("data-index");
        // updateSliderCounter(currentItem,totalItems);
    });

    $(".slider-report__next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-report__prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });

    $('.slider-report__dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 1500]);
    });

    // function resizeSlider() {
    //     var winWidth = $(window).width(),
    //         sliderHeight, sliderWidth;
    //     if ((winWidth > 479) && (winWidth < 771)) {
    //         sliderWidth = $(".slider-report").width();
    //         sliderHeight = sliderWidth / 1.5;
    //         $(".slider-report, .slider-report__slide").css({
    //             "height": sliderHeight
    //         });
    //     };
    // };

    // resizeSlider();
    // $(window).bind('resize',function() {
    //     resizeSlider();
    // });

});


