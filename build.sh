#!/bin/bash
git submodule init
git submodule update
rm -r dist/*
rm -r release.tgz
npm install
npm run build
cd dist || exit 255
tar zcvf ../release.tgz  ./*
cd ..
exit 0
