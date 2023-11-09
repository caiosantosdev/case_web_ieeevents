// readOne, cadastrarUsuario, atualizarUsuario, deletarUsuario.
const knex = require('./../database/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


async function crypt(senha){
        const saltRounds = 10;
        return await bcrypt.hash(senha, saltRounds);
}
async function readAll(){
        const usuarios = await knex('users').select('nome' ,
                                                     'sobrenome',
                                                      'telefone',
                                                       'cpf',
                                                        'endereco',
                                                         'email');
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
        if(validEmail) throw new Error("ERRO: Email já Cadastrado");
        //console.log("email validado");

        //verificacao de "cpf ja existente"
        const validCPF = await knex('users')
                                .select('*')
                                .where({cpf : cpf});
        if(validCPF != ""){
        throw new Error("Cpf já Cadastrado!");
        }

        //verificacao de "telefone ja existente"
        const validPhone = await knex('users')
                    .select('*')
                    .where({ telefone : telefone});
        if(validPhone != ""){
        throw new Error("Telefone ja Cadastrado");
        }
        const hashedPassword = await crypt(senha);
        
        const newUser = {
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            cpf: cpf,
            endereco: endereco,
            email: email,
            senha: hashedPassword
        };
        
        await knex("users").insert(newUser);

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
        const user = await knex('users').select('*')
                                        .where({id})
                                        .first()
        if(!user)throw new Error("ERRO: Usuario Nao Existe.");
        //teste email
        if(updUser.email){
            const validEmail = await knex('users')
                                        .select('email')
                                        .where({email: updUser.email})
                                        .first()
            if(validEmail) throw new Error("ERRO: Email ja Cadastrado");
        }
        //teste telefone 
        if(updUser.telefone){
            const validPhone = await knex('users')
                        .select('*')
                        .where({ telefone : telefone});
            if(validPhone) throw new Error("Telefone ja Cadastrado");
        }
        //teste cpf
        if(updUser.cpf){
            const validCPF = await knex('users')
                                    .select('*')
                                    .where({cpf : cpf});
            if(validCPF) throw new Error("Cpf já Cadastrado!");
        }
        //teste senha - encriptação de senha
        if (updUser.senha){
            updUser.senha = await crypt(updUser.senha);
        }
        //console.log(updUser)
        //update
        await knex('users')
            .update( updUser )
            .where({ id })
        
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
        //colocar todos os deletes das tabelas quando fizer eventos e interesses.
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
async function loginService(email, senha){
    try{
        if(!email || !senha){
            throw new Error("preencha todos os campos");
        }
        const validEmail = await knex('users')
                                .select('email')
                                .where({email: email})
                                .first();
        if(!validEmail){
            return{
                status: false,
                message: "Email não cadastrado"
            };
        }
        const BDpassword = await knex('users')
                                .select('senha')
                                .where({email : email})
                                .first();
        const salt = 10;
        const valid = await bcrypt.compare(senha, BDpassword.senha);
        if(valid == false) throw new Error('Senha incorreta');
        const { id } = await knex('users')
                            .select('id')
                            .where({email : email})
                            .first();
        const secret = process.env.SECRET;
        const token =  jwt.sign(
            {
                id: id,
            },
            secret,
        );
        return{
            status: true,
            message: "Usuario autenticado com sucesso",
            token
        }
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
    deletaUsuario,
    loginService
}