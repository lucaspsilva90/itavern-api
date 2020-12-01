const { User } = require('../models');
const user = require('../models/user');

module.exports = {


    list: async (req, res) => {
        const resultado = await User.findAll();

        res.status(200).send(resultado);
    },

    searchByParam: async (req, res) => {

    },

    store: async (req, res) => {

        function setBirthDateToISOString(user, stringDate) {
            user.birthdate = new Date(stringDate).toISOString();
            return user;
        }

        const user = req.body;
        setBirthDateToISOString(user, user.birthdate);

        try {
            await User.create(user);
            return res.status(201).send({ user });
        } catch (error) {
            return res.status(400).send(error.message);
        }

    },
    delete: async (req, res) => {

        const { id } = req.params;
        const user = await User.findByPk(id)

        if (!user) {
            return res.status(400).send({ message: `Usuário de id ${id} não foi encontrado.` });
        }

        try {
            await User.destroy({ where: { id } });
            return res.status(200).send(user);
        } catch (error) {
            return res.status(400).send(error.message);
        }
    },

    updateById: async (req, res) => {

        const { id } = req.params;
        const changes = req.body;


        const user = await User.findByPk(id);

        if (!user) {
            return res.status(400).send({ message: `Usuário de id ${id} não foi encontrado.` });
        }

        try {
            const result = await User.update(changes, { where: { id } })
            return res.status(200).send({ message: `O usuário de id: ${id} teve as seguintes alterações:`, changes });

        } catch (error) {
            return res.status(400).send(error.message);
        }



    }
}