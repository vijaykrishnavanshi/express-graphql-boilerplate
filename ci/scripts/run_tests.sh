#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules express-graphql-boilerplate
cd express-graphql-boilerplate && npm test
