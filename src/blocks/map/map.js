$(document).ready(function(){

    var latitude = 59.830676,
        longitude = 30.385065,
        map,
        marker,
        markerImage = 'assets/img/map-marker.png';
        styleArray = [{featureType: "all"}];

    function getCoords(){
        var addressEl = $(".baloon__branch.active .baloon__address");
        if (addressEl.length > 0){
            latitude = addressEl.attr("data-latitude"),
            longitude = addressEl.attr("data-longitude");
        };
        // console.log(latitude + "; " + longitude);
    };

    getCoords();

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

    $(window).on('hashchange', function() {
        if (window.location.hash) {
            if ($(".map").length > 0) {
                getCoords();
                setTimeout(function() {
                    google.maps.event.trigger(map, 'resize');
                }, 300);
                initializeMap();
            };

        };
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


});
