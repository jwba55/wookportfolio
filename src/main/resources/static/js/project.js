document.addEventListener('DOMContentLoaded', function () {
    const roundButton = document.querySelectorAll('.round-btn');

    roundButton.forEach(button => {
        // 버튼 클릭 시 이벤트 처리
        button.addEventListener('click', function () {
            const imagePath = button.getAttribute('data-image');
            console.log("이미지 경로 전달", imagePath)
            click(button, imagePath);  // 클릭된 버튼과 이미지 경로를 전달
        });
    });
});

function click(clickedButton, imagePath) {
    console.log("버튼 클릭됨:", clickedButton);
    console.log("이미지 경로:", imagePath);
    // 모든 버튼 스타일 초기화
    document.querySelectorAll(".round-btn").forEach(btn => {
        btn.style.color = "white"; // 기본 색상으로 초기화
        btn.style.fontWeight = "normal"; // 기본 글자 두께
    });

    // 클릭한 버튼 스타일 변경
    clickedButton.style.color = "#205a49"; // 글자 색상 변경 (원하는 색으로 수정 가능)
    clickedButton.style.fontWeight = "bold"; // 글자 두껍게

    // Thymeleaf의 동적 URL을 변경하기 위해 직접 innerHTML 수정
    document.querySelector(".area4").style.backgroundImage = `url(${imagePath})`;
}