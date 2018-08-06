var TabletSlider = (function () {

    function init() {
        
        setInterval(slide, 5000);
    }



    function slide(){
        
        $(".tablet-slider-columns div div img.active").each( function(i){
                
                $(this).hide(500).removeClass("active");
                if ($(this).next().length == 0) {
                    $(".tablet-slider-columns div div img:first").addClass("active");
                    $(".tablet-slider-columns div div img").show(500);

                } else{
                    $(this).next().addClass("active").show(1);
                }
        }); 
    }



    /* =============== export public methods =============== */
    return {
        init: init
    };
}());