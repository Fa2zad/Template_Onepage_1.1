var Slider = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // main slide method
    /** @description slide element. 
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
                $(selector + " >ul >li >figure").css({padding: "0px 0%", opacity: 0.0});
                nextSlide.css({
                        opacity: 0.4
                    }).addClass("active")
                    .animate({
                        opacity: 1.0
                    }, animationDuration, function () {
                        bar.animate({'width': 0}, 0, "linear");
                        $(selector + " >ul >li >figure").animate({padding: "0px 7%", opacity: 1.0}, 1000);
                    });
            }
            bar.animate({'width':$(window).width()}, duration, "linear");
            bar.animate({'width': 0}, 0, "linear");

            animateInterval = setInterval(slideImagesForward, duration, animationDuration);

        });

    }

    /* =============== export public methods =============== */
    return {
        slide: slide
    };
}());