$(document).ready(function(){

    $(".js-map-button").click(function(e){
        e.preventDefault();
        $(".map__map").addClass("on");
        $(this).fadeOut(100);
    });

});
