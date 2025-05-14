module.exports = (sequelize, DataTypes) => {
    const Seeker = sequelize.define('Seeker', {
      name: DataTypes.STRING,
      serviceNeeded: DataTypes.STRING,
      location: DataTypes.STRING
    });
    return Seeker;
  };
  