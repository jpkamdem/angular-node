#! /bin/bash
docker compose down --rmi=all
docker compose build api
docker compose up -d api