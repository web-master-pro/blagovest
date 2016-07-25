$(document).ready(function(){


    $(".slider-events-home__slide").each(function( index ) {
        $(this).attr("data-index", index);
        var eventTheme = $(this).attr("data-theme"),
            eventDate = $(this).attr("data-date"),
            eventBlock = $(".slider-events-home__event").eq(index);
        eventBlock.find(".slider-events-home__event-theme").text(eventTheme);
        eventBlock.find(".slider-events-home__event-date").text(eventDate);
    });

    $(".slider-events-home__nav").append('<ul class="slider-events-home__dots"></ul>');
    $(".slider-events-home__slide").each(function( index ) {
        $(this).attr("data-index", index + 1);
        var imgSrc = $(this).attr("src");
            dot = '<li class="slider-events-home__dot"></li>';
        $(".slider-events-home__dots").append(dot)
    });

    var totalItems = $(".slider-events-home__slide").length;

    startItem = $(".slider-events-home__slider").attr("data-start-index");
    if (!startItem) startItem = 0;


    updateSliderNav(startItem);

    function updateSliderNav(currentItem) {
        var currentDate = $(".slider-events-home__slide[data-index='" + currentItem + "']").attr("data-date"),
            prevDate, nextDate,
            currentItem = Number(currentItem),
            prevItem = currentItem - 1,
            nextItem = currentItem + 1;
        $(".slider-events-home__date").text(currentDate);

        $(".slider-events-home__prev").fadeIn(300);
        $(".slider-events-home__next").fadeIn(300);

        $(".loader").fadeOut(0);
        $(".slider-events-home__event-loader-" + currentItem).fadeIn(0);

    };

    var owl = $('.slider-events-home__slider');
    owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        slideBy: 1,
        startPosition: 0,
        navSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        autoHeight: true,
        dotsContainer: '.slider-events-home__dots'
    });

    owl.on("changed.owl.carousel", function(event) {
        var currentSlideIndex = $(event.target)
            .find(".owl-item")
            .eq(event.item.index)
            .find(".slider-events-home__slide")
            .attr("data-index");
        updateSliderNav(currentSlideIndex);
    });

    $(".slider-events-home__next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-events-home__prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });

    $('.slider-events-home__dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 1500]);
    });

    $(".slider-events-home__event-loader-1").fadeIn(0);


});


