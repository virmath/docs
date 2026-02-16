#!/bin/bash
npm run docs:build
cp src/turnstile.html docs/.vitepress/dist/turnstile.html
cp src/password-reset.html docs/.vitepress/dist/password-reset.html
cp src/latest-version.json docs/.vitepress/dist/latest-version.json