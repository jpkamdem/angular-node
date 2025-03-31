#! /bin/sh
docker compose down -v
docker rmi web-app-api:latest web-app-web:latest