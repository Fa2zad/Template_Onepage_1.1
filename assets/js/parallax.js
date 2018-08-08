var Parallax = (function () {

    var lastScrollTop = 0;
    var speed = 1;
    var marginTop = 80;
    /* =================== private methods ================= */
  

    // main parallaxBackground method
    /** @description parallax Background effect.  
     * @param {string} selector The jquery selector with qoutation. 
     */  
    function parallaxBackground(selector) {
        $(selector).each( function(i){
            var y= Number.parseInt($(this).css('background-position-y'));
            //alert(speed);
            y = y + (speed*1);
            //alert(y);
            $(this).css({'background-position-y': y+"%"});
            parallaxItems(selector);
      }); 
    }
    
    // main parallaxItems method
    /** @description parallax inner items effect.  
     * @param {string} selector The jquery selector with qoutation. 
     */  
    function parallaxItems(selector) {
        $(selector).each( function(i){
            marginTop = marginTop - speed*0.5;
            if (marginTop < -20) {
                marginTop = -20;
            }
            if (marginTop > 60) {
                marginTop = 60;
            }
            $(this).children().css({'margin-top': marginTop});
      }); 
    }

      
    /* =================== public methods ================== */
    
    // main init method
    function init(selector, scrollTop) {
        if ($(selector).isVisible()) {
            if (scrollTop > lastScrollTop){
                // downscroll code
                speed = Math.abs(speed);
                
            } else {
                // upscroll code
                speed = -Math.abs(speed);
            }
            lastScrollTop = scrollTop;

            parallaxBackground(selector);
        }
        else{
            $(selector).children().css({"margin-top": "unset"});

            if (scrollTop > lastScrollTop){
                // downscroll code
                marginTop = 60;
                $(selector).css("background-position-y", "-50%");

            } else {
                // upscroll code
                marginTop = -20;
                $(selector).css("background-position-y", "150%");

            }
            lastScrollTop = scrollTop;
        }
    }
  
    /* =============== export public methods =============== */
    return {
        init: init,
    };
  }());
