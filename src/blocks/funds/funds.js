$(document).ready(function(){

    var isMobile = ($(window).width() < 1152);

    if ( ((isMobile) && ($(".fund.hide-mobile").length < 1)) ||
         ((!isMobile) && ($(".fund.hide-desktop").length < 1)) ) {
        $(".js-funds-button").fadeOut(0);
    };

    $(".js-funds-button").click(function(e){
        e.preventDefault();
        if (isMobile) {
            $(".fund.hide-mobile").fadeIn(300);
        } else {
            $(".fund.hide-desktop").fadeIn(300);
        };
        $(this).fadeOut(300);
    });

});
