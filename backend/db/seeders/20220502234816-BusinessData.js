'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Businesses', [
    {name:"The Green Gator Frisco",ownerId:"4",category:"Cajun restaurant",description:"best resturent for new commers",address:"5566 Main St #110",city:"Frisco",state:"TX",zip_code:"75034",phone_number:"4698844545",image:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg", createdAt: '2018-01-01', updatedAt: '2018-01-01' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
