$(document).ready(function(){

    $(".menu-main__link").click(function(event){

        event.preventDefault();

        var boxTop = $(this).offset().top + $(this).outerHeight(),
            box = $(this).attr("href");

        $(".menu-main__link").removeClass("active");
        $(".page__overlay").remove();

        if ($(box).hasClass("on")) {

            $(box).removeClass("on").fadeOut(300);
            $(".page__container").removeClass("fixed");
            $(".menu-main").removeClass("on");
            $(".page__overlay").remove();

        } else {

            $(".m-box").removeClass("on").fadeOut(300);
            $(box).css({"top": boxTop}).addClass("on").fadeIn(300);
            $(this).addClass("active").css({"z-index": 9999});
            $(".page__container").addClass("fixed").append('<div class="page__overlay"></div>');
            $(".menu-main").addClass("on");


        };
    });

});
