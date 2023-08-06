function showContent(type) {
    const lists = document.querySelectorAll('.section2_hs_list li');
    const buttons = document.querySelectorAll('.section2_hs_btn button');
    lists.forEach(item => item.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));
    if (type === 'all') {
        lists.forEach(item => item.classList.add('active'));
    } else if (type === 'male') {
        document.querySelectorAll('.section2_hs_list li:not(.section2_hs_list li.section2_hs_list)').forEach(item => item.classList.add('active'));
    } else if (type === 'female') {
        document.querySelectorAll('.section2_hs_list li:not(.section2_hs_list li.section2_hs_list)').forEach(item => item.classList.add('active'));
    }
    // 버튼 텍스트에 색상 변경 클래스 적용
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick') === `showContent('${type}')`) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    showContent('all');
});