$(function () {
    //progress bar
    let statePb = 0;
    // 변수 선언
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 2150) {
            if (statePb === 0) {
                pgbar(0, 95);
                pgbar(1, 85);
                pgbar(2, 75);
                statePb = 1;
            } else {
                return;
            }
        } else {
            statePb = 0;
        }
    });

    function pgbar(idx, maxCnt) {
        const elem = $(".progress");
        let w = 0;
        const timer = setInterval(bar, 30);

        function bar() {
            if (w >= maxCnt) {
                clearInterval(timer);
            } else {
                w++;
                elem.eq(idx).find('div').css({ width: w + "%" });
                elem.eq(idx).find('div').text(w + "%");
            }
        }
    }

    // counter
    const elem = $('#counter span');
    let stateCnt = 0;
    
    $(window).scroll(function(){
        // 윈도우 스크롤이 150이상이면
        console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 2150) {
            if (stateCnt === 0) {
                move(0, 32, 100);
                move(1, 8, 200);
                move(2, 4, 300);
                move(3, 3, 400);
                stateCnt = 1;
            } else {
                return;
            }
        } else {
            stateCnt = 0;
        }
    });

    function move(idx, maxCnt, mSec) {
        let num = 0;
        // counter 함수를 0.1초마다 실행
        const timer = setInterval(counter, mSec);
        function counter() {
            if (num >= maxCnt) {
                clearInterval(timer);
            } else {
                num++;
                elem.eq(idx).text(`${num}+`);
            }
        }
    }
});