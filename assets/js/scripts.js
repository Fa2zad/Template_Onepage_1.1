////////////////////////////////////////////////
//-------------- document ready --------------//
////////////////////////////////////////////////
$(document).ready(function(){

    //============ menu ===========//
    //Menu.init();
    
    //============ slider ===========//
    Slider.slide('.slider__container', 8000, 1000);

    //============ image-contents ===========//
    ImageContents.imageContentsSlide('.image-contents__container', 6000, 1000);

});

////////////////////////////////////////////////
//--------------- window resize --------------//
////////////////////////////////////////////////
$(window).resize(function () {

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
$(window).scroll(function () {
    //========== scroll effect ==========//
    //====== FadeIn sample
    //ScrollEffect.fadeInOnScroll('img', 1500, 100);
    //====== Custome effect sample
    //ScrollEffect.anyEffectOnScroll('img', 1500, 100, {'opacity': '1', 'margin-top':'100px'});

    //.icon-contents-columns
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(1)', 500, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(2)', 1000, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(3)', 1500, 200, {'opacity': '1', 'margin-top':'0px'});
    
    //.image-contents__container
    ScrollEffect.fadeInOnScroll('.image-contents__container', 1500, 200);
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption h3', 1500, 1470, {'margin-top': '0px'}, 'easeOutQuint');
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption p', 2000, 1450, {'opacity': '1', 'margin-left': '0px', 'margin-right': '0px'}, 'easeOutQuint');
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption a', 2000, 1500, {'opacity': '1'}, 'easeOutElastic');

    //.portfolio__container
    ScrollEffect.anyEffectOnScroll('.portfolio__container', 1500, 100, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.portfolio__container div:first-child', 1500, 0, {'opacity': '1', 'margin-top': '100px'}, 'easeInOutCirc');
    ScrollEffect.anyEffectOnScroll('.portfolio__container .portfolio-buttons', 1500, 50, {'opacity': '1', 'margin-top': '3px'}, 'easeInOutCirc');

    //.counter__container
    ScrollEffect.anyEffectOnScroll('.counters__container > div', 4000, 200, {'opacity': '1', 'margin-top': '0px'});

    //.tablet-slider__container
    ScrollEffect.anyEffectOnScroll('.tablet-slider__container', 1500, 200,{'opacity': '1', 'margin-right': '0px'});
    ScrollEffect.anyEffectOnScroll('.tablet-slider__container ul li', 1500, 3100,{'opacity': '1', 'padding-top': '0px'}, 'easeOutCubic');

    //.features__container
    ScrollEffect.anyEffectOnScroll('.features__container', 1500, 200,{'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.features__container >div >div', 1500, 200, {'margin-top': '0px'}, 'easeInOutBack');
    ScrollEffect.anyEffectOnScroll('.features__container >div:last-child a', 2000, 0 , {'opacity': '1', 'padding': '6px 54px', 'margin': '0px 12px'}, 'easeOutElastic');

    //.colored-contents
    ScrollEffect.anyEffectOnScroll('.colored-contents__container > div', 1500, 300, {'opacity': '1', 'padding': '80px 68px 45px'});

    //.ourteam__container
    ScrollEffect.anyEffectOnScroll('.ourteam__container', 1500, 200, {'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.ourteam__container >div:nth-child(2) div:nth-child(1)', 1500, 300, {'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.ourteam__container >div:nth-child(2) div:nth-child(2)', 1500, 300, {'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.ourteam__container >div:nth-child(2) div:nth-child(3)', 1500, 300, {'opacity': '1', 'margin-top': '0px'});
    ScrollEffect.anyEffectOnScroll('.ourteam__container >div:nth-child(2) div:nth-child(4)', 1500, 300, {'opacity': '1', 'margin-top': '0px'});
    
    //.contact__container
    ScrollEffect.anyEffectOnScroll('.contact__container', 1000, 200, {'opacity': '1', 'margin-top': '0px'});

    //========== counter ==========//
    Counter.counter('.counters__container span[data-count]', 7000, 0);

    //========== parallax ==========//
    Parallax.init('.parallax__container');

});