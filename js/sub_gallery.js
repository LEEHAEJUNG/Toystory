/**
 * Created by Administrator on 2018-10-14.
 * Design nas.
 */



$(document).ready(function () {

    Logic();

    // $('#section03 .menu_8 .menu_3').on('click',function() {
    //     $('#pop3').fadeIn(function () {
    //     });
    // });

    $('#pop3 .coachmark .close_btn').on('click',function () {
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
            $('#pop3 .slide2_wrap').removeClass('on');
            // starList()
        })
        .on('afterChange', function (event, slick, currentSlide, nextSlide) {
            starList_4()
        });

    function list01() {
        $('#pop3 .slide2_wrap.s1').addClass('on');
    }

    function list02() {
        $('#pop3 .slide2_wrap.s2').addClass('on');
    }


    function starList_4() {
        if ($('#slick-slide00').hasClass('slick-active')) {
            list01();
        }
        if ($('#slick-slide01').hasClass('slick-active')) {
            list02();
        }

    }


});