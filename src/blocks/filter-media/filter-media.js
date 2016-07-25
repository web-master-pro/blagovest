$(document).ready(function(){
    $(".filter-media__button").click(function(){
        if ($(this).hasClass("on")) {
            $(this).removeClass("on");
            $(".filter-media__container").removeClass("on");
        } else {
            $(this).addClass("on");
            $(".filter-media__container").addClass("on");
        };
    })
})
