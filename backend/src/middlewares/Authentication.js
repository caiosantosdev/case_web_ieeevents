const jwt = require('jsonwebtoken');
require('dotenv').config();

function checkToken(req, res , next) {
    console.log("entrou na autenticacao");
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.json({ "message" : "Não há token inserido"});
    }
    const [frontToken, token] = authHeader.split(" ");
    // const token = authHeader && authHeader.split(" ")[1];

    if(frontToken != "Bearer") {
        return res.json({"message" : "Token mal inserido"})
    }

    if(!token){
        res.json({"message" : "Usuario nao encontrado"});

    }
    console.log("entrou no try");
    try{
        const secret = process.env.SECRET;
        
        const verificacao = jwt.verify(token, secret);
        console.log(verificacao);
        console.log("verificou token");

        next();
    }catch(error){
        return res.json({message: error.message});
    }
}

module.exports = checkToken;