var jwt = require('jsonwebtoken');

const secretKey = 'INCLUD3R3DES0C14L134G0ST02022';

module.exports = {
    eAdmin: async function (req, res, next){
            const authtoken = req.headers['authorization'];
            if (authtoken != undefined) {
                    const bearer = authtoken.split(' ');
                    var token = bearer[1];
        
                  jwt.verify(token, secretKey, (err, decoded) => {
                    if (err) {
                        res.status(401);
                    }else{
                    req.userId = decoded.id; 
                    next(); 
                    }
                  });
            }else{    return res.status(400).json({
                    erro: true,
                    mensagem: "Erro: Necessário realizar o login para acessar a página! Faltam o token B!"
                });  
            }
        }

}