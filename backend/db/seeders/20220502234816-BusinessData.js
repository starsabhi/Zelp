'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Businesses', [
    {name:"The Green Gator Frisco",ownerId:"4",category:"Cajun restaurant",description:"best resturent for new commers",address:"5566 Main St #110",city:"Frisco",state:"TX",zip_code:"75034",phone_number:"4698844545",image:"https://www.google.com/maps/uv?pb=!1s0x864c3bf908635cf3%3A0x86e688eda6642ee0!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOJNG6vAVMMSIdSrpzTG9HjVsZo8HIiS1JBPOcT%3Dw325-h218-n-k-no!5srestaurants%20near%20me%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipOAESHw5nJdqHAxYZiqF7lPlMAI-4i19tM2sKwL&hl=en#", createdAt: '2018-01-01', updatedAt: '2018-01-01' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
