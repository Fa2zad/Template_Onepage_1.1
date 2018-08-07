var Portfolio = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // init method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery selector with qoutation.
     * @param {number} duration The duration of animation in ms.  
     * @param {number} distance The top distance of element to be scroll to play aniamation in px.  
     */
    function init(button, selector) {
        filter= button.data("filter");
        $(".portfolio-buttons a").removeClass("theme-button--colored");
        button.addClass("theme-button--colored");
        if (filter == "all") {
            $(selector + " >ul >li").each(function () {

                $(this).animate({
                    opacity: 0
                }, 300).hide(100);

                setTimeout(() => {
                    $(this).show(400).animate({
                        opacity: 1
                    }, 400);
                }, 400);

            });
        } else {
            $(selector + " >ul >li").each(function () {

                $(this).animate({
                    opacity: 0
                }, 300).hide(100);

            });

            $(selector + " >ul >li." + filter).each(function () {

                $(this).show(400).animate({
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