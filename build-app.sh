#!/bin/bash

rm -rf node_modules package-lock.json && npm install && npm run clean && npm run build 