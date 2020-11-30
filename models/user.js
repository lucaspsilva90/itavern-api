'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isAlpha: {
          args: true,
          msg: "Desculpe, apenas letras são permitidas neste campo."
        },
        notEmpty: {
          args: true,
          msg: "Por favor, digite seu nome."
        }
      }
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      validate:{
        isDate:{
          args: true,
          msg: "Por favor, digite uma data válida."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        isEmail: {
          args: true,
          msg: "O e-mail digitado não é válido. Por favor, forneça um e-mail válido (usuario@domínio.com)."
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull: {
          args: true,
          msg: "Por favor, digite uma senha válida."
        }
      }
    },
    nickname: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        isAlphanumeric:{
          args: true,
          msg: "Desculpe, o apelido não deve conter caracteres especiais. Utilize apenas letras e números."
        },
        notNull: {
          args: true,
          msg: "Por favor, digite um apelido válido."
        }
      }
    },
    user_activated: DataTypes.INTEGER,
    adress_code: DataTypes.INTEGER,
    adress: DataTypes.STRING,
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};