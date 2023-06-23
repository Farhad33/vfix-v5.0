#!/bin/bash

tar czf VFixWeb-5.tar.gz components pages .babelrc package.json postcss.config.js Robots.txt styles public
scp VFixWeb-5.tar.gz vfix:~
rm VFixWeb-5.tar.gz

ssh vfix << 'ENDSSH'
mkdir VFixWeb-temp
tar xf VFixWeb-5.tar.gz -C VFixWeb-temp 2> /dev/null
rm VFixWeb-5.tar.gz
cd VFixWeb-temp
find  . -name '._*' -exec rm {} \;
npm i
npm run build
cd ..
rm -rf VFixWeb-5
mv VFixWeb-temp VFixWeb-5
cd VFixWeb-5
pm2 delete VFixWeb-5
pm2 start npm --name "VFixWeb-5" -- start
ENDSSH