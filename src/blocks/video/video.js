$(document).ready(function(){
    $(document).on("click", ".video", function(){
        var video = $(this).find("video").get(0);

        $(this).find("video").attr("controls","true");
        $(this).addClass("on");

        if (video.paused === false) {
            video.pause();
        } else {
            video.play();
        }

        return false;
    });
})

