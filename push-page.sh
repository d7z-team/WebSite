#!/usr/bin/env bash
ng build --release
cd dists || exit
git init
git add *
git commit -m "auto-push page"
git remote add origin git@github.com:d7z-team/web-site.git
git push -f origin main
cd ..
exit 0
