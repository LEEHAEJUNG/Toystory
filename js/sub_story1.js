$(document).ready(function () {

    Logic();


$('#slides').slidesjs({
    width:1920,
    height:980,
    play: {
        active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
        interval: 3000, // 대기시간, 1000=1초,
        effect: "slide", // 효과, slide/fade
        auto: true, // 자동시작
        pauseOnHover: false, // 마우스 오버시 멈춤
        restartDelay: 2500 // 마우스 아웃시 재동작 시간
    },
    navigation: {// 이전/다음 버튼
        active: true, // 버튼 활성화/비활성화
        effect: "slide"
    },
    pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
        active: true,
        effect: "slide"
    },
    effect: { // 효과 옵션
        fade: {
            speed: 800
        },
        slide: {
            speed: 1600
        }
    }
});

});
