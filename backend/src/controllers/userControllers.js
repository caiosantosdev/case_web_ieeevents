const { readAll, readUser , cadastroUsuario , atualizaUsuario , deletaUsuario} = require('./../services/userServices');


module.exports = {
    async index(req, res){
        try{
            const results = await readAll();
            res.json(results);
        }catch(e){
            res.send({message:"Erro"})
        }
    },
    async readOne(req, res){
        try{
            if(!req.params) throw new Error('Solicitacao invalida.');

            const result = await readUser(req.params)

            //if(!result)throw new Error("Usuario nao existe.");

            return res.json(result);
            
        }catch(error){
            res.json({message:error.message});
        }
    },
    async create(req, res){
        try{
            const {
                nome,
                sobrenome,
                telefone,
                cpf,
                endereco,
                email,
                senha,
            } = req.body;
            console.log("passou do create");
            const cadastrado = await cadastroUsuario(
                nome,
                sobrenome,
                telefone,
                cpf,
                endereco,
                email,
                senha
            );
            return res.json(cadastrado);
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async update(req, res){
        try{

        }catch(error){
            
        }
    }

}