const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const spriteSheet = new Image();
spriteSheet.src = "/images/천사2.png"; // 스프라이트 이미지 경로 설정

// 캐릭터 스프라이트 설정
const spriteWidth = 32; // 한 칸 크기
const spriteHeight = 48;
const frameCount = 4; // 한 방향당 프레임 수
let currentFrame = 0;
let direction = 0; // 0: 아래, 1: 왼쪽, 2: 오른쪽, 3: 위

// 애니메이션 루프
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 스프라이트 그리기
    ctx.drawImage(
        spriteSheet,
        currentFrame * spriteWidth, // X 좌표 (프레임 단위 이동)
        direction * spriteHeight, // Y 좌표 (방향별 이동)
        spriteWidth,
        spriteHeight,
        0, 0,
        spriteWidth,
        spriteHeight
    );

    currentFrame = (currentFrame + 1) % frameCount; // 프레임 변경
    setTimeout(animate, 200); // 200ms마다 변경
};

// 이미지 로딩 후 실행
spriteSheet.onload = () => {
    animate();
};