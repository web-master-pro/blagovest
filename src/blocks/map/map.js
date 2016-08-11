$(document).ready(function(){

    var latitude = 59.830676,
        longitude = 30.385065,
        map,
        marker,
        markerImage = 'assets/img/map-marker.png';
        styleArray = [{featureType: "all"}];

    function getCoords(index){
        var branchEl = $(".baloon__branch").eq(index),
            addressEl = $(branchEl).find(".baloon__address");
        if (addressEl.length > 0){
            latitude = addressEl.attr("data-latitude"),
            longitude = addressEl.attr("data-longitude");
        };
    };

    getCoords(0);

    function initializeMap() {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth,
            longitudeCenter;
        if (width >= 1152) {
            longitudeCenter = longitude - 0.0035;
        } else {
            longitudeCenter = longitude;
        };
        var mapOptions = {
            zoom: 16,
            center: new google.maps.LatLng(latitude, longitudeCenter),
            scrollwheel: false,
            draggable: false,
            zoomControl: true,
            styles: styleArray,
        };

        map = new google.maps.Map(document.getElementById('map-holder'), mapOptions);
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude,longitude),
            map: map,
            icon: markerImage
        });
    }

    google.maps.event.addDomListener(window, 'load', initializeMap);

    function loadMapByHash(){
        if ($(".map").length > 0) {
            if (window.location.hash) {
                var links = $("#contacts-menu-branch .menu-category__link"),
                    link = $("#contacts-menu-branch .menu-category__link[href='" + window.location.hash + "']" );
                if (link) {
                    var index = $(links).index($(link));
                    if (index > -1) {
                        getCoords(index);
                        setTimeout(function() {
                            google.maps.event.trigger(map, 'resize');
                        }, 300);
                        initializeMap();
                    };
                };
            };
        };
    };

    $(window).on('hashchange', function() {
        loadMapByHash();
    });

    $(".js-map-button").click(function(e){
        e.preventDefault();
        $(".map__map").addClass("on");
        $(this).fadeOut(300);
        setTimeout(function() {
            initializeMap();
            google.maps.event.trigger(map, 'resize');
        }, 1000);
    });

    loadMapByHash();


});
