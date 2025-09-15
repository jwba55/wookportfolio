document.addEventListener('DOMContentLoaded', function () {
    const roundButtons = document.querySelectorAll('.round-btn');
    const area4 = document.querySelector('.area4');
    const projectText = document.getElementById('title');

    roundButtons.forEach(button => {
        button.addEventListener('click', function () {
            const imagePath = button.getAttribute('data-image');

            // 모든 버튼 스타일 초기화
            roundButtons.forEach(btn => {
                btn.style.color = 'white';
                btn.style.fontWeight = 'normal';
            });

            // 클릭한 버튼 스타일 변경
            button.style.color = '#205a49';
            button.style.fontWeight = 'bold';

            if (imagePath) {
                area4.style.backgroundImage = `url(${imagePath})`;
                projectText.style.display = 'none';
            } else {
                area4.style.backgroundImage = 'none';
                projectText.style.display = 'block';
            }
        });
    });
});