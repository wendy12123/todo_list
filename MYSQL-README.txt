Local MySQL setup (development)

1) Start database with Docker Compose:
   docker-compose up -d

2) The compose file starts MySQL 8 and creates database `todo_db`.
   Root user has empty password for dev (MYSQL_ALLOW_EMPTY_PASSWORD=yes).

3) Start backend:
   .\mvnw spring-boot:run

4) If you change DB credentials, update src/main/resources/application.properties.

Security: Empty root password is for local dev only. For real use, set a strong password and update application.properties.
