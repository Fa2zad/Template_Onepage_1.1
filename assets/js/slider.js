var Slider = (function () {

    var bar = $(".slider-timebar");
    var animateInterval;
    var selectorGlobal;
    var durationGlobal;
    var animationDurationGlobal;
    var currentSlideGlobal;
    var nextSlideGlobal;
    var figureGlobal;
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
            selectorGlobal = selector;
            durationGlobal = duration;
            animationDurationGlobal = animationDuration;

            function slideImagesForward() {
                if ($(selector).isVisible()) {
                    currentSlideGlobal = $(selector + " >ul >li.active");
                    figureGlobal = $(selector + " >ul >li >figure");
                    nextSlideGlobal = currentSlideGlobal.next();
                    var figurePadding;

                    bar.animate({
                        'width': $(window).width()
                    }, duration, "linear");


                    if (nextSlideGlobal.length == 0) {
                        nextSlideGlobal = $(selector + " >ul >li:first");
                    }
                    $(selector).css("background-image", "url(" + $(currentSlideGlobal).children(" img").attr("src") + ")");
                    currentSlideGlobal.animate({
                        opacity: 0.0
                    }, animationDuration / 2, function () {
                        currentSlideGlobal.removeClass("active");
                        figurePadding = $(figureGlobal).innerWidth() - $(figureGlobal).width();
                        $(figureGlobal).css({
                            padding: 0,
                            opacity: 0.0
                        });
                        nextSlideGlobal.css({
                                opacity: 0.0
                            }).addClass("active")
                            .animate({
                                opacity: 1.0
                            }, animationDuration, function () {


                                $(figureGlobal).animate({
                                    padding: "0px " + figurePadding / 2 + "%",
                                    opacity: 1.0
                                }, 1000);
                                bar.css({
                                    width: 0
                                });
                                bar.animate({
                                    'width': 0
                                }, 0, "linear");
                            });
                    });
                }
            }

            if (progressBar(false)) {
                animateInterval = setInterval(slideImagesForward, duration, animationDuration);
            }

        });

    }



    function progressBar(resizing) {
        if (resizing) {
            clearInterval(animateInterval);
            bar.clearQueue();
            bar.stop().css("width", 0);
            currentSlideGlobal.clearQueue();
            currentSlideGlobal.stop();
            nextSlideGlobal.clearQueue();
            nextSlideGlobal.stop();
            figureGlobal.clearQueue();
            figureGlobal.stop();
            setTimeout(() => {
                clearInterval(animateInterval);
                slide(selectorGlobal, durationGlobal, animationDurationGlobal);
            }, 200);
        } else if (!resizing) {
            bar.animate({
                'width': $(window).width()
            }, durationGlobal, "linear");
            bar.animate({
                'width': 0
            }, 0, "linear");
            currentSlideGlobal = $(selectorGlobal + " >ul >li.active");
            nextSlideGlobal = currentSlideGlobal.next();
            figureGlobal = $(selectorGlobal + " >ul >li >figure");
            return true;
        }

    }
    /* =============== export public methods =============== */
    return {
        slide: slide,
        progressBar: progressBar
    };
}());