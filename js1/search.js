;
(function ($) {

    $(".search").on("click", function () {
        $("#black").hide();
        $(".price-list").hide();
        $(".title").text($(".search-text").val());

        $(".container").hide();
        $(".product").show();

    })
    $(".fa-angle-left").on("tap", function () {
        $("#black").hide();
        $(".price-list").hide();
        $(".container").show();
        $(".product").hide();
        $(".search-text").val("");

    })
    $(".fa-filter").on("click", function () {

        if ($("#black").is(":visible")) {
            $("#black").hide();
            $(".price-list").hide();
        } else {
            $("#black").show();
            $(".price-list").show();
            $(".product").css({
                "overflow": "hidden"

            })
        }


    })
})(Zepto);