'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Games.init({
    game_id: DataTypes.INTEGER,
    game_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};