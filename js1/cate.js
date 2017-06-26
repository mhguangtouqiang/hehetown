var ohtml = "",
    firstli = "",
    ahtml = "",
    bhtml = "";

//---------------导航渲染
$.getJSON("data.json", function (data) {
    //console.log(data);
    $.each(data.lists, function (k, v) {
        //console.log(v);
        ohtml += "<li title=" + v.title + ">" + v.title + "</li>";
    })
    $(".s-left").html(ohtml);
    $(".s-left").children().eq(0).addClass("white");
    firstli = $(".s-left").children().eq(0).attr("title");
    auto(firstli);
});
//------------封装的渲染
function auto(Title) {
    var ahtml = "";
    $.getJSON("data.json", function (data) {
        //console.log(data);
        $.each(data.lists, function (k, v) {
            //console.log(v);
            if (Title == v.title) {
                //console.log(v.content);
                $.each(v.content, function (k1, v1) {
                    //console.log(v1);
                    $.each(v1, function (k2, v2) {
                        //console.log(v2.minnav);
                        ahtml += "<a href='#more' class='goods'><dl><dt><img src=" + v2.url + "></dt><dd>" + v2.name + "</dd></dl></a>";
                    })
                })
            }
        });
        $(".s-right").html(ahtml);
    });
}

//------------点击导航对应的渲染
$(".s-left").on("tap", "li", function () {
    $(".s-left li").removeClass("white");
    $(this).addClass("white");
    var Title = $(this).attr("title");
    //console.log(Title);
    auto(Title);
})
$(".s-right").on("tap", ".goods", function () {
    for (var i = 0; i < $(".s-left li").length; i++) {
        var aa;
        if ($(".s-left li:eq(" + i + ")").hasClass("white")) {
            aa = $(".s-left li:eq(" + i + ")").attr("title");
            //console.log(aa);
        }
    }
    var Text = $(this).find("dd").text();
    var chtml = "";
    $.getJSON("data.json", function (data) {
        $.each(data.lists, function (k, v) {
            // console.log(v);
            if (aa == v.title) {
                $.each(v.content, function (k1, v1) {
                    // console.log(v1)
                    $.each(v1, function (k2, v2) {
                        //console.log(k2)
                        if (k2 == "全部") {
                            //alert(111)
                            // console.log(v2.minnav);
                            $.each(v2.minnav, function (k3, v3) {
                                //console.log(v3)
                                chtml += "<li>" + v3 + "</li>"
                            })
                        }
                    })
                })
            }
        });

        $(".nav-lis").html(chtml);
    });

    $("footer").hide();
    $("section").css({
        "bottom": "0"
    })
    $("header").html("<span><a href='cate.html' class='fa fa-angle-left'></a></span><div><h2>" + Text + "</h2></div><span class='fa fa-filter'></span>").css({
        "color": "#FFF"
    });
    $(".fa-angle-left").parent().css({

        "position": "absolute",
        "top": "0.22rem",
        "left": "0.15rem"
    })
})


//--------------点击切换
$("h2").on("click", "a", function () {
    if ($(this).text() == "品牌") {
        $("#pinpai ol").show();
    } else {
        $("#pinpai ol").hide();
    }
    $(this).addClass("color").parent().addClass("tap").siblings().removeClass("tap").find("a").removeClass("color");

})
$.getJSON('data3.json', function (data) {
    //检索字母
    $.each(data.data.citylist, function (k, v) {
        ahtml += "<li><a href='#" + k + "'>" + k + "</a></li>";
    })
    $("#pinpai ol").html(ahtml);
})

//--------------点击品牌渲染数据
$(".pinpai").on("tap", function () {
    $.getJSON('data3.json', function (data) {
        //城市名

        $.each(data.data.citylist, function (k, v) {
            bhtml += "<div class='mk'>"
            bhtml += "<h3 id=" + k + ">" + k + "</h3><div id='citys'>";
            $.each(v, function (k1, v1) {
                //console.log(v1);

                $.each(v1, function (k2, v2) {
                    //console.log(v2)
                    bhtml += "<p>" + v2.name + "</p>";
                });
            })
            bhtml += "</div></div>";
        })
        $("#pinpai div").html(bhtml);
    })
})

//-----------滑动固定在顶部
$("#pinpai").on("scroll", function () {
    var len = $("#pinpai").find("h3").length;
    var height = $("header").height();
    var h3height = $("h3").height();
    $("#pinpai h3").removeClass("fixed");
    for (var i = 0; i < len; i++) {
        var oTop = $("#pinpai h3:eq(" + i + ")").offset().top - height;
        if (oTop < 0) {
            $("#pinpai h3:eq(" + i + ")").addClass("fixed");

        }
    }
})