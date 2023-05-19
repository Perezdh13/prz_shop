# syntax=docker/dockerfile:1
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG JAR_FILE=target/*.jar
COPY ./target/przBack-0.0.1-SNAPSHOT.jar przback.jar
ENTRYPOINT ["java","-jar","/api.jar"]