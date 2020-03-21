#!/usr/bin/env bash

set -e -u -x

docker run -d -p 27017:27017 mongo

cd express_gql && npm install && npm test
