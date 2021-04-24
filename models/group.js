const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsToMany(models.User, { through: models.userGroup, foreignKey: 'groupId' });
    }
  }
  Group.init({
    owner_user: DataTypes.INTEGER,
    master_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    game_id: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    max_players: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
        min: 2,
        max: 15,
      },
    },
    chat_integration: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};
