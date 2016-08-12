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
        var category = $("#menu-category-media .menu-category__current").text(),
            cycle = $("#filter-media-select-cycle").val(),
            pastor = $("#filter-media-select-pastor").val(),
            actuality = $("#filter-media-select-actuality").val(),
            params = "category="+category+"&cycle="+cycle+"&pastor="+pastor+"&actuality="+actuality;
        if ($(".page-multimedia").length > 0) {
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

    loadMedia();


    $("#menu-category-media .menu-category__link").click(function(e){
        e.preventDefault();
        var categoryCaption = $(this).text();
        $(".choose-branch__title").text(categoryCaption);
        $(".menu-category__current").text(categoryCaption);
        loadMedia();
    });

    $(".filter-media__select").change(function(e){
        e.preventDefault();
        loadMedia();
        return false;
    });

})
