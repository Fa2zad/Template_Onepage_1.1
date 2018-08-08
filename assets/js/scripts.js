////////////////////////////////////////////////
//-------------- document ready --------------//
////////////////////////////////////////////////
var windowHeight;



$(document).ready(function(){

    windowHeight = $(window).height();
    $(".hideme").each(function () {
        if ($(this).offset().top  <  $(window).scrollTop() + windowHeight) {
          $(this).css({'opacity': '1', 'margin-top':'0px'});
        }
    });
    //============ smooth ===========//
    new SmoothScroll();
    //============ menu ===========//
    $(".header-search form a:first-child").on("click",function () {
        Menu.init(".header__container nav.navbar");
    });
    $(".header-search form a:nth-child(2)").on("click",function () {
        Menu.closeSearch(".header__container nav.navbar");
    });


    
    //============ slider ===========//
    Slider.slide('.slider__container', 8000, 1000);

    //============ image-contents ===========//
    ImageContents.imageContentsSlide('.image-contents__container', 6000, 1000);

    //============== portfolio ==============//
    $(".portfolio__container .portfolio-buttons a").on("click",function () {
        Portfolio.init($(this), ".portfolio__container");   
    });
    //============ tablet ===========//
    TabletSlider.init();
    //============ features ===========//
    $(".features__container >div:nth-child(2) >div:nth-child(1) div").mouseenter(function () {
        Features.init($(this).data("image"));
    });
    $(".features__container >div:nth-child(2) >div:nth-child(3) div").mouseenter(function () {
        Features.init($(this).data("image"));
    });

});

////////////////////////////////////////////////
//--------------- window resize --------------//
////////////////////////////////////////////////
$(window).resize(function () {
    //============ menu ===========//
    //Menu.resize();
    //============ slider ===========//
    Slider.progressBar(true);
});

////////////////////////////////////////////////
//------------- window focus -----------------//
////////////////////////////////////////////////
$(window).focus(function () {

    //============ slider ===========//
    Slider.progressBar(true);

    //========== imageContents ======//
    ImageContents.reset();
});

////////////////////////////////////////////////
//--------------- window scroll --------------//
////////////////////////////////////////////////
(function() {
    var lastScrollY = 0;
    var ticking = false;
  
    var update = function() {
        // do your stuff
      
        $(".hideme").each(function () {
            if ($(this).offset().top  <  lastScrollY + windowHeight) {
                $(this).css({'opacity': '1', 'margin-top':'0px'});
            }
        });

        if(2050< lastScrollY){
            //========== counter ==========//
            Counter.counter('.counters__container span[data-count]', 8000);
        }
        
        if(4200 < lastScrollY){
            //.colored-contents
            $('.colored-contents__container > div').css({opacity: 1, 'padding': '80px 68px 45px'});
        }

        //if ($(".parallax__container").offset().top  <  ) {
            Parallax.init('.parallax__container', lastScrollY + windowHeight);
        //}

      ticking = false;
    };
  
    var requestTick = function() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
  
    var onScroll = function() {
      lastScrollY = window.scrollY;
      requestTick();
    };
  
    $(window).on('scroll', onScroll);
  })();
