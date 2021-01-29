## Description

- GET: /api/users/:page -Список пользователей постранично, { id, login }
- GET: /api/users/:id - Информация о пользователе, { login, username, age }
- POST: /api/users - Создание пользователя (access token), { login, password, username, age }
- PATCH: /api/users/:id - Редактирование по id (access token), { password, username, age }
- POST: /api/login - Авторизация пользователя, { login, password }

- Typescript
- NestJS
- TypeORM
- Passport.js
- PostgreSQL
- Docker
- \*\*Swagger

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
