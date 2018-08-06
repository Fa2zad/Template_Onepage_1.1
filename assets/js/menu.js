var Menu = (function () {


    // main init method
    /** @description search.  
     * @param {string} selector The jquery selector with qoutation. 
     */  
    function init(selector) {

        $(selector + " .header-search form a").animate({
         opacity: 0
        }, 1);
        $(selector).each( function(i){
        $(selector + " .header-logo").animate({
            opacity: 0
        }, 500).hide(100);
        $(selector + " .header-user").animate({
            opacity: 0
        },500).hide(100);
        $(selector + " .header-separator").animate({
            opacity: 0
        },500).hide(100);
        $(selector + " .header-menu").animate({
            opacity: 0
        },500).hide(100, function () {
            $(".header-search, .header-search form").animate({
                width: "100%"
                
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
                top: "8px",
                left: "45px"
            }, 1000).css("position", "absolute");

            $(selector + " .header-search-close").animate({
                top: "8px",
                left: "25px"
            }, 100).show(100);
            
        });
        
      }); 
    }


    function closeSearch(selector) {

        $(".header-search, .header-search form").animate({
            width: "35px"
        }, 1000).css("position", "unset");
        $(".header-search form").css("margin-top","14px")
        $(".header-search form .form-group").animate({
            width: 30
        }, 500);
        $(selector + " .header-search form input").animate({
            width: 0,
            padding: 0
        }, 500).css("border", "unset");
        
        $(selector + " .header-search-close").hide(1);

        $(selector + " .header-search form a").animate({
            opacity: 1,
            top: "0",
            left: "0"
        }, 500 ).css("position", "unset");



        
        $(selector + " .header-logo").animate({
            opacity: 1
        }, 500).show(1);
        $(selector + " .header-user").animate({
            opacity: 1
        },500).show(500);
        $(selector + " .header-separator").animate({
            opacity: 1
        },500).show(500);
        $(selector + " .header-menu").animate({
            opacity: 1
        },500).show(500, function () {
            
            
        });
        
      
    }
    /* =============== export public methods =============== */
    return {
        init: init,
        closeSearch: closeSearch
    };
}());