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
async function readUser(){
    try{
        const user = await knex('users').select('*')
                                        .where({id})
                                        .first()
    
        return user;
      }catch(e){
        throw e;
      }
}
async function cadastroUsuario(nome, sobrenome, telefone, cpf, endereco, email, senha){
    try{
        console.log("validando email");
        const validEmail = await knex('users')
                                    .select('email')
                                    .where({email: email})

        console.log(validEmail);
        if(validEmail){
            throw new Error("email ja cadastrado");
        }
        console.log("email validado");
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
            message: "usuario cadastrado com sucesso"
        };
    }catch(error){
        return {
            status: false,
            message: error.message,
        };
    }
}
async function atualizaUsuario(){

}
async function deletaUsuario(){
    
}

module.exports = {
    readAll,
    readUser,
    cadastroUsuario,
    atualizaUsuario,
    deletaUsuario
}