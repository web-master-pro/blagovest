$(document).ready(function(){
    $(".m-box__close").click(function(event){
        $(".menu-main__link").removeClass("active");
        $(".m-box").removeClass("on").fadeOut(300);
        $(".page__container").removeClass("fixed");
        $(".menu-main").removeClass("on");
        $(".page__overlay").remove();
    });

    $(document).keydown(function(event){
        if ( (event.keyCode == 27) && ($(".m-box").hasClass("on")) ) {
            $(".menu-main__link").removeClass("active");
            $(".m-box").removeClass("on").fadeOut(300);
            $(".page__container").removeClass("fixed");
            $(".menu-main").removeClass("on");
            $(".page__overlay").remove();
        }
    });



});
