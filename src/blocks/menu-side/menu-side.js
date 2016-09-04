$(document).ready(function(){
    $(".menu-side__title-link").click(function(event){
        event.preventDefault();
        var menu = $(this).parent().next(".menu-side__menu");
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            // $(this).parent().next(".menu-side__menu").removeClass("expanded");
            menu.slideUp("fast",function(){
                menu.removeClass("expanded").slideDown(0);
            })

        } else {
            $(".menu-side__title-link").removeClass("expanded");
            $(".menu-side__menu").removeClass("expanded");
            $(this).addClass("expanded");
            // $(this).parent().next(".menu-side__menu").addClass("expanded");
            menu.slideUp(0,function(){
                menu.addClass("expanded").slideDown("fast");
            })
        }
        return true;
    })
});
