var Slider = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // main slide method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery selector with qoutation.
     */
    function slide(selector) {
        $(selector).each(function (i) {

            var animateInterval;
            function slideImagesForward() {
                $(".slider-timebar").animate({'width':$(window).width()}, 8000, "linear");

                var oCurrentPhoto = $(selector + " >ul >li.active");
                var oNextPhoto = oCurrentPhoto.next();

                if (oNextPhoto.length == 0) {
                    oNextPhoto = $(selector + " >ul >li:first");
                }

                oCurrentPhoto.removeClass("active");
                oNextPhoto.css({
                        opacity: 0.5
                    }).addClass("active")
                    .animate({
                        opacity: 1.0
                    }, 1000, function () {
                    $(".slider-timebar").animate({'width': 0}, 0, "linear");
                    });
            }
            animateInterval = setInterval(slideImagesForward, 8000);

        });

    }


    // main init method
    function init(selector) {
        slide(selector);
    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
}());