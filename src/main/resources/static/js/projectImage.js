document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.toggle-btn');
    const roundButton = document.querySelectorAll('.round-btn');
    const positionButton = document.getElementById('access');
    const elses = document.getElementById('elses');
    const elses1 = document.getElementById('elses1');
    const elses2 = document.getElementById('elses2');
    const elses3 = document.getElementById('elses3');
    const elses4 = document.getElementById('elses4');
    const elses5 = document.getElementById('elses5');


    const cause = document.getElementById("cause");

    buttons.forEach(button => {
        // 버튼 클릭 시 이벤트 처리
        button.addEventListener('click', function () {
            const imagePath = button.getAttribute('data-image');
            console.log("이미지 경로 전달", imagePath)
            click(button, imagePath);  // 클릭된 버튼과 이미지 경로를 전달
        });
    });

    roundButton.forEach(button => {
        // 버튼 클릭 시 이벤트 처리
        button.addEventListener('click', function () {
            const imagePath = button.getAttribute('data-image');
            console.log("이미지 경로 전달", imagePath)
            click(button, imagePath);  // 클릭된 버튼과 이미지 경로를 전달
        });
    });

    elses.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });
    elses1.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });
    elses2.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });
    elses3.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });
    elses4.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });
    elses5.addEventListener("click", function () {
        cause.style.display = "none";
        console.log("호잇2");
    });

    positionButton.addEventListener("click", function () {
        cause.style.display = "block";
        console.log("호잇");
    });
});

function click(clickedButton, imagePath) {
    console.log("버튼 클릭됨:", clickedButton);
    console.log("이미지 경로:", imagePath);
    // 모든 버튼 스타일 초기화
    document.querySelectorAll(".toggle-btn").forEach(btn => {
        btn.style.color = "white"; // 기본 색상으로 초기화
        btn.style.fontWeight = "normal"; // 기본 글자 두께
    });

    // 클릭한 버튼 스타일 변경
    clickedButton.style.color = "#205a49"; // 글자 색상 변경 (원하는 색으로 수정 가능)
    clickedButton.style.fontWeight = "bold"; // 글자 두껍게

    // Thymeleaf의 동적 URL을 변경하기 위해 직접 innerHTML 수정
    document.querySelector(".area2").style.backgroundImage = `url(${imagePath})`;
}