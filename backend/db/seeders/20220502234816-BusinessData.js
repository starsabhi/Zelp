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
          image1:
            'https://s3-media0.fl.yelpcdn.com/bphoto/sohKamomHwutZs986Gq-_Q/l.jpg',
          image2:
            'https://s3-media0.fl.yelpcdn.com/bphoto/GxCHn2xtH98kJcMTqPfBmA/l.jpg',
          image3:
            'https://s3-media0.fl.yelpcdn.com/bphoto/DQV-RIiONXU65f8QL2Zn3w/l.jpg',
          createdAt: '2018-01-01',
          updatedAt: '2018-01-01',
        },
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
          image1:
            'https://s3-media0.fl.yelpcdn.com/bphoto/sohKamomHwutZs986Gq-_Q/l.jpg',
          image2:
            'https://s3-media0.fl.yelpcdn.com/bphoto/GxCHn2xtH98kJcMTqPfBmA/l.jpg',
          image3:
            'https://s3-media0.fl.yelpcdn.com/bphoto/DQV-RIiONXU65f8QL2Zn3w/l.jpg',
          createdAt: '2018-01-01',
          updatedAt: '2018-01-01',
        },
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
          image1:
            'https://s3-media0.fl.yelpcdn.com/bphoto/sohKamomHwutZs986Gq-_Q/l.jpg',
          image2:
            'https://s3-media0.fl.yelpcdn.com/bphoto/GxCHn2xtH98kJcMTqPfBmA/l.jpg',
          image3:
            'https://s3-media0.fl.yelpcdn.com/bphoto/DQV-RIiONXU65f8QL2Zn3w/l.jpg',
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
