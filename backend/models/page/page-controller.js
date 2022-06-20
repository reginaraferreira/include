const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(express.json());

const { eAdmin } = require('../login/auth');

const Page = require ("./page");


router.get('/minhas_paginas', eAdmin, async(req, res) =>{
    const resultPages = await Page.findAll({})
    res.json(resultPages);
});

router.post('/criar-pagina', async (req, res) => {
    await Page.create({
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        categoria: req.body.categoria,
        tipo: req.body.tipo,
        estado: req.body.estado,
        cidade: req.body.cidade
       // user_id: req.userId
    }).then(function(dadosPage){
        res.status(200);
        res.json(dadosPage); 
     }).catch(() => {
        res.status(400).json({
            erro: true,
            mensagem: "Erro: Página não cadastrado com sucesso!"
        });
     })
});

router.get('/pagina/:id', async (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400); //não é um numero
    }else{
       var id = parseInt(req.params.id);
       var dadospage = await Page.findOne({
                        attributes: ['id', 'titulo', 'descricao', 'tipo', 'cidade'],
                        where:{id: id}
                        })
        if(dadospage != undefined){
            res.status(200);
            res.json(dadospage);
        } else {
            res.sendStatus(404);
        };
    };
});

module.exports = router;