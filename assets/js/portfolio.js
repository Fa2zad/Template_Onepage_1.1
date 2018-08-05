var Portfolio = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // init fadeInOnScroll method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */
    function init(filter, selector) {
        if (filter == "all") {
            $(selector + " >ul >li").each(function () {

                $(this).show(1500).animate({
                    padding: 0,
                    opacity: 1
                }, 1500);
    
            });
        } else{
            $(selector + " >ul >li").each(function () {
            
                $(this).animate({
                    padding: "6% 12% 0",
                    opacity: 0.5
                }, 400).hide(1000);
    
            });
    
            $(selector + " >ul >li." + filter).each(function () {
    
                $(this).show(1000).animate({
                    padding: 0,
                    opacity: 1
                }, 400);
    
            });
        }
        

        //alert($(selector + "  >ul >li").hasClass(filter));
        //$(selector + "  >ul >li").animate({opacity: 0, display: "none"}, 500);
        //$(selector + "  >ul >li." + filter).animate({opacity: 1, display: listItem}, 500);



    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
}());