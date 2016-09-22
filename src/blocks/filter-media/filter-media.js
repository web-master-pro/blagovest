$(document).ready(function(){
    $(".filter-media__button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".filter-media__container").removeClass("on");
        } else {
            $(this).addClass("on");
            $(".filter-media__container").addClass("on");
        };
    });

    function loadMedia(){
        var category = $("#menu-category-media .menu-category__current").attr("data-cat"),
            cycle = $("#filter-media-select-cycle").val(),
            pastor = $("#filter-media-select-pastor").val(),
            actuality = $("#filter-media-select-actuality").val(),
            params = "category="+category+"&cycle="+cycle+"&pastor="+pastor+"&actuality="+actuality;
        if ($(".filter-media").length > 0) {
            $.ajax({
                type: "POST",
                url: $(".filter-media").attr("data-action"),
                data: params,
                success: function(mediadata){
                    $(".media-list__container").html(mediadata);
                    var isMobile = ($(window).width() < 1152);
                    if ( ((isMobile) && ($(".media.hide-mobile").length < 1)) ||
                        ((!isMobile) && ($(".media.hide-desktop").length < 1)) ) {
                        $(".js-media-button").fadeOut(0);
                    } else {
                        $(".js-media-button").fadeIn(0);
                    };
                }
            });
        };
    };

    function loadByHash() {
        if (window.location.hash) {
            var links = $("#menu-category-media .menu-category__link"),
                link = $("#menu-category-media .menu-category__link[href='" + window.location.hash + "']" );
            if (link) {
                var index = $(links).index($(link));
                if (index > -1) {
                    var categoryCaption = $("#menu-category-media .menu-category__link").eq(index).text();
                        categoryHash = $("#menu-category-media .menu-category__link").eq(index).attr("href").substring(1);
                    $(".choose-branch__title").text(categoryCaption);
                    $(".menu-category__current").text(categoryCaption);
                    $(".menu-category__current").attr("data-cat", categoryHash);

                };
            };
        };
    };

    loadByHash();

    loadMedia();


    $("#menu-category-media .menu-category__link").click(function(e){
        e.preventDefault();
        var categoryCaption = $(this).text(),
            categoryHash = $(this).attr("href").substring(1);
        $(".choose-branch__title").text(categoryCaption);
        $(".menu-category__current").text(categoryCaption);
        $(".menu-category__current").attr("data-cat", categoryHash);
        window.location.hash = $(this).attr("href");
        loadMedia();
    });

    $(".filter-media__select").change(function(e){
        e.preventDefault();
        loadMedia();
        return false;
    });



})
