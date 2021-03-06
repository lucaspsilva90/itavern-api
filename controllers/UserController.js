const brcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User } = require('../models');
const userService = require('../utils/userService');

module.exports = {

  list: async (req, res) => {
    const result = await User.findAll({ attributes: { exclude: ['password'] } });

    res.status(200).send(result);
  },

  searchActivatedUsersByParam: async (req, res) => {
    const { name, email } = req.query;

    if (!name && !email) {
      return res.status(400).send({ message: 'Por favor forneça um nome ou email válido' });
    }

    try {
      if (name) {
        const result = await User.findAll({ where: { [Op.and]: [{ name: { [Op.iLike]: `%${name}%` } }, { user_activated: true }] } });
        if (result.length === 0) {
          return res.status(400).send({ message: 'Não foi encontrado nenhum usuario com o parâmetro fornecido' });
        }
        return res.status(200).send(result);
      }

      if (email) {
        const result = await User.findAll({ where: { [Op.and]: [{ email: { [Op.iLike]: `%${email}%` } }, { user_activated: true }] } });
        if (result.length === 0) {
          return res.status(400).send({ message: 'Não foi encontrado nenhum usuario com o parâmetro fornecido' });
        }
        return res.status(200).send(result);
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  store: async (req, res) => {
    const userData = req.body;
    const userParametersValidation = userService.objectParametersValidation(userData);

    if (userParametersValidation.status) {
      const validationErrors = userParametersValidation.errorFields.toString();
      const singularPhrase = `O campo ${validationErrors}, não existe. Por favor, verifique se o parâmetro fornecido está correto.`;
      const pluralPhrase = `Os campos: ${validationErrors}, não existem. Por favor, verifique se os parâmetros fornecidos estão corretos.`;
      return res.status(400).send({ message: `${userParametersValidation.errorFields.length > 1 ? pluralPhrase : singularPhrase}` });
    }
    try {
      const user = await User.findOne({ where: { email: userData.email } });
      if (user) {
        return res.status(400).send({ message: 'Este e-mail já está sendo utilizado, por favor utilize outro e-mail válido.' });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }

    req.body.password = await brcrypt.hash(req.body.password, 12);
    userService.setBirthDateToISOString(userData, userData.birthdate);

    try {
      await User.create(userData);
      return res.status(201).send(userData);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(400).send({ message: `Usuário de id ${id} não foi encontrado.` });
    }

    try {
      await User.destroy({ where: { id } });
      return res.status(200).send(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

  updateById: async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const userParametersValidation = userService.objectParametersValidation(changes);

    if (userParametersValidation.status) {
      const validationErrors = userParametersValidation.errorFields.toString();
      const singularPhrase = `O campo ${validationErrors}, não existe. Por favor, verifique se o parâmetro fornecido está correto.`;
      const pluralPhrase = `Os campos: ${validationErrors}, não existem. Por favor, verifique se os parâmetros fornecidos estão corretos.`;
      return res.status(400).send({ message: `${userParametersValidation.errorFields.length > 1 ? pluralPhrase : singularPhrase}` });
    }

    if (changes.password) {
      changes.password = brcrypt.hashSync(req.body.password, 12);
    }

    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).send({ message: `Usuário de id ${id} não foi encontrado.` });
      }
    } catch (error) {
      return res.json({ message: error.message });
    }

    try {
      await User.update(changes, { where: { id } });
      return res.status(200).send({ message: `O usuário de id: ${id} teve as seguintes alterações:`, changes });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },

};
