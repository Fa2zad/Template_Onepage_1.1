var ImageContents = (function () {

    var selectorGlobal;
    var durationGlobal;
    var animationDurationGlobal;
    var animateInterval;
    var currentFigureGloabl;
    var nextFigureGlobal;
    var pGlobal;
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
            selectorGlobal = selector;
            durationGlobal = duration;
            animationDurationGlobal = animationDuration;

                var currentSlide = $(selector + " >ul >li.active");
                currentFigureGloabl = $(currentSlide.children(" figure"));
                var nextSlide = currentSlide.next();
                nextFigureGlobal = $(nextSlide.children(" figure"));
                pGlobal = $(selector + " figure >figcaption p");

            function slideImagesForward() {

                currentSlide = $(selector + " >ul >li.active");
                currentFigureGloabl = $(currentSlide.children(" figure"));
                nextSlide = currentSlide.next();
                nextFigureGlobal = $(nextSlide.children(" figure"));
                
                pGlobal = $(selector + " figure >figcaption p");
                $(pGlobal).animate({opacity: 0.0, marginRight: '-20px'}, animationDuration);


                if (nextSlide.length == 0) {
                    nextSlide = $(selector + " >ul >li:first");
                    nextFigureGlobal = $(nextSlide.children(" figure"));
                }
                if ($(window).width() > 779){
                    $(selector).css("background-image", "url("+ $(selector + " >ul >li.active >figure >div >img").attr("src") +")");
                }else{
                    $(selector).css("background-image", "none");
                }
                currentFigureGloabl.animate({opacity: 0.1}, animationDuration/2, function(){

                    currentSlide.removeClass("active");

                    nextFigureGlobal.css({opacity: 0.1});

                    nextSlide.addClass("active");

                    nextFigureGlobal.animate({
                            opacity: 1.0
                        }, animationDuration, function () {
                            $(pGlobal).animate({
                                opacity: 1.0,
                                marginRight: "0"
                            }, animationDuration);
                        });
                });
                
            }

            animateInterval = setInterval(slideImagesForward, duration, animationDuration);

        });

    }

    function reset(){
        clearInterval(animateInterval);
        currentFigureGloabl.clearQueue();
        currentFigureGloabl.stop();
        nextFigureGlobal.clearQueue();
        nextFigureGlobal.stop();
        pGlobal.clearQueue();
        pGlobal.stop();
        clearInterval(animateInterval);
        setTimeout(() => {
            imageContentsSlide(selectorGlobal, durationGlobal, animationDurationGlobal);
        }, 200);
    }
    /* =============== export public methods =============== */
    return {
        imageContentsSlide: imageContentsSlide,
        reset: reset
    };
}());