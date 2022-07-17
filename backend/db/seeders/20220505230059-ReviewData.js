'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Reviews',
      [
        {
          userId: '2',
          businessId: '1',
          rating: '4',
          content:
            'The food was good and arrived quickly once we sat down & ordered. When we arrived, it was extremely crowded with nowhere to wait/stand after they added our name to the waitlist.',
          username: 'FakeUser1',
          createdAt: '2019-01-01',
          updatedAt: '2019-01-01',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Reviews', null, {});
  },
};
