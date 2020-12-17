const { Games } = require('../models');
module.exports = {
    store: async (req, res) => {
        const { name } = req.body
        try {
            if(!name){
                return res.status(400).send({message: "Por favor forneça o atributo name válido."});
            }
            const game = await Games.findOne({ where: { name } });
            if (game) {
                return res.status(400).send({ message: "Já existe um jogo com este nome." });
            }
            const resultado = await Games.create(req.body);
            res.status(202).send(resultado);
        } catch (error) {
            res.status(400).send({ message: error.message });
        }

    },
}