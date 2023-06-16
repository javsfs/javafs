
/* 
    제이쿼리
    $(document).ready(){};
*/
//문서의 DOM내용을 전부 읽은 후 함수를 실행
// document.addEventListener('DOMContentLoaded', function(){};
document.addEventListener('DOMContentLoaded', function () {
    const clock = document.querySelector('.clock');
    const yy = document.querySelector('.yy');
    const mo = document.querySelector('.mo');
    const dd = document.querySelector('.dd');
    const we = document.querySelector('.we');
    const hh = document.querySelector('.hh');
    const mm = document.querySelector('.mm');
    const ss = document.querySelector('.ss');
    function updateClock() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dayOfWeek = date.getDay();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const second = date.getSeconds();
        const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
        // 각 요소에 날짜와 시간을 설정
        yy.textContent = year + '년';
        mo.textContent = month + '월';
        dd.textContent = day + '일';
        we.textContent = daysOfWeek[dayOfWeek] + '요일';
        // 오전/오후 표시를 위한 변환
        let ampm = '';
        let apm = hour;
        if (apm >= 12) {
            ampm = '오후';
            if (apm > 12) {
                apm -= 12;
            }
        } else {
            ampm = '오전';
            if (apm === 0) {
                apm = 12;
            }
        }
        hh.textContent = ampm + ' ' + apm + '시';
        mm.textContent = minute + '분';
        ss.textContent = second + '초';
    }
    setInterval(updateClock, 1000);
    updateClock();
});

