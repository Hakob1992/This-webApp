$(document).ready(function () {
    $('#menu').click(function () {
        $('header').toggleClass('visible-nav');
        $('.scrolling-content').toggleClass('nav-open');
        $('.header-container').removeClass('display-none');
        $('.main-wrapper').addClass('display-none');


    });


    $('.NewsPage-txtInfo').scroll(function(){
        $('.news-page-head').css("opacity", 1- $('.NewsPage-txtInfo').scrollTop() / 200);
        var mass = Math.max(20, 64-0.05*$('.NewsPage-txtInfo').scrollTop()) + 'px';
        $('.NewsPage-txtInfo h5').css({'font-size': mass, 'line-height': mass});
    });

    $('#searchBtn').click(function () {
        $('.searchSec').toggleClass('visible-nav');
        +
            $('.scrolling-content').toggleClass('nav-open');
        $('.main-wrapper').addClass('display-none');


    });


    $('#search-close').click(function () {
        $('.searchSec').removeClass('visible-nav');
        $('.scrolling-content').removeClass('nav-open');
        $('body').removeClass('scroll-none');
        $('.main-wrapper').removeClass('display-none');


    });
    $('.head-close').click(function () {
        $('header').removeClass('visible-nav');
        $('.scrolling-content').removeClass('nav-open');
        $('body').removeClass('scroll-none');
        $('.header-container').addClass('display-none');
        $('.main-wrapper').removeClass('display-none');

    });


    $('.log').click(function () {
        $('header').removeClass('visible-nav');
        $('#about').addClass('opened');
        $('.about-content').addClass('hidden');
        $('.aside-header').addClass('hidden');


    });

    $('.log2').click(function () {
        $('header').removeClass('visible-nav');
        $('#plusone').addClass('opened');
        $('.section-wrap').addClass('hidden');
        $('.slide-section').addClass('hidden');
        $('footer').addClass('hidden');
        $('.aside-header').addClass('hidden');

    });


    $('.click').click(function () {
        $('.click').toggleClass('backcol')
    });
    $('.click1').click(function () {
        $('.click1').toggleClass('backcol')
    });
    $('.click2').click(function () {
        $('.click2').toggleClass('backcol')
    });
    $('.click3').click(function () {
        $('.click3').toggleClass('backcol')
    });
    $('.click4').click(function () {
        $('.click4').toggleClass('backcol')
    });


    // ======================

    var el = document.querySelector(".NewsPage-txtInfo");
    var wrap = $("#wrap");
    var line = $(".white-border");

    console.log(el);
    // opacity
    $(el).scroll(example);

    function example() {
        var tempScrollTop = $(el).scrollTop();
        console.log("Scroll from Top: " + tempScrollTop.toString());
        if (el.scrollTop > 185) {
            wrap.addClass("fix-search", 10, "linear");
            line.addClass("fix");
        } else {
            wrap.removeClass("fix-search");
            line.removeClass("fix");
        }
    };



    //

    // header=sl

    $('.log-in-btn,.back-btn').click(function () {
        if ($('.log-in-btn').is(':visible')) {
            $('.log-in-btn').fadeOut(function () {
                $('.login-page').toggle('slide', {
                    direction: 'left'
                }, 500);
            });
        } else {
            $('.login-page').toggle('slide', {
                direction: 'left'
            }, 200, function () {
                $('.log-in-btn').fadeIn();
            });
        }
    });


    // INTERNSHIPSCROLL
    // Detect request animation frame
    var scroll = window.requestAnimationFrame ||
        // IE Fallback
        function (callback) {
            window.setTimeout(callback, 1000 / 60)
        };
    var elementsToShow = document.querySelectorAll('.show-on-scroll');

    function loop() {

        Array.prototype.forEach.call(elementsToShow, function (element) {
            if (isElementInViewport(element)) {
                element.classList.add('is-visible');
            } else {
                element.classList.remove('is-visible');
            }
        });

        scroll(loop);
    }

// Call the loop for the first time
    loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
        // special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            (rect.top <= 0
                && rect.bottom >= 0)
            ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.top <= (window.innerHeight || document.documentElement.clientHeight))
            ||
            (rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        );
    }


    // ==========


    // audioPlay
    $('.audio-play-btn a').on('click', function (e) {
        $('.audio-eco svg').removeClass("aud-fill");
        $('.audio-eco svg').toggleClass("playing"); //you can list several class names
        e.preventDefault();
    });

    $("#play").click(function(){
        $(this).text(function(_, oldText) {
            return oldText === 'Пауза' ? 'Слушай' : 'Пауза';
        });
    });

// ======================
    $('#vp-sb').click(function () {
        console.log('hi');
        $('.showHide-window').toggleClass('show-vp');
        // $('.scrolling-content').toggleClass('nav-open');

    });


    $(".vpSlide-btn ").click(function () {
        $(".splitlayout").addClass("open-right");
        $(".splitlayout").removeClass("close-left reset-layout");
    });

    $(".close-btn").click(function () {
        $(".splitlayout").removeClass("open-right");
        $(".splitlayout").addClass("close-right reset-layout");
    });


// VpSHOWHIDE
    $('#vpSt-op').click(function () {
        $('#target').slideToggle('slow');
    });
    $('#vpSim-cl').click(function () {
        $('#target').slideToggle('fast');
    });
// ----
// VpSHOWHIDE2

    $('.news-page-photoGallery,.np-left-closeBtn').click(function () {
        if ($('.news-page-photoGallery').is(':visible')) {
            $('.news-page-photoGallery').fadeOut(function () {
                $('.target2').toggle('slide', {
                    direction: 'left'
                }, 1000);
            });
        } else {
            $('.target2').toggle('slide', {
                direction: 'left'
            }, 1000, function () {
                $('.news-page-photoGallery').fadeIn();
            });
        }
    });

// ----

    $('.preViewTube').PreViewTube({

        // animation speed
        'interval': 500,

        // 'hover' or 'constant'
        'mode': 'hover'

    });


    // VideoPAge click
    //

// ----

    jQuery(document).ready(function ($) {
        //variables
        var hijacking = $('body').data('hijacking'),
            animationType = $('body').data('animation'),
            delta = 0,
            scrollThreshold = 5,
            actual = 1,
            animating = false;

        //DOM elements
        var sectionsAvailable = $('.cd-section'),
            verticalNav = $('.cd-vertical-nav'),
            prevArrow = verticalNav.find('a.cd-prev'),
            nextArrow = verticalNav.find('a.cd-next');


        //check the media query and bind corresponding events
        var MQ = deviceType();
        bindEvents(MQ);
        $(window).on('resize', function () {
            MQ = deviceType();
            bindEvents(MQ);
        });

        function bindEvents(MQ) {
            if (MQ == 'desktop') {
                //bind the animation to the window scroll event, arrows click and keyboard
                if (hijacking == 'on') {
                    initHijacking();
                    $(window).on('DOMMouseScroll mousewheel', scrollHijacking);
                } else {
                    scrollAnimation();
                    $(window).on('scroll', scrollAnimation);
                }
                prevArrow.on('click', prevSection);
                nextArrow.on('click', nextSection);

                $(document).on('keyup', function (event) {
                    if (event.which == '40' && !nextArrow.hasClass('inactive')) {
                        nextSection();
                    } else if (event.which == '38' && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && $(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
                        prevSection();
                    }
                });
                //set navigation arrows visibility
                checkNavigation();
            } else {
                //reset and unbind
                resetSectionStyle();
                $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
                $(window).off('scroll', scrollAnimation);
                prevArrow.off('click', prevSection);
                nextArrow.off('click', nextSection);
                $(document).off('keyup');
            }
        }

        function scrollAnimation() {
            //normal scroll - use requestAnimationFrame (if defined) to optimize performance
            (!window.requestAnimationFrame) ? animateSection() : window.requestAnimationFrame(animateSection);
        }

        function animateSection() {
            var scrollTop = $(window).scrollTop(),
                windowHeight = $(window).height(),
                windowWidth = $(window).width();

            sectionsAvailable.each(function () {
                var actualBlock = $(this),
                    offset = scrollTop - actualBlock.offset().top;

                //according to animation type and window scroll, define animation parameters
                var animationValues = setSectionAnimation(offset, windowHeight, animationType);

                transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
                (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible') : actualBlock.removeClass('visible');
            });

            checkNavigation();
        }

        function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
            //transform sections - normal scroll
            element.velocity({
                translateY: translateY + 'vh',
                scale: scaleValue,
                rotateX: rotateXValue,
                opacity: opacityValue,
                boxShadowBlur: boxShadow + 'px',
                translateZ: 0,
            }, 0);
        }

        function initHijacking() {
            // initialize section style - scrollhijacking
            var visibleSection = sectionsAvailable.filter('.visible'),
                topSection = visibleSection.prevAll('.cd-section'),
                bottomSection = visibleSection.nextAll('.cd-section'),
                animationParams = selectAnimation(animationType, false),
                animationVisible = animationParams[0],
                animationTop = animationParams[1],
                animationBottom = animationParams[2];

            visibleSection.children('div').velocity(animationVisible, 1, function () {
                visibleSection.css('opacity', 1);
                topSection.css('opacity', 1);
                bottomSection.css('opacity', 1);
            });
            topSection.children('div').velocity(animationTop, 0);
            bottomSection.children('div').velocity(animationBottom, 0);
        }

        function scrollHijacking(event) {
            // on mouse scroll - check if animate section
            if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
                delta--;
                (Math.abs(delta) >= scrollThreshold) && prevSection();
            } else {
                delta++;
                (delta >= scrollThreshold) && nextSection();
            }
            return false;
        }

        function prevSection(event) {
            //go to previous section
            typeof event !== 'undefined' && event.preventDefault();

            var visibleSection = sectionsAvailable.filter('.visible'),
                middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
            visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;

            var animationParams = selectAnimation(animationType, middleScroll, 'prev');
            unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);

            if (!animating && !visibleSection.is(":first-child")) {
                animating = true;
                visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4])
                    .end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function () {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

                actual = actual - 1;
            }

            resetScroll();
        }

        function nextSection(event) {
            //go to next section
            typeof event !== 'undefined' && event.preventDefault();

            var visibleSection = sectionsAvailable.filter('.visible'),
                middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;

            var animationParams = selectAnimation(animationType, middleScroll, 'next');
            unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);

            if (!animating && !visibleSection.is(":last-of-type")) {
                animating = true;
                visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4])
                    .end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function () {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

                actual = actual + 1;
            }
            resetScroll();
        }

        function unbindScroll(section, time) {
            //if clicking on navigation - unbind scroll and animate using custom velocity animation
            if (hijacking == 'off') {
                $(window).off('scroll', scrollAnimation);
                (animationType == 'catch') ? $('body, html').scrollTop(section.offset().top) : section.velocity("scroll", {duration: time});
            }
        }

        function resetScroll() {
            delta = 0;
            checkNavigation();
        }

        function checkNavigation() {
            //update navigation arrows visibility
            (sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive') : prevArrow.removeClass('inactive');
            (sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive') : nextArrow.removeClass('inactive');
        }

        function resetSectionStyle() {
            //on mobile - remove style applied with jQuery
            sectionsAvailable.children('div').each(function () {
                $(this).attr('style', '');
            });
        }

        function deviceType() {
            //detect if desktop/mobile
            return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
        }

        function selectAnimation(animationName, middleScroll, direction) {
            // select section animation - scrollhijacking
            var animationVisible = 'translateNone',
                animationTop = 'translateUp',
                animationBottom = 'translateDown',
                easing = 'ease',
                animDuration = 800;

            switch (animationName) {
                case 'scaleDown':
                    animationTop = 'scaleDown';
                    easing = 'easeInCubic';
                    break;
                case 'rotate':
                    if (hijacking == 'off') {
                        animationTop = 'rotation.scroll';
                        animationBottom = 'translateNone';
                    } else {
                        animationTop = 'rotation';
                        easing = 'easeInCubic';
                    }
                    break;
                case 'gallery':
                    animDuration = 1500;
                    if (middleScroll) {
                        animationTop = 'scaleDown.moveUp.scroll';
                        animationVisible = 'scaleUp.moveUp.scroll';
                        animationBottom = 'scaleDown.moveDown.scroll';
                    } else {
                        animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
                        animationTop = 'scaleDown.moveUp';
                        animationBottom = 'scaleDown.moveDown';
                    }
                    break;
                case 'catch':
                    animationVisible = 'translateUp.delay';
                    break;
                case 'opacity':
                    animDuration = 700;
                    animationTop = 'hide.scaleUp';
                    animationBottom = 'hide.scaleDown';
                    break;
                case 'fixed':
                    animationTop = 'translateNone';
                    easing = 'easeInCubic';
                    break;
                case 'parallax':
                    animationTop = 'translateUp.half';
                    easing = 'easeInCubic';
                    break;
            }

            return [animationVisible, animationTop, animationBottom, animDuration, easing];
        }

        function setSectionAnimation(sectionOffset, windowHeight, animationName) {
            // select section animation - normal scroll
            var scale = 1,
                translateY = 100,
                rotateX = '0deg',
                opacity = 1,
                boxShadowBlur = 0;

            if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
                // section entering the viewport
                translateY = (-sectionOffset) * 100 / windowHeight;

                switch (animationName) {
                    case 'scaleDown':
                        scale = 1;
                        opacity = 1;
                        break;
                    case 'rotate':
                        translateY = 0;
                        break;
                    case 'gallery':
                        if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
                            scale = -sectionOffset / windowHeight;
                            translateY = (-sectionOffset) * 100 / windowHeight;
                            boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
                        } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                            scale = 0.9;
                            translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                            boxShadowBlur = 40;
                        } else {
                            scale = 1 + sectionOffset / windowHeight;
                            translateY = 0;
                            boxShadowBlur = -400 * sectionOffset / windowHeight;
                        }
                        break;
                    case 'catch':
                        if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                            translateY = 100;
                            boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
                        } else {
                            translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                            boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
                        }
                        break;
                    case 'opacity':
                        translateY = 0;
                        scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                        opacity = (sectionOffset + windowHeight) / windowHeight;
                        break;
                }

            } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
                //section leaving the viewport - still has the '.visible' class
                translateY = (-sectionOffset) * 100 / windowHeight;

                switch (animationName) {
                    case 'scaleDown':
                        scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
                        opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                        translateY = 0;
                        boxShadowBlur = 40 * (sectionOffset / windowHeight);

                        break;
                    case 'rotate':
                        opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                        rotateX = sectionOffset * 90 / windowHeight + 'deg';
                        translateY = 0;
                        break;
                    case 'gallery':
                        if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
                            scale = (windowHeight - sectionOffset) / windowHeight;
                            translateY = -(sectionOffset / windowHeight) * 100;
                            boxShadowBlur = 400 * sectionOffset / windowHeight;
                        } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                            scale = 0.9;
                            translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                            boxShadowBlur = 40;
                        } else {
                            scale = sectionOffset / windowHeight;
                            translateY = -100;
                            boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
                        }
                        break;
                    case 'catch':
                        if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                            boxShadowBlur = sectionOffset * 80 / windowHeight;
                        } else {
                            boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
                        }
                        break;
                    case 'opacity':
                        translateY = 0;
                        scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                        opacity = (windowHeight - sectionOffset) / windowHeight;
                        break;
                    case 'fixed':
                        translateY = 0;
                        break;
                    case 'parallax':
                        translateY = (-sectionOffset) * 50 / windowHeight;
                        break;

                }

            } else if (sectionOffset < -windowHeight) {
                //section not yet visible
                translateY = 100;

                switch (animationName) {
                    case 'scaleDown':
                        scale = 1;
                        opacity = 1;
                        break;
                    case 'gallery':
                        scale = 1;
                        break;
                    case 'opacity':
                        translateY = 0;
                        scale = 0.8;
                        opacity = 0;
                        break;
                }

            } else {
                //section not visible anymore
                translateY = -100;

                switch (animationName) {
                    case 'scaleDown':
                        scale = 0;
                        opacity = 0.7;
                        translateY = 0;
                        break;
                    case 'rotate':
                        translateY = 0;
                        rotateX = '90deg';
                        break;
                    case 'gallery':
                        scale = 1;
                        break;
                    case 'opacity':
                        translateY = 0;
                        scale = 1.2;
                        opacity = 0;
                        break;
                    case 'fixed':
                        translateY = 0;
                        break;
                    case 'parallax':
                        translateY = -50;
                        break;
                }
            }

            return [translateY, scale, rotateX, opacity, boxShadowBlur];
        }
    });


    /* Custom effects registration - feature available in the Velocity UI pack */
//none
    $.Velocity
        .RegisterEffect("translateUp", {
            defaultDuration: 1,
            calls: [
                [{translateY: '-100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("translateDown", {
            defaultDuration: 1,
            calls: [
                [{translateY: '100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("translateNone", {
            defaultDuration: 1,
            calls: [
                [{translateY: '0', opacity: '1', scale: '1', rotateX: '0', boxShadowBlur: '0'}, 1]
            ]
        });

//scale down
    $.Velocity
        .RegisterEffect("scaleDown", {
            defaultDuration: 1,
            calls: [
                [{opacity: '0', scale: '0.7', boxShadowBlur: '40px'}, 1]
            ]
        });
//rotation
    $.Velocity
        .RegisterEffect("rotation", {
            defaultDuration: 1,
            calls: [
                [{opacity: '0', rotateX: '90', translateY: '-100%'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("rotation.scroll", {
            defaultDuration: 1,
            calls: [
                [{opacity: '0', rotateX: '90', translateY: '0'}, 1]
            ]
        });
//gallery
    $.Velocity
        .RegisterEffect("scaleDown.moveUp", {
            defaultDuration: 1,
            calls: [
                [{translateY: '-10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
                [{translateY: '-100%'}, 0.60],
                [{translateY: '-100%', scale: '1', boxShadowBlur: '0'}, 0.20]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveUp.scroll", {
            defaultDuration: 1,
            calls: [
                [{translateY: '-100%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
                [{translateY: '-100%', scale: '1', boxShadowBlur: '0'}, 0.40]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveUp", {
            defaultDuration: 1,
            calls: [
                [{translateY: '90%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
                [{translateY: '0%'}, 0.60],
                [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveUp.scroll", {
            defaultDuration: 1,
            calls: [
                [{translateY: '0%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
                [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.40]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveDown", {
            defaultDuration: 1,
            calls: [
                [{translateY: '10%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
                [{translateY: '100%'}, 0.60],
                [{translateY: '100%', scale: '1', boxShadowBlur: '0'}, 0.20]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleDown.moveDown.scroll", {
            defaultDuration: 1,
            calls: [
                [{translateY: '100%', scale: '0.9', boxShadowBlur: '40px'}, 0.60],
                [{translateY: '100%', scale: '1', boxShadowBlur: '0'}, 0.40]
            ]
        });
    $.Velocity
        .RegisterEffect("scaleUp.moveDown", {
            defaultDuration: 1,
            calls: [
                [{translateY: '-90%', scale: '0.9', boxShadowBlur: '40px'}, 0.20],
                [{translateY: '0%'}, 0.60],
                [{translateY: '0%', scale: '1', boxShadowBlur: '0'}, 0.20]
            ]
        });
//catch up
    $.Velocity
        .RegisterEffect("translateUp.delay", {
            defaultDuration: 1,
            calls: [
                [{translateY: '0%',}, 1, {delay: 100}],
            ]
        });
//opacity
    $.Velocity
        .RegisterEffect("hide.scaleUp", {
            defaultDuration: 1,
            calls: [
                [{opacity: '0', scale: '1.2'}, 1]
            ]
        });
    $.Velocity
        .RegisterEffect("hide.scaleDown", {
            defaultDuration: 1,
            calls: [
                [{opacity: '0', scale: '0.8'}, 1]
            ]
        });
//parallax
    $.Velocity
        .RegisterEffect("translateUp.half", {
            defaultDuration: 1,
            calls: [
                [{translateY: '-50%'}, 1]
            ]
        });


// search
//
//


    var boxWidth = $(".search-page").width();
    $(".searchBtn").click(function () {
        $(".search-page").animate({
            width: 0
        });
    });
    $(".searchBtn").click(function () {
        $(".search-page").animate({
            width: boxWidth
        });
    });


// open mobile menu
    $('.mobDrop-menu').click(function (e) {
        $('.mobile-section').addClass('overflow-hid');
        $('.mob-footer').addClass('display-none');
        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).addClass('open');
    });

    $('.mobClose-menu').click(function (e) {
        $('.mobile-section').removeClass('overflow-hid');
        $('.mob-footer').removeClass('display-none');

        e.preventDefault();
        $('.mobile-header-nav').slideToggle();
        $(this).addClass('close');
    });


// bootSwitch
    $(function () {
        $('#toggle-one').bootstrapToggle();
    });


    // SWIPER.js
//

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        freeMode: true,

    });


    var toggle = document.querySelector('.toggleButton input')
    var animate = setInterval(() => {
        toggle.checked = !toggle.checked
    }, 3000)

    document.querySelector('body').addEventListener('click', () => {
        clearInterval(animate);
    });


});


var header = document.getElementsByClassName("search");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        console.log()
    });

}













