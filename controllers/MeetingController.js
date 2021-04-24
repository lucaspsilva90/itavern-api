const { Meeting } = require('../models');

const meetingService = require('../utils/meetingService');

module.exports = {
  store: async (req, res) => {
    const meeting = req.body;
    try {
      const meetingParametersValidation = meetingService.objectParametersValidation(meeting);
      if (meetingParametersValidation.status) {
        const validationErrors = meetingParametersValidation.errorFields.toString();
        const singularPhrase = `O campo ${validationErrors}, não existe. Por favor, verifique se o parâmetro fornecido está correto.`;
        const pluralPhrase = `Os campos: ${validationErrors}, não existem. Por favor, verifique se os parâmetros fornecidos estão corretos.`;
        return res.status(400).send({ message: `${meetingParametersValidation.errorFields.length > 1 ? pluralPhrase : singularPhrase}` });
      }
      const result = await Meeting.create(meeting);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
  listAll: async (req, res) => {
    try {
      const result = await Meeting.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },

  updateById: async (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    const meetingParametersValidation = meetingService.objectParametersValidation(changes);
    if (meetingParametersValidation.status) {
      const validationErrors = meetingParametersValidation.errorFields.toString();
      const singularPhrase = `O campo ${validationErrors}, não existe. Por favor, verifique se o parâmetro fornecido está correto.`;
      const pluralPhrase = `Os campos: ${validationErrors}, não existem. Por favor, verifique se os parâmetros fornecidos estão corretos.`;
      return res.status(400).send({ message: `${meetingParametersValidation.errorFields.length > 1 ? pluralPhrase : singularPhrase}` });
    }

    try {
      const meeting = await Meeting.findByPk(id);
      if (!meeting) {
        return res.status(400).send({ message: `A reunião de id ${id} não foi encontrado.` });
      }
    } catch (error) {
      return res.json({ message: error.message });
    }
    try {
      await Meeting.update(changes, { where: { id } });
      return res.status(200).send({ message: `A reunião de id: ${id} teve as seguintes alterações:`, changes });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const meeting = Meeting.findOne({ where: { id } });
      if (meeting) {
        res.status(404).json({ message: `Não há reunião de ${id}` });
      }
      Meeting.destroy({ where: { id } });
      return res.status(200).json({ message: 'Reunião deletada com sucesso.' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
};
