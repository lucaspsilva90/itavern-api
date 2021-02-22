const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsToMany(models.User, { through: models.userGroup, foreignKey: 'groupId' });
      Group.belongsTo(models.Games, { foreignKey: 'game_id' });
    }
  }
  Group.init({
    owner_user: DataTypes.INTEGER,
    master_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    game_id: DataTypes.INTEGER,
    max_players: DataTypes.INTEGER,
    chat_integration: DataTypes.JSON,
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};