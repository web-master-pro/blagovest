$(document).ready(function(){

    var isMobile = ($(window).width() < 1152);

    if ( ((isMobile) && ($(".page-history .hide-mobile").length < 1)) ||
         ((!isMobile) && ($(".page-history .hide-desktop").length < 1)) ) {
        $(".js-history-button").fadeOut(0);
    };

    $(".js-history-button").click(function(e){
        e.preventDefault();
        if (isMobile) {
            $(".hide-mobile").fadeIn(300);
        } else {
            $(".hide-desktop").fadeIn(300);
        };
        $(this).fadeOut(300);
    });

});
