// $(document).ready(function(){

//     var validator = $("#form-subscribe").validate({
//         rules: {
//             email: {required: true, email: true}
//         },
//         messages: {
//             email: {required: "Заполните это поле", email: "Неправильный формат email"}
//         },
//         focusInvalid: false,
//         errorClass: "invalid-field"

//     });

//     $("#form-subscribe input" ).focus(function() {
//         $(this).next(".invalid-field").addClass("hidden");
//     });

//     $("#form-order button").click(function (e) {
//         $("#form-subscribe .invalid-field").removeClass("hidden").css({"display":""});
//         validator.resetForm();
//         return true;
//     });

// });
