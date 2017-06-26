$(function () {
    //点击搜索
    var Width = $(window).width();
    var Wleft = -Width;
    $(".s-left").on("click", function () {
        $("#box").css({
            '-webkit-transform': "translate(" + Wleft + "px,0)",
            '-webkit-transition': "transform 0.5s"
        })
    });
    //点击header右侧按钮
    var box1 = $("<div id='box1'></div>");
    $("body").append(box1);
    $(".down").on("click", function () {
        var a = $(".set");
        if (a.is(":visible")) {
            a.slideUp(300);
            box1.hide();
        } else {
            a.slideDown(300);
            box1.show();
        };
    });
    //购物
    $(".gouwu").on("click", function () {
        var a = $(".set1");
        if (a.is(":visible")) {
            a.hide();
            box1.hide();
        } else {
            a.show();
            box1.show();
        };
    });
    $(".b-s-left").on("click", function () {
        $("#box").css({
            '-webkit-transform': "translate(0,0)",
            '-webkit-transition': "transform 0.5s"
        })
    });
    //在b-left页面点击a切换对应的页面
    $(".b-left").on("click", "a", function (e) {
        var curPage = $(this).attr("href");
        var tit = $(this).attr("title");
        var ID = $(this).attr("id");
        var back = $("#return");
        $(curPage).css({
            '-webkit-transform': "translate3d(0,0,0)"

        }).siblings().css({
            '-webkit-transform': "translate3d(-100%,0,0)"
        });
        changeNav(tit, curPage, back);

        //判断是否进入列表页
        if (curPage == "#nav-c") {
            getnav(ID);
        };


        if (curPage == "#list11") {
            getList(tit, curPage);
            $("#hTit").text("专题列表");
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        };
        //微信
        if (curPage == "#weixin") {
            $(".b-left footer").hide();
            box1.hide();
            $(".set").hide();
            $(".down").hide();
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        };
        //邀请好友
        if (curPage == "#yaoqing") {
            $(".b-left footer").hide();
            box1.hide();
            $(".set").hide();
            $(".down").hide();
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        };
        if (curPage == "#yijian") {
            $(".b-left footer").hide();
            box1.hide();
            $(".set").hide();
            $(".down").hide();
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        };
        if (curPage == "#setting") {
            $(".b-left footer").hide();
            box1.hide();
            $(".set").hide();
            $(".down").hide();
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        };

    });

    //进入列表页
    function getList(tit, curPage, back) {
        $.getJSON("data.json", function (data) {
            var ohtml = "";
            $.each(data.index, function (k, v) {
                //console.log(k)
                if (tit == v.title) {
                    ohtml += '<div class="list-l" title="' + v.title + '"><img src="' + v.minurl + '" alt=""><h2>' + v.title + '</h2><div class="s-d1"><span class="l-s1">' + v.price + '</span><s>' + v.original + '</s><span class="l-s2">' + v.discount + '</span><span class="l-s3">' + v.zan + '</span></div><p>' + v.txt + '</p></div>'

                }
            });
            $(".list11").html(ohtml);
        });
    }

    function changeNav(tit, curPage, back) {
        var hTit = $("#hTit");
        hTit.text(tit);
        if (curPage == "#nav-c") {
            $(".b-left footer").hide();
            $(".search").hide();
            $(".down").hide();
            $(".gouwu").show();
            back.show().attr({
                "title": "禾禾小镇",
                "href": "#home"
            });
        }

        if (curPage == "#home") {
            back.hide();
            $(".search").show();
            $(".down").show();
            $(".gouwu").hide();
            $(".b-left footer").show();
        };
        if (curPage == "#project") {
            $(".search").hide();
            $(".return").show().attr({
                "href": "#home",
                "title": "禾禾小镇"
            });
        }
        $(".return").on("click", function () {
            if (curPage == "#project") {
                $(".search").hide();
                $(".return").show().attr({
                    "href": "#home",
                    "title": "禾禾小镇"
                });
            }
        })


    };

    function getnav(ID) {
        $.getJSON("data.json", function (data) {
            var ohtml = "";

            //console.log(data[ID].content);
            $.each(data[ID].content, function (k, v) {
                //console.log(v.url);

                //console.log(ID);

                ohtml += '<a href="#"><dl><dt><img src= "' + v.url + '" alt= ""></dt><dd><h2>' + v.header + ' </h2><div class="l-bottom"><p><s class="p-1">' + v.price + '</s> <span class="p-2">' + v.price1 + '<i>' + v.baoyou + '</i></span></p><p class="p-right"><span class="p-3">' + v.zhe + '</span><span class="p-4">' + v.qiang + '</span></p></div></dd></dl></a>';

            });

            $("#nav-c").html(ohtml);

        });

    };

    //list渲染
    $.getJSON("data.json", function (data) {
        //console.log(data);
        var ohtml = "";
        $.each(data.index, function (k, v) {
            //console.log(v);
            ohtml += '<a href="#list11" title="' + v.title + '"><dl><dt><img src="' + v.minurl + '" ></dt><dd class ="dd-top">' + v.title + '</dd><dd><span>' + v.original + '</span><span>' + v.discount + '</span><i class="fa fa-heart-o"></i> <time>' + v.price + '</time></dd></dl></a>'
        });
        $(".content").html(ohtml);
    });

    //专题
    $.getJSON("data1.json", function (data) {
        // console.log(data);
        var prohtml = "<ul>",
            prolist = "",
            protitle = "";
        $.each(data.project, function (i, v) {
            //console.log(i);
            prohtml += "<li title='专题详情'><a href='#" + i + "'><img src='" + v.url + "'><p>" + v.describe + "</p></a></li>";
            prolist += "<div class='proj'><img src='" + v.url + "'><h2><span>专题</span>" + v.describe + "</h2><p>" + v.conter + "</p><div class='protitle'></div></div>";
        })
        prohtml += "</ul>";
        $(".prolis").html(prohtml);
        $(".prolist").html(prolist);

        $(".prolis").on("click", "li", function () {
            // $(".protitle").hide();	
            var litit = $(this).attr("title");

            //console.log(litit);
            $(".search").hide();
            $(".b-left footer").show();
            $(".return").show().on("click", function () {

                $(".pro").css({
                    "-webkit-transition": "transform 0.5s ease-in-out",
                    "-webkit-transform": "translate(0)"
                });
                $(this).attr({
                    "href": "#project",
                    "title": "专题列表"
                });
            });
            $("#hTit").text(litit);
            $(".prolist").show();
            var index = $(this).index();
            $(".proj").eq(index).show().siblings().hide();
            // console.log( $(".protitle").eq(index))
            var width = $(document).width();
            $(".pro").css({
                "-webkit-transition": "transform 0.5s ease-in-out",
                "-webkit-transform": "translate(" + -100 + "%)"
            })
            $.getJSON("data1.json", function (data) {
                $.each(data.project, function (i, v) {
                    if (i == index) {
                        $.each(v.titlelis, function (k, u) {
                            protitle += "<div class='title'>" + k + "</div><h2>" + u.mintitle + "</h2><p>" + u.mintitle1txt + "</p><img src=" + u.titlepic + ">"
                        })


                    }
                })

                $(".protitle").html(protitle);
            })
        })
    })


    //搜索功能



    $(".b-right").on("click", "i", function () {
        var ohtml = "";
        var value = $("#text").val();
        $.ajax({
            url: "https://api.douban.com/v2/movie/search",
            data: {
                q: value
            },
            dataType: "jsonp",
            type: "GET",
            success: function (data) {
                //console.log(data.subjects)
                $.each(data.subjects, function (k, v) {
                    //console.log(v)
                    ohtml += '<dl><dt><img src="' + v.images.small + '"alt = ""> </dt> <dd class="jianjie">' + v.title + '</dd><dd class="dd-2"><span class="price">' + v.year + '</span><span class="zan"><i class="fa fa-heart-o"></i></span></dd></dl>'
                })
                $("#hot-search").html(ohtml);
            }
        })
    })
})