#!/bin/bash

tar czf VFixWeb-5.tar.gz components pages .babelrc package.json postcss.config.js Robots.txt styles public
scp VFixWeb-5.tar.gz vfix:~
rm VFixWeb-5.tar.gz

ssh vfix << 'ENDSSH'
rm -rf VFixWeb-5
mkdir VFixWeb-5
tar xf VFixWeb-5.tar.gz -C VFixWeb-5
rm VFixWeb-5.tar.gz
cd VFixWeb-5
find  . -name '._*' -exec rm {} \;
npm i
npm run build
pm2 delete VFixWeb-5
pm2 start npm --name "VFixWeb-5" -- start
ENDSSH

