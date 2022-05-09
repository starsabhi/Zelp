# Zelp
Influenced by yelp, [Zelp](https://foodstuffzelp.herokuapp.com/) is website which connect poeple with local Restaurants. User can create, update and delete thier Restaurant profile/page on Zelp. Customers can write and delete reviews about their experience with Restaurant.


![ZelpApp](https://user-images.githubusercontent.com/95883222/167348600-18d18b64-ccf2-4bef-a6f5-43aa3b2b56be.gif)


## Index
| [Zelp](https://foodstuffzelp.herokuapp.com/)      | [Feature List](https://github.com/starsabhi/Zelp/wiki/Feature-List) |     [Database Schema](https://github.com/starsabhi/Zelp/wiki/Database-Schema) | [API Routes](https://github.com/starsabhi/Zelp/wiki/API-Routes)


## Technologies Used
<img src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667" height=40/><img src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png" height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

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
6. To start application run `npm start` inside both `/backend` and `/frontend`   


## Deploy on Heroku
1. Login in Heroku.`heroku login` 
2. Add Heroku as a remote to your project's git repository with this command.(change your app name)
   `heroku git:remote -a <name-of-Heroku-app>`
3. Initialize `npm init -y` in root directory and then Connect backend and frontend together with `npm --prefix backend install backend && npm --prefix frontend install frontend` command   
4. Deploy your app on Heroku with `git push heroku main-branch:master` from main branch.

## Feature List of Zelp
1. As visitor you can checkout list of businesses on Zelp. As well as you can check details of business.
2. As logged in user you can create,update,delete your own business page on zelp.
3. As logged in user you can write review on business.
4. As logged in user you can delete your own review permanently.

## Future features
1. Update review.
2. Adding rating to businesses.
3. Google maps

## Particular challenge
How redux store work and how to connect backend with frontend so data can transfer. How to create database of business with fetch api calls
![image](https://user-images.githubusercontent.com/95883222/167347739-86ad37e8-8bf6-4dad-9b55-3c5a013b9dbb.png)
