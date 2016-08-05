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
        }
    });

    // function switchBranch() {
    //     if (window.location.hash) {
    //         var hash = window.location.hash.substring(1);
    //         if ($("#contacts-menu-branch").length > 0) {
    //             console.log(hash);
    //         }
    //     }
    // };

    // function GetLocationByAddress(address) {
    //     var geocoder = new google.maps.Geocoder();
    //     console.log(address);
    //     geocoder.geocode({ 'address': address }, function (results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             var latitude = results[0].geometry.location.lat();
    //             var longitude = results[0].geometry.location.lng();
    //             console.log("Latitude: " + latitude + "\nLongitude: " + longitude);
    //         } else {
    //             console.log("Request failed.")
    //         }
    //     });
    // };

    function switchBranch(index){
        var branchCaption = $(".menu-category__link").eq(index).text();
        $(".choose-branch__title").text(branchCaption);
        $(".menu-category__current").text(branchCaption);
        $(".menu-category__img").removeClass("active")
        $(".menu-category__img").eq(index).addClass("active")
        $(".baloon__branch").removeClass("active");
        $(".baloon__branch").eq(index).addClass("active");
        $(".team__branch").removeClass("active");
        $(".team__branch").eq(index).addClass("active");

        // var address = $(".baloon__branch.active .baloon__address").text();
        // GetLocationByAddress(address);
    };

    $("#contacts-menu-branch .menu-category__link").click(function(e){
        // e.preventDefault();
        var links = $("#contacts-menu-branch .menu-category__link"),
            index = $(links).index($(this)),
            dropdown = $(".menu-category__menu"),
            menu = $(".menu-category");
        if (menu.hasClass("on")) {
            menu.removeClass("on");
            dropdown.slideUp(300);
        };
        switchBranch(index);
    });




});
