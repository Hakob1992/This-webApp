$(document).ready(function () {


    (function ($) {
        $(function () {
            $(".playButton").click(function () {
                $(".a1").removeClass("off");
                $(".a2").removeClass("off");
                $(".a3").removeClass("off");
                $(".a4").removeClass("off");
                $(".a5").removeClass("off");
                $(".a6").removeClass("off");
                $(".a7").removeClass("off");
                $(".a8").removeClass("off");
                $(".a9").removeClass("off");
                $(".a10").removeClass("off");
                $(".a11").removeClass("off");
                $(".a12").removeClass("off");
                $(".a13").removeClass("off");
                $(".a14").removeClass("off");
                $(".a15").removeClass("off");
                $(".a16").removeClass("off");
                $(".a17").removeClass("off");
                $(".a18").removeClass("off");
                $(".a19").removeClass("off");

                $(".b1").removeClass("off");
                $(".b2").removeClass("off");
                $(".b3").removeClass("off");
                $(".b4").removeClass("off");
                $(".b5").removeClass("off");
                $(".b6").removeClass("off");
                $(".b7").removeClass("off");
                $(".b8").removeClass("off");
                $(".b9").removeClass("off");
                $(".b10").removeClass("off");
                $(".b11").removeClass("off");
                $(".b12").removeClass("off");
                $(".b13").removeClass("off");
                $(".b14").removeClass("off");
                $(".b15").removeClass("off");
                $(".b16").removeClass("off");
                $(".b17").removeClass("off");
                $(".b18").removeClass("off");
                $(".b19").removeClass("off");
            });
            $(".pauseButton").click(function () {
                $(".a1").addClass("off");
                $(".a2").addClass("off");
                $(".a3").addClass("off");
                $(".a4").addClass("off");
                $(".a5").addClass("off");
                $(".a6").addClass("off");
                $(".a7").addClass("off");
                $(".a8").addClass("off");
                $(".a9").addClass("off");
                $(".a10").addClass("off");
                $(".a11").addClass("off");
                $(".a12").addClass("off");
                $(".a13").addClass("off");
                $(".a14").addClass("off");
                $(".a15").addClass("off");
                $(".a16").addClass("off");
                $(".a17").addClass("off");
                $(".a18").addClass("off");
                $(".a19").addClass("off");

                $(".b1").addClass("off");
                $(".b2").addClass("off");
                $(".b3").addClass("off");
                $(".b4").addClass("off");
                $(".b5").addClass("off");
                $(".b6").addClass("off");
                $(".b7").addClass("off");
                $(".b8").addClass("off");
                $(".b9").addClass("off");
                $(".b10").addClass("off");
                $(".b11").addClass("off");
                $(".b12").addClass("off");
                $(".b13").addClass("off");
                $(".b14").addClass("off");
                $(".b15").addClass("off");
                $(".b16").addClass("off");
                $(".b17").addClass("off");
                $(".b18").addClass("off");
                $(".b19").addClass("off");
            });
        });

    })(jQuery);

    var audio = $('audio')
    $('.playButton').click(function() {
        audio[0].play();
        $('.playButton').hide();
        $('.pauseButton').fadeIn();
    });

    $('.pauseButton').click(function() {// Stop
        audio[0].pause();
        $('.pauseButton').hide();
        $('.playButton').fadeIn();
        audio[0].currentTime = 0;
    });

});


