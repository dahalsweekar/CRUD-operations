
$(document).ready(function () {
    $("#main").hide();
    $("#btn_anim").click(function () {
        $("#main").toggle(function () {
            $("#main").animate({
                width: 400
            });
        });
    });
});