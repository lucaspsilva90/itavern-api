const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      Group.belongsToMany(models.User, { through: 'user_groups', foreignKey: 'userId' });
      Group.belongsTo(models.Games, { foreignKey: 'id' });
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