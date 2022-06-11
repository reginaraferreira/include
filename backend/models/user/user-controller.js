const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.json());

const User = require ("./user");

//var salt = bcrypt.genSaltSync(10);


router.post('/cadastro', async (req, res) => {
   // var dadosUser = req.body;
  //  dadosUser.senha = await bcrypt.hash(dadosUser.senha, salt);

    await User.create({
        nome: req.body.nome,
        sobrenome: req.body.sobrenome,
        estado: req.body.estado,
        cidade: req.body.cidade,
        senha: req.body.senha,
        email: req.body.email,
        escolaridade: req.body.escolaridade,
        instituicao: req.body.instituicao,
        empresa: req.body.empresa,
        cargo: req.body.cargo,
        dianascimento: req.body.dianascimento,
        mesnascimento: req.body.mesnascimento,
        anonascimento: req.body.anonascimento}
      // ,{model:Page, as: 'pages'}
    ).then((cadastro) => {
        res.status(200);
        res.json(cadastro); 
    }).catch(() => {
         return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário não cadastrado com sucesso!"
        });
     })
});


router.put('/cadastro/:id', async (req, res) => { //através do token
    if(isNaN(req.params.id)){
        res.sendStatus(400); //não é um numero
    }else{
        var dadosUser = req.body;
        //const user = await User.findByPk(req.userId);
        //var dadosUser = req.params;
        const user = await User.findByPk(req.params.id);
        
        user.nome = dadosUser.nome;
        user.sobrenome = dadosUser.sobrenome;
        user.estado = dadosUser.estado;
        user.cidade = dadosUser.cidade;
        user.escolaridade = dadosUser.escolaridade;
        user.instituicao = dadosUser.instituicao;
        user.empresa = dadosUser.empresa;
        user.cargo = dadosUser.cargo;
        user.dianascimento = dadosUser.dianascimento;
        user.mesnascimento = dadosUser.mesnascimento;
        user.anonascimento = dadosUser.anonascimento;
    
     //   await user.save();
    
        if(dadosUser != undefined){
            res.status(200);
            res.json(user);
        } else {
            res.sendStatus(404);
        };
    };
});

module.exports = router;