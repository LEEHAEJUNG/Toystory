
$(document).ready(function () {

    Logic();

    $('#wrap2 .player .playbtn .stop').click(function () {
       $('#sc04_video').trigger('pause');
       $(this).fadeOut();
       $('#wrap2 .player .playbtn .play').fadeIn();

    });

    $('#wrap2 .player .playbtn .play').click(function () {
        $('#sc04_video').trigger('play');
        $('#wrap2 .player .playbar > div').addClass('on');
        $('#wrap2 .player .playbtn .stop').fadeIn();
        $(this).fadeOut();
    });

});
