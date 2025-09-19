FROM nginx:alpine

WORKDIR /wookportfolio

# Nginx 설정 복사
COPY ./conf.d /etc/nginx/conf.d

# 로그 디렉토리 권한 (선택)
RUN mkdir -p /var/log/nginx && chmod -R 755 /var/log/nginx

EXPOSE 80 443

# Nginx 실행 및 Certbot 인증서 갱신
CMD ["sh", "-c", "nginx -g 'daemon off;'"]