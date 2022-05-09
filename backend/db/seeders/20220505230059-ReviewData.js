'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Reviews', [
     {userId:"2",businessId:"1",rating:"4",answer:"The food was good and arrived quickly once we sat down & ordered. When we arrived, it was extremely crowded with nowhere to wait/stand after they added our name to the waitlist.",createdAt: '2019-01-01', updatedAt: '2019-01-01'},
     {userId:"3",businessId:"1",rating:"4",answer:"Wish we could rate this a 4.5. We visited on a weekday and there was a short wait when we arrived, but expect a much longer wait on weekends.",createdAt: '2019-01-01', updatedAt: '2019-01-01'},
     {userId:"2",businessId:"2",rating:"2",answer:"We visited based on reviews. Walked down from our hotel on a Sunday morning around 10. Half hour wait and it was cold outside so we popped in for a great cuppa joe at Lemma Coffee. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"1",businessId:"2",rating:"2",answer:"good experience. No wait for seating. The restaurant was clean with good service. Our waiter was pleasant and attentive. Food was great.",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"3",businessId:"3",rating:"2",answer:"Caesar, our waiter, was a great help.  Ordered the blackened salmon , cole slaw and breaded shrimp ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"2",businessId:"3",rating:"2",answer:"Food was excellent, all the orders were as we ordered. Noodles with shrimp, Fish and chip, and Solomon was very tasty and yummy. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"1",businessId:"4",rating:"2",answer:"What an absolutely cool fun concept this is! My niece and I came for her birthday, I thought it would be the perfect place for her since she is a gamer.",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"3",businessId:"4",rating:"2",answer:"Great place if your like gaming(both card and video). Food is what you would expect for a gamer place. Drinks are sweet, sweet, sweet, or at least mine was. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"2",businessId:"5",rating:"2",answer:"Wonderful staff, a little pricy, multiple games per system, I haven’t had to wait to be sat any time I’ve come here. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"1",businessId:"5",rating:"2",answer:"I went to this place with my husband on Veterans day for their special offer and i love this place. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"3",businessId:"6",rating:"2",answer:"I went on 2 separate days it was THAT good. The first a friend was introducing me to the restaurant, and within four days I was introducing another friend to the restaurant. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"2",businessId:"6",rating:"2",answer:"It was an amazing experience!! The burgers were well seasoned and the fries were amazing! ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"1",businessId:"7",rating:"2",answer:"GOOD burger, really liked this place. Simple - just a good burger, good fries, and a drink. Oh, and nice people who work there. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},
    {userId:"3",businessId:"7",rating:"2",answer:"this place has a pretty chill vibe. Mitchell, our server, was totally adorable & was on top of things! I got the Philly Cheese Burger & it was delicious...juicy...mos def needed napkins, hahaha. ",createdAt: '2020-01-01', updatedAt: '2020-01-01'},

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
