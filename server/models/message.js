module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
      sender: DataTypes.STRING,
      receiver: DataTypes.STRING,
      content: DataTypes.TEXT
    });
    return Message;
  };
  