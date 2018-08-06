var Features = (function () {

    var isAnimating = false;

    function init(image) {
        slide(image);
    }


    function slide(image) {

        if (!isAnimating) {
            isAnimating = true;

            $(".features__container >div:nth-child(2) >div:nth-child(2) img").animate({
                opacity: 0
            }, 200).fadeOut(200);
            $(".features__container >div:nth-child(2) >div:nth-child(2) img:nth-child(" + image + ")").animate({
                opacity: 1
            }, 500).fadeIn(500, function () {
                isAnimating = false;
            });
        }

    }


    /* =============== export public methods =============== */
    return {
        init: init
    };
}());