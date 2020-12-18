'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Group.belongsTo(models.Games, {
        foreignKey: 'game_id',
        as: 'groupGame'
      })
    }
  };
  Group.init({
    owner_user: DataTypes.INTEGER,
    master_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    game_id: DataTypes.INTEGER,
    max_players: DataTypes.INTEGER,
    chat_integration: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};