'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Businesses', [
    {name:"The Green Gator Frisco",ownerId:"1",category:"Cajun restaurant",description:"Chill hangout serving Texas-sourced Angus beef, poultry, salads & ice cream, plus beer & wine",address:"5566 Main St #110",city:"Frisco",state:"TX",zip_code:"75034",phone_number:"4698844545",image:"https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg", createdAt: '2018-01-01', updatedAt: '2018-01-01' },
    {name:"Frisco Diner",ownerId:"3",category:"Mexican restaurant",description:"Cozy yet stylish bar with an elevated menu of shared plates & entrees plus handcrafted cocktails.",address:"5566 Cross St #110",city:"Richardson",state:"TX",zip_code:"75044",phone_number:"4698844745",image:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80", createdAt: '2018-01-01', updatedAt: '2018-01-01' },
    {name:"Hoff's Steaks and Steins",ownerId:"3",category:"Royal restaurant",description:"best resturent for new commers",address:"5566 Main St #110",city:"Frisco",state:"TX",zip_code:"75034",phone_number:"4698844545",image:"https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg", createdAt: '2018-01-01', updatedAt: '2018-01-01' },
    {name:"Main Event Frisco",ownerId:"2",category:"Amusement center",description:"Best place for food and games",address:"9375 Dallas Pkwy",city:"Frisco",state:"TX",zip_code:"75034",phone_number:"9575565478",image:"https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/eoytamvc/0f0e7ed3-d891-403c-b20d-65d7bafd1d7e.jpg", createdAt: '2019-01-01', updatedAt: '2019-01-01' },
    {name:"Irishman House",ownerId:"3",category:"Irish Food",description:"Irish pub grub pairs with draft beer & whiskey in upbeat digs with game nights & patio dining.",address:"1800 Main St",city:"Dallas",state:"TX",zip_code:"75080",phone_number:"7568474466",image:"https://www.dishanews.com/wp-content/uploads/2021/10/staggered-lockdowns-start-to-bite-battered-restaurants.jpg", createdAt: '2019-01-01', updatedAt: '2019-01-01' },
    {name:"The Woolworth",ownerId:"2",category:"American restaurant",description:"Cozy yet stylish bar with an elevated menu of shared plates & entrees plus handcrafted cocktails.",address:"1520 Elm St",city:"Dallas",state:"TX",zip_code:"75080",phone_number:"8859742531",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV2cwzSeb8sW8jgQr03Nq624gP5_Vta_TvwQ&usqp=CAU", createdAt: '2019-01-01', updatedAt: '2019-01-01' },
    {name:"Chop House Burger",ownerId:"2",category:"Hamburger restaurant",description:"Chill hangout serving Texas-sourced Angus beef, poultry, salads & ice cream, plus beer & wine.",address:"1501 Main St",city:"Plano",state:"TX",zip_code:"75075",phone_number:"4698875645",image:"https://www.hollywoodreporter.com/wp-content/uploads/2019/07/good_burger_pop_up_.jpg", createdAt: '2019-01-01', updatedAt: '2019-01-01' },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Businesses', null, {});
  }
};
