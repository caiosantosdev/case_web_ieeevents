const jwt = require('jsonwebtoken');
require('dotenv').config();

function checkToken(req, res , next) {
    
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.json({ "message" : "Não há token inserido"});
    }
    const [frontToken, token] = authHeader.split(" ");

    if(frontToken != "Bearer") {
        return res.json({"message" : "Token mal inserido"})
    }

    if(!token){
        return res.json({"message" : "Usuario nao encontrado"});

    }

    try{
        const secret = process.env.SECRET;
        
        const verificacao = jwt.verify(token, secret);

        next();
    }catch(error){
        return res.json({message: error.message});
    }
}

module.exports = checkToken;