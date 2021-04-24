const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class userGroup extends Model {

  }
  userGroup.init({
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'User',
      },
    },
    groupId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'Group',
      },
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'pending',
    },

  }, {
    sequelize,
    modelName: 'userGroup',
    tableName: 'user_groups',
  });
  return userGroup;
};
