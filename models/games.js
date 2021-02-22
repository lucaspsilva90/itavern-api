const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Games extends Model {
    static associate(models) {
      Games.hasMany(models.Group);
    }
  }
  Games.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Por favor, forneça o nome do jogo.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Games',
  });
  return Games;
};
