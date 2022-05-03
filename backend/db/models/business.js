'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    name: {
        type:DataTypes.STRING,
        allowNull: false
      },
    ownerId: {
        type:DataTypes.INTEGER,
        allowNull: false
      },
    category: {
        type:DataTypes.STRING,
        allowNull: false
      },
    description: {
        type:DataTypes.TEXT,
        allowNull: false
      },
    address: {
        type:DataTypes.STRING,
        allowNull: false
      },
    city: {
      type:DataTypes.STRING,
      allowNull: false
    },
    state: {
      type:DataTypes.STRING,
      allowNull: false
    },
    zip_code: {
      type:DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type:DataTypes.STRING,
      allowNull: false
    },
    image: {
      type:DataTypes.TEXT,
      allowNull: false
    }
  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, {foreignKey:"ownerId"})
  };
  return Business;
};
