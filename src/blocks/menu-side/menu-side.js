$(document).ready(function(){
    $(".menu-side__title-link").click(function(event){
        event.preventDefault()
        if ($(this).hasClass("expanded")) {
            $(this).removeClass("expanded");
            $(this).parent().next(".menu-side__menu").slideUp(300);
        } else {
            $(".menu-side__title-link").removeClass("expanded");
            $(this).addClass("expanded");
            $(".menu-side__menu").slideUp(300);
            $(this).parent().next(".menu-side__menu").slideDown(300);
        }
        return true;
    })
});
