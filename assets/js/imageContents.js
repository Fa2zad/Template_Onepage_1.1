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
                var currentFigure = $(currentSlide.children(" figure"));
                var nextSlide = currentSlide.next();
                var nextFigure = $(nextSlide.children(" figure"));
                
                var p = $(selector + " figure >figcaption p");
                $(p).animate({opacity: 0.0, marginRight: '-20px'}, animationDuration);


                if (nextSlide.length == 0) {
                    nextSlide = $(selector + " >ul >li:first");
                    nextFigure = $(nextSlide.children(" figure"));
                }
                currentFigure.animate({opacity: 0.1}, animationDuration/2, function(){

                    currentSlide.removeClass("active");

                    nextFigure.css({opacity: 0.1});

                    nextSlide.addClass("active");

                    nextFigure.animate({
                            opacity: 1.0
                        }, animationDuration/2, function () {
                            $(p).animate({
                                opacity: 1.0,
                                marginRight: "0"
                            }, animationDuration);
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