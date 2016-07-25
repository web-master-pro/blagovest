$(document).ready(function(){

    var isMobile = ($(window).width() < 1152);

    if ( ((isMobile) && ($(".story.hide-mobile").length < 1)) ||
         ((!isMobile) && ($(".story.hide-desktop").length < 1)) ) {
        $(".js-stories-button").fadeOut(0);
    };

    $(".js-stories-button").click(function(e){
        e.preventDefault();
        if (isMobile) {
            $(".story.hide-mobile").fadeIn(300);
        } else {
            $(".story.hide-desktop").fadeIn(300);
        };
        $(this).fadeOut(300);
    });

});
