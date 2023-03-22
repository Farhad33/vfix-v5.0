#!/bin/bash

tar czf myVfixWeb.tar.gz node_modules .next components pages .babelrc package.json postcss.config.js Robots.txt styles public
scp myVfixWeb.tar.gz vfix:~
rm myVfixWeb.tar.gz

ssh vfix << 'ENDSSH'
pm2 delete myVfixWeb
rm -rf myVfixWeb
mkdir myVfixWeb
tar xf myVfixWeb.tar.gz -C myVfixWeb
rm myVfixWeb.tar.gz
cd myVfixWeb
pm2 start npm --name "myVfixWeb" -- start
ENDSSH
