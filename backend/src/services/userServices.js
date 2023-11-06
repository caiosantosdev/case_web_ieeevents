// readOne, cadastrarUsuario, atualizarUsuario, deletarUsuario.
const knex = require('./../database/index');
const bcrypt = require('bcrypt');

async function Crypt(senha){
        const saltRounds = 10;
        return await bcrypt.hash(senha, saltRounds);
}
async function readAll(){
        const usuarios = await knex('users').select('*');
        return {usuarios};
}
async function readUser(id){
    try{
        
        const user = await knex('users').select('*')
                                        .where({id})
                                        .first()
                                        
        if(!user)throw new Error("ERRO: Usuario Nao Existe.");
        
        return user;
      }catch(e){
        throw e;
      }
}
async function cadastroUsuario(nome, sobrenome, telefone, cpf, endereco, email, senha){
    try{
        //console.log("validando email");
        const validEmail = await knex('users')
                                    .select('email')
                                    .where({email: email})
                                    .first()
        //console.log(validEmail);
        if(validEmail) throw new Error("ERRO: Email ja Cadastrado");
        //console.log("email validado");
        const hashedPassword = await Crypt(senha);
        
        const newUser = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            cpf: cpf,
            endereco: endereco,
            email: email,
            senha: hashedPassword
        };
        
        const User = await knex("users").insert(newUser);

        return {
            status: true,
            message: "Usuario Cadastrado com Sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }
}
async function atualizaUsuario( updUser, id ){
    try{
        //console.log("2")
        const user = await knex('users').select('*')
                                        .where({id})
                                        .first()
        //console.log("3")
        if(!user)throw new Error("ERRO: Usuario Nao Existe.");

        const validEmail = await knex('users')
                                    .select('email')
                                    .where({email: updUser.email})
                                    .first()
        if(validEmail) throw new Error("ERRO: Email ja Cadastrado");

        //console.log("4")
        if (updUser.senha)
            updUser.senha = await Crypt(updUser.senha);
        console.log(updUser)

        await knex('users')
            .update( updUser )
            .where({ id })
        //console.log("5")
        return {
            status: true,
            message: "Usuario Atualizado com Sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }
}
async function deletaUsuario(id){
    try{
        const user = await knex('users').select('*')
                                        .where({id})
                                        .first()
        if(!user)throw new Error("ERRO: Usuario Nao Existe.");

        await knex('users')
            .where({ id })
            .delete()
        return {
            status: true,
            message: "Usuario Deletado com Sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }
}

module.exports = {
    readAll,
    readUser,
    cadastroUsuario,
    atualizaUsuario,
    deletaUsuario
}