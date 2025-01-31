```bash
npm init -y 
npm i -D typescript tsx @types/node
npx tsc --init
# configurar .swcrc y tsconfig 

npm i express
npm i -D @types/express

npm i -D @swc/core @swc/cli 

npm i prisma @prisma/client
# change package.json(prisma init)
npm run prisma:init #(y los otros 2)

npm i bcrypt
npm i -D @types/bcrypt 

npm i  jsonwebtoken
npm i -D @types/jsonwebtoken

npm i express-rate-limit   
npm i helmet

npm i compression
npm i --save-dev @types/compression

npm i cookie-parser
npm install --save @types/cookie-parser

npm i cors
npm i --save-dev @types/cors 

npm i express-validator

npm install -g npm-check-updates
npx npm-check-updates //comprobar
npx npm-check-updates -u //actualizar
```