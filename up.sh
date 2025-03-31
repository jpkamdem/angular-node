#! /bin/sh
docker compose down -v
docker rmi web-app-api:latest web-app-web:latest
docker compose up build
docker compose up -d