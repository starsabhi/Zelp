'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {userId:"1",businessId:"1",rating:"4",answer:"This is best Restaurant ever!!!",createdAt: '2019-01-01', updatedAt: '2019-01-01'},
     {userId:"1",businessId:"1",rating:"4",answer:"This is best Restaurant ever!!! I come here again",createdAt: '2019-01-01', updatedAt: '2019-01-01'}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Reviews', null, {});
  }
};
