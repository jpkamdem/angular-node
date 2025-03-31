#! /bin/bash
docker compose down --rmi=all
docker compose build web
docker compose up -d web