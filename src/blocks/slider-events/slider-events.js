$(document).ready(function(){


    $(".slider-events__slide").each(function( index ) {
        $(this).attr("data-index", index);
    });

    var totalItems = $(".slider-events__slide").length;

    startItem = $(".slider-events__slider").attr("data-start-index");
    if (!startItem) startItem = 1;

    updateSliderNav(startItem);

    function updateSliderNav(currentItem) {
        var currentDate = $(".slider-events__slide[data-index='" + currentItem + "']").attr("data-date"),
            prevDate, nextDate,
            prevItem = +currentItem - 1,
            nextItem = +currentItem + 1;
        $(".slider-events__date").text(currentDate);

        $(".slider-events__button-prev").fadeIn(300);
        $(".slider-events__button-next").fadeIn(300);

        if (prevItem < 0) {
            $(".slider-events__button-prev").fadeOut(300);
        } else {
            prevDate = $(".slider-events__slide[data-index='" + prevItem  + "']").attr("data-date");
            $(".slider-events__prev .button-event__date").text(prevDate);
        };

        if (nextItem > totalItems - 1) {
            $(".slider-events__button-next").fadeOut(300);
        } else {
            nextDate = $(".slider-events__slide[data-index='" + nextItem  + "']").attr("data-date");
            $(".slider-events__next .button-event__date").text(nextDate);
        };

    };

    var owl = $('.slider-events__slider');
    owl.owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        items: 1,
        slideBy: 1,
        startPosition: 1,
        navSpeed: 1500,
        autoHeight: true
    });

    owl.on("changed.owl.carousel", function(event) {
        var currentSlideIndex = $(event.target)
            .find(".owl-item")
            .eq(event.item.index)
            .find(".slider-events__slide")
            .attr("data-index");
        updateSliderNav(currentSlideIndex);
        // updateSliderCounter(currentItem,totalItems);
    });

    $(".slider-events__button-next").click(function() {
        owl.trigger("next.owl.carousel",[1500]);
    });

    $(".slider-events__button-prev").click(function() {
        owl.trigger("prev.owl.carousel",[1500]);
    });


});


