'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    businessId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    rating: {
      type:DataTypes.INTEGER,
    },
    answer: {
      type:DataTypes.TEXT,
      allowNull:false
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey:"userId"}),
    Review.belongsTo(models.Business, {foreignKey:"businessId"})
  };
  return Review;
};
