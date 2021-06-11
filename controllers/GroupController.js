/* eslint-disable camelcase */
const { Op } = require('sequelize');
const {
  Group, Games, User, userGroup,
} = require('../models');

const groupService = require('../utils/groupService');

module.exports = {
  store: async (req, res) => {
    const group = req.body;
    const { owner_user } = req.body;
    group.master_id = owner_user;

    try {
      const user = await User.findByPk(owner_user);

      if (!user) {
        return res.status(401).json({ message: `Não foi encontrado nenhum usuário para ser o dono do grupo com id ${owner_user}` });
      }

      const groupName = await Group.findOne({ where: { name: group.name } });
      if (groupName) {
        return res.status(401).json({ message: `Já existe um grupo com o nome ${group.name}, por favor escolha outro nome.` });
      }

      await Group.create(group);
      const createdGroup = await Group.findOne({ where: { name: group.name } });
      const groupId = createdGroup.id;
      await userGroup.create({ userId: owner_user, groupId, status: 'active' });
      return res.status(201).send({ message: `O grupo ${group.name} foi criado com sucesso.` });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  listAllGroups: async (req, res) => {
    try {
      const result = await Group.findAll({
        attributes: { exclude: ['updatedAt', 'game_id'] },
        include: [{
          model: Games,
          as: 'Game',
          attributes: {
            exclude: ['id', 'createdAt', 'updatedAt'],
          },
        },
        {
          model: User,
          as: 'Users',
          attributes: ['id', 'name', 'nickname', 'img_url'],
        },
        ],
      });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  // eslint-disable-next-line consistent-return
  searchGroupByParam: async (req, res) => {
    const { name, id } = req.query;
    if (!name && !id) {
      return res.status(400).send({ message: 'Por favor forneça um nome ou id válido' });
    }
    try {
      if (name) {
        const result = await Group.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } });
        if (result.length === 0) {
          return res.status(400).send({ message: 'Não foi encontrado nenhum grupo com o parâmetro fornecido' });
        }
        return res.status(200).send(result);
      }

      if (id) {
        const result = await Group.findAll({ where: { id } });
        if (result.length === 0) {
          return res.status(400).send({ message: 'Não foi encontrado nenhum grupo com o parâmetro fornecido' });
        }
        return res.status(200).send(result);
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  updateById: async (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const groupParametersValidation = groupService.objectParametersValidation(changes);

    if (groupParametersValidation.status) {
      const validationErrors = groupParametersValidation.errorFields.toString();
      const singularPhrase = `O campo ${validationErrors}, não existe. Por favor, verifique se o parâmetro fornecido está correto.`;
      const pluralPhrase = `Os campos: ${validationErrors}, não existem. Por favor, verifique se os parâmetros fornecidos estão corretos.`;
      return res.status(400).send({ message: `${groupParametersValidation.errorFields.length > 1 ? pluralPhrase : singularPhrase}` });
    }

    try {
      const group = await Group.findByPk(id);
      if (!group) {
        return res.status(400).send({ message: `O grupo de id ${id} não foi encontrado.` });
      }
    } catch (error) {
      return res.json({ message: error.message });
    }

    try {
      await Group.update(changes, { where: { id } });
      return res.status(200).send({ message: `O grupo de id: ${id} teve as seguintes alterações:`, changes });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    const group = await Group.findByPk(id);

    if (!group) {
      return res.status(400).send({ message: `Grupo de id: ${id} não foi encontrado.` });
    }

    try {
      await Group.destroy({ where: { id } });
      return res.status(200).send(group);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  },
  joinGroup: async (req, res) => {
    const { userId, groupId } = req.body;
    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum usuário com o id fornecido' });
      }

      const group = await Group.findOne({ where: { id: groupId } });
      if (!group) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum grupo com o id fornecido' });
      }

      const verify = await userGroup.findOne({ where: { [Op.and]: [{ userId }, { groupId }] } });
      if (verify) {
        return res.status(400).send({ message: `O usuário ${user.nickname} já faz parte do grupo ${group.name}` });
      }

      const data = {
        userId,
        groupId,
      };
      await userGroup.create(data);
      return res.send({ message: `O usuario ${user.nickname} foi adicionado com sucesso.` });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  leaveGroup: async (req, res) => {
    const { userId, groupId } = req.body;
    try {
      const user = await User.findOne({ where: { id: userId } });
      if (!user) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum usuário com o id fornecido' });
      }

      const group = await Group.findOne({ where: { id: groupId } });
      if (!group) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum grupo com o id fornecido' });
      }

      const verify = await userGroup.findOne({ where: { [Op.and]: [{ userId }, { groupId }] } });
      if (!verify) {
        return res.status(400).send({ message: `O usuário ${user.nickname} já não faz parte do grupo ${group.name}` });
      }

      const data = {
        userId,
        groupId,
      };
      await userGroup.destroy({
        where:
          { [Op.and]: [{ userId: data.userId }, { groupId: data.groupId }] },
      });
      return res.send({ message: `O usuario ${user.nickname} saiu do grupo ${group.name} com sucesso.` });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
