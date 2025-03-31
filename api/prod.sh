#! /bin/sh
docker compose down
docker rmi web-app-api:latest
docker compose build api
docker compose up -d api