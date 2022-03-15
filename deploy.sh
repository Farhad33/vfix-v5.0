#!/bin/bash

tar czf myVfixWeb.tar.gz .next components pages static .babelrc package.json postcss.config.js
scp myVfixWeb.tar.gz majid:~
rm myVfixWeb.tar.gz

ssh majid << 'ENDSSH'
pm2 delete myVfixWeb
rm -rf myVfixWeb
mkdir myVfixWeb
tar xf myVfixWeb.tar.gz -C myVfixWeb
rm myVfixWeb.tar.gz
cd myVfixWeb
npm i
npm run build
pm2 start npm --name "myVfixWeb" -- start
ENDSSH
