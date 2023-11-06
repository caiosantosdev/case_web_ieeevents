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
            //let updUser = {}
        /*if(nome)
            updUser.nome=nome
        if(sobrenome)
            updUser.sobrenome=sobrenome
        if(telefone)
            updUser.telefone=telefone
        if(cpf)
            updUser.cpf=cpf
        if(endereco)
            updUser.endereco=endereco
        if(email)
            updUser.email=email
        if(senha)
            updUser.senha= senha;
            */
            const { id } = req.params
            //console.log("1")
            const result = await atualizaUsuario( updUser, id )
            return res.json(result)
        }catch(error){
            return res.json({message:error.message});
        }
    },async delete(req, res){
        try{
            if(!req.params.id) throw new Error('Solicitacao invalida.');

            const result = await deletaUsuario( req.params.id )
            return res.json(result)
        }catch(error){
            return res.json({message:error.message});
        }
    }

}