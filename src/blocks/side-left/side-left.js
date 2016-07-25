$(document).ready(function(){
    var sidebar = $(".side-left"),
        toggle = $(".button-nav"),
        sidebarWidth = 250;

     var toggleSidebar = function(){
        if (sidebar.hasClass("on")){

            sidebar.css({"left": -sidebarWidth});
            $("body").css({"left": "", "position": ""});
            $(".page__container").css({"position": "","left": "", "right": ""});

            sidebar.removeClass("on");
            toggle.removeClass("on");

        } else {

            sidebar.css({"left": 0});
            $("body").css({"left": sidebarWidth});
            $(".page__container").css({"left":sidebarWidth});

            setTimeout(function(){
                $(".page__container").css({
                    "position": "fixed",
                    "right": -sidebarWidth
                });
                $("body").css({"position": "fixed"});
            }, 300);

            sidebar.addClass("on");
            toggle.addClass("on");

        };

    };

    toggle.click(function(e){
        e.preventDefault();
        toggleSidebar();
        return false;
    });

    $(".page__container").click(function(e){
        var result = true;
        if (sidebar.hasClass("on")) {
            e.preventDefault();
            toggleSidebar();
            result = false;
        };
        return result;
    });

    sidebar.swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            toggleSidebar();
        },
        threshold: 10,
        triggerOnTouchEnd: false,
        excludedElements: "button, input, select, textarea, .noSwipe" // "button, input, select, textarea, a, .noSwipe"
    });

    $(document).keydown(function(event){
        if ( (event.keyCode == 27) && (sidebar.hasClass("on")) ) {
            toggleSidebar();
        }
    });

});
