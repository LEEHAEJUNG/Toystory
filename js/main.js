/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */



$(document).ready(function () {

    Logic();


    var scene = document.getElementById('section02');
    var parallax2 = new Parallax(scene);

    var scene = document.getElementById('section03');
    var parallax3 = new Parallax(scene);
    
     $('#intro .title').on('click',function () {
         $('#intro').fadeOut();
     });

    $('#header .left .trailer_btn').on('click',function() {
        $('#pop2').fadeIn();
		initVideoEvent();
    });

    $('#visual .btn').on('click',function() {
        $('#pop2').fadeIn(function () {
        });
		initVideoEvent();
    });

    $('#pop2 .close_btn').on('click',function () {
        $('#pop2').fadeOut();
		initProgress();
		$('#btn_icon').removeClass("on").addClass("off");
    });

    // #section02 캐릭터 소개 시작
    $('#section02 .toy_full .woody .w_btn').mouseenter(function () {
        $('#section02 .toy_full .woody .hover').fadeIn();
    });

    $('#section02 .toy_full .woody .w_btn').mouseleave(function () {
        $('#section02 .toy_full .woody .hover').fadeOut();
    });

    $('#section02 .toy_full .buzz .w_btn').mouseenter(function () {
        $('#section02 .toy_full .buzz .hover').fadeIn();
    });
    $('#section02 .toy_full .buzz .w_btn').mouseleave(function () {
        $('#section02 .toy_full .buzz .hover').fadeOut();
    });

    $('#section02 .toy_full .jessie .w_btn').mouseenter(function () {
        $('#section02 .toy_full .jessie .hover').fadeIn();
    });
    $('#section02 .toy_full .jessie .w_btn').mouseleave(function () {
        $('#section02 .toy_full .jessie .hover').fadeOut();
    });

    $('#section02 .toy_full .forky .w_btn').mouseenter(function () {
        $('#section02 .toy_full .forky .hover').fadeIn();
    });
    $('#section02 .toy_full .forky .w_btn').mouseleave(function () {
        $('#section02 .toy_full .forky .hover').fadeOut();
    });
    // #section02 캐릭터 소개 끝



    // * section3 메뉴판 시작
    $('#section03 .menu_8 .menu_1 > a').mouseenter(function(){ // .topmenu 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $('#section03 .menu_8 .menu_1').children().children('img').attr('src',$('#section03 .menu_8 .menu_1').children().children('img').attr('src').replace('menu_1.png','menu_1_on.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .gif찾아서 _on.gif로 변경
    });
    $('#section03 .menu_8 .menu_1 > a').mouseleave(function(){ // .topmenu 자식 li를 마우스 아웃했을때
        $('#section03 .menu_8 .menu_1').children().children('img').attr('src',$('#section03 .menu_8 .menu_1').children().children('img').attr('src').replace('menu_1_on.png','menu_1.png'))
    });


    $('#section03 .menu_8 .menu_2 > a').mouseenter(function(){ // .topmenu 자식 li를 마우스 오버했을때
        $('#section03 .menu_8 .menu_2').children().children('img').attr('src',$('#section03 .menu_8 .menu_2').children().children('img').attr('src').replace('menu_2.png','menu_2_on.png'))
    });
    $('#section03 .menu_8 .menu_2 > a').mouseleave(function(){ // .topmenu 자식 li를 마우스 아웃했을때
        $('#section03 .menu_8 .menu_2').children().children('img').attr('src',$('#section03 .menu_8 .menu_2').children().children('img').attr('src').replace('menu_2_on.png','menu_2.png'))
    });


    $('#section03 .menu_8 .menu_3 > a').mouseenter(function(){ // .topmenu 자식 li를 마우스 오버했을때
        $('#section03 .menu_8 .menu_3').children().children('img').attr('src',$('#section03 .menu_8 .menu_3').children().children('img').attr('src').replace('menu_3.png','menu_3_on.png'))
    });
    $('#section03 .menu_8 .menu_3 > a').mouseleave(function(){ // .topmenu 자식 li를 마우스 아웃했을때
        $('#section03 .menu_8 .menu_3').children().children('img').attr('src',$('#section03 .menu_8 .menu_3').children().children('img').attr('src').replace('menu_3_on.png','menu_3.png'))
    });

    // $('선택자').click(function () {
    //     $('pop').fadeIn();
    // });


    // * section3 메뉴판 끝


    // mousewheel section
    $("#container #main").on("mousewheel", function (event, delta) {
        if (delta > 0) {
            if ($('#key').hasClass('on5')) { //05 -> 04
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on4');
                $('#main').removeClass();
                $('#main').addClass('sc04');
            } else if ($('#key').hasClass('on4')) { //05 -> 04
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on3');
                $('#main').removeClass();
                $('#main').addClass('sc03');
            } else if ($('#key').hasClass('on3')) { //05 -> 04
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on2');
                $('#main').removeClass();
                $('#main').addClass('sc02');
            } else if ($('#key').hasClass('on2')) { //05 -> 04
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on1');
                $('#main').removeClass();
                $('#main').addClass('sc01');
            }

        } else if (delta < 0) {

            if ($('#key').hasClass('on1')) { //01 -> 02
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on2');
                $('#main').removeClass();
                $('#main').addClass('sc02');

            } else if ($('#key').hasClass('on2')) {//02 -> 03
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on3');
                $('#main').removeClass();
                $('#main').addClass('sc03');

            } else if ($('#key').hasClass('on3')) {//03 -> 04
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on4');
                $('#main').removeClass();
                $('#main').addClass('sc04');

            } else if ($('#key').hasClass('on4')) {//04 -> 05
                $('#key').removeClass();
                $('#key').delay(1300).queueAddClass('on5');
                $('#main').removeClass();
                $('#main').addClass('sc05');

            }

        }
    });

    // mousewheel section end
    $('.menu').on('click', function(ev){
        ev.preventDefault();
        $(this).toggleClass('active');
        $('#header').toggleClass('visible');
        $('.bg').toggleClass('visible');
        $('#btn_icon').toggleClass('on');
        $('#header .left .home_btn').addClass('on');

        // if ($('#btn_icon').toggleClass('on')) {
        //     $('.menu.on').trigger('click');}
        // else {
        //
        // }
    });

    // nav section
    $('#nav > li').on('click', function () {
        $('#nav > li').removeClass('on');
        $('.menu').toggleClass('active');
        $('#header').toggleClass('visible');
        $('.bg').toggleClass('visible');
        $(this).addClass('on');

        if ( $('#nav>li:nth-child(1)').hasClass('on')) {
            $('#key').removeClass();
            $('#key').delay(1000).queueAddClass('on1');
            $('#main').removeClass();
            $('#main').addClass('sc01');
        } else if ( $('#nav>li:nth-child(2)').hasClass('on')) {
            $('#key').removeClass();
            $('#key').delay(1000).queueAddClass('on2');
            $('#main').removeClass();
            $('#main').addClass('sc01');
        } else if ( $('#nav>li:nth-child(3)').hasClass('on')) {
            $('#key').removeClass();
            $('#key').delay(1000).queueAddClass('on3');
            $('#main').removeClass();
            $('#main').addClass('sc01');
        } else if ( $('#nav>li:nth-child(4)').hasClass('on')) {
            $('#key').removeClass();
            $('#key').delay(1000).queueAddClass('on4');
            $('#main').removeClass();
            $('#main').addClass('sc01');
        } else {
            $('#key').removeClass();
            $('#key').delay(1000).queueAddClass('on5');
            $('#main').removeClass();
            $('#main').addClass('sc05');
        }

    });


    // story start

    $('#header .left .story_btn').on('click',function() {
        $('#pop').fadeIn(function () {
            $('#slick-slide00').trigger('click');
        })
    });

    $('#pop .close_btn_story').on('click',function () {
        $('#pop').fadeOut();
        $('#btn_icon').removeClass("on").addClass("off");
    });

    $('#section03 .menu_8 .menu_1').on('click', function () {

        $('#pop').fadeIn(function () {
           $('#slick-slide00').trigger('click');
        });

        $('#pop .close_btn_story').on('click',function () {
            $('#pop').fadeOut();
			$('#btn_icon').removeClass("on").addClass("off");
        });
        // $('#section03').fadeOut();
    });

    $("#slide").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#pop .prev_btn'), //이전 화살표
        nextArrow: $('#pop .next_btn'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        initialSlide:0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    $('#slide')
        .on('init', function (event, slick) {
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('#slide .slide_wrap').removeClass('on');
            // starList()
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            starList_4()
        });

    function list01() {
        $('#slide .s1').addClass('on');
    }

    function list02() {
        $('#slide .s2').addClass('on');
    }

    function list03() {
        $('#slide .s3').addClass('on');
    }

    function list04() {
        $('#slide .s4').addClass('on');
    }

    function list05() {
        $('#slide .s5').addClass('on');
    }

    function starList_4() {
        if ($('#slick-slide00').hasClass('slick-active')) {
            list01();
        }
        if ($('#slick-slide01').hasClass('slick-active')) {
            list02();
        }
        if ($('#slick-slide02').hasClass('slick-active')) {
            list03();
        }
        if ($('#slick-slide03').hasClass('slick-active')) {
            list04();
        }
        if ($('#slick-slide04').hasClass('slick-active')) {
            list05();
        }

    }
    // story end

    // $('선택자').click(function () {
    //     $('#pop2').fadeIn();
    // });

    // trailer start
    $('#section03 .menu_8 .menu_2').on('click',function() {
        $('#pop2').fadeIn(function () {});
		initVideoEvent();
    });

    $('#pop2 .close_btn').on('click',function () {
        $('#pop2').fadeOut(function () {
			initProgress();
        });
    });


    $('#wrap2 .player .playbtn .stop').click(function () {
        $('#sc04_video').trigger('pause');
        $(this).fadeOut();
        $('#wrap2 .player .playbtn .play').fadeIn();
        $('#wrap2 .player .playbar > div').removeClass('on');
    });

    $('#wrap2 .player .playbtn .play').click(function () {
        $('#sc04_video').trigger('play');
        $('#wrap2 .player .playbar > div').addClass('on');
        $('#wrap2 .player .playbtn .stop').fadeIn();
        $(this).fadeOut();
    });

    function initVideoEvent()
	{
        $('#sc04_video').trigger('play');

		var video = document.getElementById('sc04_video');
        var timeText = document.getElementById('time');

        video.addEventListener('timeupdate', function() {
            var time = video.currentTime.toFixed(0);
            var minute = Number(time / 60);
            var second = Number(time % 60);
            timeText.innerHTML = timePadding(parseInt(minute)) + ':' + timePadding(parseInt(second));
			handleProgress(video);
        });
    }

	function initProgress()
	{
		var video = document.getElementById('sc04_video');
		video.currentTime = 0;
		$("#prs").width("0%");
        $('#sc04_video').trigger('pause');
	}

    function handleProgress(video) {
        var percent = (video.currentTime / video.duration) * 100;
		//console.log(percent);
		if (percent > 96) {
			percent = 96;
		}
		$("#prs").width(percent + "%");
    }

    function timePadding(number) {
        return (number < 10 ? '0' : '') + number
    }
    // trailer end





    // gallery start
    $('#section03 .menu_8 .menu_3').on('click',function() {
        $('#pop3').fadeIn(function () {
            $('#slick-slide10').trigger('click');
            $('#pop3 .coachmark').addClass('on');
        });
    });

    $('#pop3 .close_btn').on('click',function () {
        $('#pop3').fadeOut(function () {
            $('#slick-slide').trigger('pause');
        });
        $('#btn_icon').removeClass("on").addClass("off");
    });

    $('#header .left .grallery_btn').on('click',function() {
        $('#pop3').fadeIn(function () {
            $('#slick-slide10').trigger('click');
            $('#pop3 .coachmark').addClass('on');
        });
    });

    $('#pop3 .close_btn').on('click',function () {
        $('#pop3').fadeOut(function () {
            $('#slick-slide').trigger('pause');
        });
		$('#btn_icon').removeClass("on").addClass("off");
    });


    $('#pop3 .coachmark .close_btn2').on('click',function () {
        $('#pop3 .coachmark').fadeOut();
    });


    $("#slide2").slick({
        dots: true, //네이베이션 사용여부
        arrows: true, //화살표 사용여부
        prevArrow: $('#pop3 .bottom .item_left'), //이전 화살표
        nextArrow: $('#pop3 .bottom .item_right'), //다음 화살표
        autoplay:false, //자동넘김
        autoplaySpeed: 2000, //자동넘김 속도
        pauseOnHover:false, //마우스 오버시 자동재생 멈춤
        fade: false, //fade 모드 사용여부 슬라이드 1개일때만 가능
        speed: 900, // 슬라이드 속도
        infinite: true, // 무한슬라이
        asNavFor: '', //다른 슬라이드 연동 여부
        centerMode: false, //센터모드
        centerPadding: '0%', //센터 모드 시 여백
        slidesToShow: 1, //보여질 슬라이드 갯수
        slidesToScroll: 1, //넘겨질 슬라이드 갯수
        swipe: true, //스와이프
        focusOnSelect: true, //슬라이드 선택시 넘어
        draggable:true,
        initialSlide:0,//슬라이드 시작순서
        variableWidth: true,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition
    });

    $('#pop3').on('mousewheel',function (event, delta) {
        if (delta > 0){
            $('#slide2').slick('slickPrev');
        }
        else if (delta < 0) {
            $('#slide2').slick('slickNext');
        }
    });

    $('#slide2')
        .on('init', function (event, slick) {
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {

			if (currentSlide == 0)
			{
				$("#photo").show();
				$("#photo02").show();
			}
			else
			{
	            $('#pop3 .slide2_wrap').removeClass('on');
			}

            // starList()
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            starList4_1()
        });

    function list01_1() {
        $('#pop3 .slide2_wrap.s1').addClass('on');
    }

    function list02_1() {
        $('#pop3 .slide2_wrap.s2').addClass('on');
    }

    function starList4_1() {
        if ($('#slick-slide10').hasClass('slick-active')) {
            list01_1();
        }
        if ($('#slick-slide11').hasClass('slick-active')) {
            list02_1();
        }

    }

});