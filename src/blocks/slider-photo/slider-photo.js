$(document).ready(function(){

    var currentItem = 1,
        totalItems = $(".slider-photo__slide").length;

    $(".slider-photo__slide").each(function( index ) {
        $(this).attr("data-index", index + 1);
    });

    function updateSliderCounter(current, total){
        $(".slider-photo__counter").text(current + " / " + total);
    };

    updateSliderCounter(currentItem, totalItems);

    var owl = $('.slider-photo__slides');
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
        autoHeight: false
    });

    owl.on("changed.owl.carousel", function(event) {
        currentItem = $(event.target)
            .find(".owl-item")
            .eq(event.item.index)
            .find(".slider-photo__slide")
            .attr("data-index");
        updateSliderCounter(currentItem,totalItems);
    });

    $(".slider-photo__next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-photo__prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });

    function resizeSlider() {
        var winWidth = $(window).width(),
            sliderHeight, sliderWidth;
        if ((winWidth > 479) && (winWidth < 771)) {
            sliderWidth = $(".slider-photo").width();
            sliderHeight = sliderWidth / 1.5;
            $(".slider-photo, .slider-photo__slide").css({
                "height": sliderHeight
            });
        };
    };

    resizeSlider();
    $(window).bind('resize',function() {
        resizeSlider();
    });

});


