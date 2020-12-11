const { User } = require('../models');
const user = require('../models/user');
const brcrypt = require('bcrypt');
const userService = require('../utils/userService');
const { Op } = require('sequelize');

module.exports = {

    list: async (req, res) => {
        const result = await User.findAll({ attributes: { exclude: ['password'] } });

        res.status(200).send(result);
    },

    searchActivatedUsersByParam: async (req, res) => {
        const { name, email } = req.query;
        console.log(name);

        if (!name && !email) {
            return res.status(400).send({ message: "Por favor forneça um nome ou email válido" });
        }

        try {

            if (name) {
                const result = await User.findAll({ where: { [Op.and]: [{ name: { [Op.like]: `%${name}%` } }, { user_activated: 1 }] } });
                if (result.length == 0) {
                    return res.status(400).send({ message: "Não foi encontrado nenhum usuario com o parâmetro fornecido" });
                } else {
                    return res.status(200).send(result);
                }
            }

            if (email) {
                const result = await User.findAll({ where: { [Op.and]: [{ email: { [Op.like]: `%${email}%` } }, { user_activated: 1 }] } });
                if (result.length == 0) {
                    return res.status(400).send({ message: "Não foi encontrado nenhum usuario com o parâmetro fornecido" });
                } else {
                    return res.status(200).send(result);
                }
            }
        } catch (error) {
            return res.status(400).send(error.message)
        }
    },

    store: async (req, res) => {
        const userData = req.body;

        const user = await User.findOne({ where: { email: userData.email } })

        if (user) {
            return res.status(400).send({ message: "Este e-mail já está sendo utilizado, por favor utilize outro e-mail válido." })
        }

        req.body.password = brcrypt.hashSync(req.body.password, 12);
        userService.setBirthDateToISOString(userData, userData.birthdate);
        try {
            await User.create(userData);
            return res.status(201).send({ userData });
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

        if (changes.password) {
            changes.password = brcrypt.hashSync(req.body.password, 12);
        }

        try {
            const user = await User.findByPk(id);
            if (!user) {
                return res.status(400).send({ message: `Usuário de id ${id} não foi encontrado.` });
            }
        } catch (error) {
            return res.send(error.message)
        }

        try {
            const result = await User.update(changes, { where: { id } })
            return res.status(200).send({ message: `O usuário de id: ${id} teve as seguintes alterações:`, changes });

        } catch (error) {
            return res.status(400).send(error.message);
        }
    }
}