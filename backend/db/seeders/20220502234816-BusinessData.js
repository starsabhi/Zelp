'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Businesses',
      [
        {
          name: "Rotolo's Craft & Crust",
          ownerId: '1',
          category: 'Italian, Pizza, Beer Bar',
          description:
            'Chill hangout serving Texas-sourced Angus beef, poultry, salads & ice cream, plus beer & wine',
          address: '9250 N Dallas Pkwy Ste 130 ',
          city: 'Frisco',
          state: 'TX',
          zip_code: '75034',
          phone_number: '(972) 668-6567',
          image:
            'https://s3-media0.fl.yelpcdn.com/bphoto/sqm4-avQzLET5aWA2H05iQ/348s.jpg',
          createdAt: '2018-01-01',
          updatedAt: '2018-01-01',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Businesses', null, {});
  },
};
