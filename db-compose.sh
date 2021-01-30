#!/bin/bash

export POSTGRES_USER=postgres
export POSTGRES_PASSWORD=postgres
export PGADMIN_DEFAULT_EMAIL=admin@mail.com
export PGADMIN_DEFAULT_PASSWORD=admin
export PGADMIN_PORT=5050

docker-compose -f docker-compose.db.yml up --force-recreate --build