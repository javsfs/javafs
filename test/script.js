// section1 script
// 날짜 함수
function section1_today() {
    let today = new Date();
    let day = today.getDay();
    let todayArr = ["일", "월", "화", "수", "목", "금", "토"];
    document.querySelector("h1").innerText = todayArr[day] + "요웹툰";
    document.querySelector("#section1_today_category a").innerHTML = todayArr[day] + "요웹툰 전체보기 ";
}
// 캐로셀 함수
function section1_slide() {
    const section1_slide_prev = document.querySelector("#section1_slide_prev");
    const section1_slide_next = document.querySelector("#section1_slide_next");
    const section1_slide = document.querySelector(".section1_slide_move");
    const section1_category = document.querySelectorAll(".section1_btn_wrap button");
    let slide_count = 0;
    // 캐로셀 prev 함수
    section1_slide_prev.onclick = function () {
        section1_slide_next.style.display = "block"
        slide_count += 1204;
        section1_slide.style.left = slide_count + "px";
        if (slide_count == 0) {
            section1_slide_prev.style.display = "none";
        }
    }
    // 캐로셀 next 함수
    section1_slide_next.onclick = function () {
        section1_slide_prev.style.display = "block"
        slide_count -= 1204;
        section1_slide.style.left = slide_count + "px";
        if (slide_count == -3612) {
            section1_slide_next.style.display = "none";
        }
    }
    // 카테고리 버튼 색
    for (let i = 0; i < section1_category.length; i++) {
        section1_category[i].onclick = function () {
            for (let j = 0; j < section1_category.length; j++) {
                section1_category[j].style.color = "#4e4e4e";
            }
            section1_category[i].style.color = "#00dc64";
            section1_slide.style.left = 0;
            slide_count = 0;
            section1_slide_prev.style.display = "none";
            section1_slide_next.style.display = "block"
        };
    }
}
// /section1 script


window.onload = function () {
    // section1 script
    section1_today();
    section1_slide();
};