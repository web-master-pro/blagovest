$(document).ready(function(){
    if ($(window).width() < 1152) {
        var el = $(".form-meeting .input__input--phone");
        el.attr("placeholder", el.prev("label").text());
    }
})
