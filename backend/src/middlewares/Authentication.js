const jwt = require('jsonwebtoken');

function checkToken(req, res , next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(!token){
        res.json({"message":"Usuario nao encontrado"});

    }
    try{
        const secret = process.env.SECRET;
        
        jwt.verify(token, secret);
        return res.json({"message":"usuario autenticado com sucesso"})
        next();
    }catch(error){
        return res.json({message: error.message});
    }
}

module.exports = checkToken;