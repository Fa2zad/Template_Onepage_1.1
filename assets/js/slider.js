var Slider = (function () {

    var bar = $(".slider-timebar");

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
            function slideImagesForward() {
                bar.animate({'width':$(window).width()}, duration, "linear");

                var currentSlide = $(selector + " >ul >li.active");
                var nextSlide = currentSlide.next();

                if (nextSlide.length == 0) {
                    nextSlide = $(selector + " >ul >li:first");
                }
                $(selector).css("background-image", "url("+ $(currentSlide).children(" img").attr("src") +")");
                currentSlide.animate({opacity: 0.0}, animationDuration/2, function(){
                    currentSlide.removeClass("active");
                    $(selector + " >ul >li >figure").css({padding: 0, opacity: 0.0});
                    nextSlide.css({
                            opacity: 0.0
                        }).addClass("active")
                        .animate({
                            opacity: 1.0
                        }, animationDuration, function () {
                            
                            $(selector + " >ul >li >figure").animate({padding: "0px 7%", opacity: 1.0}, 1000);
                            bar.css({width: 0});
                            bar.animate({'width': 0}, 0, "linear");
                        });
                });
                
            }
            //bar.animate({'width':$(window).width()}, duration, "linear");
            //bar.animate({'width': 0}, 0, "linear");
            timeBar(duration);
            animateInterval = setInterval(slideImagesForward, duration, animationDuration);

        });

    }



    function timeBar(duration) {
        bar.animate({'width': $(window).width()}, duration, "linear");
        bar.animate({'width': 0}, 0, "linear");


        // bar
        //     .clearQueue()
        //     .stop()
        //     .css(
        //         {width:'0%'}
        //     )
        //     .animate({
        //         width: $(window).width()
        //     }, duration, "linear");
    }
    /* =============== export public methods =============== */
    return {
        slide: slide
    };
}());