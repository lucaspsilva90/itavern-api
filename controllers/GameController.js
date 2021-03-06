const { Games } = require('../models');

module.exports = {
  store: async (req, res) => {
    const { name } = req.body;
    try {
      if (!name) {
        return res.status(400).send({ message: 'Por favor forneça o atributo name válido.' });
      }
      const game = await Games.findOne({ where: { name } });
      if (game) {
        return res.status(400).send({ message: 'Já existe um jogo com este nome.' });
      }
      const resultado = await Games.create(req.body);
      return res.status(201).send(resultado);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  list: async (req, res) => {
    try {
      const result = await Games.findAll({ attributes: ['id', 'name'] });
      return res.status(200).send(result);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;

    try {
      const game = await Games.findByPk(id);
      if (!game) {
        return res.status(404).send({ message: `Jogo de id ${id} não foi encontrado.` });
      }

      await Games.destroy({ where: { id } });
      return res.status(200).send({ message: `O jogo de id ${game.id} e nome ${game.name} foi deletado com sucesso.` });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
  updateById: async (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    if (!changes.name) {
      return res.status(400).send({ message: `Por favor forneça um novo nome para o jogo de id ${id}.` });
    }
    try {
      const game = await Games.findByPk(id);
      if (!game) {
        return res.status(404).send({ message: `O jogo de id ${id} não foi encontrado.` });
      }

      await Games.update(changes, { where: { id } });
      return res.status(200).send({ message: `O jogo de id ${id} teve as seguintes mudanças: `, changes });
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  },
};
