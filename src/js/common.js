$(document).ready(function() {

    $('.input__input--phone').mask('+7 (9 9 9) 9 9 9 - 9 9 - 9 9');

    $(".js-scrollto").click(function () {
        elementClick = $(this).attr("href")
        destination = $(elementClick).offset().top;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1700);
        return false;
    });

    if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
        $('html').addClass('safari');
    };

    if (navigator.userAgent.indexOf('Mac OS X') != -1) {
        $("html").addClass("macos");
    } else {
        $("html").addClass("pc");
    };

    if (navigator.userAgent.search("MSIE") >= 0) {
        $('html').addClass('ie');
    };

    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

    function detectTouchSupport (){
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touchSupport = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);
        if(touchSupport) {
            $("html").addClass("touch");
        }
        else {
            $("html").addClass("no-touch");
        }
    };
    detectTouchSupport();

});
