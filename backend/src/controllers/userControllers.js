const { readAll, readUser, cadastroUsuario, atualizaUsuario, deletaUsuario, loginService} = require('./../services/userServices');


module.exports = {
    async indexController(req, res){
        try{
            const results = await readAll();
            res.json(results);
        }catch(e){
            res.send({message:"Erro"})
        }
    },
    async readOneController(req, res){
        try{
            if(!req.params.id) throw new Error('Solicitacao invalida.');
            
            const result = await readUser(req.params.id)
            
            return res.json(result);
            
        }catch(error){
            res.json({message:error.message});
        }
    },
    async createController(req, res){
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
    async updateController(req, res){
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
    async deleteController(req, res){
        try{
            if(!req.params.id) throw new Error('Solicitacao invalida.');

            const result = await deletaUsuario( req.params.id )
            return res.json(result)
        }catch(error){
            return res.json({message:error.message});
        }
    },
    async loginController(req, res){
        try{
            const { email , senha } = req.body;
            const  login = await loginService(email, senha);
            return res.json(login);
        }catch(error){
            return res.json({message:error.message});
        }
    }

}