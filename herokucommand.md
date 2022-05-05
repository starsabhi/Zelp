heroku git:remote -a zelp
git push heroku main:master

heroku restart && heroku pg:reset DATABASE --confirm foodstuffzelp && heroku run npm run sequelize db:migrate && heroku run npm run sequelize db:seed:all
