$(document).ready(function(){

    var isMobile = ($(window).width() < 1152);

    if ( ((isMobile) && ($(".ceremony.hide-mobile").length < 1)) ||
         ((!isMobile) && ($(".ceremony.hide-desktop").length < 1)) ) {
        $(".js-ceremonies-button").fadeOut(0);
    };

    $(".js-ceremonies-button").click(function(e){
        e.preventDefault();
        if (isMobile) {
            $(".ceremony.hide-mobile").fadeIn(300);
        } else {
            $(".ceremony.hide-desktop").fadeIn(300);
        };
        $(this).fadeOut(300);
    });

});
