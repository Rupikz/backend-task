#!/bin/bash

export PORT=3000
export POSTGRES_HOST=postgres
export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export JWT_SECRET=secret
export JWT_EXPIRES_IN=15m

docker-compose -f docker-compose.yml up --force-recreate --build