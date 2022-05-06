npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

npx sequelize model:generate --name Business --attributes name:string,ownerId:integer,category:string,description:text,address:string,city:string,state:string,zip_code:string,phone_number:string,image:string

npx sequelize-cli seed:generate --name BusinessData

npx dotenv sequelize db:migrate

npx dotenv sequelize db:seed:all

npx dotenv sequelize-cli db:migrate:undo:all

npx dotenv sequelize db:seed:undo:all

npx sequelize model:generate --name Review --attributes userId:integer,businessId:integer,rating:integer,answer:text

npx sequelize-cli seed:generate --name ReviewData
