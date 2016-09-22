$(document).ready(function(){

    function closeMBox(){
        $(".menu-main__link").removeClass("active");
        $(".m-box").removeClass("on").fadeOut(300);
        $(".page__container").removeClass("fixed");
        $(".menu-main").removeClass("on");
        $(".page__overlay").remove();
    };

    $(".m-box__close").click(function(event){
        closeMBox();
    });

    $(document).keydown(function(event){
        if ( (event.keyCode == 27) && ($(".m-box").hasClass("on")) ) {
            closeMBox();
        }
    });


    $(".menu-box__link, .menu-box-sub__link").click(function(){
        closeMBox();
        return true;
    })

});
