var Slider = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // main slide method
    /** @description Fade in element. For use first change style of element to ( opacity: 0; )  
     * @param {string} selector The jquery slider container selector with qoutation.
     * @param {number} duration The duration of a slide show in ms.
     * @param {number} animationDuration The duration of animation in ms.
     */
    function slide(selector, duration, animationDuration) {
        $(selector).each(function (i) {
            var bar = $(".slider-timebar");
            function slideImagesForward() {
                bar.animate({'width':$(window).width()}, duration, "linear");

                var currentSlide = $(selector + " >ul >li.active");
                var nextSlide = currentSlide.next();

                if (nextSlide.length == 0) {
                    nextSlide = $(selector + " >ul >li:first");
                }

                currentSlide.removeClass("active");
                nextSlide.css({
                        opacity: 0.4
                    }).addClass("active")
                    .animate({
                        opacity: 1.0
                    }, animationDuration, function () {
                        bar.animate({'width': 0}, 0, "linear");
                    });
            }
            bar.animate({'width':$(window).width()}, duration, "linear");
            bar.animate({'width': 0}, 0, "linear");

            animateInterval = setInterval(slideImagesForward, duration, animationDuration);

        });

    }


    // main init method
    function init(selector, duration, animationDuration) {
        slide(selector , duration, animationDuration);
    }

    /* =============== export public methods =============== */
    return {
        init: init
    };
}());