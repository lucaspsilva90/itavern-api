const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class meeting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  meeting.init({
    group_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    observations: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'meeting',
  });
  return meeting;
};
