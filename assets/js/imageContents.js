var ImageContents = (function () {


    /* =================== private methods ================= */
    // setImagesHeight elements

    /* =================== public methods ================== */
    // main imageContents method
    /** @description ImageContents element. 
     * @param {string} selector The jquery imageContents container selector with qoutation.
     * @param {number} duration The duration of a imageContent show in ms.
     * @param {number} animationDuration The duration of animation in ms.
     */
    function imageContentsSlide(selector, duration, animationDuration) {
        $(selector).each(function (i) {
            function slideImagesForward() {

                var currentSlide = $(selector + " >ul >li.active");
                var nextSlide = currentSlide.next();

                if (nextSlide.length == 0) {
                    nextSlide = $(selector + " >ul >li:first");
                }
                currentSlide.animate({opacity: 0.1}, animationDuration/2, function(){
                    currentSlide.removeClass("active");
                    nextSlide.css({
                            opacity: 0.1
                        }).addClass("active")
                        .animate({
                            opacity: 1.0
                        }, animationDuration, function () {
    
                        });
                });
                
            }

            animateInterval = setInterval(slideImagesForward, duration, animationDuration);

        });

    }

    /* =============== export public methods =============== */
    return {
        imageContentsSlide: imageContentsSlide
    };
}());