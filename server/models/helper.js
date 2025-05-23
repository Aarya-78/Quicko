module.exports = (sequelize, DataTypes) => {
  const Helper = sequelize.define('helper', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    service: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.DECIMAL(10, 2)
    },
    availability: {
      type: DataTypes.BOOLEAN
    }
  });

  return Helper;
};