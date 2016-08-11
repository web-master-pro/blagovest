$(document).ready(function(){

    var isMobile = ($(window).width() < 1152);

    if ( ((isMobile) && ($(".media.hide-mobile").length < 1)) ||
         ((!isMobile) && ($(".media.hide-desktop").length < 1)) ) {
        $(".js-media-button").fadeOut(0);
    };

    $(".js-media-button").click(function(e){
        e.preventDefault();
        if (isMobile) {
            $(".media.hide-mobile").fadeIn(300).css({"display": "inline-block"});
        } else {
            $(".media.hide-desktop").fadeIn(300).css({"display": "inline-block"});
        };
        $(this).fadeOut(300);
    });

});
