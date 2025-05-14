module.exports = (sequelize, DataTypes) => {
    const Helper = sequelize.define('Helper', {
      name: DataTypes.STRING,
      service: DataTypes.STRING,
      contact: DataTypes.STRING
    });
    return Helper;
  };
  