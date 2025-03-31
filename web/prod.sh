#! /bin/sh
docker compose down
docker rmi web-app-web:latest
docker compose build web
docker compose up -d web