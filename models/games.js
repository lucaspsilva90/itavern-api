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
    game_name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Por favor, forneça o nome do jogo."
        },
        isAlphanumeric: {
          args: true,
          msg: "Por favor utilize apenas letras e números."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};