const { User } = require('../models')

module.exports = {

    list: async (req,res) => {
        const resultado = await User.findAll();

        res.status(200).send(resultado);
    },

    storage: async (req,res) => {

        const user = {
            name:"Glauber",
            birthdate: new Date("12/04/1990"),
            email: "lucas.p.silva90@hotmail.com",
            password: "123",
            nickname: "",
            user_activated: 1,
            adress_code: "23232323",
            adress:"Rua duas tabininjas",
            complement:"asda",
            district:"São Paulo",
            city:"São Paulo",
            state:"São Paulo"
        }

        try {
            await User.create(user);
            res.status(201).send({user});
        } catch (error) {
            res.status(400).send(error.message);
        }
        
    }
}