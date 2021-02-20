const {
  Group, Games, User, userGroup,
} = require('../models');

module.exports = {

  store: async (req, res) => {
    const group = req.body;
    try {
      await Group.create(group);
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
          as: 'groupGame',
          attributes: {
            exclude: ['id', 'createdAt', 'updatedAt'],
          },
        },
        {
          model: User,
          as: 'groupUsers',
          attributes: ['name', 'nickname', 'img_url'],
        },
        ],
      });
      return res.status(200).send(result)
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  update: async (req, res) => {
    const msg = 'lucas';
    return res.send(`Falta implementação ${msg}`);
  },
  delete: async (req, res) => {
    const msg = 'lucas';
    return res.send(`Falta implementação ${msg}`);
  },

  joinGroup: async (req, res) => {
    const data = req.body;

    try {
      const user = await User.findOne({ where: { id: data.userId } })
      if (!user) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum usuário com o id fornecido' });
      }

      const group = await Group.findOne({ where: { id: data.groupId } })
      if (!group) {
        return res.status(404).send({ message: 'Não foi encontrado nenhum grupo com o id fornecido' })
      }

      const verify = await userGroup.findOne({ where: { userId: data.userId } });
      if (verify) {
        return res.status(400).send({ message: `O usuário ${user.nickname} já faz parte do grupo ${group.name}` });
      }

      const result = await userGroup.create(data);
      return res.send({ message: `O usuario ${user.nickname} foi adicionado com sucesso.` })
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
