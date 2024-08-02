npm install prisma --save-dev

npx prisma init --datasource-provider sqlite

npx prisma migrate dev --name init

npm install @prisma/client

npx prisma generate
Эта команда считывает вашу схему Prisma и создает вашу клиентскую библиотеку Prisma:
