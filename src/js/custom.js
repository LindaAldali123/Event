/* Global $, alert, console */
$(function() {
    "use strict";

    //Trigger Mixitup
    $("#container").mixItUp();
    //Adujst Shuffle Links
    $(".shuffle li").click(function() {
        $(this)
            .addClass("selected")
            .siblings()
            .removeClass("selected");
    });
});
