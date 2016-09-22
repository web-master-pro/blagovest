$(document).ready(function(){

    function updateMenuCategoryMaxHeight(){
        var maxItems = 5,
            maxHeight = 0;
        if ($(".menu-category__item").length >= maxItems) {
            for (var i=0; i < maxItems; i++) {
                maxHeight = maxHeight + $(".menu-category__item").eq(i).outerHeight();
            };
            $(".menu-category__menu").css({"max-height": maxHeight});
        };
    };

    $(".menu-category__button").click(function(){
        var dropdown = $(".menu-category__menu"),
            menu = $(this).parent(".menu-category");
        if (menu.hasClass("on")) {
            menu.removeClass("on");
            dropdown.slideUp(300);
        } else {
            menu.addClass("on");
            dropdown.addClass("on").slideDown(300);
            updateMenuCategoryMaxHeight();
        };
    });

    $(document).click(function(event){
        var result = true,
            target = $(event.target);
            ownclick = (target.is(".menu-category__caption")
                        || target.is(".menu-category__button")
                        || target.is(".menu-category__default")
                        || target.is(".menu-category__current")
                        || target.is(".menu-category__menu") )
        if ( $(".menu-category").hasClass("on") && (!ownclick) ) {
            event.preventDefault();
            $(".menu-category").removeClass("on");
            $(".menu-category__menu").slideUp(300)
            result = false;
        };
        return result;
    });

    function switchBranch(index){
        var branchCaption = $(".menu-category__link").eq(index).text();
        $(".choose-branch__title").text(branchCaption);
        $(".menu-category__current").text(branchCaption);
        $(".menu-category__img").removeClass("active");
        $(".menu-category__img").eq(index).addClass("active");
        $(".baloon__branch").removeClass("active");
        $(".baloon__branch").eq(index).addClass("active");
        $(".team__branch").removeClass("active");
        $(".team__branch").eq(index).addClass("active");
    };

    $(".choose-branch .menu-category__link").click(function(e){
        var links = $(".menu-category__link"),
            index = $(links).index($(this)),
            dropdown = $(".menu-category__menu"),
            menu = $(".menu-category");
        if (menu.hasClass("on")) {
            menu.removeClass("on");
            dropdown.slideUp(300);
        };
        switchBranch(index);
    });



    function loadByHash() {
        if (window.location.hash) {
            var links = $(".choose-branch .menu-category__link"),
                link = $(".choose-branch .menu-category__link[href='" + window.location.hash + "']" );
            if (link) {
                var index = $(links).index($(link));
                if (index > -1) {
                    switchBranch(index);
                };
            };
        };
    };

    loadByHash();

});
