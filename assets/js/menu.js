var Menu = (function () {


    // main init method
    /** @description search.  
     * @param {string} selector The jquery selector with qoutation. 
     */
    function init(selector) {
        if ($(window).width() > 768) {
            $(selector + " .header-search form a").animate({
                opacity: 0
            }, 1);
            $(selector).each(function (i) {
                $(selector + " .header-logo").animate({
                    opacity: 0
                }, 500).hide(100);
                $(selector + " .header-user").animate({
                    opacity: 0
                }, 500).hide(100);
                $(selector + " .header-separator").animate({
                    opacity: 0
                }, 500).hide(100);
                $(selector + " .header-menu").animate({
                    opacity: 0
                }, 500).hide(100, function () {
                    $(".header-search, .header-search form").animate({
                        width: "100%",
                        "padding-top": 0

                    }, 1000).css("position", "relative");
                    $(".header-search form .form-group").animate({
                        width: "100%"
                    }, 1000);
                    $(selector + " .header-search form input").animate({
                        width: "100%",
                        padding: "3px 9px 2px 53px"

                    }, 1000).css("border", "1px solid #ccc");

                    $(selector + " .header-search form a").animate({
                        opacity: 1,
                        top: "10px",
                        left: "45px"
                    }, 1000).css("position", "absolute");

                    $(selector + " .header-search-close").animate({
                        top: "10px",
                        left: "25px"
                    }, 100).show(100);

                });

            });
        } else {
            $(".header-search").css({
                width: "100%",
                float: "unset",
                "margin-top": 0
            });
            $(".header-search .navbar-form").css({
                width: "100%",
                padding: "0px 14px"
            });
            $(".header-search .navbar-form input").css({
                width: "100%",
                padding: "3px 32px 3px 6px",
                border: "1px solid lightgray"
            });
            $(".header-search .navbar-form a").css({
                "position": "absolute",
                "margin-top": "7px",
                "margin-right": "10px"
            });

        }

    }


    function closeSearch(selector) {

        $(".header-search, .header-search form").animate({
            width: "35px"
        }, 1000,function () {
            $(".header-search, .header-search form").css("position", "unset");
        });
        $(".header-search form").animate({"margin-top": "12px"}, 500);
        $(".header-search form .form-group").animate({
            width: "30px"
        }, 500);
        $(selector + " .header-search form input").animate({
            width: 0,
            padding: 0
        }, 500, function () {
            $(selector + " .header-search form input").css("border","unset");
        });

        $(selector + " .header-search-close").hide(1);
        $(selector + " .header-search form a").css("opacity", 0);
        $(selector + " .header-search form a").animate({
            opacity: 1,
            top: "0",
            left: "0"
        }, 1, function () {
            $(selector + " .header-search form a").css("position", "unset");
        });



        $(selector + " .header-logo").animate({
            opacity: 1
        }, 500).show(1);
        $(selector + " .header-user").animate({
            opacity: 1
        }, 500).show(500);
        $(selector + " .header-separator").animate({
            opacity: 1
        }, 500).show(500);
        $(selector + " .header-menu").animate({
            opacity: 1
        }, 500).show(500, function () {


        });


    }


    function resize() {

         if ($(window).width() < 768){
            $(".header-search").css({
                float: "unset",
                "margin-top": 7
            });
            $(".header-search .navbar-form").css({
                padding: "5px 14px"
            });
            $(".header-search .navbar-form input").css({
                width: "100%",
                padding: "3px 32px 3px 6px",
                border: "1px solid lightgray"
            });
            $(".header-search .navbar-form a").css({
                    "position": "absolute",
                    "margin-top": "7px",
                    "margin-right": "10px"
            });


         }else{
            $(".header-search").css({
                float: "right",
                "margin-top": 0
            });
            $(".header-search .navbar-form").css({
                padding: "10px 15px"
            });
            $(".header-search .navbar-form input").css({
                width: 0,
                padding: 0,
                border: "0px"
            });
             $(".header-search .navbar-form a").css({
                     "position": "static",
                     "margin-top": "7px",
                     "margin-right": "10px"
             });

         }
    }
    /* =============== export public methods =============== */
    return {
        init: init,
        closeSearch: closeSearch,
        resize: resize
    };
}());