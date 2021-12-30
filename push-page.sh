#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist || exit
git init
git branch -m main
git add "*"
git commit -m "auto-push page"
git remote add origin git@github.com:d7z-team/web-site.git
git push -f origin main
cd ..
exit 0
