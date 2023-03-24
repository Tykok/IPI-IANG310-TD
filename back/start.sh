#!/bin/sh

npx sequelize-cli db:seed:undo:all
npx sequelize-cli db:migrate:undo
npx sequelize-cli db:migrate 
npx sequelize-cli db:seed:all
npm run gen:secret
npm run dev