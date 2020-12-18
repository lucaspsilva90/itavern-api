const { Group, Games } = require('../models');


module.exports = {

    store: async (req,res) => {
        const group = req.body;
        try{
            const result = await Group.create(group);
            return res.status(201).send({message:`O grupo ${group.name} foi criado com sucesso.`})
        }catch(error){
            return res.status(400).send({message:error.message});
        }
    },
    list: async (req,res) => {

        try{
            const result = await Group.findAll({attributes:{exclude:['updatedAt', 'game_id']},include:[{
                model:Games,
                as:"groupGame",
                attributes:{exclude:['id','createdAt', 'updatedAt']}
            }]});
            return res.status(200).send(result)
        }catch(error){
            res.status(400).send({message:error.message});
        }

    },
    update: async (req,res) => {

    },
    delete: async (req,res) => {

    }

}