# express-graphql-boilerplate

[![Build Status](https://travis-ci.com/vijaykrishnavanshi/express-graphql-boilerplate.svg?branch=master)](https://travis-ci.com/vijaykrishnavanshi/express-graphql-boilerplate) [![Greenkeeper badge](https://badges.greenkeeper.io/vijaykrishnavanshi/express-graphql-boilerplate.svg)](https://greenkeeper.io/)

Boilerplate code to setup express apis with graphql

## Run the project locally (Development)

Run the following command and the APIs will the available locally for testing and development.

```closure
git clone https://github.com/vijaykrishnavanshi/express-graphql-boilerplate.git <project-name>
cd project-name
npm install
npm run dev
```

## Lint Project

```closure
npm run lint  # for cheking the lint error
npm run lint:fix # for fixing the minor lint error
```

## Run Tests

Used [Mocha](https://mochajs.org/)

```closure
npm run test  # for running tests
```

## Deploy the project

```closure
npm run deploy  # for deploying the project
```

## Directory Structure:

```
log/
+ - Logs of the running server
src/
+ - <module-1>/
+ -------- Query/
+ -------- Mutation/
+ -------- Subscriptions/
+ -------- <New TypeDef in GQL>
+ - <module-2>/
+ -------- Query/
+ -------- Mutation/
+ -------- Subscriptions/
+ -------- <New TypeDef in GQL>
package.json
README.md
LICENSE
Dockerfile
```
