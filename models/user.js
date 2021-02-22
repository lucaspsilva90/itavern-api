const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Group, { through: models.userGroup, foreignKey: 'userId' });
    }
  }
  User.init({
    user_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      validate: {
        notNull: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Por favor, digite seu nome.',
        },
      },
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: {
          args: true,
          msg: 'Por favor, digite uma data válida.',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'O e-mail digitado não é válido. Por favor, forneça um e-mail válido (usuario@domínio.com).',
        },
        notNull: {
          args: true,
          msg: 'Você precisa fornecer um e-mail válido.',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Por favor, digite uma senha válida.'
        },
      },
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'Por favor, digite um apelido válido.',
        },
      },
    },
    img_url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '../img/imagemPadrao.jpeg',
    },
    user_activated: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    address_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Por favor digite um cep.',
        },
        notNull: {
          args: true,
          msg: 'Por favor digite um cep.',
        },
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Por favor digite um endereço.',
        },
        notNull: {
          args: true,
          msg: 'Por favor digite um endereço.',
        },
      },
    },
    number: DataTypes.STRING,
    complement: DataTypes.STRING,
    district: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};