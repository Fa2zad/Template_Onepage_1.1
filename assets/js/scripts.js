//------------------------------------//
//--------- document ready -----------//
//------------------------------------//
$(document).ready(function(){

    //====== Menu
    //Menu.init();


});

//------------------------------------//
//---------- window resize -----------//
//------------------------------------//
$(window).resize(function () {


});


//------------------------------------//
//---------- window scroll -----------//
//------------------------------------//
$(window).scroll(function () {


    //counter
    //Counter.counter('.counter-items >div >span', 8000, 2750);


    //====== FadeIn sample
    //ScrollEffect.fadeInOnScroll('img', 1500, 100);
    //====== Custome effect sample
    //ScrollEffect.anyEffectOnScroll('img', 1500, 100, {'opacity': '1', 'margin-top':'100px'});

    //.icon-contents-columns
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(1)', 500, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(2)', 1000, 200, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.icon-contents-columns >div:nth-child(3)', 1500, 200, {'opacity': '1', 'margin-top':'0px'});
    
    //.image-contents__container
    ScrollEffect.fadeInOnScroll('.image-contents__container', 1000, 200);
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption h3', 1500, 1470, {'margin-top': '0px'}, 'easeOutQuint');
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption p', 2000, 1450, {'opacity': '1', 'margin-left': '0px', 'margin-right': '0px'}, 'easeOutQuint');
    ScrollEffect.anyEffectOnScroll('.image-contents__container figcaption a', 2000, 1500, {'opacity': '1', 'margin-top': '20px'}, 'easeOutElastic');
    

    //.portfolio__container
    ScrollEffect.anyEffectOnScroll('.portfolio__container', 1500, 100, {'opacity': '1', 'margin-top':'0px'});
    ScrollEffect.anyEffectOnScroll('.portfolio__container div:first-child', 1500, 0, {'opacity': '1', 'margin-top': '100px'}, 'easeInOutCirc');
    ScrollEffect.anyEffectOnScroll('.portfolio__container .portfolio-buttons', 1500, 50, {'opacity': '1', 'margin-top': '3px'}, 'easeInOutCirc');

    //.counter__container
    ScrollEffect.anyEffectOnScroll('.counters__container > div', 4000, 200, {'opacity': '1', 'margin-top': '0px'});

    // //.tabletslider__container
    // ScrollEffect.anyEffectOnScroll('.tabletslider__container', 1500, 200,{'opacity': '1', 'margin-right': '0px'});

    // //.aroundimage__container
    // ScrollEffect.anyEffectOnScroll('.aroundimage__container', 1500, 200,{'opacity': '1', 'margin-top': '0px'});
    // ScrollEffect.anyEffectOnScroll('.aroundimage__container .aroundimage-cols >div', 1500, 200, {'opacity': '1'}, 'easeOutBack');

    // //.steps__container
    // ScrollEffect.anyEffectOnScroll('.steps__container', 1500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');

    // //.ourteam__container .ourteam-cols div
    // ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(1)', 1500, 200, {'opacity': '1', 'margin-top': '0px'});
    // ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(2)', 500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    // ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(3)', 1000, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    // ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(4)', 1500, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');
    // ScrollEffect.anyEffectOnScroll('.ourteam__container .ourteam-cols div:nth-child(5)', 2000, 300, {'opacity': '1', 'margin-top': '0px'}, 'easeOutBack');

    
    
});