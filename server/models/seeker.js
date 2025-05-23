// models/seeker.js
module.exports = (sequelize, DataTypes) => {
  const Seeker = sequelize.define('seeker', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    serviceNeeded: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    }
  });

  return Seeker;
};