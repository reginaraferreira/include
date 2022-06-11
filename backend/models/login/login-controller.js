const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.json());

const User = require ("../user/user");

const secretKey = 'INCLUD3R3DES0C14L134G0ST02022';

/*router.get('/', function(req, res, next){
    res.render('login', { message: null });
});*/

router.get('/login', async (req, res, next) => { //autenticação
    const user = await User.findOne({
        attributes: ['id', 'email', 'senha'],
        where: {
            email: req.body.email
        }
    })
    if (user === null) {
        console.log("email incorreto");
        res.status(400);
        res.json({err:"Usuário e/ou senha incorretos!"});
       // return res.render('login', { message:"Usuário e/ou senha incorretos!"});
    };
    if(!(await bcrypt.compare(req.body.password, user.senha))){
        res.status(400);
        res.json({err:"Usuário e/ou senha incorretos!"});
    }/* else {
       // const id = user.id;
        const token = jwt.sign({id: user.id},secretKey,{expiresIn: '7d'},(err, token) => {
            if (err) {
                res.status(400);
                res.json({err:"Falha token"});
            }else {
                res.status(200);
                console.log(token);
                
                res.render('feed_noticias', {token: token});
            }
        });
    }*/
});

/*router.get('/esqueci_senha', function(req, res){
    res.render('esqueci_senha');
});*/


module.exports = router;