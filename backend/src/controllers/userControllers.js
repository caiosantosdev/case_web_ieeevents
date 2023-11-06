const { readAll, readUser, cadastroUsuario, atualizaUsuario, deletaUsuario, login} = require('./../services/userServices');


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
            if(!req.params.id) throw new Error('Solicitacao invalida.');
            
            const result = await readUser(req.params.id)
            
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
                senha
            } = req.body;
            //console.log("passou do create");
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
            if(!req.params.id) throw new Error('Solicitacao invalida.');
            const updUser = {
                nome,
                sobrenome,
                telefone,
                cpf,
                endereco,
                email,
                senha
            } = req.body;

            const { id } = req.params
            
            const result = await atualizaUsuario( updUser, id )
            return res.json(result)
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async delete(req, res){
        try{
            if(!req.params.id) throw new Error('Solicitacao invalida.');

            const result = await deletaUsuario( req.params.id )
            return res.json(result)
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async login(req, res){
        try{

        }catch(error){
            return res.json({message:error.message});
        }
    }

}