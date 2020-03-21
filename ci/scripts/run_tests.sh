#!/usr/bin/env bash

set -e -u -x

cd express_gql && npm install && npm test
