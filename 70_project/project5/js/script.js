$(function () {
    const headerBg = $('#header');

    $('.main > li > a').mouseenter(function (e) {
        e.preventDefault();
        $('.sub').stop().slideDown(400);
        $('.nav_bg').stop().animate({ height: 180 }, 400);
    });
    $('nav').mouseleave(function () {
        $('.sub').stop().slideUp(400);
        $('.nav_bg').stop().animate({ height: 0 }, 400);
    });

    // $('video').get(0).play();

    // section1 
    const slider = $('.slider').bxSlider({
        // mode: 'horizontal',
        // mode: 'vertical',
        mode: 'fade',
        auto: true,
        stopAutoOnClick: true,
        autoHover: true,
        pager: false,
        controls: false,
        speed: 400,
        pause: 3000,

        onSlideBefore: function () {
            autoPager();
        },
        onSlideAfter: function () {
            titMotion();
        }
    });

    function titMotion() {
        $('#slideWrap .slider li div').animate({ top: 0, opacity: 1 });
    }

    function autoPager() {
        $('#slideWrap .pager a').removeClass('active');
        let currentIdx = slider.getCurrentSlide();
        $('#slideWrap .pager a').eq(currentIdx).addClass('active');

        $('#slideWrap .slider li div').css({ top: 100, opacity: 0 });
    }

    $('#slideWrap .pager a').click(function (e) {
        e.preventDefault();
        let idx = $(this).index();
        slider.goToSlide(idx);
        return false;
    });

    $('#slideWrap #prev').click(function (e) {
        e.preventDefault();
        slider.goToPrevSlide();
        autoPager();
        return false;
    });

    $('#slideWrap #next').click(function (e) {
        e.preventDefault();
        slider.goToNextSlide();
        autoPager();
        return false;
    });

    //section2

    const sec2 = $('#section2'),
        btn = sec2.find('.btn'),
        txt1 = sec2.find('.txt1'),
        txt2 = sec2.find('.txt2');

    $(window).scroll(function () {
        let st = $(this).scrollTop();
        let stVal = 600;
        console.log(st);

        if (st >= stVal) {
            btn.css({ opacity: 1 });
            txt1.css({ left: 360 + 'px' });
            txt2.css({ left: 360 + 'px' });
            headerBg.css({background: '#fdd000'});
        } else {
            btn.css({ opacity: 0 });
            txt1.css({ left: -800 + 'px' });
            txt2.css({ left: -400 + 'px' });
            headerBg.css({background: 'transparent'})
        }
    });

    // section3
    const tabBtn = $('#section3 .thumb li'),
        bigImg = $('#section3 .big li'),
        txt = $('#section3 .txt li');

    tabBtn.click(function () {
        let idx = $(this).index();
        tabBtn.removeClass('active');
        bigImg.removeClass('active');
        txt.removeClass('active');
        $(this).addClass('active');
        bigImg.eq(idx).addClass('active');
        txt.eq(idx).addClass('active');
    })

    // section4
    const txtTop = $('.top');
    const txtTopSpan = txtTop.find('span');
    const txtBtm = $('.btm');
    const txtBtmSpan = txtBtm.find('span');

    txtTopSpan.clone().appendTo(txtTop);
    txtBtmSpan.clone().appendTo(txtBtm);

    const inner = $('.container > div');
    const fade = inner.find('.fade');
    let cnt = 0, idx, timer;

    fade.mouseenter(function () {
        idx = $(this).parent().index();
        timer = setInterval(fadeFn, 2000);
    });
    fade.mouseleave(function () {
        clearInterval(timer);
    });

    function fadeFn() {
        cnt++;
        if (cnt > 2) {
            cnt = 0;
        }
        inner.eq(idx).find('li').eq(cnt).fadeIn(1000).siblings().fadeOut(1000);
    }

    // footer
    const fs = $('.fs'),
        fsBtn = fs.find('.fsbtn'),
        fsLst = fs.find('ul'),
        fsIcon = $('.fs i'),
        fsTxt = $('.fs span');

    $(function () {
        let state = 0;
        fsBtn.click(function (e) {
            e.preventDefault();
            fsLst.slideToggle();
            if (state == 0) {
                fsTxt.text('관련 사이트 닫기');
                fsIcon.attr({ class: 'fa-solid fa-minus' });
                state = 1;
            } else {
                fsTxt.text('관련 사이트 열기');
                fsIcon.attr({ class: 'fa-solid fa-plus' });
                state = 0;
            }
        });
    });





    // indicator
    $('html').stop().animate({ scrollTop: 0 });

    $('#indicator a').click(indicator);

    function indicator() {
        let idx = $(this).parent().index();
        console.log(idx);
        let posY = $('.section').eq(idx).offset().top;
        $('html,body').stop().animate({ scrollTop: posY });
        tooltip(idx);
    }

    function tooltip(index) {
        $('#indicator a').removeClass('on');
        $('#indicator a').eq(index).addClass('on');
    }

    // fullpage
    $('.section').mousewheel(function (e, delta) {
        if (delta > 0) {
            try {
                tooltip($(this).index() - 1);
                let prev = $(this).prev().offset().top;
                console.log(prev);
                $('html').stop().animate({ scrollTop: prev });
            } catch (err) {
                return false;
            }
        } else if (delta < 0) {
            try {
                tooltip($(this).index() + 1);
                let next = $(this).next().offset().top;
                console.log(next);
                $('html').stop().animate({ scrollTop: next });
            } catch (err) {
                return false;
            }
        }
    });
});