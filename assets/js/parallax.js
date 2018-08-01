var Parallax = (function () {

    var lastScrollTop = 0;
    var speed = 1;
    var marginTop = 60;
    /* =================== private methods ================= */
    // isVisible method
    $.fn.isVisible = function() {
        var rect = this[0].getBoundingClientRect();
        return (
            (rect.height > 0 || rect.width > 0) &&
            rect.bottom >= 0 &&
            rect.right >= 0 &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.left <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // main parallaxBackground method
    /** @description parallax Background effect.  
     * @param {string} selector The jquery selector with qoutation. 
     */  
    function parallaxBackground(selector) {
        $(selector).each( function(i){
          var distance_of_object = $(this).position().top;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          var y= Number.parseInt($(this).css('background-position-y'));
          if( bottom_of_window > distance_of_object ){
              //alert(speed);
              y = y + speed;
                //alert(y);
              $(this).css({'background-position-y': y+"%"});
              parallaxItems(selector);
            }
          
      }); 
    }
    
    // main parallaxBackground method
    /** @description parallax inner items effect.  
     * @param {string} selector The jquery selector with qoutation. 
     */  
    function parallaxItems(selector) {
        $(selector).each( function(i){
            marginTop = marginTop - speed;
            $(this).children().css({'margin-top': marginTop});
      }); 
    }

      
    /* =================== public methods ================== */
    
    // main init method
    function init(selector) {
        if ($(selector).isVisible()) {
            var st = $(window).scrollTop();
            if (st > lastScrollTop){
                // downscroll code
                speed = Math.abs(speed);
            } else {
                // upscroll code
                speed = -Math.abs(speed);
            }
            lastScrollTop = st;

            parallaxBackground(selector);
        }
    }
  
    /* =============== export public methods =============== */
    return {
        init: init,
    };
  }());
