#!/bin/bash
npm run docs:build
cp turnstile.html docs/.vitepress/dist/turnstile.html
cp password-reset.html docs/.vitepress/dist/password-reset.html