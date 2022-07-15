1-npm init -y

2 - npm install bcryptjs cookie-parser cors csurf dotenv express express-async-handler express-validator helmet jsonwebtoken morgan per-env pg sequelize-cli

3- npm install -D dotenv-cli nodemon

4- npx sequelize model:generate --name User --attributes username:string,email:string,hashedPassword:string
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo
npx sequelize seed:generate --name demo-user
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 -npx sequelize model:generate --name Product --attributes name:string,price:float,imageUrl:text,description:text,productInfo:text,category:string
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name product-demo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 -npx sequelize model:generate --name Review --attributes userId:integer,productId:integer,content:text,rating:integer
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name reviewdemo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 -npx sequelize model:generate --name Cart --attributes userId:integer,productId:integer,quantity:integer
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name Cartdemo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 - npx sequelize model:generate --name Order --attributes userId:integer,totalPrice:decimal
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name Order
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed:undo:all

5 -npx sequelize model:generate --name OrderCart --attributes orderId:integer,userId:integer,productId:integer,quantity:integer,imageUrl:text,price:decimal
npx dotenv sequelize db:migrate
npx dotenv sequelize db:migrate:undo:all
npx sequelize seed:generate --name Orderdemo
npx dotenv sequelize db:seed:all
npx dotenv sequelize db:seed Order
npx dotenv sequelize db:seed:undo:all

//HEroku commands
heroku login
git push heroku main

        {
          orderId: 1,
          name: 'COKAFIL Mens Running Shoes Athletic Walking Blade Tennis Shoes Fashion Sneakers',
          userId: 1,
          productId: 3,
          quantity: 2,
          imageUrl:
            'https://m.media-amazon.com/images/I/61IcMWPWFDL._AC_UX679_.jpg',
          price: '10',
          createdAt: '2018-10-07',
          updatedAt: '2018-10-07',
        },


        {
          userId: 1,
          totalPrice: '40.99',
          createdAt: '2018-10-07',
          updatedAt: '2018-10-07',
        },

\*\*\*HEroku
heroku run npm run sequelize db:migrate
heroku run npm run sequelize db:migrate:undo:all
heroku run npm run sequelize db:seed:all
heroku run npm run sequelize db:seed:undo:all

////////////////EXTRA CODE ////////////////
// let RatingArr = [];
// let RatingArr2 = [];

// if (setAllProducts) {
// for (let i = 1; i <= productList.length; i++) {
// let eachArr = Reviews.filter((ele) => ele.productId == i);
// let totalRating = 0;
// eachArr.forEach((reviewIn) => {
// totalRating += reviewIn.rating;
// });
// if (eachArr.length) {
// RatingArr.push([totalRating / eachArr.length, eachArr.length]);
// } else {
// RatingArr.push([0, 0]);
// }
// }
// } else {
// for (let i = 1; i <= newArr.length; i++) {
// let eachArr = Reviews.filter((ele) => ele.productId == i);
// let totalRating = 0;
// eachArr.forEach((reviewIn) => {
// totalRating += reviewIn.rating;
// });
// if (eachArr.length) {
// RatingArr2.push([totalRating / eachArr.length, eachArr.length]);
// } else {
// RatingArr2.push([0, 0]);
// }
// }
// }
// console.log(RatingArr);
