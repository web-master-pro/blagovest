$(document).ready(function(){

    $(".menu-category__button").click(function(){
        var dropdown = $(".menu-category__menu"),
            menu = $(this).parent(".menu-category");
        if (menu.hasClass("on")) {
            menu.removeClass("on");
            dropdown.slideUp(300);
        } else {
            menu.addClass("on");
            dropdown.addClass("on").slideDown(300);
        }
    });



});
