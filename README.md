## Description

This is simple nestjs project.

## Installation

```bash
$ npm install
```

## Running the app

Add `.env` file

```bash
# development
$ ./db-compose.sh
$ npm run start:dev

# production
$ ./prod-compose.sh
```

## Endpoints

- `GET /api/users/:page` - returns an array of `Users`
- `GET /api/users/id:id` - returns the user data
- `POST /api/users` - create a user
- `PATCH /api/users/:id` - Partially update a user
- `POST /api/login` - returns a access token

Swagger - `/api`
