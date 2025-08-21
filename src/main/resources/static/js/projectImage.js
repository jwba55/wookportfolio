document.addEventListener('DOMContentLoaded', function () {
    const positionButton = document.getElementById('access');
    const projectsection = document.getElementById("title");
    // 공통으로 처리할 hide 버튼 id들
    const hideIds = [
        'hide', 'hide1', 'hide2', 'hide3', 'hide4', 
        'hide5', 'hide6', 'hide7', 'hide8', 'hide9'
    ];

    // 모든 hide 버튼에 동일한 이벤트 리스너 등록
    hideIds.forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.addEventListener("click", function () {
                projectsection.style.display = "none";
            });
        }
    });

    positionButton.addEventListener("click", function () {
        projectsection.style.display = "block";
    });
});