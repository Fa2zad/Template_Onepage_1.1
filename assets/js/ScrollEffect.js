var ScrollEffect = (function () {

    
  
    /* =================== private methods ================= */
    // setImagesHeight elements
    
          
      
  
    /* =================== public methods ================== */
    // main fadeInOnScroll method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */  
    function fadeInOnScroll(selector, duration,  distance) {
        $(selector).each( function(i){
            
          var distance_of_object = $(this).position().top + distance;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          if( bottom_of_window > distance_of_object ){
              $(this).animate({'opacity':'1'},duration);
            }
          
      }); 
    }

    // main anyEffectOnScroll method
    /** @description Animate element to any effect. First set reverse css properties to element.
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     * @param {string} effect Multiple CSS properties, use the following syntax: {"propertyname":"value","propertyname":"value",...}
     * @param {string} easing Easing function. Default value is 'swing'
     * 
     */  
    function anyEffectOnScroll(selector, duration,  distance, effect, Easing) {
      if (Easing == undefined) {
        Easing  = "swing";
      }
      $(selector).each( function(i){
          
        var distance_of_object = $(this).position().top + distance;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > distance_of_object ){

            $(this).animate(effect,duration, Easing);
          }
    }); 
  }
  
    /* =============== export public methods =============== */
    return {
      fadeInOnScroll: fadeInOnScroll,
      anyEffectOnScroll: anyEffectOnScroll
    };
  }());




