#!/usr/bin/env bash

set -e -u -x

mv dependency-cache/node_modules express_gql
cd express_gql && npm test
