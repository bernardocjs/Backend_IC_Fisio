# Backend_IC_Fisio

Sistema realizado em Nestjs, postgres e docker para IC25 do Ehealth do Inatel onde foi criado um sistema para controle de pacientes de fisioterapeutas

## Table of Contents

- [Features](#features)
- [Quick run](#quick-run)
- [Comfortable development](#comfortable-development)
- [Links](#links)
- [Database utils](#database-utils)
- [Tests](#tests)

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] Seeding.
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Mailing ([nodemailer](https://www.npmjs.com/package/nodemailer), [@nestjs-modules/mailer](https://www.npmjs.com/package/@nestjs-modules/mailer)).
- [x] Sign in and sign up via email.
- [x] Admin, ISP and User roles.
- [x] I18N ([nestjs-i18n](https://www.npmjs.com/package/nestjs-i18n)).
- [x] File uploads. Support local and Amazon S3 drivers.
- [x] Swagger.
- [x] E2E and units tests.
- [x] Docker.
- [x] Pacient Module (CRUD)
- [x] Session Module (CRUD)

## Quick run

```bash
git clone GIT_REPO
cd GIT_REPO
cp env-example .env
#config it
docker compose up -d
```

## Comfortable development

Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

Run:

```bash
docker compose up -d postgres maildev redis
```

```bash
yarn

yarn migration:run

yarn seed:run

yarn start:dev
```

## Links

- Swagger: http://localhost:3000/docs
- Maildev: http://localhost:1080

## Database utils

Generate migration

```bash
yarn migration:generate -- src/database/migrations/CreateNameTable
```

Run migration

```bash
yarn migration:run
```

Revert migration

```bash
yarn migration:revert
```

Drop all tables in database

```bash
yarn schema:drop
```

Run seed

```bash
yarn seed:run
```

## Tests

```bash
# e2e tests
sudo ./test-e2e.sh
```

## Tests in Docker

```bash
docker compose -f docker-compose.ci.yaml --env-file env-example -p ci up --build --exit-code-from api && docker compose -p ci rm -svf
```

## Test benchmarking

```bash
docker run --rm jordi/ab -n 100 -c 100 -T application/json -H "Authorization: Bearer USER_TOKEN" -v 2 http://<server_ip>:3000/api/v1/users
```
