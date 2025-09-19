# 기반 이미지: OpenJDK 21
FROM openjdk:21

# 작업 디렉토리 설정
WORKDIR /wookportfolio

# JAR 파일 복사 (빌드된 파일명에 맞게 수정)
ARG JAR_FILE=target/jungjiwook-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar

# 컨테이너 포트 노출 (Spring Boot 실행 포트)
EXPOSE 8089

# 실행 명령어 (JVM 옵션 → Spring profile 적용)
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "app.jar"]