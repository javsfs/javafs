//버튼 클릭시 버튼의 색상 변경
const buttons = document.querySelectorAll(".section2_btndv button");

document.addEventListener("DOMContentLoaded", function() {
    buttons[0].classList.add("active");
});

for (let i = 0; i < buttons.length; i++) {
buttons[i].onclick = function () {
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].style.color = "#4e4e4e";
    }
    buttons[i].style.color = "#00dc64";
    section1_slide.style.left = 0;
    slide_count = 0;
}
};




// 버튼 클릭 시 텍스트 변경
// 모든 버튼 요소들을 가져옵니다.
const buttonstext = document.querySelectorAll(".tabButton");

// 각 버튼에 대해 클릭 이벤트를 설정합니다.
buttonstext.forEach((button) => {
    button.addEventListener("click", () => {
        // 모든 버튼에 있는 "active" 클래스를 제거합니다.
        buttonstext.forEach((btn) => {
            btn.classList.remove("active");
        });

        // 클릭된 버튼에 "active" 클래스를 추가하여 텍스트 색상을 변경합니다.
        button.classList.add("active");

        // 클릭된 버튼의 텍스트를 가져와서 h3와 .linkText 요소를 업데이트합니다.
        const buttonText = button.querySelector("span").textContent;
        const h3TextElement = document.querySelector(".section2_titdv .h3Text");
        const linkTextElement = document.querySelector(".section2_titdv .linkText");

        h3TextElement.textContent = buttonText;
        linkTextElement.textContent = buttonText;
    });
});

// 초기에 첫 번째 버튼에 "active" 클래스를 추가하여 텍스트 색상을 초록색으로 설정합니다.
buttonstext[0].classList.add("active");
