#!/bin/sh

set -eu

NODE_ENV=test npm run concurrently -- -k \
  "npm run tsc -- --sourceMap && npm run nodemon -- --delay 2 --watch ./dist dist/server" \
  "npm run tsc -- --sourceMap --preserveWatchOutput -w"
