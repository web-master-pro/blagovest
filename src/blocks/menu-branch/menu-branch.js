$(document).ready(function(){

    $(".menu-branch__button").click(function(){
        var dropdown = $(".menu-branch__menu"),
            menu = $(this).parent(".menu-branch");
        if (menu.hasClass("on")) {
            menu.removeClass("on");
            dropdown.slideUp(300);
        } else {
            menu.addClass("on");
            dropdown.addClass("on").slideDown(300);
        }
    });

    // $(document).click(function(event){
    //     var result = true,
    //         target = $(event.target);
    //         ownclick = (target.is(".menu-branch__caption")
    //                     || target.is(".menu-branch__button")
    //                     || target.is(".menu-branch__menu") )
    //     if ( $(".menu-branch").hasClass("on") && (!ownclick) ) {
    //         event.preventDefault();
    //         $(".menu-branch").removeClass("on");
    //         $(".menu-branch__menu").slideUp(300)
    //         result = false;
    //     };
    //     return result;
    // });

});
