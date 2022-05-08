# Zelp
Influenced by yelp, [Zelp](https://foodstuffzelp.herokuapp.com/) is website which connect poeple with local Restaurants. User can create, update and delete thier Restaurant profile/page on Zelp. Customers can write and delete reviews about their experience with perticular Restaurant.


![ZelpApp](https://user-images.githubusercontent.com/95883222/167309830-9b18f0af-33dc-41da-a561-9dd4e3d8ac45.gif)


## Technologies Used
<img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

## Getting Started
1. Clone this repository

   `https://github.com/starsabhi/Zelp`

2. Install dependencies inside both `/backend` as well as `/frontend`.

   `npm install`

3. Create .env file same as .envexample file.
4. Create a user in psql based on your .env DB_USERNAME.
  
  `psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Start your shell and migrate and seed the database.   

    `npx dotenv sequelize db:migrate`
    `npx dotenv sequelize db:seed:all`
6. Run `npm start` inside both `/backend` and `/frontend`   

