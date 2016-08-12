$(document).ready(function(){

    var slider = $('.slider-events__slider.active'),
        totalItems,
        startItem;
        sliderSettings = {
            loop: false,
            nav: false,
            dots: false,
            items: 1,
            slideBy: 1,
            startPosition: 1,
            navSpeed: 1500,
            autoHeight: true
        };

    function updateSliderNav(currentItem) {

        var currentDate = $(".slider-events__slider.active .slider-events__slide[data-index='" + currentItem + "']").attr("data-date"),
            prevDate, nextDate,
            prevItem = +currentItem - 1,
            nextItem = +currentItem + 1;
        $(".slider-events__date").text(currentDate);

        $(".slider-events__button-prev").fadeIn(300);
        $(".slider-events__button-next").fadeIn(300);

        if (prevItem < 0) {
            $(".slider-events__button-prev").fadeOut(300);
        } else {
            prevDate = $(".slider-events__slider.active .slider-events__slide[data-index='" + prevItem  + "']").attr("data-date");
            $(".slider-events__prev .button-event__date").text(prevDate);
        };

        if (nextItem > totalItems - 1) {
            $(".slider-events__button-next").fadeOut(300);
        } else {
            nextDate = $(".slider-events__slider.active .slider-events__slide[data-index='" + nextItem  + "']").attr("data-date");
            $(".slider-events__next .button-event__date").text(nextDate);
        };

    };


    function initSlider(){
        slider.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
        slider.find('owl-stage-outer').children().unwrap();
        slider.removeData();

        $('.slider-events__slider .owl-stage-outer').children().unwrap();

        $(".slider-events__slider.active .slider-events__slide").each(function( index ) {
            $(this).attr("data-index", index);
        });

        totalItems = $(".slider-events__slider.active .slider-events__slide").length;

        startItem = $(".slider-events__slider.active").attr("data-start-index");
        if (!startItem) {
            startItem = 1;
        };
        if (totalItems < +startItem + 1) {
            startItem = 0;
        };

        sliderSettings.startPosition = startItem;

        if (totalItems < 1) {
            $(".slider-events__date").text("Нет событий");
        };

        updateSliderNav(startItem);

        slider = null;

        var timer;
        clearTimeout(timer);
        timer = setTimeout(function(){
            slider = $('.slider-events__slider.active');
            slider.owlCarousel(sliderSettings);
        }, 500);

    };

    function loadEventsByHash(){
        if ($(".events").length > 0) {
            if (window.location.hash) {
                var links = $(".events .menu-category__link"),
                    link = $(".events .menu-category__link[href='" + window.location.hash + "']" );
                if (link) {
                    var index = $(links).index($(link));
                    if (index > -1) {
                        $(".slider-events__slider").removeClass("active").css({"display":"none"});
                        $(".slider-events__slider").eq(index).addClass("active").css({"display":"block"});
                    };
                };
            };
            initSlider();
        };
    };

    $(window).on('hashchange', function() {
        loadEventsByHash();
    });

    loadEventsByHash();

    $(document).on("changed.owl.carousel", slider, function(event) {
        var currentSlideIndex = $(event.target)
            .find(".owl-item")
            .eq(event.item.index)
            .find(".slider-events__slide")
            .attr("data-index");
            updateSliderNav(currentSlideIndex);
    });

    $(".slider-events__button-next").click(function() {
        $(slider).trigger("next.owl.carousel",[1500]);
    });

    $(document).on("click", ".slider-events__button-prev", function() {
        $(slider).trigger("prev.owl.carousel",[1500]);
    });



});


