const express = require("express");
const app = express();
var cors = require('cors');
const port = 8080;

app.set('view engine', 'ejs');
app.use("/static", express.static('static'));
app.use("/scripts", express.static('scripts'));

app.use(cors());

var corsOptions = {
    origin: 'https://social-backend-tcc.herokuapp.com/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.get('/', function(req, res){
    res.render('login',);
});

app.get('/cadastro', cors(corsOptions), function(req, res){
    res.render('cadastro');
});

app.get('/cadastro-realizado', cors(corsOptions), function(req, res){
    res.render('cadastro-realizado');
});

app.get('/feed-noticias', function(req, res){
    res.render('feed-noticias');
});

app.get('/perfil', function(req, res){
    res.render('perfil');
});

app.get('/editar-perfil', function(req, res){
    res.render('editar-perfil');
});

app.get('/criar-pagina', function(req, res){
    res.render('criar-pagina');
});

app.get('/minhas-paginas', function(req, res){
    res.render('minhas-paginas');
});

app.get('/minhas-vagas-user', function(req, res){
    res.render('minhas-paginas');
});

app.get('/incluir-vaga', function(req, res){
    res.render('incluir-vaga');
});

app.get('/perfil', function(req, res){
    res.render('perfil');
});

app.listen(port,() => {console.log(`Servidor rodando em: http://localhost:${port}`)});